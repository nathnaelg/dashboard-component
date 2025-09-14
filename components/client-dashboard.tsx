"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, DollarSign, TrendingUp, MessageSquare, Search, Plus, Phone, Mail, Calendar } from "lucide-react"

const clientMetrics = [
  { title: "Total Clients", value: "1,247", change: "+12%", icon: Users, trend: "up" },
  { title: "Monthly Revenue", value: "$84,320", change: "+8.2%", icon: DollarSign, trend: "up" },
  { title: "Active Projects", value: "89", change: "+5", icon: TrendingUp, trend: "up" },
  { title: "Communications", value: "342", change: "+23", icon: MessageSquare, trend: "up" },
]

const revenueData = [
  { month: "Jan", revenue: 65000 },
  { month: "Feb", revenue: 72000 },
  { month: "Mar", revenue: 68000 },
  { month: "Apr", revenue: 78000 },
  { month: "May", revenue: 82000 },
  { month: "Jun", revenue: 84320 },
]

const clientStatusData = [
  { name: "Active", value: 847, color: "#10b981" },
  { name: "Prospect", value: 234, color: "#f59e0b" },
  { name: "Inactive", value: 166, color: "#ef4444" },
]

const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    status: "Active",
    value: "$45,000",
    lastContact: "2024-01-15",
    type: "Enterprise",
  },
  { id: 2, name: "TechStart Inc.", status: "Prospect", value: "$12,000", lastContact: "2024-01-14", type: "Startup" },
  {
    id: 3,
    name: "Global Solutions",
    status: "Active",
    value: "$78,000",
    lastContact: "2024-01-13",
    type: "Enterprise",
  },
  { id: 4, name: "Creative Agency", status: "Active", value: "$23,000", lastContact: "2024-01-12", type: "SMB" },
]

const communications = [
  {
    id: 1,
    client: "Acme Corporation",
    type: "email",
    content: "Project proposal sent",
    date: "2024-01-15",
    outcome: "Positive",
  },
  {
    id: 2,
    client: "TechStart Inc.",
    type: "call",
    content: "Initial consultation call",
    date: "2024-01-14",
    outcome: "Follow-up needed",
  },
  {
    id: 3,
    client: "Global Solutions",
    type: "meeting",
    content: "Quarterly review meeting",
    date: "2024-01-13",
    outcome: "Contract renewed",
  },
]

export function ClientDashboard() {
  return (
    <div className="space-y-8">
      {/* Metrics Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-amber-700">Key Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientMetrics.map((metric, index) => (
            <Card key={index} className="border-amber-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-800">{metric.value}</div>
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
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
                <Line type="monotone" dataKey="revenue" stroke="#d97706" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">Client Status Distribution</CardTitle>
            <CardDescription>Current client portfolio breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={clientStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {clientStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Client List */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-amber-700">Client Directory</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-8 w-64" />
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </div>
        </div>

        <Card className="border-amber-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-amber-800">Client Name</th>
                    <th className="text-left p-4 font-medium text-amber-800">Status</th>
                    <th className="text-left p-4 font-medium text-amber-800">Value</th>
                    <th className="text-left p-4 font-medium text-amber-800">Type</th>
                    <th className="text-left p-4 font-medium text-amber-800">Last Contact</th>
                    <th className="text-left p-4 font-medium text-amber-800">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-t border-amber-100">
                      <td className="p-4 font-medium">{client.name}</td>
                      <td className="p-4">
                        <Badge
                          variant={
                            client.status === "Active"
                              ? "default"
                              : client.status === "Prospect"
                                ? "secondary"
                                : "destructive"
                          }
                          className={client.status === "Active" ? "bg-green-100 text-green-800" : ""}
                        >
                          {client.status}
                        </Badge>
                      </td>
                      <td className="p-4 font-medium text-amber-700">{client.value}</td>
                      <td className="p-4">{client.type}</td>
                      <td className="p-4 text-muted-foreground">{client.lastContact}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-3 w-3" />
                          </Button>
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

      {/* Communication Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-amber-700">Recent Communications</h2>
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <div className="space-y-4">
              {communications.map((comm) => (
                <div key={comm.id} className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {comm.type === "email" && <Mail className="h-5 w-5 text-amber-600" />}
                    {comm.type === "call" && <Phone className="h-5 w-5 text-amber-600" />}
                    {comm.type === "meeting" && <Calendar className="h-5 w-5 text-amber-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-amber-800">{comm.client}</h4>
                        <p className="text-sm text-muted-foreground">{comm.content}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{comm.date}</p>
                        <Badge variant="outline" className="mt-1">
                          {comm.outcome}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
