# Overview

This is a full-stack web application built with a React frontend and Express.js backend, designed as a professional portfolio website. The application showcases a modern, responsive design using shadcn/ui components and TailwindCSS for styling. The backend is set up with TypeScript and includes database integration using Drizzle ORM with PostgreSQL support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter library
- **UI Components**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Styling**: TailwindCSS with custom CSS variables for theming and design tokens
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: ESBuild for production builds, tsx for development
- **Storage Interface**: Abstracted storage layer with in-memory implementation as default
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot module replacement and runtime error overlay for development experience

## Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL dialect
- **Database**: PostgreSQL (configured but can be provisioned separately)
- **Migrations**: Drizzle Kit for database schema migrations
- **Schema**: Shared schema definitions between frontend and backend using Zod for validation
- **Default Storage**: In-memory storage implementation for development/testing

## Authentication & Authorization
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **User Schema**: Basic user model with username/password fields
- **Validation**: Zod schemas for input validation and type safety

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for database connections
- **drizzle-orm & drizzle-kit**: Type-safe database ORM and migration tools
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting utilities

## UI/UX Dependencies
- **@radix-ui/***: Complete set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **embla-carousel-react**: Carousel/slider functionality
- **lucide-react**: Icon library with React components

## Development Dependencies
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-***: Replit-specific development plugins for error handling and cartography
- **esbuild**: JavaScript/TypeScript bundler for production builds
- **tsx**: TypeScript execution engine for development

## Form & Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation library resolvers
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod schemas