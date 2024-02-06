import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  // State to manage the background color
  const [color, setColor] = useState("gray");

  return (
    <>
      {/* Main Container */}
      <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>
        {/* Color Selection Buttons */}
        <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-full'>
            {/* Red Button */}
            <button
              className='outline-none px-5 py-2 rounded-full text-white shadow-lg font-bold'
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            {/* Green Button */}
            <button
              className='outline-none px-5 py-2 rounded-full text-white shadow-lg font-bold'
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            {/* Blue Button */}
            <button
              className='outline-none px-5 py-2 rounded-full text-white shadow-lg font-bold'
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;