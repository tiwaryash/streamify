import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useTheme } from "../../context/ThemeContext";

const revenueData = [
  { name: "Subscriptions", value: 40 },
  { name: "Ads", value: 20 },
  { name: "Sponsorships", value: 15 },
  { name: "Merchandise", value: 15 },
  { name: "Affiliate Marketing", value: 10 },
];

const RevenueChart = ({ onSegmentClick }) => {
  const { isDarkMode } = useTheme();

  const chartColors = {
    text: isDarkMode ? "#E5E7EB" : "#374151",
    subscriptions: isDarkMode ? "#818CF8" : "#4F46E5", // Indigo
    ads: isDarkMode ? "#34D399" : "#10B981", // Emerald
    sponsorships: isDarkMode ? "#F472B6" : "#EC4899", // Pink
    merchandise: isDarkMode ? "#FBBF24" : "#F59E0B", // Amber
    affiliate: isDarkMode ? "#60A5FA" : "#2563EB", // Blue
  };

  const colorMapping = [
    chartColors.subscriptions,
    chartColors.ads,
    chartColors.sponsorships,
    chartColors.merchandise,
    chartColors.affiliate,
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg transition-colors duration-200">
      <h3 className="text-gray-700 dark:text-gray-200 font-semibold mb-3">
        Revenue Distribution
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie 
            data={revenueData} 
            dataKey="value" 
            nameKey="name"
            cx="50%" 
            cy="50%" 
            outerRadius={80} 
            label
            onClick={(data, index) => onSegmentClick(revenueData[index].name)}
          >
            {revenueData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorMapping[index]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
              border: "none",
              borderRadius: "0.375rem",
              color: chartColors.text
            }}
          />
          <Legend wrapperStyle={{ color: chartColors.text }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
