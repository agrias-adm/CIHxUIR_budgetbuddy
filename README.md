# 🚀 BudgetBuddy+ — Le Coach Budgétaire Intelligent & Proactif

A modern, high-end mobile banking app experience built as a responsive website. BudgetBuddy+ helps young people take control of their finances with intelligent expense tracking, automated spending analysis, AI-powered budget optimization, and smart spending alerts.

---

## 🎯 The Problem

Young people struggle with financial structure:
- **Unstructured spending** across food, dining, transport, and entertainment
- **Hidden subscriptions** discovered months later
- **No monthly planning** to make ends meet
- **Zero spending optimization** insights

## 💡 The Solution

**BudgetBuddy+** is a fintech-style web application that provides:
- 📊 Automatic expense analysis and categorization
- 🔍 Recurring subscription detection
- 🤖 AI-powered budget optimization recommendations
- ⚠️ Intelligent end-of-month alerts and smart spending blocks
- 💳 Budget templates customizable through an intuitive UI
- 📱 Premium mobile-first responsive design

---

## ✨ Key Features

### 1. **Expense Analysis & Dashboard**
- Real-time transaction tracking with category breakdown
- Visual progress bars and spending summaries
- Category-based filtering (Food, Transport, Subscriptions, Entertainment, etc.)
- Automatic categorization of transactions

### 2. **Subscription Detection**
- Identifies recurring charges automatically
- "Recurring" badges on subscription cards
- Visual alerts before renewal dates
- Subscription management interface

### 3. **Budget Template System**
- Pre-configured budget template with common categories:
  - 🍔 FastFood: 320 MAD
  - 🚗 Transport: 80 MAD
  - 🎮 Entertainment: 150 MAD
  - 📱 Subscriptions: 40 MAD
  - 💰 Savings: 50 MAD
  - 🚨 Emergency Fund: 30 MAD
- Full UI-based customization with sliders and input fields
- Instant budget adjustment and calculations

### 4. **AI-Powered Optimization**
- Smart budget recommendations based on spending patterns
- Savings potential calculations
- Example: "Reduce food to 100 MAD and entertainment to 120 MAD → Save 80 MAD/month"
- Visual suggestion cards with recommended changes
- Info bubbles and educational messages

### 5. **Intelligent Alerts & Spending Blocks**
- **Category Warnings**: Red/orange badges when approaching budget limits
- **End-of-Month Alerts**: Notifications when budget thresholds are exceeded
- **Smart Blocks**: Graceful blocking UI with unlock options for exceptional expenses
- **Timeline Progress**: Visual spending trajectory throughout the month

### 6. **Automatic Cash-In System**
- Toggle for automatic cash-in functionality
- Threshold configuration (e.g., < 30 MAD)
- Simulated cash-in testing interface
- Spending category blocking when thresholds are exceeded

---

## 🏗️ Tech Stack

- **Frontend Framework**: React 18+ with JSX
- **Styling**: TailwindCSS with custom design system
- **UI Components**: React components with Lucide icons
- **Build Tool**: Vite for fast development
- **Data**: Mock data only (no backend API)
- **Design Patterns**: Mobile-first responsive, floating action buttons, sticky navigation

---

## 🎨 Design Highlights

✅ **Fintech-Style UI**
- Bright, vibrant colors (orange/blue theme)
- Rounded card components with soft shadows
- Clean, modern iconography (Lucide)

✅ **Mobile-First Responsive**
- Optimized for mobile screens
- Scalable to tablet and desktop views
- Touch-friendly interactions

✅ **Smooth Interactions**
- Animated transitions
- Floating Action Buttons (FAB)
- Bottom tab navigation (mobile-app style)
- Progress animations and visual feedback

---

## 📄 Page Structure

| Route | Purpose |
|-------|---------|
| `/` | Onboarding / Landing page |
| `/login` | Wallet connection (mock UI) |
| `/dashboard` | Main dashboard with spending overview |
| `/expenses` | Detailed transaction list and analysis |
| `/cards` | Subscription and card management |
| `/subscriptions` | Subscription detection and alerts |
| `/budget-template` | Budget customization interface |
| `/ai-optimization` | AI-powered budget suggestions |
| `/settings` | User preferences and configuration |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/agrias-adm/CIHxUIR_budgetbuddy.git
   cd cih_budgetbuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)
   - The app will hot-reload as you make changes

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
cih_budgetbuddy/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (Dashboard, Expenses, etc.)
│   ├── data/                # Mock data for development
│   ├── styles/              # Global styles and TailwindCSS config
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

---

## 🎮 How to Use

1. **Start the app** → You'll see the onboarding screen
2. **Mock Login** → Connect a wallet (fake UI)
3. **View Dashboard** → See your spending overview
4. **Explore Features**:
   - Check **Expenses** for transaction history
   - View **Subscriptions** for recurring charges
   - Customize your **Budget Template**
   - Get AI recommendations in **AI Optimization**
5. **Test Alerts** → Watch spending alerts trigger as you interact with the UI

---

## 🔧 Development Tips

- **TailwindCSS**: All styling uses utility classes. Customize in `tailwind.config.js`
- **Components**: Build reusable components in `src/components/`
- **Mock Data**: Add/modify mock data in `src/data/`
- **Icons**: Use Lucide icons for consistency
- **Hot Reload**: Changes save automatically during development

---

## 📋 Features Implemented (UI/Frontend Only)

✅ Expense analysis dashboard  
✅ Transaction categorization  
✅ Subscription detection cards  
✅ Budget template editor with sliders  
✅ AI optimization suggestions  
✅ End-of-month alerts & warnings  
✅ Smart spending blocks  
✅ Automatic cash-in simulation  
✅ Responsive mobile-first design  
✅ Smooth animations & transitions  
✅ Bottom tab navigation  
✅ Floating action buttons  

---


**Built with ❤️ using React, Vite, and TailwindCSS**
