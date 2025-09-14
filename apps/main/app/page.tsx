"use client"

import { useState } from "react"
import { Button } from "@repo/ui-components"
import { DashboardLayout, Navigation } from "@repo/ui-components"
import { ClientOverview } from "@repo/feature-client-management"
import { GamingOverview } from "@repo/feature-gaming-analytics"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState<"client" | "gaming">("client")

  const navigationItems = [
    {
      label: "Client Management",
      href: "/client-management",
      active: activeFeature === "client",
      onClick: () => setActiveFeature("client"),
    },
    {
      label: "Gaming Analytics",
      href: "/gaming-analytics",
      active: activeFeature === "gaming",
      onClick: () => setActiveFeature("gaming"),
    },
  ]

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <Navigation items={navigationItems} />

        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Monorepo Dashboard System</h1>
            <p className="text-muted-foreground text-lg">
              Demonstrating modular architecture with shared components and utilities
            </p>
          </div>

          <div className="mb-6 flex gap-4">
            <Button
              variant={activeFeature === "client" ? "default" : "outline"}
              onClick={() => setActiveFeature("client")}
            >
              Client Management Dashboard
            </Button>
            <Button
              variant={activeFeature === "gaming" ? "default" : "outline"}
              onClick={() => setActiveFeature("gaming")}
            >
              Gaming Analytics Dashboard
            </Button>
          </div>

          <div className="rounded-lg border bg-card">
            {activeFeature === "client" ? <ClientOverview /> : <GamingOverview />}
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
