import React from "react";
import MetricCard from "../components/MetricCard";
import { FaUser, FaMusic, FaDollarSign, FaChartLine, FaCrown } from "react-icons/fa";

const Metrics = ({ data = {} }) => {
  // Add default values to prevent undefined errors
  const {
    totalUsers = "0",
    activeUsers = "0",
    totalStreams = "0",
    revenue = "0",
    topArtist = "No data",
    topArtists=""
  } = data || {};

  const metricsData = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: FaUser,
      color: "bg-blue-500 dark:bg-blue-400",
      description: "Total number of registered users on the platform.",
      details: [`Current Period: ${totalUsers}`, `Active Users: ${activeUsers}`],
    },
    {
      title: "Active Users",
      value: activeUsers,
      icon: FaChartLine,
      color: "bg-green-500 dark:bg-green-400",
      description: "Users who streamed at least one song in the selected period.",
      details: [`Active Users: ${activeUsers}`, `Engagement Rate: ${Math.round((parseInt(activeUsers.replace(/,/g, '')) / parseInt(totalUsers.replace(/,/g, '') || 1)) * 100)}%`],
    },
    {
      title: "Top Artist",
      value: topArtist,
      icon: FaCrown,
      color: "bg-pink-500 dark:bg-pink-400",
      description: "Most streamed artist in the selected period.",
      details: Array.isArray(topArtists) ? topArtists : String(topArtists).split(",")

    },
    {
      title: "Total Streams",
      value: totalStreams,
      icon: FaMusic,
      color: "bg-purple-500 dark:bg-purple-400",
      description: "Total number of song streams in the selected period.",
      details: [`Total Streams: ${totalStreams}`, `Average per User: ${Math.round(parseInt(totalStreams.replace(/,/g, '')) / parseInt(activeUsers.replace(/,/g, '') || 1))} streams`],
    },
    {
      title: "Revenue",
      value: `$${revenue}`,
      icon: FaDollarSign,
      color: "bg-yellow-500 dark:bg-yellow-400",
      description: "Total revenue generated in the selected period.",
      details: [`Total Revenue: $${revenue}`, `Per Active User: $${(parseInt(revenue.replace(/,/g, '')) / parseInt(activeUsers.replace(/,/g, '') || 1)).toFixed(2)}`],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
      {metricsData.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default Metrics;
