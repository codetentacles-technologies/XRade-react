import React, { useEffect, useState } from "react";
// ======Images==========
import TotalRaisedImg from "../../public/images/dashboard/TotalRaised.svg";
import TotalUsers from "../../public/images/dashboard/TotalUsers.svg";
import TotalWithdrawals from "../../public/images/dashboard/TotalWithdrawals.svg";
import ChallengingIncome from "../../public/images/dashboard/ChallengingIncome.svg";
// component===============
import Cardpackage from "../components/Cards";
import { Search } from "lucide-react";
import BreadCrumbs from "../components/BreadCrumbs.jsx";
// icons======
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAccount, useReadContract } from "wagmi";
import { blockConfig } from "../config/BlockChainConfig.jsx";
import { readContract } from "@wagmi/core";
import { formatUnits, parseUnits } from "viem";
import { configRead } from "../utils/RainbowKitConfig.jsx";
import packagetitle from "../../public/images/dashboard/packagetitle.svg";
import ChartComponent from "../components/ChartComponent.jsx";

const packages = [
  {
    title: "Package Title",
    price: "$50 / 300 Days",
    percentage: "(1%)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac ",
    imageUrl: packagetitle,
    duration: 300,
    dailyIncome: 1, // 1% of 50
  },
  {
    title: "Package Title",
    price: "$100 / 300 Days",
    percentage: "(1%)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac ",
    imageUrl: packagetitle,
    duration: 300,
    dailyIncome: 1, // 1% of 100
  },
  {
    title: "Package Title",
    price: "$250 / 200 Days",
    percentage: "(1.5%)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac",
    imageUrl: packagetitle,
    duration: 200,
    dailyIncome: 1.5,
  },
  {
    title: "Package Title",
    price: "$500 / 200 Days",
    percentage: "(1.5%)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac",
    imageUrl: packagetitle,
    duration: 200,
    dailyIncome: 1.5,
  },
];

