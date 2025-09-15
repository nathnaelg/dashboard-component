"use client"

import { useState } from "react"
import { Button } from "@monorepo/ui-components"
import { DashboardLayout, Navigation } from "@monorepo/ui-components"
import { ClientOverview } from "@monorepo/feature-client-management"
import { GamingOverview } from "@monorepo/feature-gaming-analytics"
import type { ClientMetrics } from "@monorepo/feature-client-management"
import type { GameMetrics, RevenueData, PlayerEngagement } from "@monorepo/feature-gaming-analytics"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState<"client" | "gaming">("client")

  const navigationItems = [
    {
      label: "Client Management",
      href: "/client-management",
      active: activeFeature === "client",
      onClick: () => setActiveFeature("client"),
    },
    {
      label: "Gaming Analytics",
      href: "/gaming-analytics",
      active: activeFeature === "gaming",
      onClick: () => setActiveFeature("gaming"),
    },
  ]

  // ✅ Mock data for ClientOverview
  const clientMetrics: ClientMetrics = {
    totalClients: 120,
    activeClients: 80,
    totalValue: 450000,
    averageValue: 3750,
    newClientsThisMonth: 12,
    communicationsThisWeek: 34,
    upcomingFollowUps: 5,
    conversionRate: 0.25,
  }

  // ✅ Mock data for GamingOverview
  const gameMetrics: GameMetrics = {
    totalPlayers: 1500,
    activePlayersToday: 750,
    averageSessionDuration: 35,
    totalRevenue: 200000,
    dailyActiveUsers: 720,
    monthlyActiveUsers: 1100,
    retentionRate: 0.65,
    churnRate: 0.1,
    averageRevenuePerUser: 25.5,
    conversionRate: 0.3,
  }

  const revenueData: RevenueData[] = [
    {
      date: "2025-09-01",
      revenue: 5000,
      transactions: 180,
      averageOrderValue: 27.8,
      subscriptions: 50,
      inAppPurchases: 130,
    },
    {
      date: "2025-09-02",
      revenue: 4800,
      transactions: 170,
      averageOrderValue: 28.2,
      subscriptions: 45,
      inAppPurchases: 125,
    },
  ]

  const engagementData: PlayerEngagement[] = [
    {
      date: "2025-09-01",
      dailyActiveUsers: 720,
      sessionCount: 900,
      averageSessionDuration: 34,
      bounceRate: 0.15,
      retentionRate: 0.68,
    },
    {
      date: "2025-09-02",
      dailyActiveUsers: 700,
      sessionCount: 880,
      averageSessionDuration: 33,
      bounceRate: 0.16,
      retentionRate: 0.66,
    },
  ]

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <Navigation items={navigationItems} />

        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Monorepo Dashboard System</h1>
            <p className="text-muted-foreground text-lg">
              Demonstrating modular architecture with shared components and utilities
            </p>
          </div>

          <div className="mb-6 flex gap-4">
            <Button
              variant={activeFeature === "client" ? "default" : "outline"}
              onClick={() => setActiveFeature("client")}
            >
              Client Management Dashboard
            </Button>
            <Button
              variant={activeFeature === "gaming" ? "default" : "outline"}
              onClick={() => setActiveFeature("gaming")}
            >
              Gaming Analytics Dashboard
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-6">
            {activeFeature === "client" ? (
              <ClientOverview metrics={clientMetrics} />
            ) : (
              <GamingOverview
                metrics={gameMetrics}
                revenueData={revenueData}
                engagementData={engagementData}
              />
            )}
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
