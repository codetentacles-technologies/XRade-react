import React, { useEffect, useState } from "react";
// ======Images==========
import TotalRaisedImg from "../../public/images/dashboard/TotalRaised.svg";
import TotalUsers from "../../public/images/dashboard/TotalUsers.svg";
import TotalWithdrawals from "../../public/images/dashboard/TotalWithdrawals.svg";
import ChallengingIncome from "../../public/images/dashboard/ChallengingIncome.svg";
// component===============
import Cardpackage from "../components/Cards";
import { Check, ChevronDown, Search } from "lucide-react";
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
import CountDownTimer from "../components/CountdownTimer.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";

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
        amount: 50
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
        amount: 100
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
        amount: 250
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
        amount: 500
    },
];

const Dashboard = () => {
    const { isConnected, chainId, address } = useAccount();
    // const address = "0xc894FeAeE3Fde9DEFaC7B49a24417d972B21DFF0";
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalInvest, setTotalInvest] = useState(0);
    const [totalWithdrawals, setTotalWithdrawals] = useState(0);
    const [userDeposits, setUserDeposits] = useState(0);
    const [totalUserInvestedAmount, setTotalUserInvestedAmount] = useState(0);
    const [claiming, setClaiming] = useState(false);
    const [claimingCTO, setClaimingCTO] = useState(false);
    const [userStatus, setUserStatus] = useState();

    const { writeContractAsync } = useWriteContract();
    const { waitForTransaction } = useWaitForTransaction();
    const { openConnectModal } = useConnectModal();

    const [isAnyActivePlan, setIsAnyActivePlan] = useState(false);
    const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
    const [transactionMessage, setTransactionMessage] = useState("Please wait...");
    const [isTransaction, setIsTransaction] = useState(false);

    const [isTransactionClaim, setIsTransactionClaim] = useState(false);



    const [copied, setCopied] = useState(false);
    let { referral } = useParams();
    const currentUrl = window.location.origin + "/dashboard/" + address;

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

            setUserDeposits({

                planAmount: formatUnits(userDepositsdata.amount, 18),
                planDuration: userDepositsdata.duration,
                dailyIncome: userDepositsdata.dailyROI,
                // end : pkg.end
            })
            debugger
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

            if (formatNumber(totalUserInvestedAmount?.totalEarnings, 18) <= 10) {
                toast.error("Min 10$ needed to withdraw");
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
            const response = await waitForTransaction(investTx, 100);
            if (response.status == "reverted") {
                toast.error("Transaction failed");
            }
            else {
                toast.success("Successfully Claimed!");
            }
        } catch (error) {
            console.error("Claim error:", error);
            toast.error(error.shortMessage || "Failed to claim");
        } finally {
            setIsTransaction(false);
            setTransactionMessage("Please wait...");
            setClaiming(false);
        }
    };

    const handleClaimCTO = async () => {
        debugger
        try {
            if (!isConnected) {
                toast.error("Please connect your wallet");
                return;
            }

            if (formatNumber(userStatus?.[4], 18) <= 0) {
                toast.error("Amount not available");
                return;
            }

            setClaimingCTO(true);
            const investTx = await writeContractAsync({
                address: blockConfig[chainId].XRADE_ADDRESS,
                abi: XRADE_ABI,
                functionName: "claimDirectEarnings",
            });

            setTransactionMessage("Confirming transaction...");
            const response = await waitForTransaction(investTx, 100);
            if (response.status == "reverted") {
                toast.error("Transaction failed");
            }
            else {
                toast.success("Successfully Claimed!");
            }
        } catch (error) {
            console.error("Claim error:", error);
            toast.error(error.shortMessage || "Failed to claim");
        } finally {
            setClaimingCTO(false);
        }
    };


    const handleClaimJackpot = async (id) => {
        try {
            if (!isConnected) {
                toast.error("Please connect your wallet");
                return;
            }


            setIsTransactionClaim(true);

            const investTx = await writeContractAsync({
                address: blockConfig[chainId].XRADE_ADDRESS,
                abi: XRADE_ABI,
                functionName: "claimJackpot",
                args: [id]
            });

            const response = await waitForTransaction(investTx, 100);
            if (response.status == "reverted") {
                toast.error("Transaction failed");
            }
            else {
                toast.success("Successfully Claimed!");
            }
        } catch (error) {
            console.error("Claim error:", error);
            toast.error(error.shortMessage || "Failed to claim");
        } finally {
            setIsTransactionClaim(false);

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
            getUserDeposits();
            getCurrentDeposits();
            getUsersEarning();
            getUsersStatus();
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [address]); // Re-run effect whenever `address` changes


    useEffect(() => {

        checkTotalUsers();
        checkTotalInvest();
        checktotalWithdrawal();
        getUserDeposits();
        getCurrentDeposits();
        getUsersEarning();
        getUsersStatus();
    }, [isConnected, address]);

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
        return Number(formatUnits(value, decimals)).toFixed(2);
    });

    const [trafficData, setTrafficData] = useState([
        { label: "Direct", value: 143382, progress: 70 },
        { label: "Referral", value: 87974, progress: 40 },
    ]);

    const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 7 Days");

  const options = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

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
                            <div className="flex flex-col md:flex-row xl:flex-col gap-8">
                                <div className="grid grid-cols-2 items-center justify-center gap-[34px] py-5 px-[22px] bg-white rounded-[10px] shadow-lg w-full md:w-1/2 xl:w-full">
                                    {/* Left Content */}
                                    <div className="flex flex-col gap-2.5 ">
                                        <h2 className="text-lg font-bold text-primary">Currently Active</h2>
                                        <p className="text-lightblue text-xs font-normal">
                                            Real-time user engagement stats
                                        </p>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center">
                                        {/* Right Content (Graph and Percentage) */}
                                        <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M152 80C152 70.5448 150.138 61.1822 146.519 52.4468C142.901 43.7114 137.598 35.7741 130.912 29.0883C124.226 22.4025 116.289 17.099 107.553 13.4807C98.8178 9.86234 89.4552 8 80 8C70.5448 7.99999 61.1823 9.86232 52.4468 13.4807C43.7114 17.099 35.7742 22.4025 29.0883 29.0883C22.4025 35.7741 17.099 43.7113 13.4807 52.4468C9.86234 61.1822 8 70.5448 8 80" stroke="#EBEEF9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8 80C8 64.7951 12.8136 49.9805 21.7508 37.6795C30.688 25.3784 43.29 16.2225 57.7508 11.5239" stroke="#28418D" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M49.6197 46.276L48.0447 42.195C47.9981 42.0737 47.9491 41.9337 47.8977 41.775C47.8464 41.6117 47.7974 41.439 47.7507 41.257C47.6527 41.635 47.5524 41.95 47.4497 42.202L45.8747 46.276H49.6197ZM52.4477 50H51.3977C51.2764 50 51.1784 49.9697 51.1037 49.909C51.0291 49.8483 50.9731 49.7713 50.9357 49.678L49.9977 47.256H45.4967L44.5587 49.678C44.5307 49.762 44.4771 49.8367 44.3977 49.902C44.3184 49.9673 44.2204 50 44.1037 50H43.0537L47.0647 39.969H48.4367L52.4477 50ZM58.2169 44.169C58.1796 44.2203 58.1423 44.26 58.1049 44.288C58.0676 44.316 58.0163 44.33 57.9509 44.33C57.8809 44.33 57.8039 44.302 57.7199 44.246C57.6359 44.1853 57.5309 44.12 57.4049 44.05C57.2836 43.98 57.1319 43.917 56.9499 43.861C56.7726 43.8003 56.5533 43.77 56.2919 43.77C55.9419 43.77 55.6339 43.833 55.3679 43.959C55.1019 44.0803 54.8779 44.2577 54.6959 44.491C54.5186 44.7243 54.3833 45.0067 54.2899 45.338C54.2013 45.6693 54.1569 46.0403 54.1569 46.451C54.1569 46.8803 54.2059 47.263 54.3039 47.599C54.4019 47.9303 54.5396 48.2103 54.7169 48.439C54.8989 48.663 55.1159 48.8357 55.3679 48.957C55.6246 49.0737 55.9116 49.132 56.2289 49.132C56.5323 49.132 56.7819 49.097 56.9779 49.027C57.1739 48.9523 57.3349 48.8707 57.4609 48.782C57.5916 48.6933 57.6989 48.614 57.7829 48.544C57.8716 48.4693 57.9579 48.432 58.0419 48.432C58.1446 48.432 58.2239 48.4717 58.2799 48.551L58.6299 49.006C58.4759 49.1973 58.3009 49.3607 58.1049 49.496C57.9089 49.6313 57.6966 49.7457 57.4679 49.839C57.2439 49.9277 57.0083 49.993 56.7609 50.035C56.5136 50.077 56.2616 50.098 56.0049 50.098C55.5616 50.098 55.1486 50.0163 54.7659 49.853C54.3879 49.6897 54.0589 49.454 53.7789 49.146C53.4989 48.8333 53.2796 48.4507 53.1209 47.998C52.9623 47.5453 52.8829 47.0297 52.8829 46.451C52.8829 45.9237 52.9553 45.436 53.0999 44.988C53.2493 44.54 53.4639 44.155 53.7439 43.833C54.0286 43.5063 54.3763 43.252 54.7869 43.07C55.2023 42.888 55.6783 42.797 56.2149 42.797C56.7143 42.797 57.1529 42.8787 57.5309 43.042C57.9136 43.2007 58.2519 43.427 58.5459 43.721L58.2169 44.169ZM66.5475 50H65.3015V43.952H61.6475V48.208C61.6475 48.5067 61.7198 48.7283 61.8645 48.873C62.0091 49.0177 62.1958 49.09 62.4245 49.09C62.5551 49.09 62.6671 49.0737 62.7605 49.041C62.8585 49.0037 62.9425 48.964 63.0125 48.922C63.0825 48.88 63.1408 48.8427 63.1875 48.81C63.2388 48.7727 63.2831 48.754 63.3205 48.754C63.3858 48.754 63.4441 48.7937 63.4955 48.873L63.8595 49.468C63.6448 49.6687 63.3858 49.8273 63.0825 49.944C62.7791 50.056 62.4665 50.112 62.1445 50.112C61.5845 50.112 61.1528 49.9557 60.8495 49.643C60.5508 49.3303 60.4015 48.88 60.4015 48.292V43.952H59.5475C59.4728 43.952 59.4098 43.931 59.3585 43.889C59.3071 43.8423 59.2815 43.7723 59.2815 43.679V43.182L60.4435 43.028L60.7305 40.844C60.7445 40.774 60.7748 40.718 60.8215 40.676C60.8728 40.6293 60.9381 40.606 61.0175 40.606H61.6475V43.049H66.5475V50ZM66.8555 40.634C66.8555 40.7553 66.8298 40.8697 66.7785 40.977C66.7318 41.0797 66.6665 41.1707 66.5825 41.25C66.5031 41.3293 66.4098 41.3923 66.3025 41.439C66.1951 41.4857 66.0808 41.509 65.9595 41.509C65.8381 41.509 65.7238 41.4857 65.6165 41.439C65.5138 41.3923 65.4228 41.3293 65.3435 41.25C65.2641 41.1707 65.2011 41.0797 65.1545 40.977C65.1078 40.8697 65.0845 40.7553 65.0845 40.634C65.0845 40.5127 65.1078 40.3983 65.1545 40.291C65.2011 40.179 65.2641 40.0833 65.3435 40.004C65.4228 39.92 65.5138 39.8547 65.6165 39.808C65.7238 39.7613 65.8381 39.738 65.9595 39.738C66.0808 39.738 66.1951 39.7613 66.3025 39.808C66.4098 39.8547 66.5031 39.92 66.5825 40.004C66.6665 40.0833 66.7318 40.179 66.7785 40.291C66.8298 40.3983 66.8555 40.5127 66.8555 40.634ZM74.6704 42.909L71.7794 50H70.6594L67.7684 42.909H68.7834C68.8861 42.909 68.9701 42.9347 69.0354 42.986C69.1008 43.0373 69.1451 43.098 69.1684 43.168L70.9674 47.732C71.0234 47.9047 71.0724 48.0727 71.1144 48.236C71.1564 48.3993 71.1961 48.5627 71.2334 48.726C71.2708 48.5627 71.3104 48.3993 71.3524 48.236C71.3944 48.0727 71.4458 47.9047 71.5064 47.732L73.3264 43.168C73.3544 43.0933 73.4011 43.0327 73.4664 42.986C73.5318 42.9347 73.6088 42.909 73.6974 42.909H74.6704ZM80.3678 45.681C80.3678 45.3917 80.3258 45.128 80.2418 44.89C80.1624 44.6473 80.0434 44.4397 79.8848 44.267C79.7308 44.0897 79.5418 43.9543 79.3178 43.861C79.0938 43.763 78.8394 43.714 78.5548 43.714C77.9574 43.714 77.4838 43.889 77.1338 44.239C76.7884 44.5843 76.5738 45.065 76.4898 45.681H80.3678ZM81.3758 49.006C81.2218 49.1927 81.0374 49.356 80.8228 49.496C80.6081 49.6313 80.3771 49.7433 80.1298 49.832C79.8871 49.9207 79.6351 49.986 79.3738 50.028C79.1124 50.0747 78.8534 50.098 78.5968 50.098C78.1068 50.098 77.6541 50.0163 77.2388 49.853C76.8281 49.685 76.4711 49.4423 76.1678 49.125C75.8691 48.803 75.6358 48.4063 75.4678 47.935C75.2998 47.4637 75.2158 46.9223 75.2158 46.311C75.2158 45.8163 75.2904 45.3543 75.4398 44.925C75.5938 44.4957 75.8131 44.1247 76.0978 43.812C76.3824 43.4947 76.7301 43.2473 77.1408 43.07C77.5514 42.888 78.0134 42.797 78.5268 42.797C78.9514 42.797 79.3434 42.8693 79.7028 43.014C80.0668 43.154 80.3794 43.3593 80.6408 43.63C80.9068 43.896 81.1144 44.2273 81.2638 44.624C81.4131 45.016 81.4878 45.464 81.4878 45.968C81.4878 46.164 81.4668 46.2947 81.4248 46.36C81.3828 46.4253 81.3034 46.458 81.1868 46.458H76.4478C76.4618 46.906 76.5224 47.2957 76.6298 47.627C76.7418 47.9583 76.8958 48.236 77.0918 48.46C77.2878 48.6793 77.5211 48.845 77.7918 48.957C78.0624 49.0643 78.3658 49.118 78.7018 49.118C79.0144 49.118 79.2828 49.083 79.5068 49.013C79.7354 48.9383 79.9314 48.859 80.0948 48.775C80.2581 48.691 80.3934 48.614 80.5008 48.544C80.6128 48.4693 80.7084 48.432 80.7878 48.432C80.8904 48.432 80.9698 48.4717 81.0258 48.551L81.3758 49.006ZM92.4313 42.909V50H91.6893C91.5119 50 91.3999 49.9137 91.3533 49.741L91.2553 48.978C90.9473 49.3187 90.6019 49.594 90.2193 49.804C89.8366 50.0093 89.3979 50.112 88.9033 50.112C88.5159 50.112 88.1729 50.049 87.8743 49.923C87.5803 49.7923 87.3329 49.6103 87.1323 49.377C86.9316 49.1437 86.7799 48.8613 86.6773 48.53C86.5793 48.1987 86.5303 47.8323 86.5303 47.431V42.909H87.7763V47.431C87.7763 47.9677 87.8976 48.383 88.1403 48.677C88.3876 48.971 88.7633 49.118 89.2673 49.118C89.6359 49.118 89.9789 49.0317 90.2963 48.859C90.6183 48.6817 90.9146 48.439 91.1853 48.131V42.909H92.4313ZM98.5369 44.078C98.4809 44.1807 98.3946 44.232 98.2779 44.232C98.2079 44.232 98.1286 44.2063 98.0399 44.155C97.9513 44.1037 97.8416 44.0477 97.7109 43.987C97.5849 43.9217 97.4333 43.8633 97.2559 43.812C97.0786 43.756 96.8686 43.728 96.6259 43.728C96.4159 43.728 96.2269 43.756 96.0589 43.812C95.8909 43.8633 95.7463 43.9357 95.6249 44.029C95.5083 44.1223 95.4173 44.232 95.3519 44.358C95.2913 44.4793 95.2609 44.6123 95.2609 44.757C95.2609 44.939 95.3123 45.0907 95.4149 45.212C95.5223 45.3333 95.6623 45.4383 95.8349 45.527C96.0076 45.6157 96.2036 45.695 96.4229 45.765C96.6423 45.8303 96.8663 45.9027 97.0949 45.982C97.3283 46.0567 97.5546 46.1407 97.7739 46.234C97.9933 46.3273 98.1893 46.444 98.3619 46.584C98.5346 46.724 98.6723 46.8967 98.7749 47.102C98.8823 47.3027 98.9359 47.5453 98.9359 47.83C98.9359 48.1567 98.8776 48.46 98.7609 48.74C98.6443 49.0153 98.4716 49.2557 98.2429 49.461C98.0143 49.6617 97.7343 49.8203 97.4029 49.937C97.0716 50.0537 96.6889 50.112 96.2549 50.112C95.7603 50.112 95.3123 50.0327 94.9109 49.874C94.5096 49.7107 94.1689 49.503 93.8889 49.251L94.1829 48.775C94.2203 48.7143 94.2646 48.6677 94.3159 48.635C94.3673 48.6023 94.4326 48.586 94.5119 48.586C94.5959 48.586 94.6846 48.6187 94.7779 48.684C94.8713 48.7493 94.9833 48.8217 95.1139 48.901C95.2493 48.9803 95.4126 49.0527 95.6039 49.118C95.7953 49.1833 96.0333 49.216 96.3179 49.216C96.5606 49.216 96.7729 49.1857 96.9549 49.125C97.1369 49.0597 97.2886 48.9733 97.4099 48.866C97.5313 48.7587 97.6199 48.635 97.6759 48.495C97.7366 48.355 97.7669 48.2057 97.7669 48.047C97.7669 47.851 97.7133 47.69 97.6059 47.564C97.5033 47.4333 97.3656 47.3237 97.1929 47.235C97.0203 47.1417 96.8219 47.0623 96.5979 46.997C96.3786 46.927 96.1523 46.8547 95.9189 46.78C95.6903 46.7053 95.4639 46.6213 95.2399 46.528C95.0206 46.43 94.8246 46.3087 94.6519 46.164C94.4793 46.0193 94.3393 45.842 94.2319 45.632C94.1293 45.4173 94.0779 45.1583 94.0779 44.855C94.0779 44.5843 94.1339 44.3253 94.2459 44.078C94.3579 43.826 94.5213 43.6067 94.7359 43.42C94.9506 43.2287 95.2143 43.077 95.5269 42.965C95.8396 42.853 96.1966 42.797 96.5979 42.797C97.0646 42.797 97.4823 42.8717 97.8509 43.021C98.2243 43.1657 98.5463 43.3663 98.8169 43.623L98.5369 44.078ZM105.21 45.681C105.21 45.3917 105.168 45.128 105.084 44.89C105.004 44.6473 104.885 44.4397 104.727 44.267C104.573 44.0897 104.384 43.9543 104.16 43.861C103.936 43.763 103.681 43.714 103.397 43.714C102.799 43.714 102.326 43.889 101.976 44.239C101.63 44.5843 101.416 45.065 101.332 45.681H105.21ZM106.218 49.006C106.064 49.1927 105.879 49.356 105.665 49.496C105.45 49.6313 105.219 49.7433 104.972 49.832C104.729 49.9207 104.477 49.986 104.216 50.028C103.954 50.0747 103.695 50.098 103.439 50.098C102.949 50.098 102.496 50.0163 102.081 49.853C101.67 49.685 101.313 49.4423 101.01 49.125C100.711 48.803 100.478 48.4063 100.31 47.935C100.142 47.4637 100.058 46.9223 100.058 46.311C100.058 45.8163 100.132 45.3543 100.282 44.925C100.436 44.4957 100.655 44.1247 100.94 43.812C101.224 43.4947 101.572 43.2473 101.983 43.07C102.393 42.888 102.855 42.797 103.369 42.797C103.793 42.797 104.185 42.8693 104.545 43.014C104.909 43.154 105.221 43.3593 105.483 43.63C105.749 43.896 105.956 44.2273 106.106 44.624C106.255 45.016 106.33 45.464 106.33 45.968C106.33 46.164 106.309 46.2947 106.267 46.36C106.225 46.4253 106.145 46.458 106.029 46.458H101.29C101.304 46.906 101.364 47.2957 101.472 47.627C101.584 47.9583 101.738 48.236 101.934 48.46C102.13 48.6793 102.363 48.845 102.634 48.957C102.904 49.0643 103.208 49.118 103.544 49.118C103.856 49.118 104.125 49.083 104.349 49.013C104.577 48.9383 104.773 48.859 104.937 48.775C105.1 48.691 105.235 48.614 105.343 48.544C105.455 48.4693 105.55 48.432 105.63 48.432C105.732 48.432 105.812 48.4717 105.868 48.551L106.218 49.006ZM109.043 44.33C109.267 43.8447 109.542 43.4667 109.869 43.196C110.196 42.9207 110.595 42.783 111.066 42.783C111.215 42.783 111.358 42.7993 111.493 42.832C111.633 42.8647 111.757 42.916 111.864 42.986L111.773 43.917C111.745 44.0337 111.675 44.092 111.563 44.092C111.498 44.092 111.402 44.078 111.276 44.05C111.15 44.022 111.008 44.008 110.849 44.008C110.625 44.008 110.424 44.0407 110.247 44.106C110.074 44.1713 109.918 44.2693 109.778 44.4C109.643 44.526 109.519 44.6847 109.407 44.876C109.3 45.0627 109.202 45.2773 109.113 45.52V50H107.86V42.909H108.574C108.709 42.909 108.803 42.9347 108.854 42.986C108.905 43.0373 108.94 43.126 108.959 43.252L109.043 44.33ZM117.049 44.078C116.993 44.1807 116.906 44.232 116.79 44.232C116.72 44.232 116.64 44.2063 116.552 44.155C116.463 44.1037 116.353 44.0477 116.223 43.987C116.097 43.9217 115.945 43.8633 115.768 43.812C115.59 43.756 115.38 43.728 115.138 43.728C114.928 43.728 114.739 43.756 114.571 43.812C114.403 43.8633 114.258 43.9357 114.137 44.029C114.02 44.1223 113.929 44.232 113.864 44.358C113.803 44.4793 113.773 44.6123 113.773 44.757C113.773 44.939 113.824 45.0907 113.927 45.212C114.034 45.3333 114.174 45.4383 114.347 45.527C114.519 45.6157 114.715 45.695 114.935 45.765C115.154 45.8303 115.378 45.9027 115.607 45.982C115.84 46.0567 116.066 46.1407 116.286 46.234C116.505 46.3273 116.701 46.444 116.874 46.584C117.046 46.724 117.184 46.8967 117.287 47.102C117.394 47.3027 117.448 47.5453 117.448 47.83C117.448 48.1567 117.389 48.46 117.273 48.74C117.156 49.0153 116.983 49.2557 116.755 49.461C116.526 49.6617 116.246 49.8203 115.915 49.937C115.583 50.0537 115.201 50.112 114.767 50.112C114.272 50.112 113.824 50.0327 113.423 49.874C113.021 49.7107 112.681 49.503 112.401 49.251L112.695 48.775C112.732 48.7143 112.776 48.6677 112.828 48.635C112.879 48.6023 112.944 48.586 113.024 48.586C113.108 48.586 113.196 48.6187 113.29 48.684C113.383 48.7493 113.495 48.8217 113.626 48.901C113.761 48.9803 113.924 49.0527 114.116 49.118C114.307 49.1833 114.545 49.216 114.83 49.216C115.072 49.216 115.285 49.1857 115.467 49.125C115.649 49.0597 115.8 48.9733 115.922 48.866C116.043 48.7587 116.132 48.635 116.188 48.495C116.248 48.355 116.279 48.2057 116.279 48.047C116.279 47.851 116.225 47.69 116.118 47.564C116.015 47.4333 115.877 47.3237 115.705 47.235C115.532 47.1417 115.334 47.0623 115.11 46.997C114.89 46.927 114.664 46.8547 114.431 46.78C114.202 46.7053 113.976 46.6213 113.752 46.528C113.532 46.43 113.336 46.3087 113.164 46.164C112.991 46.0193 112.851 45.842 112.744 45.632C112.641 45.4173 112.59 45.1583 112.59 44.855C112.59 44.5843 112.646 44.3253 112.758 44.078C112.87 43.826 113.033 43.6067 113.248 43.42C113.462 43.2287 113.726 43.077 114.039 42.965C114.351 42.853 114.708 42.797 115.11 42.797C115.576 42.797 115.994 42.8717 116.363 43.021C116.736 43.1657 117.058 43.3663 117.329 43.623L117.049 44.078Z" fill="#858C9F" />
                                            <path d="M65.2901 73.46V67.784C65.2901 67.248 65.3261 66.656 65.3981 66.008L60.0101 73.46H65.2901ZM70.0541 73.46V75.176C70.0541 75.336 70.0021 75.476 69.8981 75.596C69.7941 75.708 69.6461 75.764 69.4541 75.764H67.8701V80H65.2901V75.764H57.9701C57.7701 75.764 57.5941 75.704 57.4421 75.584C57.2901 75.456 57.1941 75.3 57.1541 75.116L56.8421 73.616L65.0621 62.636H67.8701V73.46H70.0541ZM83.988 71.324C83.988 72.836 83.824 74.152 83.496 75.272C83.176 76.384 82.728 77.304 82.152 78.032C81.584 78.76 80.908 79.304 80.124 79.664C79.348 80.016 78.508 80.192 77.604 80.192C76.7 80.192 75.86 80.016 75.084 79.664C74.316 79.304 73.648 78.76 73.08 78.032C72.512 77.304 72.068 76.384 71.748 75.272C71.428 74.152 71.268 72.836 71.268 71.324C71.268 69.804 71.428 68.488 71.748 67.376C72.068 66.264 72.512 65.344 73.08 64.616C73.648 63.888 74.316 63.348 75.084 62.996C75.86 62.636 76.7 62.456 77.604 62.456C78.508 62.456 79.348 62.636 80.124 62.996C80.908 63.348 81.584 63.888 82.152 64.616C82.728 65.344 83.176 66.264 83.496 67.376C83.824 68.488 83.988 69.804 83.988 71.324ZM80.928 71.324C80.928 70.068 80.836 69.028 80.652 68.204C80.468 67.38 80.22 66.724 79.908 66.236C79.604 65.748 79.252 65.408 78.852 65.216C78.452 65.016 78.036 64.916 77.604 64.916C77.18 64.916 76.768 65.016 76.368 65.216C75.976 65.408 75.628 65.748 75.324 66.236C75.02 66.724 74.776 67.38 74.592 68.204C74.416 69.028 74.328 70.068 74.328 71.324C74.328 72.58 74.416 73.62 74.592 74.444C74.776 75.268 75.02 75.924 75.324 76.412C75.628 76.9 75.976 77.244 76.368 77.444C76.768 77.636 77.18 77.732 77.604 77.732C78.036 77.732 78.452 77.636 78.852 77.444C79.252 77.244 79.604 76.9 79.908 76.412C80.22 75.924 80.468 75.268 80.652 74.444C80.836 73.62 80.928 72.58 80.928 71.324ZM93.5298 66.848C93.5298 67.504 93.4178 68.096 93.1938 68.624C92.9778 69.152 92.6858 69.604 92.3178 69.98C91.9498 70.348 91.5218 70.632 91.0338 70.832C90.5458 71.032 90.0378 71.132 89.5098 71.132C88.9338 71.132 88.4018 71.032 87.9138 70.832C87.4258 70.632 87.0018 70.348 86.6418 69.98C86.2898 69.604 86.0138 69.152 85.8138 68.624C85.6138 68.096 85.5138 67.504 85.5138 66.848C85.5138 66.176 85.6138 65.568 85.8138 65.024C86.0138 64.48 86.2898 64.02 86.6418 63.644C87.0018 63.268 87.4258 62.98 87.9138 62.78C88.4018 62.572 88.9338 62.468 89.5098 62.468C90.0858 62.468 90.6178 62.572 91.1058 62.78C91.6018 62.98 92.0298 63.268 92.3898 63.644C92.7498 64.02 93.0298 64.48 93.2298 65.024C93.4298 65.568 93.5298 66.176 93.5298 66.848ZM91.2498 66.848C91.2498 66.384 91.2018 65.996 91.1058 65.684C91.0178 65.372 90.8938 65.12 90.7338 64.928C90.5818 64.736 90.3978 64.6 90.1818 64.52C89.9738 64.432 89.7498 64.388 89.5098 64.388C89.2698 64.388 89.0458 64.432 88.8378 64.52C88.6298 64.6 88.4498 64.736 88.2978 64.928C88.1538 65.12 88.0378 65.372 87.9498 65.684C87.8618 65.996 87.8178 66.384 87.8178 66.848C87.8178 67.296 87.8618 67.672 87.9498 67.976C88.0378 68.272 88.1538 68.512 88.2978 68.696C88.4498 68.88 88.6298 69.012 88.8378 69.092C89.0458 69.172 89.2698 69.212 89.5098 69.212C89.7498 69.212 89.9738 69.172 90.1818 69.092C90.3978 69.012 90.5818 68.88 90.7338 68.696C90.8938 68.512 91.0178 68.272 91.1058 67.976C91.2018 67.672 91.2498 67.296 91.2498 66.848ZM99.3018 63.116C99.4058 62.996 99.5258 62.888 99.6618 62.792C99.8058 62.696 100.006 62.648 100.262 62.648H102.422L89.5338 79.556C89.4298 79.684 89.3058 79.792 89.1618 79.88C89.0178 79.96 88.8418 80 88.6338 80H86.4258L99.3018 63.116ZM103.334 75.92C103.334 76.576 103.222 77.168 102.998 77.696C102.782 78.224 102.49 78.676 102.122 79.052C101.754 79.42 101.326 79.708 100.838 79.916C100.35 80.116 99.8418 80.216 99.3138 80.216C98.7378 80.216 98.2058 80.116 97.7178 79.916C97.2298 79.708 96.8058 79.42 96.4458 79.052C96.0938 78.676 95.8178 78.224 95.6178 77.696C95.4178 77.168 95.3178 76.576 95.3178 75.92C95.3178 75.248 95.4178 74.64 95.6178 74.096C95.8178 73.552 96.0938 73.092 96.4458 72.716C96.8058 72.34 97.2298 72.052 97.7178 71.852C98.2058 71.644 98.7378 71.54 99.3138 71.54C99.8898 71.54 100.422 71.644 100.91 71.852C101.406 72.052 101.83 72.34 102.182 72.716C102.542 73.092 102.822 73.552 103.022 74.096C103.23 74.64 103.334 75.248 103.334 75.92ZM101.042 75.92C101.042 75.456 100.998 75.068 100.91 74.756C100.822 74.444 100.698 74.192 100.538 74C100.386 73.808 100.202 73.672 99.9858 73.592C99.7778 73.504 99.5538 73.46 99.3138 73.46C99.0738 73.46 98.8498 73.504 98.6418 73.592C98.4338 73.672 98.2538 73.808 98.1018 74C97.9498 74.192 97.8298 74.444 97.7418 74.756C97.6618 75.068 97.6218 75.456 97.6218 75.92C97.6218 76.368 97.6618 76.744 97.7418 77.048C97.8298 77.352 97.9498 77.596 98.1018 77.78C98.2538 77.964 98.4338 78.096 98.6418 78.176C98.8498 78.256 99.0738 78.296 99.3138 78.296C99.5538 78.296 99.7778 78.256 99.9858 78.176C100.202 78.096 100.386 77.964 100.538 77.78C100.698 77.596 100.822 77.352 100.91 77.048C100.998 76.744 101.042 76.368 101.042 75.92Z" fill="#28418D" />
                                        </svg>
                                    </div>

                                </div>

                                <div className="py-5 px-[22px] bg-white rounded-[10px] shadow-lg w-full md:w-1/2 xl:w-full">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-bold text-primary">Traffic Sources</h2>
                                        <p
                                            className="text-xs font-normal text-secondary flex items-center gap-1.5 cursor-pointer"
                                            onClick={() => setShowDropdown((prev) => !prev)}
                                        >
                                            {selectedOption} <ChevronDown size={18} />
                                        </p>

                                        {/* Dropdown Menu */}
                                        {showDropdown && (
                                            <div className="absolute right-0 bottom-[60px] mt-2 w-32 bg-white  rounded-lg shadow-lg z-10">
                                                {options.map((option, index) => (
                                                    <div
                                                        key={index}
                                                        className={`px-4 py-1.5 text-xs font-normal text-secondary cursor-pointer hover:bg-white ${selectedOption === option ? "font-semibold" : ""
                                                            }`}
                                                        onClick={() => handleSelectOption(option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                            

                                </div>

                                {/* Render Traffic Data */}
                                {trafficData.map((source, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-sm font-semibold text-secondary">{source.label}</p>
                                            <p className="text-sm font-normal text-secondary">
                                                {source.value.toLocaleString()}
                                            </p>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="relative h-1.5 rounded-full bg-homeabout">
                                            <div
                                                className="absolute h-full bg-primary rounded-full transition-all duration-500"
                                                style={{ width: `${source.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                        activePlanId={Number(totalUserInvestedAmount?.joinTime > 0) ? userDeposits?.planAmount : 0}
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
                                <div className="xl:col-span-2 p-4  px-6 border rounded-[24px] flex flex-col gap-2 hover:shadow-md hover:border-white">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
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

                            <div className="group bg-boxgradient shadow-dashboard p-4 my-auto rounded-[24px] transition-transform duration-300 hover:translate-y-[-4px]">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-secondary font-bold text-md">
                                        Direct Business
                                    </h3>
                                    <p className="text-3xl font-bold text-primary ">
                                        ${formatNumber(totalUserInvestedAmount?.directBusiness, 18)}
                                    </p>
                                </div>
                            </div>

                            <div className=" p-4 px-6 border rounded-[24px] flex flex-col gap-4 justify-center hover:shadow-md hover:border-white">
                                <p className="text-xl font-semibold text-primary">
                                    Withdraw your CTO Funds
                                </p>
                                <div className="flex items-center gap-4 justify-between">
                                    <p className="text-3xl font-bold text-primary ">
                                        ${formatNumber(userStatus?.[4], 18)}
                                    </p>
                                    <button
                                        disabled={claiming}
                                        onClick={handleClaimCTO}
                                        className="bg-primary text-sm text-white py-2 px-6 rounded-full w-max"
                                    >
                                        {claiming ? "Claiming..." : "Withdraw"}
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>



                {/* Dividend Income */}
                <section data-aos="fade-up" className="container px-0">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <div className="flex items-center justify-between flex-col xl:flex-row gap-4 w-full">
                                    <h4 className="text-primary text-4xl font-bold flex items-center gap-3">
                                        Challenging Income: Maximizing Your Investment Returns
                                    </h4>
                                    <div className="flex flex-col md:flex-row items-center gap-6">

                                        {userStatus?.[0] ?
                                            <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                Activated
                                            </p> :
                                            <>
                                                {Number(totalUserInvestedAmount?.joinTime) > 0 ? <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                    <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                    <CountDownTimer endDate={Number(totalUserInvestedAmount?.joinTime) * 1000 + 86400000} onlyDays={false} /> left
                                                </p> : <></>
                                                }
                                                <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                                    <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                                    {totalUserInvestedAmount?.higherPlanRef < 2 ? 2 - Number(totalUserInvestedAmount?.higherPlanRef) : 0} Referral Left
                                                </p>
                                            </>
                                        }

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
                <section data-aos="fade-up" className="container px-0">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-between flex-col xl:flex-row gap-4">
                            <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold">
                                Per-Hour Mining Bonus: Engaging Your Network
                            </h4>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {Number(totalUserInvestedAmount?.joinTime) > 0 ? <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                    <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                    <CountDownTimer endDate={Number(totalUserInvestedAmount?.joinTime) * 1000 + (86400000 * 2)} onlyDays={false} /> left
                                </p> : <></>
                                }
                                <p className="bg-homeabout text-sm font-bold text-primary rounded-full py-2 px-4">
                                    <span className="w-2 h-2 rounded-full inline-block mr-1.5 bg-primary"></span>
                                    {userStatus?.[0] ? totalUserInvestedAmount?.higherPlanRef < 12 ? 12 - Number(totalUserInvestedAmount?.higherPlanRef) : 0
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
                <section data-aos="fade-up" className="container px-0">
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
                                <p className="font-bold text-md text-[#031641]">0.5%</p>
                            </div>
                            <div className="p-3 bg-[#DEE5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 5</h5>
                                <p className="font-bold text-md text-[#031641]">1%</p>
                            </div>
                            <div className="p-3 bg-[#D9E1FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 6</h5>
                                <p className="font-bold text-md text-[#031641]">2%</p>
                            </div>
                            <div className="p-3 bg-[#D3DDFF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 7</h5>
                                <p className="font-bold text-md text-[#031641]">3%</p>
                            </div>
                            <div className="p-3 bg-[#CAD5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 8</h5>
                                <p className="font-bold text-md text-[#031641]">4%</p>
                            </div>
                            <div className="p-3 bg-[#B8C7FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 9</h5>
                                <p className="font-bold text-md text-[#031641]">5%</p>
                            </div>
                            <div className="p-3 bg-[#B1C2FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
                                <h5 className="font-bold text-lg text-secondary">LEVEL 10</h5>
                                <p className="font-bold text-md text-[#031641]">6%</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* win trips */}
                <div className="" data-aos="fade-up">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Win Trips</h2>
                        <button className="bg-primary text-white text-base font-semibold rounded-full w-max py-2 px-8 flex items-center gap-2">
                        <CountdownTimer endDate={new Date("2025-01-25T00:00:00").getTime()} onlyDays={false} />
                        left
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
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
                                    {userStatus?.[2]?.includes(0) ? <button
                                        className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Submit Details
                                    </button> : <></>}

                                    {userStatus?.[1]?.[0] ? <button
                                        className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                        onClick={() => handleClaimJackpot(0)}
                                        disabled={isTransactionClaim}
                                    >
                                        claim
                                    </button> : <></>}

                                    {/* Render the popup conditionally */}
                                </div>
                            </div>
                        </div>

                        <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
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
                                    $25,000 Direct Business within 45 days
                                </p>

                                {userStatus?.[2]?.includes(1) ? <button
                                    className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                    onClick={handleButtonClick}
                                >
                                    Submit Details
                                </button> : <></>}
                                {userStatus?.[1]?.[1] ? <button
                                    className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                    onClick={() => handleClaimJackpot(1)}
                                    disabled={isTransactionClaim}
                                >
                                    claim
                                </button> : <></>}

                            </div>
                        </div>
                        <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0 ">
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
                                    $35,000 Direct Business within 45 days
                                </p>
                                {userStatus?.[2]?.includes(2) ? <button
                                    className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                    onClick={handleButtonClick}
                                >
                                    Submit Details
                                </button> : <></>}
                                {userStatus?.[1]?.[2] ? <button
                                    className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                    onClick={() => handleClaimJackpot(2)}
                                    disabled={isTransactionClaim}
                                >
                                    claim
                                </button> : <></>}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Jackpot Rewards */}
                <section data-aos="fade-up" className="container px-0">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col ">
                            <div className="flex flex-col  gap-4">
                                <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                                    <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 ">
                                        Jackpot Rewards: Luxurious Recognition
                                        <img
                                            src="/images/jackpot-rewards.png"
                                            alt="setting"
                                            className=" h-[36px]"
                                        />
                                    </h4>
                                    <button className="bg-primary text-white text-base font-semibold rounded-full w-max py-2 px-8 flex items-center gap-2">
                                    <CountdownTimer endDate={new Date("2025-01-25T00:00:00").getTime()} onlyDays={false} />
                                    left
                                    </button>
                                </div>
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
                            <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
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
                                {userStatus?.[2]?.includes(3) ? <button
                                    className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                    onClick={handleButtonClick}
                                >
                                    Submit Details
                                </button> : <></>}
                                {userStatus?.[1]?.[3] ? <button
                                    className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                    onClick={() => handleClaimJackpot(3)}
                                    disabled={isTransactionClaim}
                                >
                                    claim
                                </button> : <></>}
                            </div>

                            <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
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
                                {userStatus?.[2]?.includes(4) ? <button
                                    className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                    onClick={handleButtonClick}
                                >
                                    Submit Details
                                </button> : <></>}
                                {userStatus?.[1]?.[4] ? <button
                                    className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                    onClick={() => handleClaimJackpot(4)}
                                    disabled={isTransactionClaim}
                                >
                                    claim
                                </button> : <></>}
                            </div>

                            <div className="max-w-full rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
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
                                {userStatus?.[2]?.includes(5) ? <button
                                    className="bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"
                                    onClick={handleButtonClick}
                                >
                                    Submit Details
                                </button> : <></>}
                                {userStatus?.[1]?.[5] ? <button
                                    className={isTransactionClaim ? "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed" : "bg-[#149514] text-white text-sm gap-2 text-center flex items-center justify-center py-2 px-4 mt-3 rounded-full"}
                                    onClick={() => handleClaimJackpot(5)}
                                    disabled={isTransactionClaim}
                                >
                                    claim
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
        </div >
        </>
    );
};

export default Dashboard;
