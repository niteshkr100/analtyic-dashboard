import summaryData from '../data/summary.json';
import MetricCard from '../components/MetricCard';
import GeoMap from '../components/charts/GeoMap';
import TrendsChart from '../components/charts/TrendsChart'; 

const Dashboard = () => {
  return (
    <div className="p-6 space-y-10">
      {/* 🔹 Total Summary */}
      <section className='pl-0 md:pl-6'>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Total Summary
        </h1>
        <div className="flex flex-wrap gap-4">
          {summaryData.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6"
            >
              <MetricCard {...item} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Storefront (GeoMap) */}
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

    </div>
  );
};

export default Dashboard;
