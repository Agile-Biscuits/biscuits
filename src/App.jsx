import 'tailwindcss/tailwind.css';
import './App.css';

import logo from './assets/images/logo_100x100.png';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-4" />
        <div>
          <h1 className="text-2xl font-bold mb-4">
            <span className="inline-block align-middle">Welcome to Agile Biscuits App</span>
          </h1>
          <p className="text-gray-700">
            This is a sample application using Tailwind CSS.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
