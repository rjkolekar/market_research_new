import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
const reports = [
  {
    name: 'Market Opportunity Assessment',
    description:
      'Discover untapped market opportunities and potential niches for your business to capitalize on.',
    price: '$99.99',
  },
  {
    name: 'Customer Segmentation Analysis',
    description:
      'Segment your target audience effectively based on demographics, behaviors, and preferences for precise targeting.',
    price: '$129.99',
  },
  {
    name: 'Competitive Landscape Evaluation',
    description:
      'Evaluate the competitive landscape comprehensively to devise strategic plans for outperforming rivals.',
    price: '$79.99',
  },
  {
    name: 'Market Trend Forecasting',
    description:
      'Predict future market trends and anticipate shifts to stay ahead of the competition.',
    price: '$99.99',
  }
];

export default function MarketResearchReports() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    contactNo: '',
    country: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform further actions here, like sending the form data to a server
  };

  const handleCancel = () => {
    setShowContactForm(false);
  };

  return (
    <div className="overflow-hidden bg-white py-16 sm:py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mx-auto max-w-3xl lg:max-w-none">
            <h2 className="text-xl font-semibold leading-6 text-indigo-600">Market Research Reports</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find valuable insights</p>
            <p className="mt-6 text-lg leading-7 text-gray-600">
              Explore our latest market research reports to gain valuable insights into industry trends and opportunities.
              Contact us for more information or to purchase a report.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
  {reports.map((report, index) => (
    <div key={index} className="p-6 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-semibold">{report.name}</h3>
      <p className="mt-2 text-gray-700 text-md" style={{ maxHeight: '100px', overflow: 'hidden' }}>{report.description} <a href="#" onClick={() => setShowContactForm(true)} className="text-blue-500 hover:underline">Read More</a></p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold text-gray-900">{report.price}</span>
        <button
          onClick={() => setShowContactForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Request Sample
        </button>
      </div>
    </div>
  ))}
</div>







          </div>
        </div>
      </div>
      {showContactForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-4 px-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl sm:mt-4">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nameimport React from 'react';

                  </label>
                  <div className="mt-1.5">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>



                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Company Name
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="relative mt-1.5 flex">
                    <div className="flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phone-number"
                      autoComplete="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="block ml-2 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-1.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="block w-1/2 mr-4 rounded-md bg-gray-300 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="block w-1/2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request Sample
                </button>

              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}