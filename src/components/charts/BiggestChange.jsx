import React from 'react';

const BiggestChange = ({ title, changes }) => {
  return (
    <div>
      {/* Title (simple, outside the box) */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h2>

      {/* Data List Box */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow bg-white dark:bg-gray-800 px-6 py-4">
        <ul className="divide-y divide-gray-100 dark:divide-gray-700">
          {changes.map((change, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-sm py-2"
            >
              <span className="text-gray-700 dark:text-gray-300">{change.name}</span>
              <span
                className={`font-semibold ${
                  change.value >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {change.value > 0 ? '+' : ''}
                {change.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BiggestChange;
