import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";

const Header = () => {
    const { chainId, isConnected } = useAccount();

    return (
        <div className="bg-header mx-auto fixed top-0 left-0 w-full z-10 shadow-xl">
            <header className="flex items-center justify-between py-4 container">
                <Link to="/">
                    {" "}
                    <img src="/images/AITrade-logo.png" alt="" className="w-[150px]" />
                </Link>
                <nav className="nav hidden md:flex">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/Dashboard" className="no-underline text-subtext">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* <button className="bg-blue text-white text-sm lg:text-lg font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-bluegradient">
          {" "}
          <img
            src="/images/connect-wallet-img.webp"
            alt="wallet"
            className="w-[18px] h-[18px]"
          />
          Connect Wallet
        </button> */}
                {<ConnectButton accountStatus={"address"} showBalance={false} />}
            </header>
        </div>
    );
};

export default Header;
