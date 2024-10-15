// src/components/Blob.jsx
import React, { useState } from 'react';
import { FaTasks, FaTimes } from 'react-icons/fa';

export default function Blob() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Save 5L of water today', completed: false },
    { id: 2, text: 'Plant a tree', completed: false },
    { id: 3, text: 'Avoid plastic usage', completed: false },
    { id: 4, text: 'Use public transportation', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleBlob = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button for Blob (Glassmorphism) */}
      <button
        onClick={toggleBlob}
        className="fixed bottom-6 left-6 w-16 h-16 bg-white bg-opacity-20 backdrop-blur-md border border-white text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform transform hover:bg-opacity-30 hover:scale-110"
        aria-label="Open Blob Task List"
      >
        <FaTasks size={24} />
      </button>

      {/* Blob Task Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 md:w-96 bg-white bg-opacity-20 backdrop-blur-md border border-white rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white">
            <h3 className="text-lg font-orbitron font-semibold text-white">
              Your Tasks
            </h3>
            <button
              onClick={toggleBlob}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close Blob Task List"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Task List */}
          <div className="flex-1 p-4 overflow-y-auto">
            {tasks.map((task) => (
              <div key={task.id} className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-green-500 focus:ring-green-400 rounded border-white bg-opacity-20 backdrop-blur-md border"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`ml-3 font-orbitron ${
                    task.completed ? 'line-through text-gray-400' : 'text-white'
                  }`}
                >
                  {task.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
