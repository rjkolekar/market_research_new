import React from 'react';
import Sidebar from './Sidebar';

import Nav from './Nav';
import { useState } from "react";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"; // Import Draft.js Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import Draft.js styles


const Dashboard = () => {
  const [editorStates, setEditorStates] = useState({}); // State variable to manage editor states
  const [editorValue, setEditorValue] = useState(""); // State to hold the editor value
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  
  const [errors, setErrors] = useState({});
 

  const continents = [
    { id: 1, name: 'Asia' },
    { id: 2, name: 'Africa' },
    { id: 3, name: 'North America' },
    // Add more continents as needed
  ];
  const reportTypes = [
    { id: 1, name: 'Aerospace & Defense' },
    { id: 2, name: 'Agriculture' },
    { id: 3, name: 'Automotive & Transportation' },
    { id: 4, name: 'Building & Construction' },
    { id: 5, name: 'Chemicals & Materials' },
    { id: 6, name: 'Consumer Goods' },
    { id: 7, name: 'Electronics & Semiconductors' },
    { id: 8, name: 'Energy & Natural Resources' },
    { id: 9, name: 'Food & Beverages' },
    { id: 10, name: 'Healthcare & Life Sciences' },
    { id: 11, name: 'Heavy Engineering' },
    // Add more report types as needed
  ];
  const authors = [
    { id: 1, name: 'Infinitymarketresearch' },
    { id: 2, name: 'Gajanan' },
    // Add more authors as needed
  ];
 


  const handleChangeEditorState = (newState) => {
    setEditorState(newState);
  };



  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file_name', file); // Use the correct key for file upload
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

      const response = await fetch('http://localhost:8000/api/v1/upload/', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload file'); // Provide a more specific error message
      }

      const data = await response.json();
      console.log('File uploaded successfully:', data);
      return data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const logFormValues = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Upload file first
      const fileInput = document.getElementById('file_name');
      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const uploadedFileData = await uploadFile(file); // Upload the file
        formData.append('file_name', uploadedFileData.file_name); // Assuming API returns the filename
      }

      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

      const response = await fetch('http://localhost:8000/api/v1/reports/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: formData,
      });

      if (!response.ok) {
        const responseData = await response.json();
        setErrors({ message: responseData.message || 'An error occurred' });
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };
 
  return (
    <div className="flex">
      {/* Sidebar (Hidden on Small Screens) */}
      <div className="md:w-64 md:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
       
        <Nav />

        <div className="bg-gray-200 min-h-screen py-12 ">
     
      <div className="container mx-auto px-2 mb-16">
     
        <div className="isolate bg-white px-6 py-12 sm:py-10 lg:px-12 ">
          
          <form onSubmit={logFormValues} className="mx-auto text-gray-900">
            
            <>
              <h2 className="text-2xl text-gray-900 font-bold mb-4">
                Report Details
              </h2>
              <hr className="border-gray-700 my-6" />
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-semibold mb-2"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.title && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="url_keywords"
                        className="block text-sm font-semibold mb-2"
                      >
                        URL Keywords
                      </label>
                      <input
                        type="text"
                        id="url_keywords"
                        name="url_keywords"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.url_keywords && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="dc_description"
                        className="block text-sm font-semibold mb-2"
                      >
                        DC Description
                      </label>
                      <textarea
                        id="dc_description"
                        name="dc_description"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      ></textarea>
                       {errors.dc_description && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="report_display_title"
                        className="block text-sm font-semibold mb-2"
                      >
                        Report Display Title
                      </label>
                      <textarea
                        id="report_display_title"
                        name="report_display_title"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      ></textarea>
                       {errors.report_display_title && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
               
                <div className="mt-6">
                    <label
                      htmlFor="report_description"
                      className="block text-sm font-semibold mb-2"
                    >
                      Report Description
                    </label>
                    <Editor
                       name="report_description"
                       id="report_description"
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                     {errors.report_description && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    <p className="text-sm text-gray-600 mt-2">
                      Provide a detailed description of your report. Use
                      headings (H1, H2) and bullet points for better
                      readability. Incorporate relevant keywords for SEO
                      purposes.
                    </p>
                  </div>
                  <div className="mt-10">
                    <label
                      htmlFor="table_of_contents"
                      className="block text-sm font-semibold mb-2"
                    >
                      Table of Contents
                    </label>
                    <Editor
                    name="table_of_contents"
                    id="table_of_contents"
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                     {errors.table_of_contents && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                  </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="report_type"
                        className="block text-sm font-semibold mb-2"
                      >
                        Report Type
                      </label>
                      <select
                        id="report_type"
                        name="report_type"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                        <option value="">Select Report Type</option>
                        {reportTypes.map(reportType => (
          <option key={reportType.id} value={reportType.id}>{reportType.name}</option>
        ))}
                      </select>
                      {errors.report_type && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="related_reports"
                        className="block text-sm font-semibold mb-2"
                      >
                        Related Reports (Comma-separated IDs)
                      </label>
                      <input
                        type="text"
                        id="related_reports"
                        name="related_reports"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.related_reports && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>

                    <div>
                      <label
                        htmlFor="video_link"
                        className="block text-sm font-semibold mb-2"
                      >
                        Video Link
                      </label>
                      <input
                        type="text"
                        id="video_link"
                        name="video_link"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.video_link && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                </div>
              </div>
            </>

            <>
              <h2 className="text-2xl font-bold mb-4 mt-6">
                Additional Details
              </h2>
              <hr className="border-gray-700 my-6" />

              <div>
                {/* Additional fields for Step 2 */}
                <div>
                  <label
                    htmlFor="meta_description"
                    className="block text-sm font-semibold mb-2"
                  >
                    Meta Description
                  </label>
                  <textarea
                    id="meta_description"
                    name="meta_description"
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                   {errors.meta_description && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                </div>

                {/* Add more additional fields here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="meta_title"
                        className="block text-sm font-semibold mb-2"
                      >
                        Meta Title
                      </label>
                      <input
                        type="text"
                        id="meta_title"
                        name="meta_title"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.meta_title && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="meta_keywords"
                        className="block text-sm font-semibold mb-2"
                      >
                        Meta keywords
                      </label>
                      <textarea
                        id="meta_keywords"
                        name="meta_keywords"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      ></textarea>
                       {errors.meta_keywords && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="no_of_pages"
                        className="block text-sm font-semibold mb-2"
                      >
                        No.of Pages
                      </label>
                      <input
                        type="number"
                        id="no_of_pages"
                        name="no_of_pages"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.no_of_pages && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="published_date"
                        className="block text-sm font-semibold mb-2"
                      >
                        Published Date
                      </label>
                      <input
                        type="date"
                        id="published_date"
                        name="published_date"
                        
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.published_date && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    {/* <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-semibold mb-2"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.country && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div> */}
                     {/* Author Dropdown */}
      <div>
        <label htmlFor="author" className="block text-sm font-semibold mb-2">
          Author
        </label>
        <select
          id="author"
          name="author"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">Select Author</option>
          {authors.map(author => (
          <option key={author.id} value={author.id}>{author.name}</option>
        ))}
        </select>
        {errors.author && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
      </div>

      {/* Continent Dropdown */}
      <div>
        <label htmlFor="continent" className="block text-sm font-semibold mb-2">
          Continent
        </label>
        <select
          id="continent"
          name="continent"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">Select Continent</option>
          {continents.map(continent => (
          <option key={continent.id} value={continent.id}>{continent.name}</option>
        ))}
        </select>
        {errors.continent && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
      </div>
                    {/* Images Input Field */}
                    <div>
                      <label
                        htmlFor="images"
                        className="block text-sm font-semibold mb-2"
                      >
                        Images
                      </label>
                      <input
                        type="file"
                     
                        name="file_name"
                        onChange={uploadFile}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.images && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="single_user_pdf_price"
                        className="block text-sm font-semibold mb-2"
                      >
                        Single User PDF Price (in $)
                      </label>
                      <input
                        type="number"
                        id="single_user_pdf_price"
                        name="single_user_pdf_price"
                        min="0"
                        step="0.01"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.single_user_pdf_price && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="enterprise_pdf_price"
                        className="block text-sm font-semibold mb-2"
                      >
                        Enterprise PDF Price (in $)
                      </label>
                      <input
                        type="number"
                        id="enterprise_pdf_price"
                        name="enterprise_pdf_price"
                        min="0"
                        step="0.01"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.enterprise_pdf_price && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
                      <label
                        htmlFor="five_user_pdf_price"
                        className="block text-sm font-semibold mb-2"
                      >
                        5 User PDF Price (in $)
                      </label>
                      <input
                        type="number"
                        id="five_user_pdf_price"
                        name="five_user_pdf_price"
                        min="0"
                        step="0.01"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.five_user_pdf_price && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                    <div>
                      <label
                        htmlFor="site_pdf_price"
                        className="block text-sm font-semibold mb-2"
                      >
                        Site PDF Price (in $)
                      </label>
                      <input
                        type="number"
                        id="site_pdf_price"
                        name="site_pdf_price"
                        min="0"
                        step="0.01"
                        
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                       {errors.site_pdf_price && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                    <label
                      htmlFor="add_report_scope"
                      className="block text-sm font-semibold mb-2"
                    >
                      Report Description
                    </label>
                    <Editor
                       name="add_report_scope"
                       id="add_report_scope"
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                     {errors.add_report_scope && (
        <div className="text-red-500 text-xs mt-1">{errors.message}</div>
      )}
                    <p className="text-sm text-gray-600 mt-2">
                      Provide a detailed description of your report. 
                    </p>
                  </div>
                <div className="flex  mt-4">
                  <button className="bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none">
                    Add FAQs
                  </button>
                </div>
              </div>
            </>

            {/* Buttons for navigation */}
            <div className="mt-6 flex justify-center">
              <button className="bg-gray-900 text-white text-sm font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-500 focus:outline-none">
                Save Report
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Back to dashboard link */}
    
    </div>
      </div>
    </div>
  );
};

export default Dashboard;





