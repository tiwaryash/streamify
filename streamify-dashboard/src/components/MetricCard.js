import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSync } from "react-icons/fa"; // Import an icon for flipping

const MetricCard = ({ title, value, icon: Icon, color, description, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div
      className="relative w-full max-w-sm h-64 perspective transform transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      title="Click to flip for more details" // Tooltip for additional guidance
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                     rounded-lg shadow-lg p-5 flex flex-col justify-between backface-hidden
                     transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700`} // Background change on hover
        >
          <div className="flex-grow flex flex-col justify-center items-center"> {/* Center content */}
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Icon className={`w-6 h-6 ${color} p-1 rounded-full`} />
              {title}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">{description}</p>
            <span className="block text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {value}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center"> {/* Positioned at the bottom */}
            <FaSync className="mr-1" /> {/* Flip icon */}
            Tip: Click to flip
          </p> {/* Instruction label */}
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gray-900 dark:bg-gray-800 text-white border border-gray-700 
                     rounded-lg shadow-lg p-5 flex flex-col justify-center items-center backface-hidden
                     rotate-y-180 transition-colors duration-200"
        >
          <h5 className="text-lg font-semibold">{title} Details</h5>
          <ul className="mt-3 text-sm list-disc list-inside text-center">
            {details.map((item, index) => (
              <li key={index} className="text-gray-200 dark:text-gray-300">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;