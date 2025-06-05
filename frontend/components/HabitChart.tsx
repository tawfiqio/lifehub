import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function HabitChart({ data }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Habit Tracker</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="status" stroke="#10b981" />
      </LineChart>
    </div>
  );
}
