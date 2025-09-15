# @monorepo/utils

Shared utility functions for the client management and gaming analytics platform.

## Modules

### Date Utilities
- `formatDate()` - Format dates to readable strings
- `formatRelativeTime()` - Show relative time (e.g., "2 hours ago")
- `getDateRange()` - Get date ranges for common periods
- `isDateInRange()` - Check if date is within range

### API Utilities
- `createApiClient()` - Create configured fetch wrapper
- `handleApiError()` - Consistent error handling

### Formatting Utilities
- `formatNumber()` - Format numbers with separators
- `formatCurrency()` - Format currency values
- `formatPercentage()` - Format percentage values
- `formatCompactNumber()` - Format large numbers (1.2K, 3.4M)
- `formatFileSize()` - Format file sizes
- `truncateText()` - Truncate text with ellipsis
- `titleCase()` - Capitalize words
- `camelToTitle()` - Convert camelCase to readable text

### Validation Utilities
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone number validation
- `isValidUrl()` - URL validation
- `validatePassword()` - Password strength validation
- `isRequired()` - Required field validation
- `isInRange()` - Numeric range validation

### Storage Utilities
- `storage` - localStorage wrapper with error handling
- `sessionStorage` - sessionStorage wrapper with error handling

### Data Utilities
- `deepClone()` - Deep clone objects
- `groupBy()` - Group array by key
- `sortBy()` - Sort array by key
- `searchFilter()` - Filter array by search term
- `paginate()` - Paginate arrays
- `calculatePercentageChange()` - Calculate percentage change
- `generateId()` - Generate unique IDs

## Usage

\`\`\`typescript
import { 
  formatCurrency, 
  formatRelativeTime, 
  createApiClient, 
  validatePassword,
  storage 
} from '@monorepo/utils'

// Format currency
const price = formatCurrency(1234.56) // "$1,234.56"

// Format relative time
const timeAgo = formatRelativeTime(new Date('2023-01-01')) // "2 months ago"

// Create API client
const api = createApiClient({ baseUrl: '/api' })
const response = await api.get('/users')

// Validate password
const validation = validatePassword('MyPassword123!')

// Use storage
storage.set('user', { id: 1, name: 'John' })
const user = storage.get('user')
\`\`\`

## Development

\`\`\`bash
npm run build    # Build the library
npm run dev      # Watch mode for development
npm run clean    # Clean build files
\`\`\`
