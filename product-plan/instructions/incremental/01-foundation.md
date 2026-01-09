# Milestone 1: Foundation (Project Setup)

## Overview

Set up the development environment, configure the design system, and establish the project structure.

## Prerequisites

Before starting, decide:
- Framework: Next.js, Vite + React, Create React App, or other?
- Package manager: npm, pnpm, yarn?
- State management: Redux Toolkit, Zustand, Jotai, Context API?
- Backend: Next.js API routes, Express, or separate service?
- Database: PostgreSQL, MySQL, MongoDB, SQLite, or other?

---

## Step 1: Initialize Project

### For Next.js (Recommended)

```bash
npx create-next-app@latest feiqiu --typescript --tailwind --app
cd feiqiu
```

### For Vite

```bash
npm create vite@latest feiqiu -- --template react-ts
cd feiqiu
npm install
```

### For Create React App

```bash
npx create-react-app feiqiu --template typescript
cd feiqiu
```

---

## Step 2: Configure Tailwind CSS v4

Install dependencies:

```bash
npm install -D tailwindcss@next @tailwindcss/postcss@next
```

Update `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

Configure design tokens in CSS:

For **Next.js** (`src/app/globals.css`):
```css
@import "tailwindcss";

@theme {
  --color-primary-50: #ecfdf5;
  --color-primary-100: #d1fae5;
  --color-primary-500: #10b981;
  --color-primary-600: #059669;

  --color-secondary-500: #3b82f6;
  --color-secondary-600: #2563eb;

  --font-sans: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

.dark {
  color-scheme: dark;
}
```

For **Vite/CRA** (`src/index.css`):
```css
@import "tailwindcss";

@theme {
  --color-primary-500: #10b981;
  --color-primary-600: #059669;
  --color-secondary-500: #3b82f6;
  --color-secondary-600: #2563eb;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

---

## Step 3: Configure Dark Mode

### Install Dependencies

```bash
npm install next-themes  # For Next.js
# OR implement custom context for Vite/CRA
```

### Create Dark Mode Provider

Create `src/contexts/DarkModeContext.tsx`:

```typescript
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface DarkModeContextType {
  theme: Theme
  toggleTheme: () => void
}

const DarkModeContext = createContext<DarkModeContextType | null>(null)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as Theme ?? 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider')
  }
  return context
}
```

---

## Step 4: Configure TypeScript

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

---

## Step 5: Create Folder Structure

```bash
mkdir -p src/components/shell
mkdir -p src/components/basic-settings
mkdir -p src/components/messaging
mkdir -p src/components/file-transfer
mkdir -p src/components/collaboration
mkdir -p src/components/organization
mkdir -p src/lib/types
mkdir -p src/lib/utils
mkdir -p src/contexts
mkdir -p src/hooks
mkdir -p src/stores
```

---

## Step 6: Install Additional Dependencies

```bash
# Icons
npm install lucide-react

# Date handling
npm install date-fns

# State management (choose one)
npm install zustand
# OR
npm install @reduxjs/toolkit react-redux

# Forms (optional)
npm install react-hook-form zod

# Utilities
npm install clsx tailwind-merge
```

---

## Step 7: Create Utility Functions

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

export function formatSpeed(bytesPerSecond: number): string {
  return formatFileSize(bytesPerSecond) + '/s'
}
```

---

## Step 8: Create Index File

Create `src/lib/types/index.ts` to export all types:

```typescript
// Types will be added in each milestone
export * from './basic-settings'
export * from './messaging'
export * from './file-transfer'
export * from './collaboration'
export * from './organization'
```

---

## Verification

Test that your setup is working:

1. **Start dev server**: `npm run dev`
2. **Visit**: http://localhost:3000
3. **Verify**:
   - [ ] Page loads without errors
   - [ ] TypeScript compiles successfully
   - [ ] Tailwind CSS classes work
   - [ ] Dark mode toggle works

---

## Next Steps

Once foundation is complete, proceed to **[Milestone 2: Application Shell](./02-shell.md)**.
