import {
  Home,
  Briefcase,
  Ticket,
  Users,
  Calculator,
  LayoutDashboard,
  AppWindow,
  Code,
  Palette,
  CalendarCheck,
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

//sidebar data 
const navItems = [
  { icon: <Home size={18} />, label: 'Dashboard', to: '/' },
  { icon: <Briefcase size={18} />, label: 'Projects', to: '/projects' },
  { icon: <Ticket size={18} />, label: 'Tickets', to: '/tickets' },
  { icon: <Users size={18} />, label: 'Our Clients', to: '/clients' },
  { icon: <LayoutDashboard size={18} />, label: 'Employees', to: '/employees' },
  { icon: <Calculator size={18} />, label: 'Accounts', to: '/accounts' },
  { icon: <Users size={18} />, label: 'Payroll', to: '/payroll' },
  { icon: <AppWindow size={18} />, label: 'Space', to: '/space' },
  { icon: <Code size={18} />, label: 'Other Pages', to: '/other' },
  { icon: <Palette size={18} />, label: 'UI Components', to: '/ui' },
];

const Sidebar = ({  closeSidebar = () => {}, isDark, handleDark }) => {
//   const { currentRole, currentUser } = useSelector((state) => state.role);

  return (
    <aside className="relative h-full p-4 bg-blue-700 dark:bg-blue-900 text-white flex flex-col justify-between">
        <div className='block md:hidden absolute right-4 text-xl font-extrabold' onClick={closeSidebar} >X</div>
      <div>
        {/* Logo */}
        <div className="text-center font-bold text-2xl mb-8 mt-4">
          <div className="flex items-center justify-start gap-2">
            <span className="text-3xl"><CalendarCheck /></span>
            <span>My-Task</span>
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
                    ? 'bg-blue-300 text-black font-semibold'
                    : 'hover:bg-blue-200 hover:text-black'
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="space-y-3 mt-6 border-t border-blue-600 pt-4 text-sm">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={isDark}
            onChange={handleDark}
          />
          <label className="cursor-pointer">Switch to {isDark ? 'Light Mode!' : 'Dark Mode!'}</label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
