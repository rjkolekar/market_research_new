import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Stats from "./common/Stats";
import Testimonials from "./common/Testimonials";
import OurClients from "./common/OurClients";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactSalesForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic
    // For demonstration purposes, we're just setting the submitted state to true
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us for Market Insights
          </h1>
          <p className="text-lg leading-relaxed">
            Get in Touch with Infinity Market Research
          </p>
        </div>
      </div>
      <div className="bg-white text-gray-900 py-12">
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-md leading-relaxed">
                Get in Touch with Infinity Market Research
              </p>
              <p className=" text-md leading-relaxed">
                At Infinity Market Research, we are committed to providing
                exceptional service and support to our clients. Whether you have
                inquiries, feedback, or are interested in exploring
                collaboration opportunities, we're here to assist you every step
                of the way.
              </p>
              <p className="text-md leading-relaxed mt-4">
                <strong className="block mb-2">Our Location</strong>
                <span className="block">123 Main Street,</span>
                <span className="block">New York, NY 10001,United States</span>

                <br />
              </p>

              <p className="text-md leading-relaxed mt-4">
                <strong>Phone Number</strong>
                <br />
                (+1) 765-222-2444
              </p>
              <p className="text-md leading-relaxed mt-4">
                <strong>Email Address</strong>
                <br />
                info@infinitymr.com
              </p>
              <p className="text-md leading-relaxed mt-4">
                We look forward to hearing from you and meeting your needs. Your
                feedback and inquiries are valuable to us as we strive to
                deliver the best possible service.
              </p>
            </div>

            {/* Contact Sales Form */}
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
                    Please fill out the below details. Our customer service
                    representative will contact you immediately.
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
                        <label htmlFor="country" className="sr-only">
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
                        agreed ? "bg-indigo-600" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                    <Switch.Label className="ml-3 text-sm leading-6 text-gray-600">
                      By selecting this, you agree to our{" "}
                      <a href="#" className="font-semibold text-indigo-600">
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
          </div>
        </div>
      </div>

      <Stats />
      <Testimonials />
      <OurClients />
    </>
  );
}
