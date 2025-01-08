import React, { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import XRADE_ABI from "../assets/abi/xrade.json";
import { blockConfig } from "../config/BlockChainConfig";
import { readContract } from "@wagmi/core";
import useWaitForTransaction from "../hooks/useWaitForTransaction";
import CardParticleBg from "../../public/images/dashboard/CardParticleBg.svg";
import { erc20Abi, isAddress } from "viem";
import toast from "react-hot-toast";
import { configRead } from "../utils/RainbowKitConfig";

const PackageCards = ({ packages, getROIamount, referral }) => {
    const { writeContractAsync } = useWriteContract();
    const { waitForTransaction } = useWaitForTransaction();
    const { chainId, isConnected, address } = useAccount();
    const [transactionMessage, setTransactionMessage] = useState("Please wait...");
    const [isTransaction, setIsTransaction] = useState(false);
    const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
    const BASE_FEE = 1e18;
    let referrerAddress = referral;

    const setApproval = async (amount) => {
        try {
            const approval = await writeContractAsync({
                abi: erc20Abi,
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "approve",
                args: [blockConfig[chainId].XRADE_ADDRESS, amount],
            });
            await waitForTransaction(approval, 100);
            return approval;
        } catch (error) {
            throw error;
        }
    };

    const checkTokenBalance = async () => {
        try {
            const tokenBalance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "balanceOf",
                args: [address],
            });
            return tokenBalance;
        } catch (error) {
            return 0;
        }
    };

    const checkAllowance = async () => {
        try {
            const allowance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "allowance",
                args: [address, blockConfig[chainId].XRADE_ADDRESS],
            });
            return allowance;
        } catch (error) {
            return 0;
        }
    };

    const handleBuyPackage = async (planId) => {
        try {
            if (!isConnected) {
                toast.error("Please connect your wallet");
                return;
            }

            if (!isAddress(referrerAddress)) {
                referrerAddress = blockConfig[chainId].ADMIN_ADDRESS;
            }

            setIsTransaction(true);
            setTransactionMessage("Checking balance...");
            const tokenBalance = await checkTokenBalance();
            const planAmounts = [50e18, 100e18, 250e18, 500e18];

            const requiredAmount = planAmounts[planId] + BASE_FEE;

            if (tokenBalance < requiredAmount) {
                setIsTransaction(false);
                return toast.error("Insufficient USDT balance");
            }

            // Check allowance
            setTransactionMessage("Checking allowance...");
            const allowance = await checkAllowance();

            // If allowance is insufficient, request approval
            if (allowance < requiredAmount) {
                setTransactionMessage("Approving USDT...");
                try {
                    const approvalTx = await setApproval(requiredAmount);
                    await waitForTransaction(approvalTx, 100);
                } catch (error) {
                    throw new Error("Failed to approve USDT");
                }
            }

            // Invest in the plan
            setTransactionMessage("Investing in plan...");
            const investTx = await writeContractAsync({
                address: blockConfig[chainId].XRADE_ADDRESS,
                abi: XRADE_ABI,
                functionName: "invest",
                args: [planId, referrerAddress],
            });

            setTransactionMessage("Confirming transaction...");
            await waitForTransaction(investTx, 100);
            getROIamount();
            toast.success("Successfully invested in plan!");
        } catch (error) {
            console.error("Investment error:", error);
            toast.error(error.shortMessage || "Failed to invest in plan");
        } finally {
            setIsTransaction(false);
            setTransactionMessage("Please wait...");
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
                <div
                    key={index}
                    className="bg-white shadow-xl p-6 rounded-[24px] text-center particlecard-bg transform transition-all duration-300 ease-in-out group hover:translate-y-[-10px]"
                >
                    <h3 className="text-md text-white font-bold mb-2 text-center">{pkg.title}</h3>
                    <div className="bg-blue-500 rounded-full inline-block">
                        <img
                            src={pkg.imageUrl}
                            alt={`Package Icon ${index + 1}`}
                            className="mx-auto"
                        />
                    </div>

                    <p className="text-lg font-bold text-primary mb-2">{pkg.price}</p>
                    <p className="text-lg font-bold text-primary mb-2">{pkg.percentage}</p>
                    <p className="text-[#989DAB] mb-4">{pkg.description}</p>
                    <button
                        className="bg-blue text-white py-2 px-4 rounded-full hover:bg-[#192265] hover:shadow-buypackage"
                        onClick={() => {
                            setSelectedPackageIndex(index);
                            handleBuyPackage(index);
                        }} // Pass null for referrer if not available
                        disabled={isTransaction}
                    >
                        {index == selectedPackageIndex && isTransaction
                            ? "Processing..."
                            : "Buy Package"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PackageCards;
