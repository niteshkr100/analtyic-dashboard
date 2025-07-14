import React from 'react';

const TopList = ({title, items}) => {
 

  return (
    <div>
      {/* Title (simple) */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h2>

      {/* Data Box (styled only this part) */}
      <div className="bg-white dark:bg-gray-800 px-6 py-4">
        <ul className="divide-y divide-gray-100 dark:divide-gray-700">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-sm py-2"
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
