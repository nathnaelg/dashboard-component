# @monorepo/feature-gaming-analytics

Gaming analytics dashboard feature package providing comprehensive gaming platform analytics and player insights.

## Features

### Gaming Overview Dashboard
- Real-time player metrics and KPIs
- Revenue analytics and trends
- Player engagement tracking
- Retention and conversion analytics

### Player Analytics
- Comprehensive player profiles and behavior analysis
- Platform distribution and demographics
- Subscription tier tracking
- Activity and engagement metrics

### Game Performance Monitoring
- Individual game performance metrics
- Revenue tracking per game
- User ratings and download statistics
- Technical performance monitoring (crashes, load times)

## Components

### GamingOverview
Main analytics dashboard with key metrics and trend visualizations.

\`\`\`tsx
import { GamingOverview } from '@monorepo/feature-gaming-analytics'

<GamingOverview 
  metrics={gameMetrics}
  revenueData={revenueData}
  engagementData={engagementData}
/>
\`\`\`

### PlayerAnalytics
Detailed player analysis with filtering and search capabilities.

\`\`\`tsx
import { PlayerAnalytics } from '@monorepo/feature-gaming-analytics'

<PlayerAnalytics 
  players={players}
  onPlayerSelect={handlePlayerSelect}
/>
\`\`\`

### GamePerformanceComponent
Individual game performance monitoring and analytics.

\`\`\`tsx
import { GamePerformanceComponent } from '@monorepo/feature-gaming-analytics'

<GamePerformanceComponent games={gamePerformanceData} />
\`\`\`

## Data Types

### Player
Complete player profile including gaming statistics, platform, and subscription information.

### GameSession
Individual gaming session data with performance metrics and monetization tracking.

### GameMetrics
Aggregated platform-wide metrics for dashboard overview.

### GamePerformance
Individual game performance data including technical and business metrics.

## Key Metrics Tracked

- **Player Engagement**: DAU, MAU, session duration, retention rates
- **Revenue Analytics**: ARPU, conversion rates, subscription vs in-app purchases
- **Game Performance**: Individual game metrics, ratings, downloads, technical performance
- **Platform Analytics**: Cross-platform usage, demographics, behavior patterns

## Usage

This package provides a complete gaming analytics solution designed to be consumed by the main application. It leverages shared UI components and utilities from other packages in the monorepo to deliver comprehensive gaming platform insights.

## Development

\`\`\`bash
npm run build    # Build the feature package
npm run dev      # Watch mode for development
npm run clean    # Clean build files
\`\`\`
