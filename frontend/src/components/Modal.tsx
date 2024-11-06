// src/components/Modal.tsx
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 relative"> {/* Add relative to position the close button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close" // Accessibility for screen readers
        >
          <FaTimes size={20} /> {/* Use the close icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
