# Overview

This is a full-stack web application for "Replit Fellows" - a dinner series connecting diverse founders across cities. The application allows users to request invites to exclusive networking dinners and features a modern, playful design aesthetic inspired by Stanford d.School.

The tech stack consists of:
- **Frontend**: React with Vite, TypeScript, Wouter (routing), TanStack Query (data fetching)
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL via Drizzle ORM with Neon serverless
- **UI**: Shadcn/ui components with Tailwind CSS (custom "New York" style)
- **Authentication**: Replit Auth with OpenID Connect

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Design System**: The application uses a custom design system built on Shadcn/ui components with a bold, experimental aesthetic. The design features:
- Custom CSS variables for theming with a Stanford d.School inspired palette
- Three custom font families: DM Sans (body), Space Grotesk (display), and Architects Daughter (handwriting)
- Geometric, playful UI elements with heavy borders and shadow effects

**Routing**: Uses Wouter for client-side routing instead of React Router. Routes are defined in `App.tsx` with two main pages:
- `/` - Home page with hero section and builder showcase
- `/request-invite` - Form for requesting dinner invites

**State Management**: TanStack Query handles server state with custom fetch utilities. The query client is configured to:
- Never refetch automatically
- Throw on 401 errors by default
- Use infinite stale time for cached data

**Form Handling**: React Hook Form with Zod validation for type-safe form submissions.

## Backend Architecture

**Server Framework**: Express.js running in development mode via `tsx` and production via compiled ESM bundles using esbuild.

**Authentication Flow**: Implements Replit Auth using OpenID Connect with Passport.js:
- Session-based authentication stored in PostgreSQL
- OAuth2 flow with token refresh capabilities
- Protected routes via `isAuthenticated` middleware
- User data synced to database on authentication

**API Design**: RESTful endpoints with JSON payloads:
- `GET /api/auth/user` - Fetch authenticated user (protected)
- `POST /api/invite-requests` - Submit invite request (public)

**Request Logging**: Custom middleware logs API requests with timing, method, path, status, and truncated response bodies.

## Data Layer

**ORM**: Drizzle ORM with Neon serverless PostgreSQL connector using WebSocket connections.

**Schema Design**:
- `sessions` table - Required for Replit Auth session storage
- `users` table - Required for Replit Auth user data (id, email, name, profile image, timestamps)
- `invite_requests` table - Stores invite requests (id, email, full name, city, role, timestamp) with email indexing

**Database Operations**: Abstracted through a storage interface (`IStorage`) with concrete implementation in `DatabaseStorage` class. This pattern allows for:
- Easy testing with mock implementations
- Consistent data access patterns
- Type-safe operations using Drizzle's inferred types

## Development Workflow

**Build Process**:
- Development: Vite dev server (port 5000) + tsx for server hot reload
- Production: Vite builds static assets to `dist/public`, esbuild bundles server to `dist/index.js`

**Vite Configuration**:
- Custom middleware mode for SSR-like integration with Express
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Development-only Replit plugins (cartographer, dev banner, error overlay)
- TailwindCSS v4 integration via Vite plugin

**TypeScript**: Strict mode enabled with ESNext modules, incremental compilation, and custom path mappings.

# External Dependencies

**Database**: Neon Serverless PostgreSQL via `@neondatabase/serverless` package with WebSocket support.

**Authentication**: Replit OpenID Connect provider at `replit.com/oidc` using the `openid-client` library.

**Session Storage**: PostgreSQL-backed sessions via `connect-pg-simple` with 7-day TTL.

**UI Components**: Extensive use of Radix UI primitives for accessible, unstyled components wrapped with Tailwind styling.

**Styling**: 
- Tailwind CSS v4 with custom theme configuration
- `tw-animate-css` for animation utilities
- Custom CSS variables for Stanford d.School aesthetic

**Image Assets**: Static images stored in `attached_assets/generated_images/` directory referenced via Vite alias.

**Development Tools**: Replit-specific Vite plugins for enhanced development experience in the Replit environment.