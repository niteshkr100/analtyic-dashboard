import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from  '../redux/slices/memberSlice'

const statuses = ['Working', 'Break', 'Meeting', 'Offline'];

const StatusSelector = ({ user }) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);

  const current = members.find((m) => m.name === user); // Match by name

  const handleStatusChange = (status) => {
    if (current) {
      dispatch(updateStatus({ userId: current.id, status })); // Now using correct ID
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2 dark:bg-blue-300 dark:text-black ">
      <h2 className="text-lg font-semibold">Update Your Status</h2>
      <div className="flex gap-2 flex-wrap">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`px-3 py-1 hover:cursor-pointer rounded border
              ${
                current?.status === status
                  ? 'bg-blue-500 text-white dark:bg-green-500'
                  : 'bg-gray-100 text-gray-700'
              } hover:bg-blue-300 dark:hover:bg-green-400 dark:hover:text-white`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusSelector;
