import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';

const TaskBarChart = ({ data }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDark(); //initial check
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  //extract only first name
  const formattedData = data.map((item) => ({
    ...item,
    firstName: item.name.split(' ')[0],
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="firstName"
          tick={{
            fill: isDarkMode ? '#ffffff' : '#60a5fa',
            fontSize: 12,
          }}
        />
        <YAxis
          allowDecimals={false}
          tick={{
            fill: isDarkMode ? '#ffffff' : '#1e293b',
            fontSize: 12,
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#1e293b',
            border: 'none',
          }}
        />
        <Legend
          wrapperStyle={{
            color: isDarkMode ? '#ffffff' : '#1e293b',
          }}
        />
        <Bar dataKey="activeTasks" fill="#60a5fa" name="Active Tasks" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TaskBarChart;
