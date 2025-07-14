import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = ({ openSidebar }) => {
  const location = useLocation();

  const getTitleAndSubtitle = () => {
    switch (location.pathname) {
      case '/accounts':
        return {
          title: 'All Performance',
          subtitle: ' '
        };
      case '/apps':
        return {
          title: 'Apps Overview',
          
        };
      case '/campaigns':
        return {
          title: 'Campaign Insights',
          subtitle: ' '
        };
      default:
        return {
          title: 'Overview Dashboard',
          subtitle: 'A consolidated view of your app efficiency by storefronts and key metrics.'
        };
    }
  };

  const { title, subtitle } = getTitleAndSubtitle();

  return (
    <header className="flex justify-between items-center px-4 h-full bg-white dark:bg-gray-700 shadow">
      {/* Hamburger menu for small screens */}
      <button
        onClick={openSidebar}
        className="md:hidden text-gray-700 dark:text-blue-100"
      >
        <Menu size={24} />
      </button>
 
      <div className="hidden md:flex flex-col">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">{title}</span>
        <span className="text-[8px] text-gray-500 dark:text-gray-300">{subtitle}</span>
      </div>

 
      <div className="flex items-center gap-6 px-3 py-2 rounded-lg   ">
      
        <div className="flex items-center gap-2">
          <div className="text-gray-500 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-400 dark:text-gray-300">Last 7 Days</span>
            <span className="text-sm font-medium text-gray-800 dark:text-white">Jul 5 – Jul 11, 2025</span>
          </div>
        </div>

        {/* Filter Icon */}
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
