import React, { useState, useEffect } from 'react';
import { FaUser, FaPlay, FaHeart, FaShare, FaPlus } from 'react-icons/fa';

const UserActivityTimeline = () => {
  const [activities, setActivities] = useState([]);

  const generateActivity = () => {
    const actions = [
      { type: 'played', icon: FaPlay, color: 'text-green-500', 
        getMessage: () => `played "${['Flowers', 'Kill Bill', 'Anti-Hero', 'Calm Down'][Math.floor(Math.random() * 4)]}"` },
      { type: 'liked', icon: FaHeart, color: 'text-red-500', 
        getMessage: () => `liked "${['Last Night', 'About Damn Time', 'As It Was', 'Stay With Me'][Math.floor(Math.random() * 4)]}"` },
      { type: 'shared', icon: FaShare, color: 'text-blue-500', 
        getMessage: () => `shared "${['Playlist: Summer Hits', 'Album: Renaissance', 'Playlist: Workout Mix', 'Album: Midnights'][Math.floor(Math.random() * 4)]}"` },
      { type: 'playlist', icon: FaPlus, color: 'text-purple-500', 
        getMessage: () => `created playlist "${['My Favorites', 'Party Mix', 'Chill Vibes', 'Workout Beats'][Math.floor(Math.random() * 4)]}"` }
    ];

    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomUser = `User${Math.floor(Math.random() * 1000)}`;

    return {
      id: Date.now(),
      user: randomUser,
      action: randomAction.getMessage(),
      icon: randomAction.icon,
      color: randomAction.color,
      timestamp: new Date().toISOString(),
      isNew: true
    };
  };

  useEffect(() => {
    const initialActivities = Array.from({ length: 5 }, generateActivity);
    setActivities(initialActivities);

    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivity = generateActivity();
        return [newActivity, ...prev].slice(0, 50);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FaUser className="text-blue-500" />
        Live User Activity
      </h3>
      <div className="h-[504px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 
                    dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500
                        ${activity.isNew ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-transparent'}
                        hover:bg-gray-50 dark:hover:bg-gray-700`}
            >
              <activity.icon className={`${activity.color} w-5 h-5 flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-medium truncate">{activity.user}</span>
                  <span className="flex-shrink-0">•</span>
                  <span className="truncate">{activity.action}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(activity.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserActivityTimeline; 