import React, { useState, useEffect } from "react";
import DateRangeSelector from "./components/DateRangeSelector";
import NotificationCenter from "./components/NotificationCenter";
import UserActivityTimeline from "./components/UserActivityTimeline";
import TrendingAnalysis from "./components/TrendingAnalysis";
import Metrics from "./utils/Metrics";
import UserGrowthChart from "./components/charts/UserGrowthChart";
import RevenueChart from "./components/charts/RevenueChart";
import TopSongsChart from "./components/charts/TopSongsChart";
import DataTable from "./components/DataTable";
import { Music, Sun, Moon } from "lucide-react";
import { useTheme } from "./context/ThemeContext";
import generateMockData from "./utils/mockData";

const Dashboard = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("7d");
  const [dashboardData, setDashboardData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    // Initialize with default data
    const newData = generateMockData(dateRange);
    setDashboardData(newData);
    setFilteredData(newData.tableData); // Initialize with full data
  }, [dateRange]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  const handleCustomDateChange = (date) => {
    // Implementation for custom date change
  };

  const handleSegmentClick = (revenueSource) => {
    const filtered = dashboardData.tableData.filter(item => item.revenueSource === revenueSource);
    setFilteredData(filtered);
  };

  // Show loading state while data is being fetched
  if (!dashboardData) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-4 sm:p-6 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
          <Music className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" /> 
          Streamify Dashboard
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <DateRangeSelector onRangeChange={handleDateRangeChange} />
          <NotificationCenter />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>
      </div>
      
      <Metrics data={dashboardData.metrics} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">
        <div className="sm:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UserGrowthChart data={dashboardData.userGrowth} />
            <TopSongsChart data={dashboardData.topSongs} />
          </div>
          <RevenueChart onSegmentClick={handleSegmentClick} />
          <DataTable data={filteredData} />
        </div>
        <div className="space-y-4">
          <TrendingAnalysis />
          <UserActivityTimeline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
