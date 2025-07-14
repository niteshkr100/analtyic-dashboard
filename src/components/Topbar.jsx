import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Accounts', path: '/accounts' },
  { name: 'Apps', path: '/apps' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Ad Groups', path: '/ad-groups' },
  { name: 'Keywords', path: '/keywords' },
  { name: 'Ads', path: '/ads' },
];

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200">
      <div className="flex items-center px-4 py-2 overflow-x-auto gap-4 text-sm font-medium">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-4 py-1 rounded-full transition-all ${
                isActive
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
