import React, { useState } from "react";
import Stats from "../common/Stats";
import Testimonials from "../common/Testimonials";
import OurClients from "../common/OurClients";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import classNames from "classnames";

const ReportPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic
    // For demonstration purposes, we're just setting the submitted state to true
    setSubmitted(true);
  };

  // Sample report data
  const navigate = useNavigate();
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Market Analysis 2023",
      industry: "Defense",
      tableOfContents: "Table of Contents: Market Analysis 2023",
      description: "Description: Market Analysis 2023",
      InfoGraphics: "InfoGraphics: Market Analysis 2023",
      methodology: "Methodology: Market Analysis 2023",
      price: "$400",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 2,
      title: "Technology Trends Report",
      industry: "Aerospace & Defense",
      tableOfContents: "Table of Contents: Technology Trends Report",
      description: "Description: Technology Trends Report",
      InfoGraphics: "InfoGraphics: Technology Trends Report",
      methodology: "Methodology: Technology Trends Report",
      price: "$320",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 3,
      title: "Market Analysis 2023",
      industry: "Defense",
      tableOfContents: "Table of Contents: Market Analysis 2023",
      description: "Description: Market Analysis 2023",
      InfoGraphics: "InfoGraphics: Market Analysis 2023",
      methodology: "Methodology: Market Analysis 2023",
      price: "$300",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 4,
      title: "Technology Trends Report",
      industry: "Aerospace & Defense",
      tableOfContents: "Table of Contents: Technology Trends Report",
      description: "Description: Technology Trends Report",
      InfoGraphics: "InfoGraphics: Technology Trends Report",
      methodology: "Methodology: Technology Trends Report",
      price: "$200",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 5,
      title: "Market Analysis 2023",
      industry: "Defense",
      tableOfContents: "Table of Contents: Market Analysis 2023",
      description: "Description: Market Analysis 2023",
      InfoGraphics: "InfoGraphics: Market Analysis 2023",
      methodology: "Methodology: Market Analysis 2023",
      price: "$100",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 6,
      title: "Technology Trends Report",
      industry: "Aerospace & Defense",
      tableOfContents: "Table of Contents: Technology Trends Report",
      description: "Description: Technology Trends Report",
      InfoGraphics: "InfoGraphics: Technology Trends Report",
      methodology: "Methodology: Technology Trends Report",
      price: "$199",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 7,
      title: "Market Analysis 2023",
      industry: "Defense",
      tableOfContents: "Table of Contents: Market Analysis 2023",
      description: "Description: Market Analysis 2023",
      InfoGraphics: "InfoGraphics: Market Analysis 2023",
      methodology: "Methodology: Market Analysis 2023",
      price: "$99",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    {
      id: 8,
      title: "Technology Trends Report",
      industry: "Aerospace & Defense",
      tableOfContents: "Table of Contents: Technology Trends Report",
      description: "Description: Technology Trends Report",
      InfoGraphics: "InfoGraphics: Technology Trends Report",
      methodology: "Methodology: Technology Trends Report",
      price: "$99",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tortor vel odio interdum fermentum. Sed vel libero eget nulla placerat ultrices. Nam aliquet sem at quam tempus consequat.",
    },
    // Add other reports here...
  ]);

  const [showContactForm, setShowContactForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [activeTab, setActiveTab] = useState("tableOfContents"); // Default to Table of Contents tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const categories = [
    "Aerospace & Defense",
    "Agriculture",
    "Automotive & Transportation",
    "Building & Construction",
    "Chemicals & Materials",
    "Consumer Goods",
    "Electronics & Semiconductors",
    "Energy & Natural Resources",
    "Food & Beverages",
    "Healthcare & Life Sciences",
    "Heavy Engineering",
  ];
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 6;

  const handleReadReport = (report) => {
    setSelectedReport(report);
    // Set initial tab when a report is clicked
    handleTabChange("tableOfContents");
  };

  const handleCloseReport = () => {
    setSelectedReport(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleReqSample = () =>{
  //   navigate("/contact");
  // }

  const filteredReports = selectedIndustry
    ? reports.filter((report) => report.industry === selectedIndustry)
    : reports;

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(
    indexOfFirstReport,
    indexOfLastReport
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className=" mx-auto px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
          {/* Sidebar for categories */}
          {!selectedReport && (
            <div className="lg:col-span-1 lg:pr-8 text-sm">
              <div className="sticky top-0 max-h-screen overflow-y-auto">
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="w-full md:w-60 px-4 py-2 mb-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="bg-gray-100 rounded-md p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    Reports by Industry
                  </h2>
                  <ul className="space-y-2 overflow-y-auto max-h-full">
                    <li key="all-reports" className="py-2">
                      <button
                        className={`w-full text-left ${
                          !selectedIndustry
                            ? "font-semibold"
                            : "text-blue-500 hover:underline"
                        }`}
                        onClick={() => setSelectedIndustry(null)}
                      >
                        All Reports
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category} className="py-2">
                        <button
                          className={`w-full text-left ${
                            selectedIndustry === category
                              ? "font-semibold"
                              : "text-blue-500 hover:underline"
                          }`}
                          onClick={() => setSelectedIndustry(category)}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="lg:col-span-3 lg:pr-8">
            <div className="sticky top-0 max-h-screen overflow-y-auto">
              {/* Existing content */}
              {!selectedReport ? (
                <div>
                  <nav className="text-gray-500 mb-4">
                    Home {">"}{" "}
                    {selectedIndustry ? `${selectedIndustry} > ` : ""}{" "}
                    {selectedReport ? selectedReport.title : "All Reports"}
                  </nav>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentReports.map((report) => (
                      <div
                        key={report.id}
                        className="bg-white rounded-md shadow-md p-4"
                      >
                        <h3 className="text-lg font-semibold mb-2">
                          {report.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                          {report.content}
                        </p>
                        <button
                          onClick={() => handleReadReport(report)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                        >
                          Read Report
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* Pagination */}
                  <div className="mt-4 flex justify-center">
                    {filteredReports.length > reportsPerPage && (
                      <nav className="flex items-center">
                        {Array.from(
                          {
                            length: Math.ceil(
                              filteredReports.length / reportsPerPage
                            ),
                          },
                          (_, i) => (
                            <button
                              key={i}
                              onClick={() => paginate(i + 1)}
                              className={`px-3 py-2 mx-1 bg-gray-200 text-gray-700 rounded-md ${
                                currentPage === i + 1
                                  ? "bg-indigo-600 text-white"
                                  : "hover:bg-gray-300"
                              }`}
                            >
                              {i + 1}
                            </button>
                          )
                        )}
                      </nav>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-8 bg-white p-4 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold mb-4">
                    {selectedReport.title}
                  </h2>
                  {/* <p className="text-gray-700 text-sm mb-4">{selectedReport.content}</p> */}
                  <div className="mt-4 bg-white p-4  rounded-md shadow-md">
                  <nav className="-mb-px bg-white flex flex-wrap justify-center lg:justify-start space-x-0 lg:space-x-8 items-center" aria-label="Tabs">
  <button
    onClick={() => handleTabChange("tableOfContents")}
    className={`px-3 py-2 text-md font-medium text-black border-1 ${
      activeTab === "tableOfContents"
        ? "text-indigo-600 border-indigo-600"
        : "text-gray-500 border-transparent hover:text-indigo-600 hover:border-gray-300"
    }`}
  >
    Table of Contents
  </button>
  <div className="border-l border-gray-300 h-6"></div>
  <div className="border-l border-gray-300 h-6 lg:hidden"></div>
  <button
    onClick={() => handleTabChange("description")}
    className={`px-3 py-2 text-md font-medium text-black border-1  ${
      activeTab === "description"
        ? "text-indigo-600 border-indigo-600"
        : "text-gray-500 border-transparent hover:text-indigo-600 hover:border-gray-300"
    }`}
  >
    Description
  </button>
  <div className="border-l border-gray-300 h-6"></div>
  <div className="border-l border-gray-300 h-6 lg:hidden"></div>
  <button
    onClick={() => handleTabChange("InfoGraphics")}
    className={`px-3 py-2 text-md font-medium text-black  ${
      activeTab === "InfoGraphics"
        ? "text-indigo-600 border-indigo-600"
        : "text-gray-500 border-transparent hover:text-indigo-600 hover:border-gray-300"
    }`}
  >
    InfoGraphics
  </button>
  <div className="border-l border-gray-300 h-6"></div>
  <div className="border-l border-gray-300 h-6 lg:hidden"></div>
  <button
    onClick={() => handleTabChange("request_sample")}
    className={`px-3 py-2 text-md font-medium text-black ${
      activeTab === "request_sample"
        ? "text-indigo-600 border-indigo-600"
        : "text-gray-500 border-transparent hover:text-indigo-600 hover:border-gray-300"
    }`}
  >
    Request Sample
  </button>
  <div className="border-l border-gray-300 h-6"></div>
  <div className="border-l border-gray-300 h-6 lg:hidden"></div>
  <button
    onClick={() => handleTabChange("methodology")}
    className={`px-3 py-2 text-md font-medium text-black ${
      activeTab === "methodology"
        ? "text-indigo-600 border-indigo-600"
        : "text-gray-500 border-transparent hover:text-indigo-600 hover:border-gray-300"
    }`}
  >
    Methodology
  </button>
</nav>


                    <hr className="my-2 border-gray-300 mb-6" />

                    {/* Content for each tab */}
                    {/* Content for each tab */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                      {selectedReport && (
                        <div>
                          {activeTab === "tableOfContents" && (
                            <div>{selectedReport.tableOfContents}</div>
                          )}
                          {activeTab === "description" && <div></div>}
                          {activeTab === "InfoGraphics" && (
                            <div>{selectedReport.InfoGraphics}</div>
                          )}
                          {activeTab === "request_sample" && (
                            <div className="isolate bg-gray-100 px-6 py-24 sm:py-10 lg:px-12 rounded-xl">
                              <form
                                onSubmit={handleSubmit}
                                className="mx-auto mt-16 max-w-xl sm:mt-2"
                              >
                                <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-8">
                                  {/* <p className="text-lg md:text-xl font-semibold text-gray-900">
                                Let's Connect and Explore Opportunities Together
                              </p> */}
                                  <p className="text-xl font-bold md:text-base text-black">
                                    Please fill out the below details. Our
                                    customer service representative will contact
                                    you immediately.
                                  </p>
                                </div>
                                <hr className="my-2 border-gray-500 mb-6" />
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                  <div>
                                    <label
                                      htmlFor="name"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Name
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="last-name"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Your Company Name
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-2">
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Email
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                  <div className="sm:col-span-2">
                                    <label
                                      htmlFor="phone-number"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Phone number
                                    </label>
                                    <div className="relative mt-2.5">
                                      <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label
                                          htmlFor="country"
                                          className="sr-only"
                                        >
                                          Country
                                        </label>
                                        <select
                                          id="country"
                                          name="country"
                                          className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                          <option>US</option>
                                          <option>CA</option>
                                          <option>EU</option>
                                        </select>
                                        <ChevronDownIcon
                                          className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                  <div className="sm:col-span-2">
                                    <label
                                      htmlFor="message"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Message
                                    </label>
                                    <div className="mt-2.5">
                                      <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Agreement switch */}
                                <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center">
                                  <Switch.Group
                                    as="div"
                                    className="flex items-center mb-4 sm:mb-0"
                                  >
                                    <Switch
                                      checked={agreed}
                                      onChange={setAgreed}
                                      className={classNames(
                                        agreed
                                          ? "bg-indigo-600"
                                          : "bg-gray-200",
                                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                      )}
                                    >
                                      <span className="sr-only">
                                        Agree to policies
                                      </span>
                                      <span
                                        aria-hidden="true"
                                        className={classNames(
                                          agreed
                                            ? "translate-x-3.5"
                                            : "translate-x-0",
                                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                        )}
                                      />
                                    </Switch>
                                    <Switch.Label className="ml-3 text-sm leading-6 text-gray-600">
                                      By selecting this, you agree to our{" "}
                                      <a
                                        href="#"
                                        className="font-semibold text-orange-400"
                                      >
                                        privacy policy
                                      </a>
                                      .
                                    </Switch.Label>
                                  </Switch.Group>
                                  {/* Submit button */}
                                  <button
                                    type="submit"
                                    className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
                                  >
                                    Let's Talk
                                  </button>
                                </div>
                              </form>
                              {/* Submission success message */}
                              {submitted && (
                                <div className="mt-8 max-w-md mx-auto bg-green-50 border border-green-200 p-4 rounded-md shadow-md">
                                  <p className="text-green-700 font-semibold">
                                    Thank you for contacting us!
                                  </p>
                                  <p className="text-green-600 mt-2">
                                    We'll reach out to you shortly.
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          {activeTab === "methodology" && (
                            <div>{selectedReport.methodology}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleCloseReport}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar for report details */}
          {selectedReport && (
            <div className="lg:col-span-1">
              <div className="sticky top-0 max-h-screen overflow-y-auto">
                <div className="bg-gray-100 rounded-md shadow-md p-4 mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {selectedReport.title}
                  </h3>
                  <div className="border-b pb-2" />
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-b pb-2 pt-2">
                      <span className="font-semibold text-gray-900">
                        Single User License:
                      </span>
                      <span className="ml-2">{selectedReport.price}</span>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-semibold text-gray-900">
                        Excel Datasheet:
                      </span>
                      <span className="ml-2">$99</span>
                    </div>
                    <div className="flex justify-end">
                      <div>
                        <button
                          onClick={() => setShowContactForm(true)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm mr-2"
                        >
                          Buy Now
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setShowContactForm(true)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                        >
                          Request Discount
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md shadow-md p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Related Reports
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Sample related reports */}
                    <div className="flex flex-col">
                      <h4 className="text-md font-semibold mb-2">
                        Related Report 1
                      </h4>
                      <p className="text-sm text-gray-700 mb-4">
                        Brief description of related report 1.
                      </p>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                        View Report
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-md font-semibold mb-2">
                        Related Report 2
                      </h4>
                      <p className="text-sm text-gray-700 mb-4">
                        Brief description of related report 2.
                      </p>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                        View Report
                      </button>
                    </div>
                    {/* Add more related reports here */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Stats />
    <Testimonials />
    <OurClients /> */}
    </>
  );
};

export default ReportPage;
