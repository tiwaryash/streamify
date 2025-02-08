import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useTheme } from "../../context/ThemeContext";

const UserGrowthChart = ({ data }) => {
  const { isDarkMode } = useTheme();

  const chartColors = {
    text: isDarkMode ? "#E5E7EB" : "#374151",
    grid: isDarkMode ? "#4B5563" : "#E5E7EB",
    totalUsers: isDarkMode ? "#818CF8" : "#4F46E5",
    activeUsers: isDarkMode ? "#34D399" : "#10B981",
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg transition-colors duration-200">
      <h3 className="text-gray-700 dark:text-gray-200 font-semibold mb-3">
        User Growth
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis 
            dataKey="label" 
            stroke={chartColors.text}
            tick={{ fill: chartColors.text }}
          />
          <YAxis 
            stroke={chartColors.text}
            tick={{ fill: chartColors.text }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
              border: "none",
              borderRadius: "0.375rem",
              color: chartColors.text
            }}
          />
          <Legend wrapperStyle={{ color: chartColors.text }} />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke={chartColors.totalUsers} 
            name="Total Users"
          />
          <Line 
            type="monotone" 
            dataKey="active" 
            stroke={chartColors.activeUsers} 
            name="Active Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
