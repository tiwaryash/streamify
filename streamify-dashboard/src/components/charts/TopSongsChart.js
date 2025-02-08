import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "../../context/ThemeContext";

const TopSongsChart = ({ data }) => {
  const { isDarkMode } = useTheme();

  const chartColors = {
    text: isDarkMode ? "#E5E7EB" : "#374151",
    bar: isDarkMode ? "#818CF8" : "#4F46E5", // Color for the bars
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-white">{data.name}</p>
          <p className="text-gray-600 dark:text-gray-300">{data.artist}</p>
          <p className="text-blue-500">{data.streams.toLocaleString()} streams</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Top Songs</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" stroke={chartColors.text} />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={60}
              style={{ fontSize: '12px', fill: chartColors.text }} // Use chart color for text
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="streams" 
              fill={chartColors.bar} // Use chart color for bars
              radius={[0, 4, 4, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopSongsChart;