const Dashboard = () => {
  const { isConnected, chainId, address } = useAccount();
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInvest, setTotalInvest] = useState(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState(0);
  const [userDeposits, setUserDeposits] = useState(0);
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [totalUserInvestedAmount, setTotalUserInvestedAmount] = useState(0);
  const [setTotalUserWithdrawlAmount, setSetTotalUserWithdrawlAmount] = useState(0);

  const checkTotalUsers = async () => {
    try {
      const totalUsers = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "totalUsers",
      });
      setTotalUsers(formatUnits(totalUsers, 0));
      return totalUsers;
    } catch (error) {
      return false;
    }
  };

  const checkTotalInvest = async () => {
    try {
      const totalInvest = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "totalInvest",
      });
      setTotalInvest(formatUnits(totalInvest, 18));
      return totalInvest;
    } catch (error) {
      return false;
    }
  };

  const checktotalWithdrawal = async () => {
    try {
      const totalWithdrawals = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "totalWithdrawal",
      });
      setTotalWithdrawals(formatUnits(totalWithdrawals, 18));
      return totalWithdrawals;
    } catch (error) {
      return false;
    }
  };

  const getUserDeposits = async () => {
    try {
      const userDepositsdata = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "getUserDeposits",
        args: [address],
      });

      setUserDeposits(
        userDepositsdata.map((pkg) => ({
          planAmount: formatUnits(pkg.amount, 18),
          planDuration: packages[pkg.planId].duration,
          dailyIncome: packages[pkg.planId].dailyIncome,
        }))
      );
      return userDepositsdata;
    } catch (error) {
      return [];
    }
  };

  const getTotalReferrals = async () => {
    try {
      const data = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "users",
        args: [address],
      });
      setTotalReferrals(formatUnits(data[2], 0));
      return data;
    } catch (error) {
      return false;
    }
  };

  const getTotalInvestedAmount = async () => {
    try {
      const totalInvest = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "usersTotalInvested",
        args: [address],
      });
      setTotalUserInvestedAmount(formatUnits(totalInvest, 18));
      return totalInvest;
    } catch (error) {
      return false;
    }
  };

  const getTotalWithdrawlAmount = async () => {
    try {
      const totalWithdrawl = await readContract(configRead, {
        abi: blockConfig[chainId].XRADE_ABI,
        address: blockConfig[chainId].XRADE_ADDRESS,
        functionName: "usersTotalWithdrawal",
        args: [address],
      });
      setSetTotalUserWithdrawlAmount(formatUnits(totalWithdrawl, 18));
      return totalWithdrawl;
    } catch (error) {
      return false;
    }
  };

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Dashboard", isCurrent: true },
  ];

  // For animations

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    checkTotalUsers();
    checkTotalInvest();
    checktotalWithdrawal();
    getUserDeposits();
    getTotalReferrals();
    getTotalInvestedAmount();
    getTotalWithdrawlAmount()
  }, []);

  return (
    <div className="dashboard">
      <BreadCrumbs title="Dashboard" breadcrumbs={breadcrumbs} />
      <div className="flex flex-col gap-[94px]">
        <div className="flex flex-col gap-[36px]">
          <div className=" " data-aos="fade-up">
            <h3 className=" text-primary font-bold text-2xl pb-1">
              Welcome to the heart of your crypto investment journey!
            </h3>
            <p className="text-lightblue pt-2 pb-1">
              This dashboard is your gateway to real-time insights, empowering you to track and maximize your earnings effortlessly. Here, you'll find up-to-the-minute updates on your investments, referral performance, and rewards.
            </p>
          </div>
          <div className="p-4 px-6 border rounded-[24px] lg:w-1/2" data-aos="fade-up">
            <p className="text-lg font-medium text-secondary">Your Personal Invitation Link</p>
            <p className="text-lg font-bold text-primary flex items-center gap-3 break-all">https://howard.codetentaclestechnologies.tech/register?ref=1 <span className="bg-homeabout rounded-[4px] p-1.5"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.4 10.3C1.63 10.3 1 9.67 1 8.9V1.9C1 1.13 1.63 0.5 2.4 0.5H9.4C10.17 0.5 10.8 1.13 10.8 1.9M6.6 4.7H13.6C14.3732 4.7 15 5.3268 15 6.1V13.1C15 13.8732 14.3732 14.5 13.6 14.5H6.6C5.8268 14.5 5.2 13.8732 5.2 13.1V6.1C5.2 5.3268 5.8268 4.7 6.6 4.7Z" stroke="#28418D" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span></p>
          </div>
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 " data-aos="fade-up">
            <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
              <div>
                <h3 className="text-secondary font-bold text-md">Total Users</h3>
                <p className="text-3xl font-bold text-primary">{totalUsers || 0}</p>
              </div>
              <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
                <img src={TotalUsers} alt="Total Users" />
              </span>
            </div>

            <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
              <div>
                <h3 className="text-secondary font-bold text-md">Total Raised</h3>
                <p className="text-3xl font-bold text-primary">{totalInvest || 0}</p>
              </div>
              <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
                <img src={TotalRaisedImg} alt="Total Raised" />
              </span>
            </div>

            <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
              <div>
                <h3 className="text-secondary font-bold text-md">Total Withdrawals</h3>
                <p className="text-3xl font-bold text-primary">{totalWithdrawals || 0}</p>
              </div>
              <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
                <img src={TotalWithdrawals} alt="Total Withdrawals" />
              </span>
            </div>
          </div>

          {/* graph section */}
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-8" data-aos="fade-up">
            <div className="xl:col-span-2">
              <img src="/images/graph-img.webp" alt="graph" className="rounded-3xl shadow-md hover:shadow-2xl" />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row xl:flex-col">
              <img src="/images/active-graph.webp" alt="active-graph" className="rounded-[10px] shadow-md hover:shadow-xl" />
              <img src="/images/source-graph.webp" alt="source-graph" className="rounded-[10px] shadow-md hover:shadow-xl" />
            </div>
          </div>
        </div>

        {/* Package Section */}
        <div className="" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-primary">Buy Packages</h2>
          <p className="text-lightblue mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu
            stetur eget.
          </p>
          <Cardpackage packages={packages} />
        </div>

        {/* Recent Investment */}
        {/* <div className="mb-10" data-aos="fade-up">
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
              {userDeposits.length > 0
                ? userDeposits.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                      }`}
                  >
                    <td className="p-4 text-secondary text-md font-medium text-center">
                      ${item.planAmount}
                    </td>
                    <td className="p-4 text-secondary text-md font-medium text-center">
                      {item.dailyIncome} %
                    </td>
                    <td className="p-4 text-secondary text-md font-medium text-center">
                      {item.planDuration} Days
                    </td>
                  </tr>
                ))
                : "No Investment Found"}
            </tbody>
          </table>
        </div>
      </div> */}

        {/* Dividend Income */}
        <section data-aos="fade-up" className="container">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h4 className="text-primary text-4xl font-bold flex items-center gap-3">
                  Dividend Income
                </h4>
              </div>
              <p className="text-secondary text-base font-normal">
                Choose from a range of investment packages that offer attractive
                daily returns for a specified duration. This stable Dividend
                income structure provides consistent income, allowing you to grow
                your portfolio with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full investment shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3 transform transition-all duration-[500ms] ease-[ease] delay-0 group ">
                <p className="text-4xl font-black text-white  transform transition-all duration-300 ease-in-out">
                  2X
                </p>
                <p className="text-2xl font-bold text-white  transform transition-all duration-300 ease-in-out">
                  Double Your Investment
                </p>
                <p className="text-lg font-normal text-white  transform transition-all duration-300 ease-in-out">
                  Within 24 hours
                </p>
              </div>
              <div className="w-full cashback shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3 transform transition-all duration-[500ms] ease-[ease] delay-0 group ">
                <p className="text-4xl font-black text-white  transform transition-all duration-300 ease-in-out">
                  50%
                </p>
                <p className="text-2xl font-bold text-white  transform transition-all duration-300 ease-in-out">
                  50% Cashback
                </p>
                <p className="text-lg font-normal text-white  transform transition-all duration-300 ease-in-out">
                  Bonus reward
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Level Income */}
        <section data-aos="fade-up" className="container">
          <div className="flex flex-col gap-8">
            <h4 className="text-primary text-4xl font-bold flex items-center justify-center gap-3 w-full">
              Level Income{" "}
              <img
                src="/images/level-income-img.png"
                alt="setting"
                className="w-[37px] h-[36px]"
              />
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-center gap-6">
              <div className="p-3 bg-white rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 1</h5>
                <p className="font-bold text-md text-[#031641]">0.25%</p>
              </div>
              <div className="p-3 bg-[#F4F7FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 2</h5>
                <p className="font-bold text-md text-[#031641]">0.25%</p>
              </div>
              <div className="p-3 bg-[#EDF1FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 3</h5>
                <p className="font-bold text-md text-[#031641]">0.25%</p>
              </div>
              <div className="p-3 bg-[#E7EBFF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 4</h5>
                <p className="font-bold text-md text-[#031641]">4%</p>
              </div>
              <div className="p-3 bg-[#DEE5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 5</h5>
                <p className="font-bold text-md text-[#031641]">4%</p>
              </div>
              <div className="p-3 bg-[#D9E1FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 6</h5>
                <p className="font-bold text-md text-[#031641]">3%</p>
              </div>
              <div className="p-3 bg-[#D3DDFF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 7</h5>
                <p className="font-bold text-md text-[#031641]">2%</p>
              </div>
              <div className="p-3 bg-[#CAD5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 8</h5>
                <p className="font-bold text-md text-[#031641]">1%</p>
              </div>
              <div className="p-3 bg-[#B8C7FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 9</h5>
                <p className="font-bold text-md text-[#031641]">6%</p>
              </div>
              <div className="p-3 bg-[#B1C2FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                <h5 className="font-bold text-lg text-secondary">LEVEL 10</h5>
                <p className="font-bold text-md text-[#031641]">5%</p>
              </div>
            </div>
          </div>
        </section>


        {/* Network section */}
        <section data-aos="fade-up" className="container">
          <div className="flex flex-col gap-8">
            <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold">
              Per-Hour Mining Bonus: Engaging  Your Network
            </h4>
            <div className="flex flex-col md:flex-row  gap-6">
              {/* Card 1 */}
              <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                  <img src="/images/refferal-img.webp" alt="" className="m-auto w-[66px] h-[66px]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-primary">Referral Benefits</h3>
                  <p className="text-base font-medium text-secondary">
                    Bring 10 referrals within  48 hours.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
                <img src="/images/dotted-line.webp" alt="" />
              </div>

              {/* Card 2 */}
              <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center  hover:shadow-xl">
                  <img src="/images/reward-img.webp" alt="" className="m-auto  w-[52px] h-[66px]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-primary">Reward</h3>
                  <p className="text-base font-medium text-secondary">
                    Receive a continuous  reward of $0.25 per  hour.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
                <img src="/images/dotted-line.webp" alt="" />
              </div>

              {/* Card 3 */}
              <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                  <img src="/images/timer-img.webp" alt="" className="m-auto w-[56px] h-[66px]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-2xl text-primary">Duration</h3>
                  <p className="text-base font-medium text-secondary">
                    Enjoy your bonus for 30  days, credited directly to  your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* win trips */}
        <div className="" data-aos="fade-up">
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
                {/* <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button> */}
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
                <h3 className="text-2xl font-bold text-primary">Turkey + Dubai Tour</h3>
                <p className="text-lightblue text-base font-medium">
                  $10,000 Direct Business within 45 days
                </p>
                {/* <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button> */}
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
                {/* <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Jackpot Rewards */}
        <section data-aos="fade-up" className="container">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-3 justify-between">
              <div className="flex flex-col ">
                <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 ">
                  Jackpot Rewards: Luxurious Recognition
                  <img
                    src="/images/jackpot-rewards.png"
                    alt="setting"
                    className=" h-[36px]"
                  />
                </h4>
                <p className="text-secondary text-base font-normal">
                  Beyond travel, we offer luxurious rewards for high-achieving
                  investors. Our Jackpot Rewards recognize your exceptional
                  dedication and commitment to the platform.
                </p>
              </div>
              {/* <button className="flex gap-2 items-center justify-center text-center text-nowrap bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-[186px] hover-arrow-btn">
              Explore All <ArrowRight className="arrow-icon" size={24} />
            </button> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/superbike.png" // Replace with your image URL
                    alt="Dubai Tour"
                    className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 gap-2">
                  <h3 className="text-2xl font-bold text-primary">Superbike</h3>
                  <p className="text-lightblue text-base font-medium">
                    $50,000 Direct Business within 100 days
                  </p>
                </div>
              </div>

              <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/suv-car.png" // Replace with your image URL
                    alt="Dubai Tour"
                    className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 gap-2">
                  <h3 className="text-2xl font-bold text-primary">SUV Car</h3>
                  <p className="text-lightblue text-base font-medium">
                    $100,000 Direct Business within 100 days
                  </p>
                </div>
              </div>

              <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/house-fund.png" // Replace with your image URL
                    alt="Dubai Tour"
                    className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 gap-2">
                  <h3 className="text-2xl font-bold text-primary">House Fund</h3>
                  <p className="text-lightblue text-base font-medium">
                    $500,000 Direct Business within 100 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Exponential Growth with the  CTO Fund */}
        <section data-aos="fade-up" className="container">
          <div className="flex flex-col gap-8 items-center justify-center">
            <h4 className="flex items-center gap-2 text-primary text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Unlock Exponential Growth with the CTO Fund
              <img src="/images/cto-funds.webp" className="h-9" alt="" />
            </h4>
            <div className="relative w-[300px] h-[300px] mx-auto animate-rotate">
              {/* <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-[322px] h-[322px] rounded-full border-[30px] border-blue "></div>
              <div className="absolute w-[228px] h-[228px] rounded-full border-[20px] border-primary"></div>
              <div className="absolute w-[158px] h-[158px] rounded-full border-[15px] border-[#031641]"></div>
            </div> */}
              <div className="absolute inset-0 flex justify-center items-center">
                <ChartComponent />
              </div>
              <div className="absolute left-[60%] top-[-5%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
                <p className="font-bold">$2,000,000</p>
                <p>20% Bonus</p>
              </div>
              <div className="absolute left-[30%] top-[70%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
                <p className="font-bold">$1,500,000</p>
                <p>10% Bonus</p>
              </div>
              <div className="absolute left-[45%] top-[30%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
                <p className="font-bold">$750,000</p>
                <p>5% Bonus</p>
              </div>
            </div>
            {/* <HalfDoughnutChart/> */}
            <p className="text-lg text-secondary font-medium mt-2">
              Invest in the CTO Fund and receive a bonus based on your business
              level. Within 200 days
            </p>
          </div>
        </section>

        {/* Challenging Income Section */}
        {/* <div className="mb-10" data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-4 text-primary">Challenging Income</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white border p-4 rounded-[24px] gap-5 lg:gap-0 transform transition-all duration-300 ease-in-out hover:shadow-referhover hover:border-0 grid grid-cols-1 sm:grid-cols-12"
                        >
                            <div className="sm:col-span-2 ">
                                <img
                                    src={ChallengingIncome}
                                    className="w-[55px]"
                                    alt="Total Users"
                                />
                            </div>

                            <div className="sm:col-span-7 ">
                                <h3 className="text-lg font-bold text-primary">
                                    Refer to your 50 friends
                                </h3>
                                <p className="text-[#67789C] text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit
                                    ut nulla eu stetur eget. Nec, ac,
                                </p>
                            </div>

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
            </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
