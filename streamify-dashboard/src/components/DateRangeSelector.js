import React from 'react';

const DateRangeSelector = ({ onRangeChange }) => {
  const ranges = [
    { label: '24h', value: '24h' },
    { label: '7d', value: '7d' },
    { label: '30d', value: '30d' },
    { label: '90d', value: '90d' },
    { label: '1y', value: '1y' },
  ];

  return (
    <div className="flex space-x-2">
      {ranges.map((range) => (
        <button
          key={range.value}
          onClick={() => onRangeChange(range.value)}
          className="px-3 py-1.5 text-sm font-medium rounded-lg
                   bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                   dark:hover:bg-gray-600 transition-colors duration-200"
        >
          {range.label}
        </button>
      ))}
    </div>
  );
};

export default DateRangeSelector; 