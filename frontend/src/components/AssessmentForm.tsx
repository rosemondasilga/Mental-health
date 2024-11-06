// src/components/AssessmentForm.tsx
import React, { useState } from 'react';

interface AssessmentFormProps {
  assessmentType: string;
  closeForm: () => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ assessmentType, closeForm }) => {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  // Questions with different input types
  const questions = {
    anxiety: [
      { id: 'q1', text: 'How often do you feel nervous or anxious?', type: 'mcq', options: ['Rarely', 'Sometimes', 'Often', 'Always'] },
      { id: 'q2', text: 'On a scale of 1-10, how would you rate your current anxiety level?', type: 'slider', range: [1, 10] },
      { id: 'q3', text: 'How many days per week do you experience anxiety?', type: 'number' },
    ],
    depression: [
      { id: 'q1', text: 'How often do you feel sad or hopeless?', type: 'mcq', options: ['Never', 'Rarely', 'Sometimes', 'Often'] },
      { id: 'q2', text: 'On a scale of 1-10, how would you rate your mood?', type: 'slider', range: [1, 10] },
      { id: 'q3', text: 'How many hours of sleep do you get on average per night?', type: 'number' },
    ],
    stress: [
      { id: 'q1', text: 'How often do you feel stressed at work or school?', type: 'mcq', options: ['Rarely', 'Sometimes', 'Often', 'Always'] },
      { id: 'q2', text: 'On a scale of 1-10, how stressful do you find your daily routine?', type: 'slider', range: [1, 10] },
      { id: 'q3', text: 'How many hours do you spend on relaxation activities per week?', type: 'number' },
    ],
    wellbeing: [
      { id: 'q1', text: 'How satisfied are you with your current lifestyle?', type: 'slider', range: [1, 10] },
      { id: 'q2', text: 'How often do you engage in physical exercise?', type: 'mcq', options: ['Never', 'Rarely', 'Sometimes', 'Often'] },
      { id: 'q3', text: 'How many hours do you sleep per night?', type: 'number' },
    ],
  };

  const currentQuestions = questions[assessmentType];

  const handleAnswerChange = (questionId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < currentQuestions.length) {
      setStep((prev) => prev + 1);
    } else {
      alert('Assessment Completed!'); // Replace with actual submission logic
      closeForm();
    }
  };

  const renderQuestionInput = (question: any) => {
    switch (question.type) {
      case 'mcq':
        return (
          <div className="mt-4">
            {question.options.map((option: string) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={responses[question.id] === option}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="mt-4">
            <input
              type="range"
              min={question.range[0]}
              max={question.range[1]}
              value={responses[question.id] || question.range[0]}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="w-full"
            />
            <div className="text-center mt-2">{responses[question.id] || question.range[0]}</div>
          </div>
        );

      case 'number':
        return (
          <div className="mt-4">
            <input
              type="number"
              value={responses[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter a number"
            />
          </div>
        );

      default:
        return (
          <input
            type="text"
            value={responses[question.id] || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            className="mt-4 w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your answer..."
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1)} Assessment
        </h2>
        
        <div>
          <p className="text-gray-700">{currentQuestions[step - 1].text}</p>
          {renderQuestionInput(currentQuestions[step - 1])}
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={closeForm}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="bg-[#002266] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {step < currentQuestions.length ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;
