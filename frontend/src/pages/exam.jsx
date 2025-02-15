
const Exam = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Exam Page</h1>
        <p className="text-center mb-6">
          Welcome to the exam page. Please read the instructions carefully before starting.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700  font-semibold py-2 px-4 rounded-xl transition duration-300">
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default Exam;
