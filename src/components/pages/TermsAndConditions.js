import React from "react";

const TermsAndConditions = () => {
  // Terms & Conditions content
  const termsAndConditionsContent = [
    {
      heading: "Terms & Conditions",
      content: "The services offered by us follow certain terms and conditions which should be followed by all the users visiting our website or purchasing our services. These terms & conditions are subjected to change. Thus, users are requested to read complete details before proceeding with a transaction. Communicating with our clients via email and call. Any client showing interest in our services by providing us with their contact details or email address gives us permission to contact you. Also, this will grant us the permission send promotional offers through call or email."    },
    {
      heading: "Copyright Information",
      content:
        "The content displayed on our website except for text, images, logos, audio, icons is under the ownership of Infinity Market Reseach. Such information is protected by Infinity Market Reseach and by international copyright laws. By visiting our website you agree not to distribute, copy, replicate, extract or resell any information without prior consent or permission from us.",
    },
    {
      heading: "Payment Terms",
      content:
        "Once the order is placed and payment is received in full, the report dispatch process will be initiated. We at Infinity Market Reseach follow “No Refund” Policy which is also stated under the “Return Policy” Section. Post-payment confirmation we will dispatch the report within 24 to 48 working hours. However, under certain conditions like custom content, the delivery timeline will vary. We will always try our best to deliver the service at the earliest post the payment is confirmed.",
    },
    {
      heading: "Delivery Method",
      content:
        "As per the standard business practice, we deliver the report in PDF format to the client’s email address within the specified delivery timelines. Also, the report can be delivered in Word, PPT, or Excel format as per the user’s request. A hard copy of the report can be dispatched to the client’s physical address which will incur an additional charge of US $500.",
    },
    {
      heading: "Refund/ Cancellation Policy",
      content:
        "Infinity market Research Company follows no refund or cancellation policy as our services can be easily distributed to others. We request our users to go through the complete sample report, content published on our website and confirm the scope of the report. We assure our clients to resolve all their post-purchase queries or concerns till their satisfactory. Requesting additional information apart from the one which is not mentioned in the sample or advertised on our website will lead to additional cost.",
    },
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

      {/* Terms & Conditions Section */}
      <div className="container mx-auto px-4 py-12">
        {termsAndConditionsContent.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{item.heading}</h2>
            <p className="text-lg">{item.content}</p>
          </div>
        ))}
      </div>
      <hr className="my-2 border-gray-300 mb-6 m-6" />
    </div>
  );
};

export default TermsAndConditions;
