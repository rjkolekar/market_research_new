import React from "react";

const Disclaimer = () => {
  // Disclaimer content
  const disclaimerContent = `Disclaimer:
  We take no responsibility of incorrect or erroneous information provided to us by manufacturers, suppliers or other market participants. The data presented in our analysis is subjected to change as our data is largely based on interviews with the industry experts. Our reports should not be disclosed or sold to any other third party sources or general publication as it is solely for the internal company use only. 
  Our clients must read the disclaimer and all terms & conditions associated with the use of our research solutions. Without prior permission, our reports should not be disclosed, circulated, or any unlawful activity should not take place. Our research reports should not be transferred, reproduced by any means like electronically or in the form of a photocopy, audio recording.
  Please write to us for more information on the terms and conditions: info@infinitymr.com`;

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

      {/* Disclaimer Section */}

      <div className="container mx-auto px-4 py-12 flex flex-wrap items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-lg leading-10">{disclaimerContent}</p>
        </div>
      </div>
      <hr className="my-2 border-gray-300 mb-6 m-6" />

    </div>
  );
};

export default Disclaimer;
