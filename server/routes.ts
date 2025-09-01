import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import twilio from "twilio";
import sgMail from "@sendgrid/mail";

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Email notification function
async function sendEmailNotification(booking: any) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid API key not configured, skipping email notification');
      return;
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🚖 New Booking Request</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">King Shaka Airport Taxi</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1e40af; margin-top: 0;">Booking Details</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer:</strong> ${booking.customerName}</p>
            <p><strong>Phone:</strong> ${booking.customerPhone}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Pickup:</strong> ${booking.pickup}</p>
            <p><strong>Destination:</strong> ${booking.destination}</p>
          </div>
          
          <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; flex: 1;">
              <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString('en-ZA')}</p>
              <p><strong>Time:</strong> ${booking.time}</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; flex: 1;">
              <p><strong>Passengers:</strong> ${booking.passengers}</p>
              <p><strong>Vehicle:</strong> ${booking.vehicleType || 'Any available'}</p>
            </div>
          </div>
          
          <div style="background-color: #dcfce7; border: 2px solid #16a34a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px; color: #16a34a;"><strong>Estimated Price: R${booking.estimatedPrice}</strong></p>
            <p style="margin: 5px 0 0 0; color: #16a34a;">Booking ID: ${booking.id}</p>
          </div>
          
          <div style="background-color: #fef3c7; border: 2px solid #f59e0b; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; color: #92400e;"><strong>Action Required:</strong> Please contact the customer to confirm this booking.</p>
          </div>
        </div>
      </div>
    `;

    const msg = {
      to: 'info@kingshakaairporttaxi.co.za',
      from: 'bookings@kingshakaairporttaxi.co.za', // This should be a verified sender
      subject: `New Booking Request - ${booking.customerName} (R${booking.estimatedPrice})`,
      text: `NEW BOOKING REQUEST\n\nCustomer: ${booking.customerName}\nPhone: ${booking.customerPhone}\n\nPickup: ${booking.pickup}\nDestination: ${booking.destination}\n\nDate: ${new Date(booking.date).toLocaleDateString('en-ZA')}\nTime: ${booking.time}\nPassengers: ${booking.passengers}\nVehicle: ${booking.vehicleType || 'Any available'}\n\nEstimated Price: R${booking.estimatedPrice}\nBooking ID: ${booking.id}\n\nPlease confirm this booking with the customer.`,
      html: htmlContent,
    };

    const result = await sgMail.send(msg);
    console.log('✅ Email notification sent via SendGrid - Status:', result[0].statusCode);
    
  } catch (error) {
    console.error('❌ Failed to send email notification:', error);
  }
}

// Notification function with WhatsApp and SMS backup
async function sendBookingNotification(booking: any) {
  try {
    const message = `NEW BOOKING REQUEST

Customer: ${booking.customerName}
Phone: ${booking.customerPhone}

Pickup: ${booking.pickup}
Destination: ${booking.destination}

Date: ${new Date(booking.date).toLocaleDateString('en-ZA')}
Time: ${booking.time}
Passengers: ${booking.passengers}
Vehicle: ${booking.vehicleType || 'Any available'}

Estimated Price: R${booking.estimatedPrice}
Booking ID: ${booking.id}

Please confirm this booking with the customer.`;

    // Phone numbers to notify
    const phoneNumbers = ['+27833423975', '+27834654639', '+27832002127'];
    
    const notificationPromises = phoneNumbers.map(async (phoneNumber) => {
      try {
        console.log(`Attempting to send WhatsApp to ${phoneNumber} for booking:`, booking.id);
        
        // Try WhatsApp first
        const whatsappResult = await twilioClient.messages.create({
          body: message,
          from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
          to: `whatsapp:${phoneNumber}`
        });
        
        console.log(`✅ WhatsApp sent to ${phoneNumber} - SID: ${whatsappResult.sid}`);
        return { phoneNumber, method: 'WhatsApp', success: true, sid: whatsappResult.sid };
        
      } catch (whatsappError) {
        console.log(`⚠️ WhatsApp failed for ${phoneNumber}, trying SMS...`);
        
        // Fallback to SMS
        try {
          const smsResult = await twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber
          });
          
          console.log(`✅ SMS sent to ${phoneNumber} - SID: ${smsResult.sid}`);
          return { phoneNumber, method: 'SMS', success: true, sid: smsResult.sid };
          
        } catch (smsError) {
          console.error(`❌ Both WhatsApp and SMS failed for ${phoneNumber}:`, smsError);
          return { 
            phoneNumber, 
            method: 'failed', 
            success: false, 
            error: smsError instanceof Error ? smsError.message : String(smsError) 
          };
        }
      }
    });
    
    const results = await Promise.all(notificationPromises);
    console.log('Notification results:', results);
    
  } catch (error) {
    console.error('Failed to send booking notifications:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // Send both WhatsApp and email notifications after successful booking creation
      await Promise.all([
        sendBookingNotification(booking),
        sendEmailNotification(booking)
      ]);
      
      res.json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      if (!booking) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch booking" });
    }
  });

  // Contact message routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  // Price calculation endpoint
  app.post("/api/calculate-price", async (req, res) => {
    try {
      const { pickup, destination, passengers } = req.body;
      
      // Simple price calculation logic - in real app this would use distance/location APIs
      let basePrice = 150; // Base rate in ZAR
      
      // Airport transfers have fixed rates
      if (pickup.toLowerCase().includes("airport") || destination.toLowerCase().includes("airport")) {
        basePrice = 300;
      }
      
      // Distance multiplier (simplified - real implementation would use Google Maps API)
      if (pickup.toLowerCase().includes("durban") && destination.toLowerCase().includes("pietermaritzburg")) {
        basePrice = 500;
      }
      
      // Passenger surcharge
      if (passengers > 2) {
        basePrice += (passengers - 2) * 50;
      }
      
      res.json({ estimatedPrice: basePrice });
    } catch (error) {
      res.status(500).json({ message: "Failed to calculate price" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
