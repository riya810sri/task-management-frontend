import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700">No tasks yet</h3>
        <p className="text-gray-500 mt-2">Add your first task using the form above</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
          <div className="bg-amber-100 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-amber-700">Pending</p>
            <p className="text-xl font-bold text-amber-900">{tasks.filter(t => t.status === 'pending').length}</p>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-700">In Progress</p>
            <p className="text-xl font-bold text-blue-900">{tasks.filter(t => t.status === 'in-progress').length}</p>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-green-700">Completed</p>
            <p className="text-xl font-bold text-green-900">{tasks.filter(t => t.status === 'completed').length}</p>
          </div>
        </div>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 flex items-center">
          <div className="bg-indigo-100 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-indigo-700">Total Tasks</p>
            <p className="text-xl font-bold text-indigo-900">{tasks.length}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onDelete={onDeleteTask} 
            onUpdate={onUpdateTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;