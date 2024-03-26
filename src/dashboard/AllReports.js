import React from 'react';
import Sidebar from './Sidebar';
import Header from '../components/common/Header';
import Nav from './Nav';

const AllReports = () => {
  return (
    <div className="flex">
      {/* Sidebar (Hidden on Small Screens) */}
      <div className="md:w-64 md:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
       
        <Nav />

        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">AllReports Section Here</h1>
          <p className="text-lg">
            {/* Content of the AllReports */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllReports;