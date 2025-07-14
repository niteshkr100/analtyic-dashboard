import {
 
  LayoutDashboard,
  AppWindow,
  Palette,
  CircleGauge,
  Search,
  Zap,
  Image,
  LayoutPanelLeft
 
} from 'lucide-react';
 
import { NavLink } from 'react-router-dom';
 

//sidebar data 
const navItems = [
  { icon: <CircleGauge size={22} />, label: 'Dashboard', to: '/' },
  { icon: <LayoutDashboard size={22} />, label: 'Projects', to: '/projects' },
  { icon: <Image size={22} />, label: 'Our Clients', to: '/clients' },
  { icon: <Search size={22} />, label: 'Payroll', to: '/payroll' },

  { icon: <AppWindow size={22} />, label: 'Space', to: '/space' },
    { icon: <LayoutPanelLeft size={22} />, label: 'Employees', to: '/employees' },
  { icon: <Zap  size={22} />, label: 'Other Pages', to: '/other' },
  { icon: <Palette size={22} />, label: 'UI Components', to: '/ui' },
];

const Sidebar = ({  closeSidebar = () => {}, isDark, handleDark }) => {
 

  return (
    <aside className="relative h-full p-4 bg-orange-500 dark:bg-orange-600 text-white flex flex-col justify-between">
        <div className='block md:hidden absolute right-4 text-xl font-extrabold' onClick={closeSidebar} >X</div>
      <div>
        {/* Logo */}
        <div className="flex justify-center items-center mb-6 mt-12">
        <div className="w-8 h-8 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
   
    </div>
</div>


        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-black font-semibold'
                    : 'hover:bg-blue-200 hover:text-black'
                }`
              }
            >
              {icon}
              {/* <span>{label}</span> */}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
 
  <div className="space-y-2 mt-6 border-t border-white/60 pt-4 text-sm">
  <div className="flex flex-col items-start gap-1">
  
    <span className="text-white font-medium">
      {isDark ? 'Dark' : 'Light'}
    </span>
    <button
      onClick={handleDark}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? 'bg-orange-900' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
</div>

    </aside>
  );
};

export default Sidebar;
