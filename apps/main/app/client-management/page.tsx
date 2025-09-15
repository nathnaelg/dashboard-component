"use client"

import React from "react"
import { Client, ClientList, ClientMetrics, Communication, CommunicationTimeline } from "@monorepo/feature-client-management"
const metrics: ClientMetrics = {
  totalClients: 10,
  activeClients: 7,
  totalValue: 50000,
  averageValue: 5000,
  newClientsThisMonth: 2,
  communicationsThisWeek: 5,
  upcomingFollowUps: 3,
  conversionRate: 70,
}

const clients: Client[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123456789",
    company: "Acme Corp",
    status: "active",
    value: 10000,
    lastContact: "2025-09-10",
    notes: "Important client",
    tags: ["VIP", "Priority"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987654321",
    company: "Beta Ltd",
    status: "inactive",
    value: 5000,
    lastContact: "2025-08-25",
    notes: "Follow up later",
    tags: ["Low Priority"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

const communications: Communication[] = [
  {
    id: "1",
    clientId: "1",
    type: "call",
    subject: "Project Kickoff Call",
    content: "Discussed project scope and deliverables.",
    date: "2025-09-12",
    outcome: "positive",
    followUpRequired: true,
    createdBy: "admin",
  },
  {
    id: "2",
    clientId: "2",
    type: "email",
    subject: "Proposal Sent",
    content: "Sent project proposal via email.",
    date: "2025-09-13",
    outcome: "neutral",
    followUpRequired: false,
    createdBy: "jane",
  },
]

export default function ClientManagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Management</h1>
      <ClientList clients={clients} />
      <CommunicationTimeline communications={communications} />
    </div>
  )
}
