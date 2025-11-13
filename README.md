# WeUp - E-learning Platform

A modern e-learning platform built with Next.js, featuring internationalization, PDF viewing capabilities, and a comprehensive book management system.

## 🚀 Demo

<figure>
  <img src="public/demo/homepage.png?raw=true" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Home page</figcaption>
</figure>
<figure>
  <img src="public/demo/book-detail.png?raw=true" alt="Trulli" style="width:100%">
  <figcaption>Fig.2 - Book detail</figcaption>
</figure>
<figure>
  <img src="public/demo/preview-pdf.png?raw=true" alt="Trulli" style="width:100%">
  <figcaption>Fig.3 - Preview PDF</figcaption>
</figure>

## Main Libraries and Technologies

### Core Framework

- **Next.js 15.3.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **Radix UI** - Headless UI components
  - Accordion, Aspect Ratio, Dropdown Menu, Icons, Label, Separator, Slot, Tooltip
- **Lucide React** - Icon library
- **Sass** - CSS preprocessor
- **shadcn/ui** - Modern UI component library

### Internationalization

- **next-intl** - Internationalization for Next.js
- **Supported Languages**: English (en), Vietnamese (vi)

### PDF & Document Handling

- **pdfjs-dist** - PDF.js library for PDF rendering
- **react-pdf** - React wrapper for PDF.js

### Development Tools

- **ESLint** with Antfu config - Code linting
- **Vitest** - Testing framework
- **Husky** - Git hooks
- **Commitizen & Commitlint** - Conventional commits
- **Lint-staged** - Run linters on staged files

### Utilities

- **Lodash** - Utility library
- **clsx & tailwind-merge** - Conditional className utilities
- **class-variance-authority** - Component variants
- **react-hook-form** - Form management

## Getting Started

### Prerequisites

- Node.js (version compatible with Next.js 15)
- Yarn (>= 1.17.3) - **Required** (npm is disabled in this project)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weup
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### Running the Project

#### Development Mode

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

#### Production Build

```bash
# Build the project
yarn build

# Start production server
yarn start
```

#### Other Commands

```bash
# Type checking
yarn check-types

# Linting
yarn lint
yarn lint:fix

# Testing
yarn test

# Clean build artifacts
yarn clean
```

## Folder Structure

```text
weup/
├── public/                          # Static assets
│   ├── assets/                      # Application assets
│   │   ├── books/                   # Book-related images
│   │   └── fonts/                   # Custom fonts (FS Magistral, Vuesax)
│   └── ...
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── [locale]/               # Internationalized routes
│   │   │   ├── (unauth)/           # Unauthenticated routes group
│   │   │   │   ├── books/          # Book listing and details
│   │   │   │   └── page.tsx        # Home page
│   │   │   └── layout.tsx          # Locale-specific layout
│   │   ├── api/                    # API routes
│   │   │   └── books/              # Books API endpoints
│   │   ├── global-error.tsx        # Global error boundary
│   │   └── layout.tsx              # Root layout
│   │
│   ├── components/                  # Reusable components
│   │   ├── BookCard.tsx            # Book display component
│   │   ├── DemoBadge.tsx           # Demo badge component
│   │   ├── LocaleSwitcher.tsx      # Language switcher
│   │   ├── PdfViewerModal.tsx      # PDF viewing modal
│   │   ├── Footer/                 # Footer component with styles
│   │   ├── Header/                 # Header component with styles
│   │   ├── shared/                 # Shared components
│   │   │   └── FImage/             # Image component
│   │   └── ui/                     # UI components (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── label.tsx
│   │       ├── Container/
│   │       └── Icon/
│   │
│   ├── data/                       # Mock data
│   │   └── booksMock.ts           # Books mock data
│   │
│   ├── libs/                       # Library configurations
│   │   ├── i18n.ts                # Internationalization config
│   │   └── i18nNavigation.ts      # I18n navigation setup
│   │
│   ├── locales/                    # Translation files
│   │   ├── en.json                # English translations
│   │   └── vi.json                # Vietnamese translations
│   │
│   ├── service/                    # API services
│   │   ├── base.ts                # Base service class
│   │   └── books/                 # Books service
│   │
│   ├── styles/                     # Global styles
│   │   ├── base.css               # Base styles
│   │   ├── fonts.css              # Font definitions
│   │   ├── global.css             # Global styles
│   │   ├── icon.css               # Icon styles
│   │   ├── responsive.css         # Responsive utilities
│   │   ├── system.css             # System styles
│   │   └── theme.css              # Theme definitions
│   │
│   ├── utils/                      # Utility functions
│   │   ├── AppConfig.ts           # Application configuration
│   │   ├── Helpers.ts             # Helper functions
│   │   └── Helpers.test.ts        # Helper tests
│   │
│   └── middleware.ts               # Next.js middleware (i18n routing)
│
├── Configuration files
├── commitlint.config.ts            # Commit linting config
├── eslint.config.mjs              # ESLint configuration
├── lint-staged.config.js          # Lint-staged configuration
├── next.config.mjs                # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vitest.config.mts              # Vitest configuration
└── package.json                   # Dependencies and scripts
```

## Internationalization

The project supports multiple languages:

- **English** (`/en`)
- **Vietnamese** (`/vi`)

Language files are located in `src/locales/` and the routing is handled automatically by Next.js middleware.

## Features

- **Book Management**: Browse and view books with PDF support
- **Internationalization**: Multi-language support
- **PDF Viewer**: Built-in PDF viewing capabilities
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Modern Development**: ESLint, Prettier, and Git hooks configured

## Testing

The project uses Vitest for testing:

```bash
yarn test
```

## Build & Deployment

```bash
# Create production build
yarn build

# Start production server
yarn start
```

---

**Note**: This project requires Yarn package manager. NPM is disabled in the configuration.
