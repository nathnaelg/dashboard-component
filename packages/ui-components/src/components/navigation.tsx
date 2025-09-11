"use client"

import * as React from "react"
import { cn } from "../lib/utils"

interface NavigationItem {
  label: string
  href?: string
  icon?: React.ReactNode
  active?: boolean
  onClick?: () => void
  children?: NavigationItem[]
}

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItem[]
  orientation?: "horizontal" | "vertical"
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, items, orientation = "vertical", ...props }, ref) => {
    const renderItem = (item: NavigationItem, index: number) => (
      <li key={index}>
        <a
          href={item.href}
          onClick={item.onClick}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
            item.active && "bg-accent text-accent-foreground",
            orientation === "horizontal" && "px-4 py-2",
          )}
        >
          {item.icon && <span className="h-4 w-4">{item.icon}</span>}
          {item.label}
        </a>
        {item.children && (
          <ul className="ml-6 mt-2 space-y-1">
            {item.children.map((child, childIndex) => renderItem(child, childIndex))}
          </ul>
        )}
      </li>
    )

    return (
      <nav ref={ref} className={cn("", className)} {...props}>
        <ul className={cn("space-y-1", orientation === "horizontal" && "flex space-y-0 space-x-2")}>
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      </nav>
    )
  },
)
Navigation.displayName = "Navigation"

export { Navigation, type NavigationItem }
