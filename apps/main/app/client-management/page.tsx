"use client"

import { DashboardLayout } from "@repo/ui-components"
import { ClientOverview, ClientList, CommunicationTimeline } from "@repo/feature-client-management"

export default function ClientManagementPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Client Management Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive client relationship management and analytics</p>
          </div>

          <div className="space-y-8">
            {/* Overview Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Overview & Metrics</h2>
              <ClientOverview />
            </section>

            {/* Client List Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Client Directory</h2>
              <ClientList />
            </section>

            {/* Communication Timeline */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Recent Communications</h2>
              <CommunicationTimeline />
            </section>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
