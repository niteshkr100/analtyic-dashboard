import React from 'react';

const BiggestChange = ({ title, changes }) => {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Title without background */}
      <div className="px-6 pt-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
      </div>

      {/* List with subtle background */}
      <div className="bg-white dark:bg-gray-800 px-6 pb-4 pt-2">
        <ul className="divide-y divide-gray-100 dark:divide-gray-700">
          {changes.map((change, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-sm py-2"
            >
              <span className="text-gray-700 dark:text-gray-300">{change.name}</span>
              <span className={`font-semibold ${change.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {change.value > 0 ? '+' : ''}{change.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BiggestChange;
