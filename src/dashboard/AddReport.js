import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"; // Import Draft.js Editor
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import Draft.js styles
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import { EasyImage } from '@ckeditor/ckeditor5-easy-image';

const AddReportForm = () => {
  const [editorStates, setEditorStates] = useState({}); // State variable to manage editor states
  const [editorValue, setEditorValue] = useState(""); // State to hold the editor value
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  
  const [publishDate, setPublishDate] = useState("");
  const [mounted, setMounted] = useState(true);


  const handleChangeEditorState = (newState) => {
    setEditorState(newState);
  };



 
  
  const logFormValues = (e) => {
    e.preventDefault();

    const inputFields = document.querySelectorAll("input, select, textarea");
    const editorFields = document.querySelectorAll(".editorClassName");
    const formValues = {};

    inputFields.forEach((field) => {
      formValues[field.name] = field.value;
    });

    editorFields.forEach((editor) => {
      const fieldName = editor.getAttribute("name"); // Get the name attribute
      const editorState = editorStates[fieldName];
      if (editorState) {
        const contentState = editorState.getCurrentContent();
        const editorContent = contentState.getPlainText();
        formValues[fieldName] = editorContent.trim();
      }
    });

    console.table(formValues);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
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
                    </div>
                    <div>
                      <label
                        htmlFor="urlKeywords"
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
                        {/* Add options dynamically from a list */}
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
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
                    </div>
                  </div>
                </div>
              </div>
              between{" "}
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
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  {/* Left Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    <div>
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
                    </div>
                    <div>
                      <label
                        htmlFor="author"
                        className="block text-sm font-semibold mb-2"
                      >
                        Author
                      </label>
                      <select
                        id="author"
                        name="author"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                        {/* Replace the placeholder options with actual options from your data */}
                        <option value="">Select Author</option>
                        <option value="author1">Author 1</option>
                        <option value="author2">Author 2</option>
                        <option value="author3">Author 3</option>
                      </select>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="grid grid-cols-1 gap-4 md:col-span-1">
                    {/* Select Continent Dropdown */}
                    <div>
                      <label
                        htmlFor="continent"
                        className="block text-sm font-semibold mb-2"
                      >
                        Continent
                      </label>
                      <select
                        id="continent"
                        name="continent"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        {/* Add more options as needed */}
                      </select>
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
                        id="images"
                        name="images"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
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
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold mb-2"
                    >
                      Add Report Scope
                    </label>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleChangeEditorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="border border-gray-300 rounded p-2"
                      editorClassName="editorClassName"
                    />
                    
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
      <div className="absolute top-0 left-0 mt-4 ml-14">
        <Link
          to="/dashboard"
          className="text-sm text-indigo-600 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AddReportForm;
