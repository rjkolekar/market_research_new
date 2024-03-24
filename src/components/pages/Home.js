import MarketPlace from './MarketPlace'
import Stats from '../common/Stats'
import Testimonials from '../common/Testimonials'
import OurClients from '../common/OurClients'
import { Link } from 'react-router-dom'
import React from 'react';

export default function Example() {
  return (
    <div className="bg-gray-900 py-12 sm:py-10 lg:py-16">
      <div className="relative isolate px-6 lg:px-8 mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl py-3 sm:py-48 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white-900/10 hover:ring-white-900/20">
              Check out our latest market research reports.{' '}
              <Link to="/reports" className="font-semibold text-blue-300">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Uncover Insights with Our Market Research Reports
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Gain valuable insights into market trends, consumer behavior, and industry opportunities with our
              comprehensive market research reports.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
           
              {/* Add search box content here */}
              <div className="flex flex-col sm:flex-row items-center border border-gray-700 rounded-md shadow-sm p-2 sm:p-3">
  <input
    type="text"
    placeholder="Search reports"
    className="flex-grow px-3 py-2 sm:py-3 sm:px-4 mb-2 sm:mb-0 mr-0 sm:mr-2 rounded-md focus:outline-none focus:ring-white focus:border-white text-gray-900"
  />
  <select
    className="px-3 py-2 sm:py-3 sm:px-4 mb-2 sm:mb-0 mr-0 sm:mr-2 rounded-md focus:outline-none focus:ring-white focus:border-white text-gray-900"
  >
    <option value="" selected disabled>
      Select Category
    </option>
    <option value="consumer-behavior">Consumer Behavior</option>
    <option value="market-trends">Market Trends</option>
    <option value="competitor-analysis">Competitor Analysis</option>
    {/* Add more categories here */}
  </select>
  <button
    className="rounded-md bg-indigo-600 px-4 py-2 sm:py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Search
  </button>
</div>


            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <MarketPlace />
      <Stats />
      <Testimonials />
      <OurClients />
    </div>
  );
}
