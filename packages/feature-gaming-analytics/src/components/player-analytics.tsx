"use client"

import * as React from "react"
import { DataTable, Button, type Column } from "@monorepo/ui-components"
import { formatNumber, formatRelativeTime, searchFilter, sortBy } from "@monorepo/utils"
import { Search, Users, Globe, Smartphone, Monitor, Gamepad2 } from "lucide-react"
import type { Player } from "../types/gaming"

interface PlayerAnalyticsProps {
  players: Player[]
  onPlayerSelect?: (player: Player) => void
}

export function PlayerAnalytics({ players, onPlayerSelect }: PlayerAnalyticsProps) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [platformFilter, setPlatformFilter] = React.useState<string>("all")
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof Player; direction: "asc" | "desc" }>({
    key: "level",
    direction: "desc",
  })

  const filteredPlayers = React.useMemo(() => {
    let filtered = players

    // Apply search filter
    if (searchTerm) {
      filtered = searchFilter(filtered, searchTerm, ["username", "email", "country"])
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((player) => player.status === statusFilter)
    }

    // Apply platform filter
    if (platformFilter !== "all") {
      filtered = filtered.filter((player) => player.platform === platformFilter)
    }

    // Apply sorting
    filtered = sortBy(filtered, sortConfig.key, sortConfig.direction)

    return filtered
  }, [players, searchTerm, statusFilter, platformFilter, sortConfig])

  const getPlatformIcon = (platform: Player["platform"]) => {
    switch (platform) {
      case "pc":
        return <Monitor className="h-4 w-4" />
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "console":
        return <Gamepad2 className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: Player["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-800"
      case "away":
        return "bg-yellow-100 text-yellow-800"
      case "offline":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTierColor = (tier: Player["subscriptionTier"]) => {
    switch (tier) {
      case "vip":
        return "bg-purple-100 text-purple-800"
      case "premium":
        return "bg-blue-100 text-blue-800"
      case "free":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const columns: Column<Player>[] = [
    {
      key: "username",
      header: "Player",
      render: (_, player) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">{player.username.charAt(0)}</span>
          </div>
          <div>
            <div className="font-medium">{player.username}</div>
            <div className="text-sm text-muted-foreground">Level {player.level}</div>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (_, player) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(player.status)}`}
        >
          {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
        </span>
      ),
    },
    {
      key: "platform",
      header: "Platform",
      render: (_, player) => (
        <div className="flex items-center gap-2">
          {getPlatformIcon(player.platform)}
          <span className="capitalize">{player.platform}</span>
        </div>
      ),
    },
    {
      key: "subscriptionTier",
      header: "Tier",
      render: (_, player) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTierColor(player.subscriptionTier)}`}
        >
          {player.subscriptionTier.toUpperCase()}
        </span>
      ),
    },
    {
      key: "experience",
      header: "Experience",
      render: (value) => <span className="font-medium">{formatNumber(Number(value))}</span>,
    },
    {
      key: "totalPlayTime",
      header: "Play Time",
      render: (value) => (
        <span>
          {Math.floor(Number(value) / 60)}h {Number(value) % 60}m
        </span>
      ),
    },
    {
      key: "achievements",
      header: "Achievements",
      render: (value) => <span className="font-medium">{value}</span>,
    },
    {
      key: "country",
      header: "Country",
      render: (_, player) => (
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span>{player.country}</span>
        </div>
      ),
    },
    {
      key: "lastActive",
      header: "Last Active",
      render: (value) => <span className="text-sm text-muted-foreground">{formatRelativeTime(String(value))}</span>,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Player Analytics</h2>
          <p className="text-muted-foreground">Analyze player behavior and engagement</p>
        </div>
        <Button className="gap-2">
          <Users className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="online">Online</option>
          <option value="away">Away</option>
          <option value="offline">Offline</option>
        </select>
        <select
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          <option value="all">All Platforms</option>
          <option value="pc">PC</option>
          <option value="mobile">Mobile</option>
          <option value="console">Console</option>
        </select>
      </div>

      {/* Player Table */}
      <DataTable
        data={filteredPlayers}
        columns={columns}
        onRowClick={onPlayerSelect}
        emptyMessage="No players found matching your criteria"
      />

      {/* Summary */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredPlayers.length} of {players.length} players
      </div>
    </div>
  )
}
