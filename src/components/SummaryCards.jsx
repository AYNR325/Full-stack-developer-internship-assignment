import React from 'react';
import { dummyDonations } from '../data/dummyData';

const SummaryCards = () => {
  const totalAmount = dummyDonations.reduce((sum, item) => sum + item.amount, 0);
  const donorCount = new Set(dummyDonations.map(d => d.donor)).size; // Unique donors
  const totalDonations = dummyDonations.length;
  const avgDonation = Math.round(totalAmount / totalDonations);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const cards = [
    { label: 'Total Donations Received', value: formatCurrency(totalAmount) },
    { label: 'Total Unique Donors', value: donorCount },
    { label: 'Total Transactions', value: totalDonations },
    { label: 'Average Donation', value: formatCurrency(avgDonation) },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
            {card.label}
          </div>
          <div className="text-3xl font-bold text-blue-600">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
