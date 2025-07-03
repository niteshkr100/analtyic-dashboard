import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignTask } from  '../redux/slices/memberSlice'

const TaskForm = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedMember, setSelectedMember] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMember || !title || !dueDate) return;

    dispatch(
      assignTask({
        userId: selectedMember,
        task: {
          id: Date.now(),
          title,
          dueDate,
          progress: 0,
        },
      })
    );

    setTitle('');
    setDueDate('');
    setSelectedMember('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4 dark:bg-blue-200 dark:text-gray-800">
      <h2 className="text-lg font-semibold">Assign Task</h2>

      <select
        className="w-full p-2 border rounded"
        value={selectedMember}
        onChange={(e) => setSelectedMember(e.target.value)}
      >
        <option value="">Select Member</option>
        {members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-2 border rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded hover:cursor-pointer"
      >
        Assign Task
      </button>
    </form>
  );
};

export default TaskForm;
