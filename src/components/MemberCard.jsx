

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white p-4 shadow rounded dark:bg-blue-300 dark:text-gray-800">
      <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full mb-2" />
      <h2 className="font-semibold">{member.name}</h2>
      <p className="text-sm text-gray-600">Status: {member.status}</p>
      <p className="text-sm text-gray-600">
        Active Tasks: {member.tasks?.filter(task => task.progress < 100).length || 0}
      </p>
    </div>
  );
};

export default MemberCard;
