/**
 * API response wrapper type
 */
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  success: boolean
  message?: string
}

/**
 * API request configuration
 */
export interface ApiConfig {
  baseUrl?: string
  timeout?: number
  headers?: Record<string, string>
}

/**
 * Create a configured fetch wrapper
 */
export function createApiClient(config: ApiConfig = {}) {
  const { baseUrl = "", timeout = 10000, headers = {} } = config

  return {
    async get<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return this.request<T>(endpoint, { ...options, method: "GET" })
    },

    async post<T>(endpoint: string, data?: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return this.request<T>(endpoint, {
        ...options,
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })
    },

    async put<T>(endpoint: string, data?: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return this.request<T>(endpoint, {
        ...options,
        method: "PUT",
        body: data ? JSON.stringify(data) : undefined,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })
    },

    async delete<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
      return this.request<T>(endpoint, { ...options, method: "DELETE" })
    },

    async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          ...options,
          headers: {
            ...headers,
            ...options.headers,
          },
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          return {
            success: false,
            error: `HTTP ${response.status}: ${response.statusText}`,
          }
        }

        const data = await response.json()
        return {
          success: true,
          data,
        }
      } catch (error) {
        clearTimeout(timeoutId)
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error occurred",
        }
      }
    },
  }
}

/**
 * Handle API errors consistently
 */
export function handleApiError(error: any): string {
  if (typeof error === "string") return error
  if (error?.message) return error.message
  if (error?.error) return error.error
  return "An unexpected error occurred"
}
