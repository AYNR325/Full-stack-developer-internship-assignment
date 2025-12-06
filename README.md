# Donation Tracking Dashboard

A modern, responsive dashboard for tracking donation data, built with React and Tailwind CSS. This project visualizes donation trends, displays key summary metrics, and provides a searchable, sortable history of transactions.

## live demo

[donation tracking dashboard](https://donation-tracking-dashboard.vercel.app/)

## 🚀 Features

### 1. **Executive Summary Cards**
   - **Total Donations Received**: Real-time sum of all donation amounts.
   - **Total Unique Donors**: Count of distinct individuals who have donated.
   - **Total Transactions**: Total number of individual donation records.
   - **Average Donation**: Calculated average value of contributions.

### 2. **Donation Trends Visualization**
   - **Interactive Chart**: A vertical bar chart driven by `recharts`.
   - **Data Aggregation**: Automatically aggregates multiple donations from the same day to show daily totals.
   - **Tooltip**: Hover over bars to see precise daily figures.

### 3. **Smart Donation History Table**
   - **Search Functionality**: A search bar allows you to instantly filter records by donor name.
   - **Sorting**: Clickable column headers for **Amount** and **Date**.
     - Sort by Amount (High ↔ Low)
     - Sort by Date (Newest ↔ Oldest)
   - **Responsive**: Horizontal scroll support for smaller devices.

### 4. **Modern UI/UX**
   - **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS.
   - **Clean Aesthetic**: Uses a clean, professional color palette with subtle shadows and rounded corners (Glassmorphism-inspired).

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3)
- **Charting**: [Recharts](https://recharts.org/)
- **Icons**: Standard UTF-8 symbols (kept lightweight)

## 📦 Installation & Setup

1. **Clone the repository** (or download source):
   ```bash
   git clone <repository-url>
   cd internshala_assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   *Note: This project requires Node.js installed on your machine.*

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The app will typically start at `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates a production-ready `dist/` folder.

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation and titles
│   ├── SummaryCards.jsx    # Key metrics display
│   ├── DonationChart.jsx   # Recharts trend visualization
│   └── DonationTable.jsx   # Searchable/Sortable data table
├── data/
│   └── dummyData.js        # Mock data source
├── App.jsx                 # Main application layout
├── index.css               # Tailwind directives & global styles
└── main.jsx                # Entry point
```
