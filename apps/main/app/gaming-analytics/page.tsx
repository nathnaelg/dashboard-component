"use client"

import { DashboardLayout } from "@repo/ui-components"
import { GamingOverview, PlayerAnalytics, GamePerformance } from "@repo/feature-gaming-analytics"

export default function GamingAnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Gaming Analytics Dashboard</h1>
            <p className="text-muted-foreground">Real-time gaming metrics and player behavior analytics</p>
          </div>

          <div className="space-y-8">
            {/* Overview Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Platform Overview</h2>
              <GamingOverview />
            </section>

            {/* Player Analytics Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Player Analytics</h2>
              <PlayerAnalytics />
            </section>

            {/* Game Performance */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Game Performance</h2>
              <GamePerformance />
            </section>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
