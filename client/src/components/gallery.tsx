import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all taxi service images
import galleryImage1 from '@assets/WhatsApp Image 2025-09-01 at 14.57.05_1756742063819.jpeg';
import galleryImage2 from '@assets/WhatsApp Image 2025-09-01 at 14.57.06 (1)_1756742063812.jpeg';
import galleryImage3 from '@assets/WhatsApp Image 2025-09-01 at 14.57.06 (2)_1756742063811.jpeg';
import galleryImage4 from '@assets/WhatsApp Image 2025-09-01 at 14.57.06_1756742063813.jpeg';
import galleryImage5 from '@assets/WhatsApp Image 2025-09-01 at 14.57.07 (1)_1756742063808.jpeg';
import galleryImage6 from '@assets/WhatsApp Image 2025-09-01 at 14.57.07_1756742063809.jpeg';
import galleryImage7 from '@assets/WhatsApp Image 2025-09-01 at 14.57.08_1756742063807.jpeg';
import galleryImage8 from '@assets/WhatsApp Image 2025-09-01 at 14.57.09_1756742063818.jpeg';
import galleryImage9 from '@assets/WhatsApp Image 2025-09-01 at 14.57.10 (1)_1756742063817.jpeg';
import galleryImage10 from '@assets/WhatsApp Image 2025-09-01 at 14.57.10_1756742063817.jpeg';
import galleryImage11 from '@assets/WhatsApp Image 2025-09-01 at 14.57.11_1756742063816.jpeg';
import galleryImage12 from '@assets/WhatsApp Image 2025-09-01 at 14.57.12_1756742063815.jpeg';
import galleryImage13 from '@assets/WhatsApp Image 2025-09-01 at 14.57.13_1756742063814.jpeg';
import galleryImage14 from '@assets/WhatsApp Image 2025-09-01 at 14.57.14_1756742063806.jpeg';
import galleryImage15 from '@assets/WhatsApp Image 2025-09-01 at 14.57.16_1756742063805.jpeg';

const galleryImages = [
  {
    src: galleryImage1,
    alt: 'Professional taxi service at King Shaka Airport',
    title: 'Airport Pickup Service'
  },
  {
    src: galleryImage2,
    alt: 'Clean and comfortable taxi interior',
    title: 'Comfortable Interiors'
  },
  {
    src: galleryImage3,
    alt: 'Professional taxi driver providing service',
    title: 'Professional Drivers'
  },
  {
    src: galleryImage4,
    alt: 'Modern taxi fleet in KwaZulu-Natal',
    title: 'Modern Fleet'
  },
  {
    src: galleryImage5,
    alt: 'Reliable airport transfer service',
    title: 'Reliable Service'
  },
  {
    src: galleryImage6,
    alt: 'Safe and secure taxi transport',
    title: 'Safe Transport'
  },
  {
    src: galleryImage7,
    alt: 'King Shaka Airport taxi waiting area',
    title: 'Airport Services'
  },
  {
    src: galleryImage8,
    alt: 'Professional taxi service in Durban',
    title: 'City Transport'
  },
  {
    src: galleryImage9,
    alt: 'Clean taxi vehicles for airport transfers',
    title: 'Clean Vehicles'
  },
  {
    src: galleryImage10,
    alt: 'KZN taxi service team',
    title: 'Professional Team'
  },
  {
    src: galleryImage11,
    alt: '24/7 taxi service availability',
    title: '24/7 Service'
  },
  {
    src: galleryImage12,
    alt: 'Luxury taxi service experience',
    title: 'Premium Experience'
  },
  {
    src: galleryImage13,
    alt: 'Airport pickup and drop-off service',
    title: 'Door-to-Door'
  },
  {
    src: galleryImage14,
    alt: 'Tourist transport throughout KZN',
    title: 'Tourist Transport'
  },
  {
    src: galleryImage15,
    alt: 'King Shaka Airport taxi service',
    title: 'Airport Specialists'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50" data-testid="section-gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" 
            style={{ color: '#1f2937' }}
            data-testid="text-gallery-title"
          >
            Our Professional Service Gallery
          </h2>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#374151', fontWeight: '500' }}
            data-testid="text-gallery-subtitle"
          >
            Experience the quality and professionalism of King Shaka Airport Taxi. 
            From our modern fleet to our dedicated drivers, see why we're KZN's trusted choice for airport transfers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-xl shadow-2xl bg-white"
            data-testid="carousel-container"
          >
            {/* Main Image Display */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
                data-testid={`carousel-image-${currentIndex}`}
              />
              

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                data-testid="button-carousel-previous"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                data-testid="button-carousel-next"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 py-6 bg-white" data-testid="carousel-indicators">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  data-testid={`button-carousel-dot-${index}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Auto-play Status Indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500" data-testid="text-autoplay-status">
              {isAutoPlaying ? (
                <>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Auto-playing • Click arrows or dots to pause
                </>
              ) : (
                <>
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Auto-play paused • Will resume in a moment
                </>
              )}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p 
            className="text-lg mb-6" 
            style={{ color: '#374151' }}
            data-testid="text-gallery-cta"
          >
            Ready to experience professional airport transfers?
          </p>
          <a
            href="#booking"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#1f2937' }}
            data-testid="button-gallery-book"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}