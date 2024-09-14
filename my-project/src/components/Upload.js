import { useState } from 'react';
import '../App.css'; // Your custom CSS, if any

function Upload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState('');

  // Function to handle link input change
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Button to open modal */}
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Enter Link</h2>
            <input
              type="text"
              value={link}
              onChange={handleLinkChange}
              placeholder="Enter the link"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  console.log('Stored Link:', link);
                }} 
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
