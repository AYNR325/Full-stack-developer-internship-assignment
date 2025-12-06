import React, { useState, useMemo } from 'react';
import { dummyDonations } from '../data/dummyData';

const DonationTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // Filter and Sort Data
  const processedData = useMemo(() => {
    let data = [...dummyDonations];

    // 1. Filter by Search Term
    if (searchTerm) {
      data = data.filter(item =>
        item.donor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Sort Data
    data.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle Date comparison
      if (sortConfig.key === 'date') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return data;
  }, [searchTerm, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === 'asc'
          ? 'desc'
          : 'asc',
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h3 className="text-xl font-semibold text-gray-700">Recent Donations</h3>
        <div className="relative w-full sm:w-64">
           {/* Simple Search Input */}
          <input
            type="text"
            placeholder="Search donor..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 font-semibold text-gray-500 text-sm">Donor Name</th>
            <th 
              className="px-4 py-3 font-semibold text-gray-500 text-sm cursor-pointer hover:bg-gray-100 transition-colors select-none"
              onClick={() => handleSort('amount')}
            >
              Amount <span className="text-gray-400 ml-1">{getSortIcon('amount')}</span>
            </th>
            <th 
              className="px-4 py-3 font-semibold text-gray-500 text-sm cursor-pointer hover:bg-gray-100 transition-colors select-none"
              onClick={() => handleSort('date')}
            >
              Date <span className="text-gray-400 ml-1">{getSortIcon('date')}</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {processedData.length > 0 ? (
            processedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-900 text-sm font-medium">{item.donor}</td>
                <td className="px-4 py-3 text-gray-900 text-sm">₹{item.amount.toLocaleString('en-IN')}</td>
                <td className="px-4 py-3 text-gray-900 text-sm">{new Date(item.date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: '2-digit'
                })}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-8 text-center text-gray-500 text-sm">
                No donations found matching "{searchTerm}"
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonationTable;
