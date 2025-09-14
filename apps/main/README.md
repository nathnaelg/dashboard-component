# Main Application - Individual Feature Assembly

This is the main Next.js application that demonstrates the individual feature assembly component of the monorepo system. It consumes and integrates the shared packages to create two distinct dashboard experiences.

## Architecture

### Individual Features Assembled

1. **Client Management System** (`/client-management`)
   - Utilizes `@repo/feature-client-management` package
   - Demonstrates business client relationship management
   - Features: client overview, directory, communication tracking

2. **Gaming Analytics System** (`/gaming-analytics`)
   - Utilizes `@repo/feature-gaming-analytics` package
   - Demonstrates gaming platform analytics
   - Features: player metrics, game performance, real-time analytics

### Package Integration

- **UI Components**: All pages use `@repo/ui-components` for consistent design
- **Utilities**: Both features leverage `@repo/utils` for shared functionality
- **Configuration Only**: This app only handles routing and composition - all business logic resides in the feature packages

## Key Features

- **Modular Architecture**: Clean separation between features and shared components
- **Type Safety**: Full TypeScript integration across all packages
- **Design System**: Consistent theming using semantic design tokens
- **Responsive Design**: Mobile-first approach with professional layouts

## Individual Contribution

This application demonstrates:
- Assembly of multiple feature systems
- Integration of shared component libraries
- Configuration-based composition (no business logic in main app)
- Professional dashboard interfaces for different domains

## Usage

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

Navigate to:
- `/` - Main dashboard with feature switcher
- `/client-management` - Full client management dashboard
- `/gaming-analytics` - Full gaming analytics dashboard
