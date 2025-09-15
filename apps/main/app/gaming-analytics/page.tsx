"use client"

import { DashboardLayout } from "@monorepo/ui-components"
import {
  GamingOverview,
  PlayerAnalytics,
  GamePerformanceComponent,
} from "@monorepo/feature-gaming-analytics"

import type {
  GamePerformance as GamePerformanceType,
  Player,
  GameMetrics,
  RevenueData,
  PlayerEngagement,
} from "@monorepo/feature-gaming-analytics"

export default function GamingAnalyticsPage() {
  const metrics: GameMetrics = {
    totalPlayers: 1500,
    activePlayersToday: 750,
    averageSessionDuration: 35, 
    totalRevenue: 200000,
    dailyActiveUsers: 720,
    monthlyActiveUsers: 1100,
    retentionRate: 0.65,
    churnRate: 0.10,
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

  const players: Player[] = [
    {
      id: "p1",
      username: "aliceJ",
      email: "alice@example.com",
      level: 25,
      experience: 14250,
      joinDate: "2024-01-10",
      lastActive: "2025-09-14",
      status: "online",
      totalPlayTime: 1200,
      gamesPlayed: 50,
      achievements: 20,
      country: "US",
      platform: "pc",
      subscriptionTier: "vip",
    },
    {
      id: "p2",
      username: "dkim",
      email: "david@example.com",
      level: 18,
      experience: 9800,
      joinDate: "2024-06-15",
      lastActive: "2025-09-13",
      status: "offline",
      totalPlayTime: 800,
      gamesPlayed: 35,
      achievements: 10,
      country: "KR",
      platform: "mobile",
      subscriptionTier: "premium",
    },
  ]

  const gamePerformance: GamePerformanceType[] = [
    {
      gameId: "g1",
      gameName: "Battle Quest",
      players: 500,
      revenue: 50000,
      rating: 4.5,
      downloads: 2000,
      crashes: 5,
      loadTime: 3.2,
    },
    {
      gameId: "g2",
      gameName: "Speed Racer",
      players: 300,
      revenue: 30000,
      rating: 4.2,
      downloads: 1500,
      crashes: 2,
      loadTime: 2.8,
    },
  ]

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Gaming Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time gaming metrics and player behavior analytics
            </p>
          </div>

          <div className="space-y-8">
            {/* Overview Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Platform Overview</h2>
              <GamingOverview
                metrics={metrics}
                revenueData={revenueData}
                engagementData={engagementData}
              />
            </section>

            {/* Player Analytics Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Player Analytics</h2>
              <PlayerAnalytics players={players} />
            </section>

            {/* Game Performance Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Game Performance</h2>
              <GamePerformanceComponent games={gamePerformance} />
            </section>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
