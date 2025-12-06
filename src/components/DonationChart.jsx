import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { dummyDonations } from '../data/dummyData';

const DonationChart = () => {
  // Aggregate data by date
  const dataByDate = dummyDonations.reduce((acc, curr) => {
    const date = curr.date;
    if (!acc[date]) {
      acc[date] = { date, amount: 0 };
    }
    acc[date].amount += curr.amount;
    return acc;
  }, {});

  const chartData = Object.values(dataByDate).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-[400px] overflow-hidden">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Donation Trends</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => {
              const d = new Date(date);
              return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;
            }}
            tick={{fontSize: 12}}
          />
          <YAxis 
            tickFormatter={(value) => `₹${value}`}
            tick={{fontSize: 12}}
          />
          <Tooltip 
            formatter={(value) => [`₹${value}`, 'Amount']}
            labelFormatter={(label) => new Date(label).toDateString()}
          />
          <Legend />
          <Bar dataKey="amount" name="Donation Amount" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonationChart;
