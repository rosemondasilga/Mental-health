// src/pages/AssessmentPage.tsx
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AssessmentForm from '../components/AssessmentForm';
import AssessmentAlert from '../components/AssessmentAlert';

const AssessmentPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Explicitly typing the state to allow only these 4 values
  const [selectedAssessment, setSelectedAssessment] = useState<'anxiety' | 'depression' | 'stress' | 'wellbeing' | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const assessments = [
    { id: 'anxiety', title: 'Anxiety Assessment', description: 'Evaluate your anxiety levels.' },
    { id: 'depression', title: 'Depression Assessment', description: 'Assess your current state of depression.' },
    { id: 'stress', title: 'Stress Assessment', description: 'Understand your stress levels.' },
    { id: 'wellbeing', title: 'Well-being Assessment', description: 'Get insights into your overall mental well-being.' },
  ];

  const handleCardClick = (assessmentId: 'anxiety' | 'depression' | 'stress' | 'wellbeing') => {
    setSelectedAssessment(assessmentId); // Now TypeScript knows the exact types
  };

  const closeForm = () => setSelectedAssessment(null);

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Assessment Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold text-gray-800">Assessments</h1>

          {/* Assessment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {assessments.map((assessment) => (
              <div
                key={assessment.id}
                onClick={() => handleCardClick(assessment.id as 'anxiety' | 'depression' | 'stress' | 'wellbeing')}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50 transition"
              >
                <h2 className="text-xl font-bold text-gray-800">{assessment.title}</h2>
                <p className="text-gray-600 mt-2">{assessment.description}</p>
              </div>
            ))}
          </div>
          <div>
            <AssessmentAlert />
          </div>

          {/* Recent and Past Assessment Results */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Assessment Results</h2>
            <div className="mt-4 space-y-4">
              {/* This is a placeholder for past assessment results */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800">Anxiety Assessment</h3>
                <p className="text-gray-600">Date: 2023-10-15</p>
                <p className="text-gray-600">Score: 85%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800">Depression Assessment</h3>
                <p className="text-gray-600">Date: 2023-09-20</p>
                <p className="text-gray-600">Score: 70%</p>
              </div>
            </div>
          </section>
          
        </main>

        {/* Multistep Assessment Form */}
        {selectedAssessment && (
          <AssessmentForm assessmentType={selectedAssessment} closeForm={closeForm} />
        )}
      </div>
    </div>
  );
};

export default AssessmentPage;
