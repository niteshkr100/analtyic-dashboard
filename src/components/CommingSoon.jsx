import React from 'react';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <Clock className="w-16 h-16 text-blue-500 dark:text-blue-300 mb-4 animate-pulse" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
        Coming Soon
      </h1>
       
    </div>
  );
};

export default ComingSoon;
