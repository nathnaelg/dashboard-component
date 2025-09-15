"use client"

import * as React from "react"
import { DataTable, Button, type Column } from "@monorepo/ui-components"
import { formatCurrency, formatRelativeTime, searchFilter, sortBy } from "@monorepo/utils"
import { Search, Plus } from "lucide-react"
import type { Client } from "../types/client"

interface ClientListProps {
  clients: Client[]
  onClientSelect?: (client: Client) => void
  onAddClient?: () => void
}

export function ClientList({ clients, onClientSelect, onAddClient }: ClientListProps) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof Client; direction: "asc" | "desc" }>({
    key: "name",
    direction: "asc",
  })

  const filteredClients = React.useMemo(() => {
    let filtered = clients

    // Apply search filter
    if (searchTerm) {
      filtered = searchFilter(filtered, searchTerm, ["name", "email", "company"])
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((client) => client.status === statusFilter)
    }

    // Apply sorting
    filtered = sortBy(filtered, sortConfig.key, sortConfig.direction)

    return filtered
  }, [clients, searchTerm, statusFilter, sortConfig])

  const columns: Column<Client>[] = [
    {
      key: "name",
      header: "Client",
      render: (_, client) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">{client.name.charAt(0)}</span>
          </div>
          <div>
            <div className="font-medium">{client.name}</div>
            <div className="text-sm text-muted-foreground">{client.company}</div>
          </div>
        </div>
      ),
    },
    {
      key: "email",
      header: "Contact",
      render: (_, client) => (
        <div>
          <div className="text-sm">{client.email}</div>
          <div className="text-sm text-muted-foreground">{client.phone}</div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (_, client) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            client.status === "active"
              ? "bg-green-100 text-green-800"
              : client.status === "prospect"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
        </span>
      ),
    },
    {
      key: "value",
      header: "Value",
      render: (value) => <span className="font-medium">{formatCurrency(Number(value))}</span>,
    },
    {
      key: "lastContact",
      header: "Last Contact",
      render: (value) => <span className="text-sm text-muted-foreground">{formatRelativeTime(String(value))}</span>,
    },
    {
      key: "tags",
      header: "Tags",
      render: (_, client) => (
        <div className="flex gap-1">
          {client.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-secondary/20 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {client.tags.length > 2 && <span className="text-xs text-muted-foreground">+{client.tags.length - 2}</span>}
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Clients</h2>
          <p className="text-muted-foreground">Manage your client relationships</p>
        </div>
        <Button onClick={onAddClient} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search clients..."
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
          <option value="active">Active</option>
          <option value="prospect">Prospect</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Client Table */}
      <DataTable
        data={filteredClients}
        columns={columns}
        onRowClick={onClientSelect}
        emptyMessage="No clients found matching your criteria"
      />

      {/* Summary */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredClients.length} of {clients.length} clients
      </div>
    </div>
  )
}
