import React from "react";
// ======Images==========
import TotalRaisedImg from "../../public/images/dashboard/TotalRaised.svg";
import TotalUsers from "../../public/images/dashboard/TotalUsers.svg";
import TotalWithdrawals from "../../public/images/dashboard/TotalWithdrawals.svg";
import PackageCards from "../components/Packagecards";

const Dashboard = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-primary">Buy Packages</h2>
        <p className="text-primary mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut
          nulla eu stetur eget.
        </p>
        <PackageCards />
      </div>
      {/* Activity Overview section */}
      <h2 className="text-2xl font-bold text-primary">Activity Overview</h2>
      <p className="text-primary mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla
        eu stetur eget.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Users</h3>
            <p className="text-3xl font-bold text-primary">200</p>
          </div>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">Total Raised</h3>
            <p className="text-3xl font-bold text-primary">50</p>
          </div>
        </div>

        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">
              Total Withdrawals
            </h3>
            <p className="text-3xl font-bold text-primary">100</p>
          </div>
        </div>
        <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300">
          <div>
            <h3 className="text-secondary font-bold text-md">
              Total Withdrawals
            </h3>
            <p className="text-3xl font-bold text-primary">100</p>
          </div>
        </div>
      </div>

      {/* Recent Investment */}

      <div className="mb-10">
        {/* Recent Investment Section */}
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Recent Investment
        </h2>
        <div className="overflow-x-auto bg-white shadow-xl rounded-[24px]">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-primary font-bold text-center">
                  Package Amount
                </th>
                <th className="text-left p-4 text-primary font-bold text-center">
                  Daily Income
                </th>
                <th className="text-left p-4 text-primary font-bold text-center">
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
                  <td className="p-4 text-secondary text-md font-bold text-center">
                    $50
                  </td>
                  <td className="p-4 text-secondary text-md font-bold text-center">
                    1%
                  </td>
                  <td className="p-4 text-secondary text-md font-bold text-center">
                    300 Day
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* win trips */}

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-primary">Win Trips</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
            <div className="relative">
              <img
                src="/images/dubai-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">Dubai Tour</h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
            </div>
          </div>

          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
            <div className="relative">
              <img
                src="/images/turkey-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">
                Turkey + Dubai Tour
              </h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
            <div className="relative">
              <img
                src="/images/europe-img.png"
                alt="Dubai Tour"
                className="w-full h-[262px] object-cover"
              />
            </div>
            <div className="p-6 gap-2">
              <h3 className="text-2xl font-bold text-primary">Europe Tour</h3>
              <p className="text-lightblue text-base font-medium">
                $10,000 Direct Business within 45 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
