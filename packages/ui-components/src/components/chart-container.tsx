import * as React from "react"
import { cn } from "../lib/utils"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("bg-card rounded-lg border p-6", className)} {...props}>
        {(title || description) && (
          <div className="mb-4">
            {title && <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </div>
        )}
        <div className="h-[300px] w-full">{children}</div>
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

export { ChartContainer }
