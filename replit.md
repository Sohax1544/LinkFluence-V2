# LinkFluence - Influencer-Brand Partnership Platform

## Overview

LinkFluence is a full-stack web application that connects content creators with brands for sponsorship partnerships. The platform automates the typically complex process of managing influencer collaborations, handling contracts, communication, and follow-ups to let creators focus on content creation and brands focus on marketing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript, Vite for build tooling
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Development**: Hot module reloading via Vite integration

### Application Structure
The application follows a monorepo structure with clear separation of concerns:
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Common TypeScript types and database schemas
- Configuration files at root level

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components in `/client/src/components/`
- **Styling**: Tailwind CSS with dark mode support and custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Type Safety**: Full TypeScript integration with shared types
- **Local Storage**: Client-side data persistence for submissions and preferences

### Backend Architecture
- **API Server**: Express.js with TypeScript for type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Layer**: Abstracted storage interface with both memory and database implementations
- **Development Setup**: Vite integration for seamless full-stack development

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Extensible Design**: Schema ready for expansion with additional tables for partnerships, campaigns, etc.
- **Type Generation**: Automatic TypeScript type generation from database schema

## Data Flow

### User Registration Flow
1. Users submit registration forms (creators or brands)
2. Client-side validation and temporary local storage
3. Data ready for backend persistence when database is connected
4. Admin panel provides oversight and data export capabilities

### Partnership Management Flow
1. Creators and brands register with their profiles
2. Platform matches based on niche/category alignment
3. Automated contract and communication management
4. Progress tracking and reporting system

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

### Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with React plugin and TypeScript support

### Backend Services
- **Express.js**: Web framework with middleware support
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Session Management**: PostgreSQL-based session storage ready

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `/dist/public`
- **Backend**: esbuild compiles TypeScript server to `/dist/index.js`
- **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Database**: Environment-based DATABASE_URL configuration
- **Development**: Hot reloading with Vite middleware integration
- **Production**: Optimized builds with static file serving

### Current Implementation Status
- **Frontend**: Fully functional with form handling and admin panel
- **Backend**: Basic Express setup with storage abstraction
- **Database**: Schema defined, ready for connection and implementation
- **Integration**: API routes and database operations ready for implementation

The application is architected to handle the transition from prototype to production seamlessly, with clear separation between data persistence layers and business logic.