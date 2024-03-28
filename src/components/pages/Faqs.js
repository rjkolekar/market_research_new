import React from "react";

const faqs = () => {
  // FAQ content
  const faqs = [
    {
      question: "Which are the payment options available for international clients?",
      answer: "Reply: The interested clients can make payment online through PayPal or they can choose a bank wire payment method. Our representative will be sharing the official invoice with all the necessary details for bank wire payment method."
    },
    {
      question: "What is the difference between single, multi and corporate user license types?",
      answer: "Reply: Single User License implies that the report is accessible to 1 user only. Multi-User License implies that the report can be accessed by a team of upto 5 users. Corporate User License indicates that the report can be accessed within across the global locations of the organization."
    },
    {
      question: "What are the report delivery timeline and delivery method?",
      answer: "Reply: Once the payment is completed, the report will be dispatched within 36 to 72 working hours to the client’s email address. For single and multi-user license the report will be dispatched in encrypted and non-printable PDF file format. For Corporate User License, the report will be delivered in a printable PDF file format and quantitative data in Excel will be shared."
    },
    {
      question: "Which information do we gather about our clients?",
      answer: "Reply: We collect only basic information like Name, Email Address, Country, Company Name and Contact details. We maintain the data confidentiality and no private or confidential information is collected by us."
    },
    {
      question: "Who are our clients?",
      answer: "Reply: We provide research reports to all small, medium and large business enterprises including top-tier and fortune 500 companies. Our clientele consists of industrialists, entrepreneurs, research institutes, organizations, and many others."
    }
  ];
  return (
    <div className="bg-white">
      {/* Company Header Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Infinity Market Reseach
          </h1>
          <p className="text-lg leading-relaxed">
            Unlocking Insights for Your Business Success
          </p>
        </div>
      </div>

     {/* FAQ Section */}
     <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
      <hr className="my-2 border-gray-300 mb-6 m-6" />

    </div>
  );
};

export default faqs;
