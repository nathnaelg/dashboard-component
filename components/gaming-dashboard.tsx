"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Users, Gamepad2, DollarSign, TrendingUp, Search, Filter, Star, Clock } from "lucide-react"

const gamingMetrics = [
  { title: "Active Players", value: "847K", change: "+15.2%", icon: Users, trend: "up" },
  { title: "Monthly Revenue", value: "$2.4M", change: "+23.1%", icon: DollarSign, trend: "up" },
  { title: "Games Published", value: "156", change: "+8", icon: Gamepad2, trend: "up" },
  { title: "Avg Session Time", value: "42m", change: "+5.3%", icon: Clock, trend: "up" },
]

const playerEngagementData = [
  { date: "2024-01-01", dau: 245000, mau: 847000, sessions: 1200000 },
  { date: "2024-01-02", dau: 252000, mau: 851000, sessions: 1250000 },
  { date: "2024-01-03", dau: 248000, mau: 849000, sessions: 1180000 },
  { date: "2024-01-04", dau: 267000, mau: 863000, sessions: 1320000 },
  { date: "2024-01-05", dau: 271000, mau: 867000, sessions: 1350000 },
  { date: "2024-01-06", dau: 264000, mau: 865000, sessions: 1290000 },
  { date: "2024-01-07", dau: 278000, mau: 872000, sessions: 1400000 },
]

const revenueData = [
  { month: "Jan", subscriptions: 1200000, iap: 800000, ads: 400000 },
  { month: "Feb", subscriptions: 1350000, iap: 920000, ads: 450000 },
  { month: "Mar", subscriptions: 1280000, iap: 850000, ads: 420000 },
  { month: "Apr", subscriptions: 1450000, iap: 1100000, ads: 500000 },
  { month: "May", subscriptions: 1520000, iap: 1200000, ads: 530000 },
  { month: "Jun", subscriptions: 1600000, iap: 1300000, ads: 580000 },
]

const topGames = [
  { id: 1, name: "Cyber Quest", genre: "RPG", players: "234K", revenue: "$450K", rating: 4.8, downloads: "2.1M" },
  { id: 2, name: "Racing Thunder", genre: "Racing", players: "189K", revenue: "$320K", rating: 4.6, downloads: "1.8M" },
  { id: 3, name: "Puzzle Master", genre: "Puzzle", players: "156K", revenue: "$280K", rating: 4.9, downloads: "3.2M" },
  { id: 4, name: "Battle Arena", genre: "Action", players: "145K", revenue: "$380K", rating: 4.5, downloads: "1.5M" },
]

const players = [
  {
    id: 1,
    username: "ProGamer2024",
    level: 87,
    platform: "PC",
    subscription: "Premium",
    playtime: "245h",
    lastSeen: "Online",
  },
  {
    id: 2,
    username: "MobileWarrior",
    level: 42,
    platform: "Mobile",
    subscription: "Basic",
    playtime: "89h",
    lastSeen: "2h ago",
  },
  {
    id: 3,
    username: "ConsoleKing",
    level: 156,
    platform: "Console",
    subscription: "Premium",
    playtime: "567h",
    lastSeen: "Online",
  },
  {
    id: 4,
    username: "CasualPlayer",
    level: 23,
    platform: "Mobile",
    subscription: "Free",
    playtime: "34h",
    lastSeen: "1d ago",
  },
]

export function GamingDashboard() {
  return (
    <div className="space-y-8">
      {/* Metrics Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamingMetrics.map((metric, index) => (
            <Card key={index} className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">{metric.value}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">Player Engagement</CardTitle>
            <CardDescription>Daily and monthly active users over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={playerEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  formatter={(value, name) => [value.toLocaleString(), typeof name === "string" ? name.toUpperCase() : String(name)]}
                />
                <Area type="monotone" dataKey="dau" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="mau" stackId="2" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">Revenue Breakdown</CardTitle>
            <CardDescription>Monthly revenue by source</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                <Bar dataKey="subscriptions" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="iap" stackId="a" fill="#06b6d4" />
                <Bar dataKey="ads" stackId="a" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Top Games */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-700">Top Performing Games</h2>
          <div className="flex gap-2">
            <Select defaultValue="revenue">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">By Revenue</SelectItem>
                <SelectItem value="players">By Players</SelectItem>
                <SelectItem value="rating">By Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card className="border-purple-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-purple-800">Game Name</th>
                    <th className="text-left p-4 font-medium text-purple-800">Genre</th>
                    <th className="text-left p-4 font-medium text-purple-800">Active Players</th>
                    <th className="text-left p-4 font-medium text-purple-800">Revenue</th>
                    <th className="text-left p-4 font-medium text-purple-800">Rating</th>
                    <th className="text-left p-4 font-medium text-purple-800">Downloads</th>
                  </tr>
                </thead>
                <tbody>
                  {topGames.map((game) => (
                    <tr key={game.id} className="border-t border-purple-100">
                      <td className="p-4 font-medium">{game.name}</td>
                      <td className="p-4">
                        <Badge variant="outline" className="border-purple-200 text-purple-700">
                          {game.genre}
                        </Badge>
                      </td>
                      <td className="p-4 font-medium text-purple-700">{game.players}</td>
                      <td className="p-4 font-medium text-green-600">{game.revenue}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {game.rating}
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{game.downloads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Player Analytics */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-700">Player Analytics</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search players..." className="pl-8 w-64" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <Card className="border-purple-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-purple-800">Username</th>
                    <th className="text-left p-4 font-medium text-purple-800">Level</th>
                    <th className="text-left p-4 font-medium text-purple-800">Platform</th>
                    <th className="text-left p-4 font-medium text-purple-800">Subscription</th>
                    <th className="text-left p-4 font-medium text-purple-800">Playtime</th>
                    <th className="text-left p-4 font-medium text-purple-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.id} className="border-t border-purple-100">
                      <td className="p-4 font-medium">{player.username}</td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          Lv. {player.level}
                        </Badge>
                      </td>
                      <td className="p-4">{player.platform}</td>
                      <td className="p-4">
                        <Badge
                          variant={
                            player.subscription === "Premium"
                              ? "default"
                              : player.subscription === "Basic"
                                ? "secondary"
                                : "outline"
                          }
                          className={player.subscription === "Premium" ? "bg-purple-600" : ""}
                        >
                          {player.subscription}
                        </Badge>
                      </td>
                      <td className="p-4 font-medium text-purple-700">{player.playtime}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${player.lastSeen === "Online" ? "bg-green-500" : "bg-gray-400"}`}
                          />
                          {player.lastSeen}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
