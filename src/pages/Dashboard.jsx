import { useSelector } from 'react-redux';
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import MemberCard from '../components/MemberCard';
import StatusSelector from '../components/StatusSelector';
import TaskList from '../components/TaskList';
import VisualBoard from '../components/VisualBoard';

const Dashboard = () => {
  const [filterStatus, setFilterStatus] = useState('');
  const [sortByTasks, setSortByTasks] = useState(false);

  const { currentRole, currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members.list);

  const currentMember = members.find((m) => m.name === currentUser);

  const filteredMembers = members
    .filter((m) => (filterStatus ? m.status === filterStatus : true))
    .sort((a, b) => {
      if (!sortByTasks) return 0;
      const aTasks = a.tasks?.filter((t) => t.progress < 100).length || 0;
      const bTasks = b.tasks?.filter((t) => t.progress < 100).length || 0;
      return bTasks - aTasks;
    });

  const statusCounts = members.reduce((acc, member) => {
    acc[member.status] = (acc[member.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className=" p-6 space-y-6">
      {currentRole === 'lead' ? (
        <>
          {/* Summary */}
          <div className="flex flex-wrap gap-4 dark:text-black">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="bg-white shadow rounded p-4 dark:bg-blue-300 ">
                <p className="text-gray-500 capitalize dark:text-black">{status}</p>
                <p className="text-xl font-bold">{count}</p>
              </div>
            ))}
          </div>

          {/* Filter + Sort Controls */}
          <div className="flex flex-wrap items-center gap-4 dark:text-white">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All Statuses</option>
              <option value="Working">Working</option>
              <option value="Break">Break</option>
              <option value="Meeting">Meeting</option>
              <option value="Offline">Offline</option>
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={sortByTasks}
                onChange={(e) => setSortByTasks(e.target.checked)}
              />
              Sort by Active Tasks
            </label>
          </div>

          {/* Task Form */}
          <TaskForm />

          {/* Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </>
      ) : (
        <>
            {/* Show only when a member is selected */}
            {currentUser && currentMember ? (
            <>
                <StatusSelector user={currentUser} />
                <TaskList tasks={currentMember.tasks} userId={currentMember.id} />
            </>
            ) : (
           <VisualBoard/>
            )}

        </>
      )}
    </div>
  );
};

export default Dashboard;
