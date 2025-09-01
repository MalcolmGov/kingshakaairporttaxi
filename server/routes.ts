import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
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
