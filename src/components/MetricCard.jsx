const MetricCard = ({ title, value, change }) => {
  // Normalize change string and convert to float
  const changeValue = parseFloat(change);
  const isPositive = change.toString().includes('+');
  const isNegative = change.toString().includes('-');
  const isNeutral = changeValue === 0;

  const changeColor = isNeutral
    ? 'text-gray-500'
    : isPositive
    ? 'text-green-500'
    : 'text-red-500';

  return (
    <div className="bg-white dark:bg-gray-800 p-3   rounded-lg shadow hover:scale-[1.02] transition w-full max-w-[200px]">
      <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{value}</h2>
      <p className={`text-sm font-medium ${changeColor}`}>
        {change}%
      </p>
    </div>
  );
};

export default MetricCard;
