export interface Client {
  id: string
  name: string
  email: string
  phone: string
  company: string
  status: "active" | "inactive" | "prospect"
  value: number
  lastContact: string
  nextFollowUp?: string
  tags: string[]
  avatar?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Communication {
  id: string
  clientId: string
  type: "email" | "call" | "meeting" | "note"
  subject: string
  content: string
  date: string
  outcome?: "positive" | "neutral" | "negative"
  followUpRequired: boolean
  createdBy: string
}

export interface ClientMetrics {
  totalClients: number
  activeClients: number
  totalValue: number
  averageValue: number
  newClientsThisMonth: number
  communicationsThisWeek: number
  upcomingFollowUps: number
  conversionRate: number
}
