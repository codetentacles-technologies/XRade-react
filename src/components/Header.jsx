import React, { useState, useEffect, useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { chainId, isConnected } = useAccount();
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const boxRef = useRef(null); // Ref for the box
    const bellRef = useRef(null); // Ref for the Bell icon
    const location = useLocation();
    const isLaunchVisible = ["/", "/about"].includes(location.pathname);

    const toggleBox = () => {
        setIsBoxVisible(!isBoxVisible);
    };

    // Close the box when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                boxRef.current &&
                !boxRef.current.contains(event.target) &&
                bellRef.current &&
                !bellRef.current.contains(event.target)
            ) {
                setIsBoxVisible(false);
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isHomePage = location.pathname === '/';

    return (
        <div className={`bg-header mx-auto fixed top-0 left-0 w-full z-10 ${!isHomePage ? 'shadow-md' : ''}`}>
            <header className="flex items-center justify-between py-4 container">
                <Link to="/">
                    {" "}
                    <img
                        src="/images/AITrade-logo.png"
                        alt=""
                        className="w-[150px] cursor-pointer"
                    />
                </Link>
                {/* <nav className="nav hidden md:flex">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/Dashboard" className="no-underline text-subtext">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav> */}
                {/* <button className="bg-blue text-white text-sm lg:text-lg font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-bluegradient">
          {" "}
          <img
            src="/images/connect-wallet-img.webp"
            alt="wallet"
            className="w-[18px] h-[18px]"
          />
          Connect Wallet
        </button> */}

                <div className="flex items-center gap-6">
                    <div className="relative cursor-pointer" onClick={toggleBox} ref={bellRef}>
                        <p>
                            <Bell />
                        </p>
                        <span className="absolute top-0 right-0 bg-primary text-white text-[11px] rounded-full px-1.5 h-[18px] transform translate-x-1/2 -translate-y-1/2">
                            2 {/* Replace 2 with the actual number you want to display */}
                        </span>
                    </div>

                    {/* Conditionally render the box */}
                    {isBoxVisible && (
                        <div
                            className="absolute top-16 right-10 md:right-28 lg:right-24 xl:right-40 2xl:right-[400px] bg-bluegradient shadow-lg rounded-2xl text-white"
                            ref={boxRef}
                        >
                            <div className="py-4 px-6 border-b border-[#394B74]">
                                <p className="text-base font-semibold">
                                    You are eligible to Claim Dividend Income
                                </p>
                                <p className="text-sm font-medium">2 hours ago.</p>
                            </div>
                            <div className="py-4 px-6 border-b border-[#394B74]">
                                <p className="text-base font-semibold">
                                    You are eligible to Claim Dividend Income
                                </p>
                                <p className="text-sm font-medium">2 hours ago.</p>
                            </div>
                            <div className="py-4 px-6">
                                <p className="text-base font-semibold">
                                    You are eligible to Claim Dividend Income
                                </p>
                                <p className="text-sm font-medium">2 hours ago.</p>
                            </div>
                        </div>
                    )}
                    {isLaunchVisible ? (
                        <Link
                            to="/Dashboard"
                            className="bg-blue text-white text-lg font-semibold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-primarygradient"
                        >
                            Launch
                        </Link>
                    ) : (
                        <ConnectButton accountStatus={"address"} showBalance={false} />
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
