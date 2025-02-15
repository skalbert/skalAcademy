import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis,
   CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const barData = [
  { name: 'Jan', progress: 30 },
  { name: 'Feb', progress: 45 },
  { name: 'Mar', progress: 60 },
  { name: 'Apr', progress: 75 },
  { name: 'May', progress: 90 },
];

const lineData = [
  { name: 'Week 1', score: 20 },
  { name: 'Week 2', score: 40 },
  { name: 'Week 3', score: 55 },
  { name: 'Week 4', score: 70 },
];

const pieData = [
  { name: 'Completed', value: 70 },
  { name: 'In Progress', value: 20 },
  { name: 'Pending', value: 10 },
];

const COLORS = ['#4CAF50', '#FF9800', '#F44336'];

const Progress = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Progress Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Progress (Bar Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#4CAF50" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Weekly Score Trend (Line Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#FF9800" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Task Distribution (Pie Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Progress;
