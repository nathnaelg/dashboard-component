import * as React from "react"
import { cn } from "../lib/utils"

interface DashboardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  children: React.ReactNode
}

const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ className, sidebar, header, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("min-h-screen bg-background", className)} {...props}>
        <div className="flex h-screen">
          {sidebar && <aside className="w-64 border-r bg-card">{sidebar}</aside>}
          <div className="flex-1 flex flex-col overflow-hidden">
            {header && <header className="border-b bg-card px-6 py-4">{header}</header>}
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </div>
    )
  },
)
DashboardLayout.displayName = "DashboardLayout"

export { DashboardLayout }
