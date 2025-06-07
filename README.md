# RemWaste - Skip Selection Application

A modern React application for selecting skip sizes and calculating prices for waste collection services.
The application features a clean, **responsive design**, **dynamic theme system**, and a **modular architecture** optimized for scalability and maintainability.

> 🎨 **AI-generated skip illustrations** have been designed to match the app's color palette and enhance visual consistency.

---

## 🚀 Features

* 📱 **Fully Responsive** (Desktop, Tablet, Mobile)
* 🎨 **Theme System**

  * Light theme: Yellow/Orange palette (matches skip colors)
  * Dark theme: Green palette (optimized for night use)
  * Theme switching with animation & system preference detection
* 🖼️ **AI-generated Visuals**

  * Skips generated with AI, respecting the app's theme
* 🗑️ **Skip Selection**

  * 9 skip sizes (4 to 40 yards)
  * Real-time price calculation with VAT, transport, per-tonne cost
  * Feature display (road placement, heavy waste compatibility, hire period)
* 🌐 **SEO & PWA Optimized**

  * Search engine optimization with comprehensive meta tags
  * Progressive Web App (PWA) capabilities
  * Social media sharing optimization (Open Graph, Twitter Cards)
  * Installable as native app on mobile devices

---

## Project Structure
```
src/
├── components/         # UI, layout, and feature components
├── contexts/           # Global state (ThemeContext)
├── utils/              # Business logic utilities
├── constants/          # Theme and app constants
├── styles/             # Global styles and variables
└── data/               # Static skip data (skips.json)

public/
├── index.html          # SEO-optimized HTML with meta tags
├── manifest.json       # PWA configuration
├── robots.txt          # Search engine directives
└── favicon.ico         # App icons
```

---

## 🏗️ Component Organization

### **UI Components**

Reusable, prop-driven components used across the application:

* Buttons, Badges, Cards

### **Layout Components**

Page structure and navigation elements:

* Header, Footer

### **Feature Components**

Business-logic specific components organized by feature:

* SkipSelection, SkipViewer, PriceBreakdown, SkipFeatures, SizeControls

### **Theme Components**

Components related to theming and user preferences:

* ThemeToggle

---

## 🎨 Styling

### **CSS Modules**

* Scoped CSS modules for each component
* Global styles limited to CSS variables and base styles
* Consistent naming conventions for maintainability

---

## 🛠️ Architecture Principles

### **Custom Hooks**

* Business logic extracted into reusable hooks
* `useSkipSelection`: manages skip selection state, price calculations, and size controls
* Promotes separation of concerns and testability

### **Utility Functions**

* **Price Calculation**: VAT calculation, price formatting, total price computation
* **Skip Helpers**: Feature extraction, size validation, display logic
* Pure functions for easy testing and reusability

### **Context API**

* **ThemeContext** for global theme state management with `localStorage` persistence
* System preference detection for initial theme selection
* Provides theme switching functionality across the entire app

---

## 🌐 SEO & PWA Features

### **Search Engine Optimization**

* **Meta Tags**: Comprehensive SEO meta tags including title, description, keywords
* **Open Graph**: Facebook and social media sharing optimization
* **Twitter Cards**: Enhanced Twitter sharing with preview images
* **Structured Data**: Schema markup ready for rich snippets
* **robots.txt**: Search engine crawling directives with sitemap support

### **Progressive Web App (PWA)**

* **App Installation**: Installable on mobile devices and desktop
* **Offline Support**: Service worker ready for offline functionality
* **Native Feel**: Standalone display mode with app-like experience
* **Responsive Icons**: Adaptive icons for different platforms
* **Splash Screens**: Custom loading screens for installed app
* **Theme Integration**: System theme detection and app theme synchronization

### **Social Media Integration**

* **Open Graph Protocol**: Rich previews on Facebook, LinkedIn, Discord
* **Twitter Cards**: Enhanced sharing with large image previews
* **App Store Ready**: Screenshots and metadata for app stores

### **Cross-Platform Compatibility**

* **iOS Safari**: Web app capabilities with custom status bar
* **Android Chrome**: Mobile web app integration
* **Microsoft Edge**: Side panel support and Windows tiles
* **Desktop PWA**: Installable desktop application

---

## 🎨 Component Details

### **Responsive Design**

* Desktop layout with grid-based structure
* Mobile-first responsive approach
* Optimized for tablets and phones

### **Theme System**

* **Light Theme**: Yellow/Orange color scheme
* **Dark Theme**: Green color scheme
* Smooth transitions between themes
* System preference detection

### **Skip Selection**

* 9 different skip sizes (4-40 yards)
* Dynamic pricing with VAT calculation
* Transport and per-tonne cost breakdown
* Feature display: road placement, heavy waste compatibility, hire period

### **Price Calculation**

* Real-time price updates
* Detailed cost breakdown
* VAT calculation on base price only
* Transport and additional costs

---

## 🚀 Component Highlights

### **Button Component**

* Variants: `primary`, `secondary`
* Sizes: `small`, `medium`, `large`
* Built-in hover effects and disabled states
* Gradient backgrounds with theme support

### **SkipSelection Feature**

* Modular component architecture
* Separated concerns: display, logic, pricing
* Mobile and desktop variants
* Responsive image and content layout

### **Theme Toggle**

* Animated switch with icons (🌙/☀️)
* CSS-based animations
* Theme persistence in `localStorage`
* Accessible with proper ARIA labels

---

## 📱 Responsive Breakpoints

| Device        | Breakpoint |
| ------------- | ---------- |
| Desktop       | > 768px    |
| Tablet/Mobile | ≤ 768px    |
| Small Mobile  | ≤ 480px    |

---

## 📄 Configuration Files

### **robots.txt**
```txt
# RemWaste Skip Selection Application
User-agent: *
Allow: /
Crawl-delay: 1
# Sitemap: https://yourdomain.com/sitemap.xml
```

### **manifest.json** (PWA Configuration)
```json
{
  "short_name": "RemWaste",
  "name": "RemWaste Skip Selection",
  "description": "Choose the perfect skip size for your waste disposal needs",
  "display": "standalone",
  "theme_color": "#ffd700",
  "background_color": "#ffffff",
  "categories": ["business", "utilities", "productivity"]
}
```

### **HTML Meta Tags**
```html
<!-- SEO Meta Tags -->
<meta name="description" content="RemWaste Skip Selection - Choose the perfect skip size..." />
<meta name="keywords" content="skip hire, waste disposal, pricing calculator, VAT" />

<!-- Open Graph / Facebook -->
<meta property="og:title" content="RemWaste - Skip Selection" />
<meta property="og:description" content="Choose the perfect skip size..." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="RemWaste - Skip Selection" />
```

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/firatyll/remwaste-application.git

# Navigate to the project folder
cd remwaste-application

# Install dependencies
npm install

# Start the development server
npm start
```

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production with optimizations and PWA features

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full control