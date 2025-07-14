import summaryData from '../data/summary.json';
import MetricCard from '../components/MetricCard';
import GeoMap from '../components/charts/GeoMap';
import TrendsChart from '../components/charts/TrendsChart';
import TopList from '../components/charts/TopList';
import BiggestChange from '../components/charts/BiggestChange';

// Sample static data
const topApps = [
  { name: 'Discovery', value: '$ 1,20,000' },
  { name: 'Branding', value: '$ 98,500' },
  { name: 'Today Lab', value: '$ 85,000' },
  { name: 'Competitor', value: '$ 85,000' },
  { name: 'Scaling', value: '$  85,000' },
];

const biggestMovers = [
  { name: 'Discovery(LOC)', value: 12.5 },
  { name: 'Branding(LOC)', value: -7.3 },
  { name: 'Today Lab(LOC)', value: 4.2 },
  { name: 'Competitor(LOC)', value: 4.2 },
  { name: 'Scaling(LOC)', value: 4.2 },
];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 space-y-10 mt-10 md:mt-6">
      {/* 🔹 Total Summary */}
      <section>
        <h1 className="text-xl md:pl-6 font-semibold text-gray-800 dark:text-white mb-4">
          Total Summary
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:pl-6">
          {summaryData.map((item, i) => (
            <div key={i} className="min-w-[160px]">
              <MetricCard {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Storefront & Trends */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Storefront */}
        <div className="dark:bg-gray-800 p-6 rounded-xl h-full min-h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Storefront
          </h2>
          <GeoMap />
        </div>

        {/* Trends */}
        <div className="dark:bg-gray-800 p-6 rounded-xl h-full min-h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Trends
          </h2>
          <div className="bg-white border border-gray-200 dark:bg-orange-800 p-4 rounded-xl shadow w-full flex-1 flex items-center justify-center">
            <TrendsChart />
          </div>
        </div>
      </section>

      {/* 🔹 Top List & Biggest Change */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4 md:px-6">
        <TopList title="Top List" items={topApps} />
        <BiggestChange title="Biggest Changes" changes={biggestMovers} />
      </section>
    </div>
  );
};

export default Dashboard;
