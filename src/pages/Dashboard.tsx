
const Dashboard = () => {
  console.log("Dashboard component is rendering");
  
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-center pt-20">Dashboard</h1>
      <p className="text-center mt-4 text-gray-600">Welcome to your dashboard!</p>
      <p className="text-center mt-2 text-sm text-gray-500">Dashboard is loading correctly</p>
    </div>
  );
};

export default Dashboard;
