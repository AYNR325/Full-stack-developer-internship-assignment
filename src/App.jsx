import React from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import DonationChart from './components/DonationChart';
import DonationTable from './components/DonationTable';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Header />
      <main className="grid grid-cols-1 gap-8">
        {/* Summary Cards Section */}
        <div className="col-span-1">
          <SummaryCards />
        </div>

        {/* Charts and Table - Stacked for simplicity as per previous design, but can be side-by-side on lg */}
        {/* Requirements said chart on top, table below. Let's keep that simple vertical stack. */}
        <DonationChart />
        <DonationTable />
      </main>
    </div>
  );
}

export default App;
