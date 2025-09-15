"use client"

import { MetricCard, ChartContainer } from "@monorepo/ui-components"
import { formatNumber, formatCurrency, formatPercentage } from "@monorepo/utils"
import { Users, DollarSign, Clock, TrendingUp, Gamepad2, Target, UserCheck, Zap } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts"
import type { GameMetrics, RevenueData, PlayerEngagement } from "../types/gaming"

interface GamingOverviewProps {
  metrics: GameMetrics
  revenueData: RevenueData[]
  engagementData: PlayerEngagement[]
}

export function GamingOverview({ metrics, revenueData, engagementData }: GamingOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Players"
          value={formatNumber(metrics.totalPlayers)}
          description="Registered users"
          trend={{
            value: 8.2,
            label: "from last month",
            isPositive: true,
          }}
          icon={<Users className="h-4 w-4" />}
        />
        <MetricCard
          title="Daily Active Users"
          value={formatNumber(metrics.dailyActiveUsers)}
          description="Active today"
          trend={{
            value: 12.5,
            label: "from yesterday",
            isPositive: true,
          }}
          icon={<UserCheck className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(metrics.totalRevenue)}
          description="All-time earnings"
          trend={{
            value: 18.7,
            label: "from last month",
            isPositive: true,
          }}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <MetricCard
          title="Avg Session Duration"
          value={`${metrics.averageSessionDuration}m`}
          description="Per gaming session"
          trend={{
            value: 3.2,
            label: "from last week",
            isPositive: true,
          }}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Active Users"
          value={formatNumber(metrics.monthlyActiveUsers)}
          description="Active this month"
          icon={<Gamepad2 className="h-4 w-4" />}
        />
        <MetricCard
          title="Retention Rate"
          value={formatPercentage(metrics.retentionRate * 100)}
          description="7-day retention"
          trend={{
            value: 2.1,
            label: "from last period",
            isPositive: true,
          }}
          icon={<Target className="h-4 w-4" />}
        />
        <MetricCard
          title="ARPU"
          value={formatCurrency(metrics.averageRevenuePerUser)}
          description="Average revenue per user"
          trend={{
            value: 5.8,
            label: "from last month",
            isPositive: true,
          }}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <MetricCard
          title="Conversion Rate"
          value={formatPercentage(metrics.conversionRate * 100)}
          description="Free to paid conversion"
          trend={{
            value: 1.3,
            label: "from last month",
            isPositive: true,
          }}
          icon={<Zap className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer title="Revenue Trend" description="Daily revenue and transaction volume">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  name === "revenue" ? formatCurrency(Number(value)) : formatNumber(Number(value)),
                  name === "revenue" ? "Revenue" : "Transactions",
                ]}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-chart-1)"
                fill="var(--color-chart-1)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Player Engagement" description="Daily active users and session metrics">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  formatNumber(Number(value)),
                  name === "dailyActiveUsers" ? "Daily Active Users" : "Average Session Duration",
                ]}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Line
                type="monotone"
                dataKey="dailyActiveUsers"
                stroke="var(--color-chart-2)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-2)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer title="Revenue Breakdown" description="Revenue sources comparison">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  formatCurrency(Number(value)),
                  name === "subscriptions" ? "Subscriptions" : "In-App Purchases",
                ]}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Bar dataKey="subscriptions" fill="var(--color-chart-3)" name="subscriptions" />
              <Bar dataKey="inAppPurchases" fill="var(--color-chart-4)" name="inAppPurchases" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Retention Analysis" description="Player retention over time">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  formatPercentage(Number(value) * 100),
                  name === "retentionRate" ? "Retention Rate" : "Bounce Rate",
                ]}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Line
                type="monotone"
                dataKey="retentionRate"
                stroke="var(--color-chart-3)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-3)" }}
              />
              <Line
                type="monotone"
                dataKey="bounceRate"
                stroke="var(--color-chart-5)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-5)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
