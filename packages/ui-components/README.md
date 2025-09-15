# @monorepo/ui-components

Shared UI component library for the client management and gaming analytics platform.

## Components

### Core Components
- **Button** - Versatile button component with multiple variants and sizes
- **Card** - Container component with header, content, and footer sections

### Dashboard Components
- **DashboardLayout** - Main layout component with sidebar and header support
- **MetricCard** - Display key metrics with trends and icons
- **DataTable** - Flexible table component with sorting and row actions
- **ChartContainer** - Wrapper for chart components with titles and descriptions
- **Navigation** - Sidebar and horizontal navigation component

### Usage

\`\`\`tsx
import { Button, Card, MetricCard, DashboardLayout } from '@monorepo/ui-components'

function MyDashboard() {
  return (
    <DashboardLayout
      sidebar={<Navigation items={navItems} />}
      header={<h1>Dashboard</h1>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Users"
          value="1,234"
          trend={{ value: 12, label: "from last month", isPositive: true }}
        />
      </div>
    </DashboardLayout>
  )
}
\`\`\`

## Development

\`\`\`bash
npm run build    # Build the library
npm run dev      # Watch mode for development
npm run clean    # Clean build files
\`\`\`
