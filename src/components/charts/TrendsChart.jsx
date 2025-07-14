import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample static data (replace with real trends if available)
const data = [
  { date: 'Jul 1', spend: 2000, installs: 300 },
  { date: 'Jul 2', spend: 2500, installs: 350 },
  { date: 'Jul 3', spend: 1800, installs: 400 },
  { date: 'Jul 4', spend: 2200, installs: 420 },
  { date: 'Jul 5', spend: 2700, installs: 450 },
];

const TrendsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Line type="monotone" dataKey="spend" stroke="#3B82F6" strokeWidth={2} />
        <Line type="monotone" dataKey="installs" stroke="#F97316" strokeWidth={2} />
      </LineChart>
      
      
    </ResponsiveContainer>
  );
};

export default TrendsChart;
