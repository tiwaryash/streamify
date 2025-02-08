import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';

const CustomDatePicker = ({ onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApply = () => {
    if (startDate && endDate) {
      onDateChange({ startDate, endDate });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 
                   rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 
                   transition-colors duration-200"
      >
        <FaCalendar />
        Custom Range
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 p-4 bg-white dark:bg-gray-800 
                      rounded-lg shadow-lg border dark:border-gray-700 z-50">
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 rounded-lg border dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 rounded-lg border dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <button
              onClick={handleApply}
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 
                       text-white rounded-lg transition-colors duration-200"
            >
              Apply Range
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker; 