# King Shaka Airport Taxi Website

## Overview

King Shaka Airport Taxi is a premium taxi service website built for a transportation company operating in KwaZulu-Natal, South Africa since 2010. The application is a full-stack web platform featuring a modern React frontend with comprehensive booking functionality and a Node.js/Express backend with database integration. The website showcases the company's services, handles customer bookings, manages contact inquiries, and provides an engaging user experience with professional branding focused on reliability and safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built as a single-page application using React with TypeScript, leveraging Vite for development and build tooling. The UI framework is based on shadcn/ui components with Radix UI primitives for accessibility and consistent design patterns. Styling is implemented using Tailwind CSS with a custom design system featuring professional blue and gold color schemes appropriate for the taxi industry. The application uses Wouter for lightweight client-side routing and TanStack React Query for efficient server state management and API communication.

### Component Structure
The frontend follows a modular component architecture with reusable UI components and feature-specific sections. Key components include Header with navigation, Hero section with call-to-action buttons, Services showcase, Safety features, Customer reviews, Booking form with validation, Vehicle showcase, KZN destinations, FAQ section, and Contact form. All components are designed to be responsive and accessible with comprehensive data-testid attributes for testing.

### Form Handling and Validation
React Hook Form is integrated with Zod schema validation for type-safe form handling. The booking form includes real-time validation, estimated price calculation, and structured data collection for pickup/destination, date/time selection, passenger count, and contact information.

### Backend Architecture
The server is built with Express.js and follows RESTful API conventions. The application includes middleware for request logging, JSON parsing, and error handling. Route handlers are organized in a separate module with comprehensive error handling and input validation using Zod schemas.

### Data Storage Strategy
The system implements a flexible storage abstraction with an interface-based approach. Currently using in-memory storage for development, but architected to easily swap in database implementations. The schema supports three main entities: users (with username/password authentication), bookings (with comprehensive trip details and status tracking), and contact messages (for customer inquiries).

### Database Schema Design
Using Drizzle ORM with PostgreSQL schema definitions including proper UUID primary keys, timestamp tracking, and relational constraints. The booking system tracks pickup/destination locations, scheduling information, passenger counts, contact details, pricing estimates, and status management. Contact messages capture customer inquiries with proper timestamping.

### Development Environment
Vite configuration includes HMR support, path aliases for clean imports, and Replit-specific plugins for development experience. The build process outputs both client assets and a bundled server for production deployment.

## External Dependencies

### UI Component Library
- **shadcn/ui with Radix UI**: Provides accessible, unstyled components including forms, dialogs, navigation menus, and interactive elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and responsive design capabilities
- **Lucide React**: Icon library providing consistent iconography throughout the application

### State Management and API
- **TanStack React Query**: Handles server state management, caching, and API communication with automatic retries and background updates
- **React Hook Form**: Form state management with Zod integration for validation
- **Zod**: TypeScript-first schema validation for both frontend forms and backend API endpoints

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database platform (via @neondatabase/serverless)

### Development Tools
- **Vite**: Build tool and development server with React plugin support
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **Wouter**: Lightweight client-side routing solution
- **nanoid**: Secure URL-friendly unique ID generator

The architecture emphasizes type safety, developer experience, and scalability while maintaining clean separation of concerns between frontend presentation, backend logic, and data persistence layers.