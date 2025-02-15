const Overview = () => {
    return (
      <div className="mt-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Overview Page</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="p-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Courses Completed</h2>
            <p className="text-4xl font-bold">8</p>
          </div>
  
          <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <p className="text-4xl font-bold">3</p>
          </div>
  
          <div className="p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Certificates Earned</h2>
            <p className="text-4xl font-bold">5</p>
          </div>
        </div>
  
        {/* Upcoming Deadlines */}
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Upcoming Deadlines</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-md shadow">
              <span>Data Structures Assignment</span>
              <span className="text-sm text-red-500">Due: Feb 15, 2025</span>
            </li>
            <li className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-md shadow">
              <span>Machine Learning Project</span>
              <span className="text-sm text-red-500">Due: Feb 22, 2025</span>
            </li>
            <li className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-md shadow">
              <span>Web Development Portfolio</span>
              <span className="text-sm text-red-500">Due: Mar 01, 2025</span>
            </li>
          </ul>
        </div>
  
        {/* Learning Resources */}
        <div className="mt-8 p-6 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Recommended Learning Resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="#" className="underline hover:text-indigo-600">Introduction to Algorithms - Free eBook</a></li>
            <li><a href="#" className="underline hover:text-indigo-600">Advanced JavaScript Concepts - Online Course</a></li>
            <li><a href="#" className="underline hover:text-indigo-600">Git & GitHub Crash Course - Video Tutorial</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Overview;
  