import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }
    
    // Create task object
    const newTask = {
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate || null
    };
    
    // Call the parent function to add task
    onAddTask(newTask);
    
    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 mb-8 transform transition-transform duration-300 hover:scale-[1.02]">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title" className="block text-indigo-100 font-medium mb-2">
            Task Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-indigo-200"
            placeholder="What needs to be done?"
            required
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="description" className="block text-indigo-100 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-indigo-200"
            placeholder="Add details about your task (optional)"
            rows="3"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="dueDate" className="block text-indigo-100 font-medium mb-2">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-white text-indigo-600 font-bold py-3 px-4 rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;