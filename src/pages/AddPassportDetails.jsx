import { CloudUpload, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddPassportDetails = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl shadow-lg  w-full md:w-[80%] lg:w-2/3  p-8 relative flex flex-col gap-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-secondary bg-homeabout p-1.5 rounded-full"
        >
          <X size={20} />
        </button>
        <div className='flex flex-col gap-4'>
          {/* Title and Subtitle */}
          <h2 className="text-2xl font-bold text-center text-primary">
            Add Passport Details
          </h2>
          <p className="text-center text-sm font-normal text-secondary">
            Welcome to AI Trade! We're thrilled to have you join our global community of empowerment and mutual support. If you were invited, your inviter’s ID should appear below. If not, don’t worry — click below to get started, and we’ll connect you with an amazing community leader. Let’s all thrive together!
          </p>
        </div>

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
              to="/PassportDetails"
              type="submit"
              className="bg-primary text-white px-16 py-4 rounded-full hover:bg-blue-700 text-xl font-bold"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPassportDetails;
