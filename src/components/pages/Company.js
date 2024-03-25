import React from 'react';
import aboutImage from '../images/about.jpg';
import promiseimage from '../images/promise.jpg'
const CompanyPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Company Header Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Infinity Market Reseach</h1>
          <p className="text-lg leading-relaxed">Unlocking Insights for Your Business Success</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          {/* Display the company image */}
          <img src={aboutImage} alt="About-Infinity Market Reseach" className="rounded-lg w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            We are a passionate team of researchers and analysts dedicated to providing
            actionable insights and strategic solutions to businesses across industries.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With years of experience and expertise, we help our clients navigate the
            complexities of the market landscape and make informed decisions that drive success.
          </p>
          {/* Call to Action button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Learn More
          </button>
        </div>
      </div>

           {/* Why Choose Us Section */}
           <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-lg">Our team consists of industry experts with extensive experience in market research.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-lg">We tailor our research methodologies to meet the unique needs of each client.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
              <p className="text-lg">We leverage advanced analytics to provide actionable insights and recommendations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-lg">We prioritize client satisfaction and strive to exceed expectations in every project.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to empower businesses with the knowledge and insights they
            need to thrive in today's competitive market environment.
          </p>
        </div>
      </div>

      {/* Values Section */}
          {/* Values Section */}
          <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-lg">We uphold the highest standards of integrity in everything we do.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-lg">We embrace innovation and continuously seek new ways to deliver value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-lg">We foster collaboration and teamwork to achieve shared goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-lg">We strive for excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </div>

 
{/* Our Promise Section */}
<div className="container mx-auto px-4 py-12 flex flex-wrap items-center">
<div className="w-full md:w-1/2 md:pl-8">
    <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
    <p className="text-lg leading-relaxed">
      When you partner with us, you embark on a journey of discovery and growth. We are dedicated to providing you with insights that inspire confidence and drive meaningful outcomes. Our commitment to excellence, coupled with our passion for unraveling market intricacies, ensures that you receive not just data, but actionable intelligence that propels your business toward success. Thank you for considering us as your trusted research partner. Together, let’s explore the endless possibilities and chart a course for your business’s prosperous future.
    </p>
  </div>
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    {/* Display the company image */}
    <img src={promiseimage} alt="About Infinity Market Reseach" className="rounded-lg w-full h-auto" />
  </div>
 
</div>



    </div>
  );
};

export default CompanyPage;
