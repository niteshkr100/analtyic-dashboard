// src/components/charts/GeoMap.jsx
import React, { useEffect, useState } from 'react';
import { Mercator } from '@visx/geo';
import { feature } from 'topojson-client';
import * as d3 from 'd3';

const GeoMap = () => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((topology) => {
      const geoJson = feature(topology, topology.objects.countries);
      setGeographies(geoJson.features);
    });
  }, []);

  return (
    <div className="bg-white border border-gray-200 dark:bg-orange-800 p-4 rounded-xl shadow w-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200">Spend</h2>
      <div className="w-full h-[300px] sm:h-[400px]">
        <svg viewBox="0 0 800 400" width="100%" height="100%">
          <Mercator data={geographies} scale={100} translate={[400, 200]}>
            {(mercator) =>
              mercator.features.map(({ feature, path }, i) => (
                <path
                  key={`path-${i}`}
                  d={path || ''}
                  fill={feature.properties.name === 'India' ? '#F97316' : '#E2E8F0'} // Tailwind orange-500

                  stroke="#CBD5E1"
                />
              ))
            }
          </Mercator>
        </svg>
      </div>
    </div>
  );
};

export default GeoMap;
