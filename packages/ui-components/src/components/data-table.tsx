"use client"

import type * as React from "react"
import { cn } from "../lib/utils"

interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], item: T) => React.ReactNode
  sortable?: boolean
}

interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (item: T) => void
  loading?: boolean
  emptyMessage?: string
}

function DataTable<T extends Record<string, any>>({
  className,
  data,
  columns,
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  ...props
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className={cn("w-full", className)} {...props}>
        <div className="rounded-md border">
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="h-24 px-4 text-center text-muted-foreground">
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className={cn("border-b transition-colors hover:bg-muted/50", onRowClick && "cursor-pointer")}
                    onClick={() => onRowClick?.(item)}
                  >
                    {columns.map((column) => (
                      <td key={String(column.key)} className="p-4 align-middle">
                        {column.render ? column.render(item[column.key], item) : String(item[column.key])}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export { DataTable, type Column }
