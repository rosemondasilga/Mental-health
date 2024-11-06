// src/components/AssessmentAlert.tsx
import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const AssessmentAlert: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 flex items-center justify-between rounded-md mt-8">
      <div className="flex items-center">
        <FaExclamationTriangle size={24} className="mr-2" />
        <div>
          <h2 className="font-semibold">Based on your recent assessment, you may have ADHD.</h2>
          <p>Please review your results and consider next steps.</p>
        </div>
      </div>
      <button 
        onClick={toggleModal} 
        className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400"
      >
        See Actions
      </button>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h3 className="text-lg font-semibold">Next Steps</h3>
          <p className="mt-2 text-gray-700">
            Based on your assessment results, you might benefit from further evaluation and support.
            Here are some actions you can take:
          </p>
          <div className="mt-4 space-y-2">
            <Link to='book-therapy' className="bg-[#002266] text-white px-4 py-2 rounded-md hover:bg-blue-900">
            Book Therapy
            </Link>
            <button className="bg-white border ml-4 text-[#002266]  px-4 py-2 rounded-md ">
          Retake assessment
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AssessmentAlert;
