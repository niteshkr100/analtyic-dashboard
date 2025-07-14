import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import summaryData from '../data/summary.json';
import MetricCard from '../components/MetricCard';  
import TrendsChart from '../components/charts/TrendsChart';

const Accounts = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 px-10">
      {/* top */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 mt-10">
    
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Evaluate performance of your ads on all levels
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Ads Manager is your actionable full-funnel view on both Apple Search Ads stats and post-install metrics to take educated actions & accelerate ROAS.
          </p>

          <div className="flex gap-6 items-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-5 py-3 bg-orange-100 text-orange-600 font-medium rounded-lg shadow-sm hover:bg-orange-200 transition"
            >
              <ArrowUpRight className="w-5 h-5" />
              How to read the metrics
            </Link>
            <button className="text-gray-500 dark:text-gray-300 hover:underline">Skip</button>
          </div>
        </div>

       
        <div>
          <div className="w-full aspect-video rounded-xl bg-orange-500 p-6 text-white flex items-center justify-center shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <p className="text-sm">A Video Guide</p>
                <h2 className="text-xl font-semibold leading-snug">
                  AppStorys acquire apple ads
                </h2>
              </div>
              <button className="w-16 h-16 rounded-full bg-black bg-opacity-40 text-white text-xl flex items-center justify-center">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* metrics */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Total Summary
        </h2>
        <div className="flex flex-wrap gap-4">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6"
            >
              <MetricCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* chart */}
      <div className='mt-20'>
      <h1 className='font-bold mb-10 text-xl'>Chart</h1>
        <TrendsChart/>
      </div>
    </div>
  );
};

export default Accounts;
