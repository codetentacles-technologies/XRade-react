import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-header border-t-2 border-lightgray">
      <div className="flex flex-col justify-center items-center gap-9 py-8 px-4 mx-auto  max-w-full sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full ">
          <img src="/images/Xtrade-logo.webp" alt="" className="w-[60px]" />
          <div>
            <p className="text-secondary text-lg font-bold text-center">
              Corporate office address-AI trade corporation My street 1215
              Houston Texas 77057 USA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-base text-secondary font-medium">
              Social Media Links{" "}
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                to="https://www.facebook.com/profile.php?id=61571041291810"
                className="no-underline"
              >
                {" "}
                <Facebook
                  color="#ffffff"
                  fill="#ffffff"
                  className="bg-primary p-1 rounded-[4px] w-[24px] h-[24px]"
                />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61571041291810"
                className="no-underline"
              >
                {" "}
                <Linkedin
                  color="#ffffff"
                  fill="#ffffff"
                  className="bg-primary p-1 rounded-[4px] w-[24px] h-[24px]"
                />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61571041291810"
                className="no-underline"
              >
                {" "}
                <Twitter color="#28418D" fill="#28418D" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-primary font-normal">
            @XTrade 2024. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
