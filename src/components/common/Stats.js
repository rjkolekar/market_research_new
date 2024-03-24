import React from 'react';

export default function Example() {
    const stats = [
      { id: 1, name: 'Reports Published', value: '1,000+' },
      { id: 2, name: 'Clients Served', value: '250+' },
      { id: 3, name: 'Consulting Projects', value: '50+' },
      { id: 4, name: 'Repeat Customers', value: '35%' },
    ];
  
    return (
      <div className="bg-gray-900  py-12 sm:py-16">
        <div className="container mx-auto  px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center text-white sm:text-3xl">Insights</h2>
          <p className="mt-4 text-base text-center text-white sm:text-lg">
            Numbers tell the story; our data fuels your business growth.
          </p>
          <div className=" grid grid-cols-1 gap-y-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  