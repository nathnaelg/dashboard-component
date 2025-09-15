"use client"
import { MetricCard, ChartContainer } from "@monorepo/ui-components"
import { formatCurrency, formatPercentage } from "@monorepo/utils"
import { Users, DollarSign, TrendingUp, Calendar, Mail, UserCheck } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import type { ClientMetrics } from "../types/client"

interface ClientOverviewProps {
  metrics: ClientMetrics
}

const statusData = [
  { name: "Active", value: 60, color: "var(--color-chart-1)" },
  { name: "Prospects", value: 25, color: "var(--color-chart-2)" },
  { name: "Inactive", value: 15, color: "var(--color-chart-3)" },
]

const monthlyData = [
  { month: "Sep", clients: 12, value: 450000 },
  { month: "Oct", clients: 15, value: 520000 },
  { month: "Nov", clients: 18, value: 580000 },
  { month: "Dec", clients: 20, value: 620000 },
  { month: "Jan", clients: 22, value: 680000 },
]

export function ClientOverview({ metrics }: ClientOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Clients"
          value={metrics.totalClients}
          description="All clients in system"
          trend={{
            value: 12,
            label: "from last month",
            isPositive: true,
          }}
          icon={<Users className="h-4 w-4" />}
        />
        <MetricCard
          title="Active Clients"
          value={metrics.activeClients}
          description="Currently engaged"
          trend={{
            value: 8,
            label: "from last month",
            isPositive: true,
          }}
          icon={<UserCheck className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Value"
          value={formatCurrency(metrics.totalValue)}
          description="Combined client value"
          trend={{
            value: 15,
            label: "from last month",
            isPositive: true,
          }}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <MetricCard
          title="Conversion Rate"
          value={formatPercentage(metrics.conversionRate * 100)}
          description="Prospect to client"
          trend={{
            value: 5,
            label: "from last month",
            isPositive: true,
          }}
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Activity Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="New This Month"
          value={metrics.newClientsThisMonth}
          description="New client acquisitions"
          icon={<Users className="h-4 w-4" />}
        />
        <MetricCard
          title="Communications"
          value={metrics.communicationsThisWeek}
          description="This week"
          icon={<Mail className="h-4 w-4" />}
        />
        <MetricCard
          title="Follow-ups Due"
          value={metrics.upcomingFollowUps}
          description="Requires attention"
          icon={<Calendar className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer title="Client Growth Trend" description="Monthly client acquisition and value growth">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  name === "value" ? formatCurrency(Number(value)) : value,
                  name === "value" ? "Total Value" : "Clients",
                ]}
              />
              <Bar dataKey="clients" fill="var(--color-chart-1)" name="clients" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Client Status Distribution" description="Breakdown by client status">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
