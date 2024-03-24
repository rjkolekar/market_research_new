import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "The insights provided by Market Insights Co. were instrumental in shaping our marketing strategy. Highly recommended!",
      author: "John Doe",
      role: "CEO of ABC Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      quote: "We are extremely satisfied with the professionalism and quality of work delivered by Market Trends Inc. Great job!",
      author: "Jane Smith",
      role: "CMO of XYZ Corporation",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      quote: "Market Analysts Ltd. provided us with valuable data and insights that helped us make informed decisions. Highly recommended!",
      author: "Alice Johnson",
      role: "COO of LMN Enterprises",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      quote: "We have been working with Market Research Pros for years and their expertise has been indispensable for our business growth.",
      author: "Bob Wilson",
      role: "CTO of PQR Solutions",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    // Add more testimonials as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 2, 0));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 2, testimonials.length - 2));
  };

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24 lg:px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.slice(startIndex, startIndex + 2).map(testimonial => (
            <div key={testimonial.id} className="bg-gray-100 rounded-lg p-4">
              <blockquote className="text-center text-sm sm:text-base font-medium leading-6 text-gray-700">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center">
                <img className="h-12 w-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.author} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
        {/* Arrows for navigation */}
        <div className="flex justify-center mt-8">
          {startIndex > 0 && (
            <button className="mr-4 bg-gray-100 rounded-full p-2 shadow-md" onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {startIndex < testimonials.length - 2 && (
            <button className="bg-gray-100 rounded-full p-2 shadow-md" onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
