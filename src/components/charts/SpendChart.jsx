// src/components/chart/SpendChart.jsx
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import chartData from '../../data/chartData.json';

const SpendChart = () => {
  const [view, setView] = useState('daily');
  const data = chartData[view];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold dark:text-white">Spend Trend</h2>
        <div className="space-x-2">
          {['daily', 'weekly', 'monthly'].map((v) => (
            <button
              key={v}
              className={`px-3 py-1 rounded ${
                view === v
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
              onClick={() => setView(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="spend" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendChart;
