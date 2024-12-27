import React, { useEffect } from "react";
// ======Images==========
import TotalRaisedImg from "../../public/images/dashboard/TotalRaised.svg";
import TotalUsers from "../../public/images/dashboard/TotalUsers.svg";
import TotalWithdrawals from "../../public/images/dashboard/TotalWithdrawals.svg";
import ChallengingIncome from "../../public/images/dashboard/ChallengingIncome.svg";
// component===============
import Cardpackage from "../components/Cards";
import { Search } from "lucide-react";
import BreadCrumbs from "../components/BreadCrumbs.JSX";
// icons======
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Dashboard", isCurrent: true },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="dashboard">
      <BreadCrumbs title="Dashboard" breadcrumbs={breadcrumbs} />
      <div className="mb-7 p-4 px-6 border rounded-[24px]" data-aos="fade-up">
        <h3 className=" text-primary font-bold text-2xl pb-1">
          Welcome to the heart of your crypto investment journey!
        </h3>
        <p className="text-[#67789C] pt-2 pb-1">
          This dashboard is your gateway to real-time insights, empowering you
          to track and maximize your earnings effortlessly. Here, you'll find
          up-to-the-minute updates on your investments, referral performance,
          and rewards.
          <br /> Stay informed with detailed metrics, including your total
          investments, active packages, referral network growth, and earnings
          breakdown. Whether you’re monitoring your daily dividends, exploring
          new income opportunities, or strategizing for your next milestone,
          this dashboard is designed to keep you ahead.
          <br /> Take control, make informed decisions, and unlock the full
          potential of our innovative multi-tiered ecosystem. Your path to
          financial growth starts here!
        </p>
      </div>
      {/* Header Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-7"
        data-aos="fade-up"
      >
        <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Users</h3>
            <p className="text-3xl font-bold text-primary">200</p>
          </div>
          <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
            <img src={TotalUsers} alt="Total Users" />
          </span>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Raised</h3>
            <p className="text-3xl font-bold text-primary">50</p>
          </div>
          <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
            <img src={TotalRaisedImg} alt="Total Raised" />
          </span>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">
              Total Withdrawals
            </h3>
            <p className="text-3xl font-bold text-primary">100</p>
          </div>
          <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
            <img src={TotalWithdrawals} alt="Total Withdrawals" />
          </span>
        </div>
      </div>

      {/* Package Section */}
      <div className="mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-primary">Buy Packages</h2>
        <p className="text-lightblue mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut
          nulla eu stetur eget.
        </p>
        <Cardpackage />
      </div>
      {/* Activity Overview section */}
      <h2 className="text-2xl font-bold text-primary">Activity Overview</h2>
      <p className="text-lightblue mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla
        eu stetur eget.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
        data-aos="fade-up"
      >
        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Users</h3>
            <p className="text-3xl font-bold text-primary">200</p>
          </div>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Raised</h3>
            <p className="text-3xl font-bold text-primary">50</p>
          </div>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div>
            <h3 className="text-secondary font-bold text-md">
              Total Withdrawals
            </h3>
            <p className="text-3xl font-bold text-primary">100</p>
          </div>
        </div>
        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transform transition-all duration-300 ease-in-out hover:scale-105">
          <div>
            <h3 className="text-secondary font-bold text-md">
              Total Withdrawals
            </h3>
            <p className="text-3xl font-bold text-primary">100</p>
          </div>
        </div>
      </div>

      {/* Recent Investment */}

      <div className="mb-10" data-aos="fade-up">
        {/* Recent Investment Section */}
        <div className=" flex items-center justify-between mb-5 flex-col lg:flex-row">
          <h2 className="text-2xl font-bold text-primary">Recent Investment</h2>
          <div className="relative flex items-center flex-col lg:flex-row">
            <input
              type="text"
              placeholder="placeholder"
              className="border placeholder-[#989DAB] py-2 px-10 rounded-[8px] focus:outline-none focus:border-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#989DAB]">
              <Search size={18} />
            </span>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-xl rounded-[24px]">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className=" p-4 text-primary font-semibold text-center">
                  Package Amount
                </th>
                <th className=" p-4 text-primary font-semibold text-center">
                  Daily Income
                </th>
                <th className=" p-4 text-primary font-semibold text-center">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}`}
                >
                  <td className="p-4 text-secondary text-md font-medium text-center">
                    $50
                  </td>
                  <td className="p-4 text-secondary text-md font-medium text-center">
                    1%
                  </td>
                  <td className="p-4 text-secondary text-md font-medium text-center">
                    300 Day
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* win trips */}

      <div className="mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-primary">Win Trips</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
            <div className="relative overflow-hidden">
              <img
                src="/images/dubai-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">Dubai Tour</h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
              <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button>
            </div>
          </div>

          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
            <div className="relative overflow-hidden">
              <img
                src="/images/turkey-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">
                Turkey + Dubai Tour
              </h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
              <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
            <div className="relative overflow-hidden">
              <img
                src="/images/europe-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">Europe Tour</h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
              <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Challenging Income Section */}
      <div className="mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Challenging Income
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="bg-white border p-4 rounded-[24px] gap-5 lg:gap-0 transform transition-all duration-300 ease-in-out hover:shadow-referhover hover:border-0 grid grid-cols-1 sm:grid-cols-12"
            >
              {/* First Column (col-4) */}
              <div className="sm:col-span-2 ">
                <img
                  src={ChallengingIncome}
                  className="w-[55px]"
                  alt="Total Users"
                />
              </div>

              {/* Second Column (col-5) */}
              <div className="sm:col-span-7 ">
                <h3 className="text-lg font-bold text-primary">
                  Refer to your 50 friends
                </h3>
                <p className="text-[#67789C] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  sit ut nulla eu stetur eget. Nec, ac,
                </p>
              </div>

              {/* Third Column (col-3) */}
              <div className="sm:col-span-3 flex items-end flex-col gap-5 justify-between">
                <div>
                  <button className="bg-white border border-primary text-primary py-2 font-bold px-9 flex items-center rounded-full transform transition-all group duration-300 ease-in-out hover:bg-primary hover:text-white w-auto relative">
                    <span className="group-hover:translate-x-[-0.5rem]">
                      Start
                    </span>
                    <ArrowRight
                      size={20}
                      className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out"
                    />
                  </button>
                </div>

                <div>
                  <p className="text-lightgray text-sm mt-2 text-end">
                    Start: 00d 00h 00m
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
