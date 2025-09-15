/**
 * Local storage wrapper with error handling
 */
export const storage = {
  /**
   * Get item from localStorage
   */
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key)
      if (item === null) return defaultValue ?? null
      return JSON.parse(item)
    } catch (error) {
      console.warn(`Error reading from localStorage key "${key}":`, error)
      return defaultValue ?? null
    }
  },

  /**
   * Set item in localStorage
   */
  set<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error)
      return false
    }
  },

  /**
   * Remove item from localStorage
   */
  remove(key: string): boolean {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
      return false
    }
  },

  /**
   * Clear all localStorage
   */
  clear(): boolean {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.warn("Error clearing localStorage:", error)
      return false
    }
  },

  /**
   * Check if localStorage is available
   */
  isAvailable(): boolean {
    try {
      const test = "__localStorage_test__"
      localStorage.setItem(test, "test")
      localStorage.removeItem(test)
      return true
    } catch {
      return false
    }
  },
}

/**
 * Session storage wrapper with error handling
 */
export const sessionStorage = {
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = window.sessionStorage.getItem(key)
      if (item === null) return defaultValue ?? null
      return JSON.parse(item)
    } catch (error) {
      console.warn(`Error reading from sessionStorage key "${key}":`, error)
      return defaultValue ?? null
    }
  },

  set<T>(key: string, value: T): boolean {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.warn(`Error writing to sessionStorage key "${key}":`, error)
      return false
    }
  },

  remove(key: string): boolean {
    try {
      window.sessionStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn(`Error removing sessionStorage key "${key}":`, error)
      return false
    }
  },

  clear(): boolean {
    try {
      window.sessionStorage.clear()
      return true
    } catch (error) {
      console.warn("Error clearing sessionStorage:", error)
      return false
    }
  },
}
