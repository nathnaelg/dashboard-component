"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ClientDashboard } from "@/components/client-dashboard"
import { GamingDashboard } from "@/components/gaming-dashboard"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState<"client" | "gaming">("client")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">Monorepo Dashboard System</h1>
          <p className="text-muted-foreground">
            Demonstrating modular architecture with shared components and utilities
          </p>
        </div>
      </header>

      <nav className="border-b bg-muted/50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex gap-4">
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
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {activeFeature === "client" ? <ClientDashboard /> : <GamingDashboard />}
      </main>
    </div>
  )
}
