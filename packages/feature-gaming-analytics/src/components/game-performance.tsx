"use client"

import { Card, CardContent, CardHeader, CardTitle, DataTable, type Column } from "@monorepo/ui-components"
import { formatNumber, formatCurrency } from "@monorepo/utils"
import { Star, Download, AlertTriangle, Clock, TrendingUp, Gamepad2 } from "lucide-react"
import type { GamePerformance } from "../types/gaming"

interface GamePerformanceProps {
  games: GamePerformance[]
}

export function GamePerformanceComponent({ games }: GamePerformanceProps) {
  const totalRevenue = games.reduce((sum, game) => sum + game.revenue, 0)
  const totalPlayers = games.reduce((sum, game) => sum + game.players, 0)
  const averageRating = games.reduce((sum, game) => sum + game.rating, 0) / games.length
  const totalDownloads = games.reduce((sum, game) => sum + game.downloads, 0)

  const columns: Column<GamePerformance>[] = [
    {
      key: "gameName",
      header: "Game",
      render: (_, game) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
            <Gamepad2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-medium">{game.gameName}</div>
            <div className="text-sm text-muted-foreground">ID: {game.gameId}</div>
          </div>
        </div>
      ),
    },
    {
      key: "players",
      header: "Active Players",
      render: (value) => <span className="font-medium">{formatNumber(Number(value))}</span>,
    },
    {
      key: "revenue",
      header: "Revenue",
      render: (value) => <span className="font-medium">{formatCurrency(Number(value))}</span>,
    },
    {
      key: "rating",
      header: "Rating",
      render: (_, game) => (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{game.rating}</span>
        </div>
      ),
    },
    {
      key: "downloads",
      header: "Downloads",
      render: (_, game) => (
        <div className="flex items-center gap-2">
          <Download className="h-4 w-4 text-muted-foreground" />
          <span>{formatNumber(game.downloads)}</span>
        </div>
      ),
    },
    {
      key: "crashes",
      header: "Crashes",
      render: (_, game) => (
        <div className="flex items-center gap-2">
          <AlertTriangle className={`h-4 w-4 ${game.crashes > 25 ? "text-red-500" : "text-muted-foreground"}`} />
          <span className={game.crashes > 25 ? "text-red-600 font-medium" : ""}>{game.crashes}</span>
        </div>
      ),
    },
    {
      key: "loadTime",
      header: "Load Time",
      render: (_, game) => (
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className={game.loadTime > 3 ? "text-yellow-600" : ""}>{game.loadTime}s</span>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Game Performance</h2>
        <p className="text-muted-foreground">Monitor individual game metrics and performance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">Across all games</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Players</CardTitle>
            <Gamepad2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalPlayers)}</div>
            <p className="text-xs text-muted-foreground">Active across all games</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">User satisfaction score</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalDownloads)}</div>
            <p className="text-xs text-muted-foreground">All-time downloads</p>
          </CardContent>
        </Card>
      </div>

      {/* Games Table */}
      <Card>
        <CardHeader>
          <CardTitle>Game Performance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable data={games} columns={columns} emptyMessage="No games found" />
        </CardContent>
      </Card>
    </div>
  )
}
