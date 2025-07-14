import { useDispatch, useSelector } from 'react-redux';
 
import { Menu } from 'lucide-react';

const Header = ({ openSidebar }) => {
 
  return (
    <header className="flex justify-between items-center px-4 h-full bg-white dark:bg-gray-700 shadow">
      {/* Hamburger menu for small screens */}
      <button
        onClick={openSidebar}
        className="md:hidden text-gray-700 dark:text-blue-100 "
      >
        <Menu size={24} />
      </button>
     
      {/* Title */}
      <div className="text-xl font-bold hidden md:block">Overview Dashboard</div>

      {/* Controls */}
      <div className="flex items-center gap-4 ml-auto">
       
       <div>
        hello
       </div>
      </div>
    </header>
  );
};

export default Header;
