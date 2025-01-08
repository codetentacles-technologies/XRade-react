import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs';
import { CloudUpload } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditPassportDetails = () => {

  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/Dashboard" },
    { name: "Passport Details", isCurrent: true },
];

  return (
    <div className='text-primary'>
       <BreadCrumbs title="Passport Details" breadcrumbs={breadcrumbs} />
       <div>
      

        {/* Form Fields */}
        <form className="flex flex-col gap-4">
          {/* Name Input */}
          <div className='flex flex-col gap-3'>
            <label htmlFor="name" className="block text-secondary text-base font-semibold ">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full border border-[#D6D8DE] rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Uploads */}
          <div className="flex gap-4">
            {/* Scanned Passport Copy */}
            <div className="w-1/2 flex flex-col gap-3">
              <label htmlFor="passport" className="block text-secondary text-base font-semibold ">
                Scanned Passport Copy
              </label>
              <div className="border border-[#D6D8DE] rounded-[8px] p-3 text-center">
                <input
                  type="file"
                  id="passport"
                  className="hidden"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer flex items-center justify-center text-[#989DAB] gap-2.5 h-16"
                >
                  <CloudUpload />
                  Upload file
                </label>
              </div>
            </div>

            {/* Scanned Identity Copy */}
            <div className="w-1/2 flex flex-col gap-3">
              <label htmlFor="identity" className="block text-secondary text-base font-semibold ">
                Scanned Identity Copy (Aadhar or Pan Card)
              </label>
              <div className="border border-[#D6D8DE] rounded-[8px] p-3 text-center">
                <input
                  type="file"
                  id="identity"
                  className="hidden"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer flex items-center justify-center text-[#989DAB] gap-2.5 h-16"
                >
                  <CloudUpload />
                  Upload file
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <Link
              to="/Voucher"
              type="submit"
              className="bg-primary text-white px-16 py-4 rounded-full hover:bg-blue-700 text-xl font-bold"
            >
              Submit
            </Link>
          </div>
        </form>
       </div>
    </div>
  )
}

export default EditPassportDetails