import { useDispatch, useSelector } from 'react-redux';
import { switchRole, setUser } from '../redux/slices/roleSlice';
import { Menu } from 'lucide-react';

const Header = ({ openSidebar }) => {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members.list);

  const handleRoleChange = () => {
    dispatch(switchRole(currentRole === 'lead' ? 'member' : 'lead'));
  };

  const handleUserChange = (e) => {
    dispatch(setUser(e.target.value));
  };

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
      <div className="text-xl font-bold hidden md:block">Team Pulse Dashboard</div>

      {/* Controls */}
      <div className="flex items-center gap-4 ml-auto">
        {currentRole === 'member' && (
          <select
            value={currentUser}
            onChange={handleUserChange}
            className="border px-2 py-1 rounded"
          >
            <option value="">Select member</option>
            {members.map((member) => (
              <option key={member.id} value={member.name}>
                {member.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleRoleChange}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:cursor-pointer"
        >
          Switch to {currentRole === 'lead' ? 'Member' : 'Lead'}
        </button>
      </div>
    </header>
  );
};

export default Header;
