import React, { useState } from "react";
import { FaSort } from "react-icons/fa";

const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterText, setFilterText] = useState("");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-200">
      <div className="p-4">
        <input
          type="text"
          placeholder="Filter records..."
          className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 
                   text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <div className="max-h-60 overflow-y-auto" style={{ maxHeight: '400px' }}>
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 sticky top-0">
              <tr>
                <th className="p-2 sm:p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" 
                    onClick={() => handleSort("song")}>Song Name <FaSort /></th>
                <th className="p-2 sm:p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" 
                    onClick={() => handleSort("artist")}>Artist <FaSort /></th>
                <th className="p-2 sm:p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" 
                    onClick={() => handleSort("date")}>Date <FaSort /></th>
                <th className="p-2 sm:p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" 
                    onClick={() => handleSort("streams")}>Streams <FaSort /></th>
                <th className="p-2 sm:p-3">User ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {sortedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="p-2 sm:p-3 text-gray-900 dark:text-gray-200">{item.song}</td>
                  <td className="p-2 sm:p-3 text-gray-900 dark:text-gray-200">{item.artist}</td>
                  <td className="p-2 sm:p-3 text-gray-900 dark:text-gray-200">{item.date}</td>
                  <td className="p-2 sm:p-3 text-gray-900 dark:text-gray-200">{item.streams.toLocaleString()}</td>
                  <td className="p-2 sm:p-3 text-gray-900 dark:text-gray-200">{item.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
