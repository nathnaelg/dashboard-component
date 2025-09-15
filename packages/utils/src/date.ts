import { format, formatDistanceToNow, isValid, parseISO, startOfDay, endOfDay, subDays } from "date-fns"

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string, pattern = "MMM dd, yyyy"): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  if (!isValid(dateObj)) return "Invalid date"
  return format(dateObj, pattern)
}

/**
 * Format a date to show relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  if (!isValid(dateObj)) return "Invalid date"
  return formatDistanceToNow(dateObj, { addSuffix: true })
}

/**
 * Get date range for common periods
 */
export function getDateRange(period: "today" | "yesterday" | "last7days" | "last30days" | "thisMonth"): {
  start: Date
  end: Date
} {
  const now = new Date()

  switch (period) {
    case "today":
      return {
        start: startOfDay(now),
        end: endOfDay(now),
      }
    case "yesterday":
      const yesterday = subDays(now, 1)
      return {
        start: startOfDay(yesterday),
        end: endOfDay(yesterday),
      }
    case "last7days":
      return {
        start: startOfDay(subDays(now, 7)),
        end: endOfDay(now),
      }
    case "last30days":
      return {
        start: startOfDay(subDays(now, 30)),
        end: endOfDay(now),
      }
    case "thisMonth":
      return {
        start: startOfDay(new Date(now.getFullYear(), now.getMonth(), 1)),
        end: endOfDay(now),
      }
    default:
      return {
        start: startOfDay(now),
        end: endOfDay(now),
      }
  }
}

/**
 * Check if a date is within a range
 */
export function isDateInRange(date: Date | string, start: Date | string, end: Date | string): boolean {
  const dateObj = typeof date === "string" ? parseISO(date) : date
  const startObj = typeof start === "string" ? parseISO(start) : start
  const endObj = typeof end === "string" ? parseISO(end) : end

  return dateObj >= startObj && dateObj <= endObj
}
