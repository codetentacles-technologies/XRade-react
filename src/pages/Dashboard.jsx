import React, { useEffect, useState } from "react";
// ======Images==========
import TotalRaisedImg from "../../public/images/dashboard/TotalRaised.svg";
import TotalUsers from "../../public/images/dashboard/TotalUsers.svg";
import TotalWithdrawals from "../../public/images/dashboard/TotalWithdrawals.svg";
import ChallengingIncome from "../../public/images/dashboard/ChallengingIncome.svg";
// component===============
import Cardpackage from "../components/Cards";
import { Check, Search } from "lucide-react";
import BreadCrumbs from "../components/BreadCrumbs.jsx";
// icons======
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAccount, useConnect, useReadContract, useWriteContract } from "wagmi";

import { blockConfig } from "../config/BlockChainConfig.jsx";
import { readContract } from "@wagmi/core";
import { formatUnits, parseUnits } from "viem";
import { configRead } from "../utils/RainbowKitConfig.jsx";
import packagetitle from "../../public/images/dashboard/packagetitle.svg";
import ChartComponent from "../components/ChartComponent.jsx";
import { Ellipsis, ChevronRight } from "lucide-react";
import useWaitForTransaction from "../hooks/useWaitForTransaction.jsx";

import XRADE_ABI from "../assets/abi/xrade.json";
import toast from "react-hot-toast";
import AddPassportDetails from "./AddPassportDetails.jsx";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useParams } from "react-router-dom";
import TradingViewWidget from "../components/TradingViewWidget.jsx";
import CountdownTimer from "../components/CountDownTimer.jsx";

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
    const [totalUserInvestedAmount, setTotalUserInvestedAmount] = useState(0);
    const [claiming, setClaiming] = useState(false);
    const [userStatus, setUserStatus] = useState();

    const { writeContractAsync } = useWriteContract();
    const { waitForTransaction } = useWaitForTransaction();
    const { openConnectModal } = useConnectModal();

    const [isAnyActivePlan, setIsAnyActivePlan] = useState(false);
    const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

    const [copied, setCopied] = useState(false);
    let { referral } = useParams();
    const currentUrl = window.location.origin + "/register/" + address;

    const copyToClipboard = () => {
        toast.success("Link copied to clipboard");
        const url = currentUrl;
        navigator.clipboard.writeText(url);
        setCopied(true);

        // Reset copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

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

    const getUsersEarning = async () => {
        try {
            const totalInvest = await readContract(configRead, {
                abi: blockConfig[chainId].XRADE_ABI,
                address: blockConfig[chainId].XRADE_ADDRESS,
                functionName: "getUsersEarning",
                args: [address],
            });
            // debugger
            setTotalUserInvestedAmount(totalInvest);
            return totalInvest;
        } catch (error) {
            return false;
        }
    };


    const getUsersStatus = async () => {
        try {
            const totalInvest = await readContract(configRead, {
                abi: blockConfig[chainId].XRADE_ABI,
                address: blockConfig[chainId].XRADE_ADDRESS,
                functionName: "getUsersStatus",
                args: [address],
            });

            setUserStatus(totalInvest);
            return totalInvest;
        } catch (error) {
            return false;
        }
    };




    const handleUserWithdrawl = async () => {
        try {
            if (!isConnected) {
                toast.error("Please connect your wallet");
                return;
            }

            setIsTransaction(true);

            // Invest in the plan
            setTransactionMessage("Claiming...");
            setClaiming(true);
            const investTx = await writeContractAsync({
                address: blockConfig[chainId].XRADE_ADDRESS,
                abi: XRADE_ABI,
                functionName: "withdraw",
            });

            setTransactionMessage("Confirming transaction...");
            await waitForTransaction(investTx, 100);
            toast.success("Successfully Claimed!");
        } catch (error) {
            console.error("Claim error:", error);
            toast.error(error.shortMessage || "Failed to claim");
        } finally {
            setIsTransaction(false);
            setTransactionMessage("Please wait...");
            setClaiming(false);
        }
    };

    const getCurrentDeposits = async () => {
        try {
            const data = await readContract(configRead, {
                abi: blockConfig[chainId].XRADE_ABI,
                address: blockConfig[chainId].XRADE_ADDRESS,
                functionName: "getCurrentDeposit",
                args: [address],
            });

            setIsAnyActivePlan(true);
            setCurrentPlanIndex(data.planId);
            return data;
        } catch (error) {
            setIsAnyActivePlan(false);
            return [];
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
        // Set an interval to call getROIamount every 5 seconds
        const intervalId = setInterval(() => {
            getUsersEarning();
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    useEffect(() => {
        checkTotalUsers();
        checkTotalInvest();
        checktotalWithdrawal();
        getUserDeposits();
        getCurrentDeposits();
        getUsersEarning();
        getUsersStatus();
    }, [isConnected]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        if (!isConnected) openConnectModal();
    }, [isConnected]);

    const formatNumber = ((value, decimals) => {
        if (value == undefined) return 0;
        return formatUnits(value, decimals);
    });

    return (
        <>
            {isPopupOpen && <AddPassportDetails handleClose={handleClosePopup} />}
            <div className="dashboard text-primary">
                <BreadCrumbs title="Dashboard" breadcrumbs={breadcrumbs} />
                <div className="flex flex-col gap-[94px]">
                    <div className="flex flex-col gap-[36px]">
                        <div className=" " data-aos="fade-up">
                            <h3 className=" text-primary font-bold text-2xl pb-1">
                                Welcome to the heart of your crypto investment journey!
                            </h3>
                            <p className="text-lightblue pt-2 pb-1">
                                This dashboard is your gateway to real-time insights, empowering you
                                to track and maximize your earnings effortlessly. Here, you'll find
                                up-to-the-minute updates on your investments, referral performance,
                                and rewards.
                            </p>
                        </div>

                        {/* Header Section */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
                            data-aos="fade-up"
                        >
                            <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
                                <div>
                                    <h3 className="text-secondary font-bold text-md">
                                        Total Users
                                    </h3>
                                    <p className="text-3xl font-bold text-primary">
                                        {totalUsers || 0}
                                    </p>
                                </div>
                                <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
                                    <img src={TotalUsers} alt="Total Users" />
                                </span>
                            </div>

                            <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
                                <div>
                                    <h3 className="text-secondary font-bold text-md">
                                        Total Raised
                                    </h3>
                                    <p className="text-3xl font-bold text-primary">
                                        {Number(totalInvest).toFixed(2) || 0}
                                    </p>
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
                                    <p className="text-3xl font-bold text-primary">
                                        ${Number(totalWithdrawals).toFixed(2) || 0}
                                    </p>
                                </div>
                                <span className="text-4xl transform transition-transform duration-300 group-hover:scale-90">
                                    <img src={TotalWithdrawals} alt="Total Withdrawals" />
                                </span>
                            </div>
                        </div>

                        {/* graph section */}
                        <div className="grid grid-cols-1 xl:grid-cols-3  gap-8" data-aos="fade-up">
                            <div className="xl:col-span-2 w-full m-auto rounded-3xl shadow-xl transition-all duration-300 ease-in-out p-4">
                                <TradingViewWidget />
                            </div>
                            <div className="flex flex-col gap-8">
                                <img
                                    src="/images/active-graph.webp"
                                    alt="active-graph"
                                    className="rounded-[10px] shadow-md hover:shadow-xl"
                                />
                                <img
                                    src="/images/source-graph.webp"
                                    alt="source-graph"
                                    className="rounded-[10px] shadow-md hover:shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Package Section */}
                    <div className="" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-primary">Buy Packages</h2>
                        <p className="text-lightblue mb-8">
                            You can buy one package at a time
                        </p>
                        <Cardpackage
                            packages={packages}

                            referral={referral}
                        />
                    </div>

                    {/* Activity Overview */}
                    <section data-aos="fade-up">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h5 className="text-2xl font-bold text-primary">
                                    Your Activity Overview
                                </h5>
                                <p className="text-normal text-lightblue text-base">
                                    All stats are realtime and showing all your current activity in AITrade
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                                {isAnyActivePlan && (
                                    <div className=" px-6 p-4 border rounded-[24px] flex justify-between hover:shadow-md hover:border-white">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xl font-semibold text-primary">
                                                {packages[currentPlanIndex].price}
                                            </p>
                                            <p className="text-xl font-semibold text-primary">
                                                {" "}
                                                {packages[currentPlanIndex].percentage}
                                            </p>
                                        </div>
                                        <img
                                            src="/images/gift-box.webp"
                                            alt="gift-box"
                                            className="w-[50px] h-[53px] "
                                        />
                                    </div>
                                )}
                                {isConnected && (
                                    <div className=" xl:col-span-2 p-4  px-6 border rounded-[24px] flex flex-col gap-2 hover:shadow-md hover:border-white">
                                        <p className="text-lg font-medium text-secondary">
                                            Your Personal Invitation Link
                                        </p>
                                        <p className="text-lg font-bold text-primary flex items-center gap-3 break-all">
                                            <span
                                                onClick={copyToClipboard}
                                                className="cursor-pointer"
                                            >
                                                {currentUrl.substring(0, 9)}...
                                                {currentUrl.substring(currentUrl.length - 7)}
                                            </span>
                                            <span className="bg-homeabout rounded-[4px] p-1.5">
                                                {copied ? (
                                                    <Check />
                                                ) : (
                                                    <svg
                                                        width="16"
                                                        height="15"
                                                        viewBox="0 0 16 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        onClick={copyToClipboard}
                                                    >
                                                        <path
                                                            d="M2.4 10.3C1.63 10.3 1 9.67 1 8.9V1.9C1 1.13 1.63 0.5 2.4 0.5H9.4C10.17 0.5 10.8 1.13 10.8 1.9M6.6 4.7H13.6C14.3732 4.7 15 5.3268 15 6.1V13.1C15 13.8732 14.3732 14.5 13.6 14.5H6.6C5.8268 14.5 5.2 13.8732 5.2 13.1V6.1C5.2 5.3268 5.8268 4.7 6.6 4.7Z"
                                                            stroke="#28418D"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                )}
                                <div className=" p-4  px-6 border rounded-[24px] flex flex-col gap-4 justify-center hover:shadow-md hover:border-white">
                                    <p className="text-xl font-semibold text-primary">
                                        Withdraw your Income
                                    </p>
                                    <div className="flex items-center gap-4 justify-between">
                                        <p className="text-3xl font-bold text-primary ">
                                            ${formatNumber(totalUserInvestedAmount?.totalEarnings, 18)}
                                        </p>
                                        <button
                                            disabled={claiming}
                                            onClick={handleUserWithdrawl}
                                            className="bg-primary text-sm text-white py-2 px-6 rounded-full w-max"
                                        >
                                            {claiming ? "Claiming..." : "Withdraw"}
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            {/* Header Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 ">
                            <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-secondary font-bold text-md">
                                            Total Referrals
                                        </h3>
                                        <p className="text-3xl font-bold text-primary ">
                                            {formatNumber(totalUserInvestedAmount?.totalReferrals, 0)}
                                        </p>
                                    </div>
                                </div>
                                <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                    <div className="flex flex-col gap-3 w-full">
                                        <h3 className="text-secondary font-bold text-md">
                                            Total Invested
                                        </h3>
                                        <p className="text-3xl font-bold text-primary flex justify-between w-full ">
                                            ${formatNumber(totalUserInvestedAmount?.totalInvestment, 18)}
                                        </p>
                                    </div>
                                </div>



                                <div className="group bg-boxgradient shadow-dashboard p-4 flex items-center justify-between rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-secondary font-bold text-md">
                                            Total Withdrawals
                                        </h3>
                                        <p className="text-3xl font-bold text-primary ">
                                            ${formatNumber(totalUserInvestedAmount?.totalWithdrawal, 18)}
                                        </p>
                                    </div>
                                </div>
                                <div className="group bg-boxgradient shadow-dashboard p-6 flex items-center justify-between rounded-[24px] transition-transform duration-300">
                                    <div>
                                        <h3 className="text-secondary font-bold text-md">
                                            Dividend Income
                                        </h3>
                                        <p className="text-3xl font-bold text-primary">
                                            ${formatNumber(totalUserInvestedAmount?.currentROI, 18)}
                                        </p>
                                    </div>
                                </div>
                                <div className="group bg-boxgradient shadow-dashboard p-4 my-auto rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-secondary font-bold text-md">
                                            Referral Earning
                                        </h3>
                                        <p className="text-3xl font-bold text-primary ">
                                            ${formatNumber(totalUserInvestedAmount?.referralIncome, 18)}
                                        </p>
                                    </div>
                                </div>
                                <div className="group bg-boxgradient shadow-dashboard p-4 my-auto rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-secondary font-bold text-md">
                                            Level Income
                                        </h3>
                                        <p className="text-3xl font-bold text-primary ">
                                            ${formatNumber(totalUserInvestedAmount?.levelIncome, 18)}
                                        </p>
                                    </div>
                                </div>


                            </div>
                            {/* Challenging Income */}
                            <section className="" data-aos="fade-up">
                                <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-center ">
                                        <div>
                                            <h2 className="text-2xl font-bold text-primary">
                                                Recent Investments
                                            </h2>

                                        </div>
                                        {/* <a
                                        href="#"
                                        className="text-secondary text-sm font-semibold flex items-center gap-1 "
                                    >
                                        See All Transactions <ChevronRight size={16} />
                                    </a> */}
                                    </div>

                                    {/* Transactions Table */}
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {userDeposits.length > 0
                                                    ? userDeposits.map((deposit, index) => (
                                                        <tr key={index}>
                                                            <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold flex flex-col w-[20%]">
                                                                ${deposit.planAmount}
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold w-[20%]">
                                                                {deposit.planDuration}{" "}
                                                                <span className="text-secondary text-xs font-medium pl-1">
                                                                    {" "}
                                                                    Days
                                                                </span>
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap mx-auto text-center w-[35%]">
                                                                <span className="flex flex-col items-center">
                                                                    {/* Status could be added here if necessary */}
                                                                </span>
                                                            </td>

                                                            <td className="p-4 whitespace-nowrap text-sm text-secondary text-center font-medium w-[20%]">
                                                                {deposit.dailyIncome} %
                                                            </td>
                                                            {/* <td className="p-4 whitespace-nowrap text-sm text-secondary font-medium w-[5%]">
                                                        <button className="text-secondary hover:text-gray-600">
                                                            <Ellipsis size={32} />
                                                        </button>
                                                    </td> */}
                                                        </tr>
                                                    ))
                                                    : "No Investment Found"}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>



                    {/* Dividend Income */}
                    <section data-aos="fade-up" className="container">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <div className="flex items-center justify-between flex-col xl:flex-row gap-4 w-full">
                                        <h4 className="text-primary text-4xl font-bold flex items-center gap-3">
                                            Dividend Income
                                        </h4>
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            {Number(totalUserInvestedAmount?.joinTime) > 0 ? <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                <CountdownTimer endDate={Number(totalUserInvestedAmount?.joinTime) * 1000 + 86400000} /> left
                                            </p> : <></>}
                                            {userStatus?._hasRecievedCashback ?
                                                <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                    <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                    Activated
                                                </p> : <></>
                                            }
                                            <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                {totalUserInvestedAmount?.higherPlanRef < 2 ? 2 - Number(totalUserInvestedAmount?.higherPlanRef) : 0} Referral Left
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-secondary text-base font-normal">
                                    Choose from a range of investment packages that offer attractive
                                    daily returns for a specified duration. This stable Dividend
                                    income structure provides consistent income, allowing you to
                                    grow your portfolio with confidence.
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

                    {/* Network section */}
                    <section data-aos="fade-up" className="container">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center justify-between flex-col xl:flex-row gap-4">
                                <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold">
                                    Per-Hour Mining Bonus: Engaging Your Network
                                </h4>
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    {/* <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                        <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                        20 Days Left to Achieve
                                    </p> */}
                                    <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                        <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                        {userStatus?._hasRecievedCashback ? totalUserInvestedAmount?.higherPlanRef < 12 ? 12 - Number(totalUserInvestedAmount?.higherPlanRef) : 0
                                            : totalUserInvestedAmount?.higherPlanRef < 10 ? 10 - Number(totalUserInvestedAmount?.higherPlanRef) : 0} Referral Left
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row  gap-6">
                                {/* Card 1 */}
                                <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                                    <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                                        <img
                                            src="/images/refferal-img.webp"
                                            alt=""
                                            className="m-auto w-[66px] h-[66px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-semibold text-2xl text-primary">
                                            Referral Benefits
                                        </h3>
                                        <p className="text-base font-medium text-secondary">
                                            Bring 10 referrals within 48 hours.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
                                    <img src="/images/dotted-line.webp" alt="" />
                                </div>

                                {/* Card 2 */}
                                <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                                    <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center  hover:shadow-xl">
                                        <img
                                            src="/images/reward-img.webp"
                                            alt=""
                                            className="m-auto  w-[52px] h-[66px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-semibold text-2xl text-primary">
                                            Reward
                                        </h3>
                                        <p className="text-base font-medium text-secondary">
                                            Receive a continuous reward of $0.25 per hour.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
                                    <img src="/images/dotted-line.webp" alt="" />
                                </div>

                                {/* Card 3 */}
                                <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
                                    <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                                        <img
                                            src="/images/timer-img.webp"
                                            alt=""
                                            className="m-auto w-[56px] h-[66px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-semibold text-2xl text-primary">
                                            Duration
                                        </h3>
                                        <p className="text-base font-medium text-secondary">
                                            Enjoy your bonus for 30 days, credited directly to your
                                            account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Level Income */}
                    <section data-aos="fade-up" className="container">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                                <h4 className="text-primary text-4xl font-bold flex items-center  gap-3 w-full">
                                    Level Income{" "}
                                    <img
                                        src="/images/level-income-img.png"
                                        alt="setting"
                                        className="w-[37px] h-[36px]"
                                    />
                                </h4>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-center gap-6">
                                <div className=" bg-[#EFFFEF] rounded-2xl text-grey-darker border-2 border-[#D0F9D0] w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-2">
                                    <h5 className="font-semibold text-base text-[#149514] flex items-center ">
                                        <Check size={20} /> LEVEL 1
                                    </h5>
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

                    {/* win trips */}
                    <div className="" data-aos="fade-up">
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full mb-6">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Win Trips</h2>
                            <button className="bg-primary text-white text-base font-semibold rounded-full w-max py-2 px-8">
                                <CountdownTimer endDate={Number(totalUserInvestedAmount?.joinTime) * 1000 + (86400000 * 45)} /> left
                            </button>
                        </div>
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
                                    <div>
                                        {/* Your existing content */}
                                        {/* <button
                                            className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                            onClick={handleButtonClick}
                                        >
                                            Completed
                                        </button> */}

                                        {userStatus?._hasQualified?.[0] ? <button
                                            className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                            onClick={handleButtonClick}
                                        >
                                            Completed
                                        </button> : <></>}

                                        {/* Render the popup conditionally */}
                                    </div>
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

                                    {/* <button className="bg-blue text-white text-sm gap-2 text-center flex items-center justify-center py-1 px-4 mt-3 rounded-full hover:bg-[#192265] hover-arrow-btn">
                Complete the Task{" "}
                <span>
                  <ArrowRight className="arrow-icon" size={24} />
                </span>
              </button> */}
                                    {userStatus?._hasQualified?.[1] ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Completed
                                    </button> : <></>}

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
                                    {userStatus?._hasQualified?.[2] ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Completed
                                    </button> : <></>}

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
                                    <button className="bg-primary text-white text-base font-semibold rounded-full w-max py-2 px-8">
                                        <CountdownTimer endDate={Number(totalUserInvestedAmount?.joinTime) * 1000 + (86400000 * 100)} /> left
                                    </button>
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
                                        <h3 className="text-2xl font-bold text-primary">
                                            Superbike
                                        </h3>
                                        <p className="text-lightblue text-base font-medium">
                                            $50,000 Direct Business within 100 days
                                        </p>
                                    </div>
                                    {userStatus?._hasQualified?.[3] ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Completed
                                    </button> : <></>}
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
                                    {userStatus?._hasQualified?.[4] ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Completed
                                    </button> : <></>}
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
                                        <h3 className="text-2xl font-bold text-primary">
                                            House Fund
                                        </h3>
                                        <p className="text-lightblue text-base font-medium">
                                            $500,000 Direct Business within 100 days
                                        </p>
                                    </div>
                                    {userStatus?._hasQualified?.[5] ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Completed
                                    </button> : <></>}
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
        </>
    );
};

export default Dashboard;
