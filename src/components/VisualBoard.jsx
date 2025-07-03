import { useSelector } from 'react-redux';
import StatusPieChart from './charts/StatusPieChart';
import TaskBarChart from './charts/TaskBarChart';
import { Users, CheckCircle, Activity } from 'lucide-react';

const VisualBoard = () => {
  const members = useSelector((state) => state.members.list);

  // Prepare data
  const statusCounts = members.reduce((acc, member) => {
    acc[member.status] = (acc[member.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  const barData = members.map((member) => ({
    name: member.name,
    activeTasks: member.tasks?.filter((task) => task.progress < 100).length || 0,
  }));

  const totalMembers = members.length;
  const totalActiveTasks = members.reduce(
    (acc, member) => acc + (member.tasks?.filter((task) => task.progress < 100).length || 0),
    0
  );
  const totalWorking = members.filter((m) => m.status === 'Working').length;

  return (
    <div className="px-0 py-6 md:p-6 space-y-10">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 text-center">
        📊 Team Overview
      </h2>

      {/* Top Grid: Pie Chart + Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart Card */}
        <div className="bg-white dark:bg-blue-900 p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
            Status Distribution
          </h3>
          <StatusPieChart data={pieData} />
        </div>

        {/* Summary Cards */}
        <div className="bg-transparent p-4 px-0 pt-0">
          <div className="space-y-4">
            {/* Total Members */}
            <div className="bg-white dark:bg-blue-800 p-4 rounded shadow flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Total Team Members</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalMembers}</p>
              </div>
              <Users className="text-blue-500 dark:text-white text-3xl" />
            </div>

            {/* Active Tasks */}
            <div className="bg-white dark:bg-blue-800 p-4 rounded shadow flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Active Tasks Running</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalActiveTasks}</p>
              </div>
              <CheckCircle className="text-green-500 dark:text-white text-3xl" />
            </div>

            {/* Members Working */}
            <div className="bg-white dark:bg-blue-800 p-4 rounded shadow flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Members Currently Working</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalWorking}</p>
              </div>
              <Activity className="text-yellow-500 dark:text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-white dark:bg-gray-600 p-4 shadow rounded">
        <h3 className="text-lg font-semibold mb-4 text-center dark:text-white">
          Active Tasks Per Member
        </h3>
        <TaskBarChart data={barData} />
      </div>
    </div>
  );
};

export default VisualBoard;
