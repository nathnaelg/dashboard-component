export interface Player {
  id: string
  username: string
  email: string
  level: number
  experience: number
  joinDate: string
  lastActive: string
  status: "online" | "offline" | "away"
  totalPlayTime: number
  gamesPlayed: number
  achievements: number
  country: string
  platform: "pc" | "mobile" | "console"
  subscriptionTier: "free" | "premium" | "vip"
}

export interface GameSession {
  id: string
  playerId: string
  gameId: string
  startTime: string
  endTime?: string
  duration: number
  score: number
  level: number
  achievements: string[]
  inAppPurchases: number
  platform: string
}

export interface GameMetrics {
  totalPlayers: number
  activePlayersToday: number
  averageSessionDuration: number
  totalRevenue: number
  dailyActiveUsers: number
  monthlyActiveUsers: number
  retentionRate: number
  churnRate: number
  averageRevenuePerUser: number
  conversionRate: number
}

export interface RevenueData {
  date: string
  revenue: number
  transactions: number
  averageOrderValue: number
  subscriptions: number
  inAppPurchases: number
}

export interface PlayerEngagement {
  date: string
  dailyActiveUsers: number
  sessionCount: number
  averageSessionDuration: number
  bounceRate: number
  retentionRate: number
}

export interface GamePerformance {
  gameId: string
  gameName: string
  players: number
  revenue: number
  rating: number
  downloads: number
  crashes: number
  loadTime: number
}
