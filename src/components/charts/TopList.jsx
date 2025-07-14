import React from 'react';

const TopList = () => {
  const title = 'Top Performing Keywords';
  const items = [
    { name: 'Discovery', value: '1,254' },
    { name: 'Branding', value: '982' },
    { name: 'Apple Watch bands', value: '857' },
    { name: 'Fitness apps', value: '722' },
    { name: 'Productivity tools', value: '690' },
  ];

  return (
    <div className="rounded-xl shadow w-full border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Title/Header */}
      <div className="px-6 pt-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
      </div>

      {/* List Items */}
      <div className="bg-white dark:bg-gray-800 px-6 pb-4 pt-2">
        <ul className="space-y-3 divide-y divide-gray-100 dark:divide-gray-700">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-sm pt-2"
            >
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopList;
