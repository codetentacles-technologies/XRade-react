import React, { useEffect, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import XRADE_ABI from "../assets/abi/xrade.json";
import erc20Abi from "../assets/abi/usdt-token.json"
import { blockConfig } from "../config/BlockChainConfig";
import useWaitForTransaction from "../hooks/useWaitForTransaction";
import { formatUnits, parseEther } from "viem";
import { readContract } from "@wagmi/core";
import { configRead } from "../utils/RainbowKitConfig";

const Admin = () => {
    const { chainId, isConnected, address } = useAccount();
    const { writeContractAsync } = useWriteContract();
    const { waitForTransaction } = useWaitForTransaction();
    // Form 1 State
    const [form1Field1, setForm1Field1] = useState("");
    const [form1Field2, setForm1Field2] = useState("");
    const [isForm1Submitting, setIsForm1Submitting] = useState(false);
    const [tokenBalanceUI,setTokenBalanceUI] = useState(0);
   


    const blockUnblock = async (e) => {
        e.preventDefault();
        try {
            const approval = await writeContractAsync({
                abi: XRADE_ABI,
                address: blockConfig[chainId].XRADE_ADDRESS,
                functionName: "WithdrawFunds",
                args: [form1Field1, form1Field2,blockConfig[chainId].USDT_TOKEN_ADDRESS],
            });
            await waitForTransaction(approval, 100);
            return approval;
        } catch (error) {
            throw error;
        }
        return false;
    };


   

     const checkTokenBalance = async () => {
        try {
            debugger
          const tokenBalance = await readContract(configRead, {
            abi: erc20Abi,
            address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
            functionName: "balanceOf",
            args: [blockConfig[chainId].XRADE_ADDRESS],
          });
          debugger
          setTokenBalanceUI((Number(tokenBalance)/1e18).toFixed(4));
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };



    

      useEffect(() => {
       
          checkTokenBalance();
         
      }, []); // Re-run effect whenever `address` changes

    return (
        <div className="flex flex-col items-center mt-20 p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel For $DFY</h1>

            {/* Form 1 */}
            <form
                onSubmit={blockUnblock}
                className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md"
            >
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Block/Unblock User</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                    <input
                        type="text"
                        value={form1Field1}
                        onChange={(e) => setForm1Field1(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Amount</label>
                    <input
                        type="text"
                        value={form1Field1}
                        onChange={(e) => setForm1Field2(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <p className="mt-2 mb-2">Current balance : {tokenBalanceUI}</p>

                <button
                    type="submit"
                    disabled={isForm1Submitting}
                    className={`w-full py-2 px-4 text-white font-semibold rounded-md ${isForm1Submitting ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {isForm1Submitting ? "Submitting..." : "Submit"}
                </button>
            </form>

          

        </div>
    );
};

export default Admin;
