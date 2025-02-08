import React, { useState } from 'react';
import { FaFileDownload, FaSpinner } from 'react-icons/fa';

const ExportButton = ({ data, type }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      // Convert data to CSV format
      const csvContent = convertToCSV(data);
      
      // Create blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', `streamify_${type}_${new Date().toISOString()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const convertToCSV = (data) => {
    if (!Array.isArray(data)) {
      data = [data];
    }
    
    const headers = Object.keys(data[0]);
    const rows = data.map(item => 
      headers.map(header => JSON.stringify(item[header])).join(',')
    );
    
    return [
      headers.join(','),
      ...rows
    ].join('\n');
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 
                 text-white rounded-lg transition-colors duration-200"
    >
      {isExporting ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <FaFileDownload />
      )}
      Export {type}
    </button>
  );
};

export default ExportButton; 