import React from 'react';
import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImg}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-50 my-4">
        No project is selected.
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get stated with a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
