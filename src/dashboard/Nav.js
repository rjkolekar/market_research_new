import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import React from 'react';
import logo1 from "../components/images/logo1.png"


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src={logo1} alt="Infinity Market Research" />
          </Link>
        </div>
        
        
        <div className="hidden sm:flex items-center space-x-4">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-gray-700 font-semibold">John Doe</span>
            </div>
            <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span
 className="sr-only">Your Company</span>
 <img
   className="h-8 w-auto"
   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
   alt=""
 />
</a>
<button
 type="button"
 className="-m-2.5 rounded-md p-2.5 text-gray-700"
 onClick={() => setMobileMenuOpen(false)}
>
 <span className="sr-only">Close menu</span>
 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
</button>
</div>
<div className="mt-6 flow-root">
<div className="-my-6 divide-y divide-gray-500/10">
 <div className="space-y-2 py-6">
 <Link
     to="/dashboard"
     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
     onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
   >
     Dashboard
   </Link>
   <Link
     to="/add-reports"
     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
     onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
   >
     Reports
   </Link>
   <Link
     to="/payments"
     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
     onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
   >
     Payments
   </Link>
   <Link
     to="/profile"
     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
     onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
   >
     Profile
   </Link>
 </div>

</div>
</div>
</Dialog.Panel>
</Dialog>
</header>
)
}

// const menuItems = [
//   { to: "/dashboard", text: "Dashboard" },
//   { to: "/add-reports", text: "Add Report"},
//   { to: "/payments", text: "Payments" },
//   { to: "/profile", text: "Profile" },
//   { to: "/dashboard-reports", text: "Reports" },
 
// ];