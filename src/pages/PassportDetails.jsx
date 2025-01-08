import React from "react";
import { Edit, File, Pencil, X } from "lucide-react";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link } from "react-router-dom";

const PassportDetails = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/Dashboard" },
    { name: "Passport Details", isCurrent: true },
  ];
  return (
    <div className="text-primary ">
      {/* Breadcrumb and Title */}

      <BreadCrumbs title="Passport Details" breadcrumbs={breadcrumbs} />
      <div className="flex flex-col gap-4">
        {/* Edit Button */}
        <div className="flex justify-end">
          <Link to="/EditPassportDetails" className="flex items-center gap-2 bg-primary text-white font-medium px-8 py-2 rounded-full ">
          <Pencil size={16} />
            Edit
          </Link>
        </div>

        {/* Passport Details Section */}
        <div className="flex flex-col gap-6 w-full">
          {/* Name Field */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
            <label
              htmlFor="name"
              className="text-base font-semibold text-secondary w-full lg:w-[28%]"
            >
              Name:
            </label>
            <p className="text-base font-semibold text-secondary">Vijay Patil</p>
          </div>

          {/* Passport Copy */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
            <label
              htmlFor="passportCopy"
              className="text-base font-semibold text-secondary w-full lg:w-[40%]"
            >
              Scanned Passport Copy:
            </label>
            <div className="flex items-center gap-2  border border-[#D6D8DE]  p-3 w-full">
              <File size={18} className="text-[#989DAB]" />
              <span className="text-[#989DAB] text-sm">Passport.jpg</span>
              <button
                type="button"
                className="ml-auto text-[#989DAB] font-medium "
              >
               <X size={16}/>
              </button>
            </div>
          </div>

          {/* Identity Document */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center">
            <label
              htmlFor="identityCopy"
              className="text-base font-semibold text-secondary w-full lg:w-[40%]"
            >
              Scanned Identity Copy (Aadhar or Pan Card):
            </label>
            <div className="flex items-center gap-2  border border-[#D6D8DE]  p-3 w-full">
              <File size={18} className="text-[#989DAB]" />
              <span className="text-[#989DAB] text-sm">Passport.jpg</span>
              <button
                type="button"
                className="ml-auto text-[#989DAB] font-medium "
              >
               <X size={16}/>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PassportDetails;
