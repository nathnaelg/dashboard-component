# @monorepo/feature-client-management

Client management dashboard feature package providing comprehensive client relationship management capabilities.

## Features

### Client Overview Dashboard
- Key performance metrics and KPIs
- Client growth trends and analytics
- Status distribution charts
- Activity summaries

### Client Management
- Comprehensive client list with search and filtering
- Client profiles with detailed information
- Status tracking (active, prospect, inactive)
- Value and engagement metrics

### Communication Tracking
- Timeline view of all client communications
- Multiple communication types (email, call, meeting, note)
- Outcome tracking and follow-up management
- Activity history and notes

## Components

### ClientOverview
Main dashboard component displaying key metrics and charts.

\`\`\`tsx
import { ClientOverview } from '@monorepo/feature-client-management'

<ClientOverview metrics={clientMetrics} />
\`\`\`

### ClientList
Searchable and filterable client list with detailed information.

\`\`\`tsx
import { ClientList } from '@monorepo/feature-client-management'

<ClientList 
  clients={clients}
  onClientSelect={handleClientSelect}
  onAddClient={handleAddClient}
/>
\`\`\`

### CommunicationTimeline
Timeline view of client communications and interactions.

\`\`\`tsx
import { CommunicationTimeline } from '@monorepo/feature-client-management'

<CommunicationTimeline 
  communications={communications}
  clientId={selectedClientId}
/>
\`\`\`

## Data Types

### Client
Complete client information including contact details, status, value, and metadata.

### Communication
Communication records with type, content, outcome, and follow-up tracking.

### ClientMetrics
Aggregated metrics for dashboard overview and reporting.

## Usage

This package is designed to be consumed by the main application and provides all necessary components for a complete client management system. It leverages the shared UI components and utilities from other packages in the monorepo.

## Development

\`\`\`bash
npm run build    # Build the feature package
npm run dev      # Watch mode for development
npm run clean    # Clean build files
\`\`\`
