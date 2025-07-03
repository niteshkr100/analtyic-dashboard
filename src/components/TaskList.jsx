import { useDispatch } from 'react-redux';
import { updateTaskProgress } from '../redux/slices/memberSlice';

const TaskList = ({ tasks, userId }) => {
  const dispatch = useDispatch();

  const handleProgressChange = (taskId, change) => {
    dispatch(updateTaskProgress({ userId, taskId, change }));
  };

  return (
    <div className="bg-blue-300 p-4 shadow rounded space-y-4 dark:bg-blue-900 dark:text-white">
      <h2 className="text-lg font-semibold">Your Tasks</h2>

      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded shadow border border-gray-300 space-y-2 dark:text-gray-800 dark:bg-gray-200"
          >
                {/* small device */}
                <div className='flex flex-col md:hidden '> {task.progress === 100 && (
                  <span className="ml-2 text-green-600 font-semibold">✅ Completed   </span>
                )}
                <span className="text-sm text-gray-500">  Submission Date: {task.dueDate}</span>
                </div>

            <div className="flex justify-between items-center">
              <p className="font-medium text-lg">⭐️  
                {task.title}{' '}
              </p>
                <div className='hidden md:block'> {task.progress === 100 && (
                  <span className="ml-2 text-green-600 font-semibold">✅ Completed   </span>
                )}
                <span className="text-sm text-gray-500">|  Submission Date: {task.dueDate}</span>
                </div>
              
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleProgressChange(task.id, -10)}
                disabled={task.progress === 0}
                className="px-2 py-1 bg-blue-300 rounded disabled:opacity-80 hover:cursor-pointer"
              >
                -10%
              </button>

              <div className="w-full bg-gray-200 rounded h-3 overflow-hidden dark:bg-gray-500">
                <div
                  className={`h-3 ${
                    task.progress === 100 ? 'bg-blue-600' : 'bg-blue-500'
                  }`}
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>

              <button
                onClick={() => handleProgressChange(task.id, 10)}
                disabled={task.progress === 100}
                className="px-2 py-1 bg-green-300 rounded disabled:opacity-50 hover:cursor-pointer"
              >
                +10%
              </button>

              <span className="ml-2 text-sm font-medium">{task.progress}%</span>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks assigned.</p>
      )}
    </div>
  );
};

export default TaskList;
