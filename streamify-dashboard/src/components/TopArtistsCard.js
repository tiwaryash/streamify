import React from 'react';
import { FaCrown, FaArrowUp } from 'react-icons/fa';

const TopArtistsCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FaCrown className="text-yellow-500" />
        Top Artists
      </h3>
      <div className="space-y-4">
        {data.map((artist, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 
                     dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-500 dark:text-gray-400 w-4">{index + 1}</span>
              <img
                src={artist.image}
                alt={artist.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{artist.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {(artist.streams / 1000000).toFixed(1)}M streams
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <FaArrowUp className="w-3 h-3" />
              <span className="text-sm font-medium">{artist.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtistsCard; 