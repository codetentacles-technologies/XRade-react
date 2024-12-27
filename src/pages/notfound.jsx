import React from "react";
import NotFound from "../../public/images/404.svg";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function notfound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={NotFound} />
        <h1 className="font-extrabold text-5xl text-center py-4 text-primary">
          Page Not Found
        </h1>
        <p className="text-lightblue">
          Hey User! Looks like you’re heading to a wrong page
        </p>
        <Link to="/">
          {" "}
          <button className="left-arrow-button flex gap-2 mt-5 items-center justify-start text-center bg-blue text-white text-lg font-bold rounded-full py-3 px-6 w-max hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            {" "}
            <ArrowLeft size={24} className="left-arrow-icon" /> Go Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default notfound;
