import React, { useState, useEffect } from 'react';
import { FaChartLine, FaLightbulb, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TrendingAnalysis = () => {
  const [insights, setInsights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateInsight = () => {
    const insights = [
      {
        title: "Genre Shift Detected",
        description: "Pop-punk seeing a 47% increase in streams this week",
        trend: "up",
        percentage: "47%",
        impact: "High"
      },
      {
        title: "User Behavior Pattern",
        description: "Weekend listening peaks shifted from evening to afternoon",
        trend: "changed",
        percentage: "32%",
        impact: "Medium"
      },
      {
        title: "Emerging Artist Alert",
        description: "New artist 'Luna Wave' gaining rapid traction",
        trend: "up",
        percentage: "156%",
        impact: "High"
      },
      {
        title: "Platform Usage",
        description: "Mobile listening increased significantly",
        trend: "up",
        percentage: "28%",
        impact: "Medium"
      }
    ];

    return insights[Math.floor(Math.random() * insights.length)];
  };

  useEffect(() => {
    setTimeout(() => {
      const initialInsights = Array.from({ length: 4 }, generateInsight);
      setInsights(initialInsights);
      setIsLoading(false);
    }, 1500);

    const interval = setInterval(() => {
      setInsights(prev => {
        const newInsights = [...prev];
        const randomIndex = Math.floor(Math.random() * newInsights.length);
        newInsights[randomIndex] = generateInsight();
        return newInsights;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FaLightbulb className="text-yellow-500" />
        AI-Powered Insights
      </h3>
      <div className="grid gap-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700
                     hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{insight.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs
                ${insight.impact === 'High' 
                  ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                  : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                }`}>
                {insight.impact} Impact
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {insight.description}
            </p>
            <div className="flex items-center gap-2 text-sm">
              {insight.trend === 'up' ? (
                <FaArrowUp className="text-green-500" />
              ) : (
                <FaArrowDown className="text-red-500" />
              )}
              <span className="text-gray-500 dark:text-gray-400">
                {insight.percentage} change
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingAnalysis; 