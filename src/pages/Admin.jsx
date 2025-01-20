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
    const [jackpotClaimed,setJackpotClaimed] = useState();
    const [jackpotClaimed1,setJackpotClaimed1] = useState();
    const [jackpotClaimed2,setJackpotClaimed2] = useState();
    const [jackpotClaimed3,setJackpotClaimed3] = useState();
    const [jackpotClaimed4,setJackpotClaimed4] = useState();
    const [jackpotClaimed5,setJackpotClaimed5] = useState();

    const withdrawFunds = async (e) => {
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

    const getjackpotClaimedUsers = async (id=0) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          debugger
          setJackpotClaimed(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };


      const getjackpotClaimedUsers1 = async (id=1) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          
          setJackpotClaimed1(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };

      const getjackpotClaimedUsers2 = async (id=2) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          
          setJackpotClaimed2(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };


      const getjackpotClaimedUsers3 = async (id=3) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          
          setJackpotClaimed3(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };

      const getjackpotClaimedUsers4 = async (id=4) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          
          setJackpotClaimed4(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };

      const getjackpotClaimedUsers5 = async (id=5) => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: XRADE_ABI,
            address: blockConfig[chainId].XRADE_ADDRESS,
            functionName: "getJackpotClaimers",
            args: [id],
          });
          
          setJackpotClaimed5(tokenBalance);
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };

   

     const checkTokenBalance = async () => {
        try {
            
          const tokenBalance = await readContract(configRead, {
            abi: erc20Abi,
            address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
            functionName: "balanceOf",
            args: [blockConfig[chainId].XRADE_ADDRESS],
          });
          
          setTokenBalanceUI((Number(tokenBalance)/1e18).toFixed(4));
          return tokenBalance;
        } catch (error) {
          return 0;
          console.log(error)
        }
      };


      



    

      useEffect(() => {
       
          checkTokenBalance();
          getjackpotClaimedUsers(0);
          getjackpotClaimedUsers1(1);
          getjackpotClaimedUsers2(2);
          getjackpotClaimedUsers3(3);
          getjackpotClaimedUsers4(4);
          getjackpotClaimedUsers5(5);
      }, []); // Re-run effect whenever `address` changes

    return (
        <div className="flex flex-col items-center mt-20 p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel</h1>

            {/* Form 1 */}
            <form
                onSubmit={withdrawFunds}
                className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md"
            >
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Withdraw funds</h2>
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
                        value={form1Field2}
                        onChange={(e) => setForm1Field2(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <p className="mt-2 mb-2">Current balance : {tokenBalanceUI}</p>

                <button
                    type="submit"
                    disabled={isForm1Submitting}
                    className={`w-full py-2 px-4 text-white font-semibold rounded-md ${isForm1Submitting ? "bg-primary cursor-not-allowed" : "bg-primary hover:bg-blue-700"
                        }`}
                >
                    {isForm1Submitting ? "Submitting..." : "Submit"}
                </button>
            </form>


            <h1 className="text-2xl font-bold text-center mb-6">Claimed users of Dubai Tour</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <h1 className="text-2xl font-bold text-center mb-6">Claimed users of Turkey + Dubai Tour</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed1?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <h1 className="text-2xl font-bold text-center mb-6">Claimed users of Europe Tour
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed2?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <h1 className="text-2xl font-bold text-center mb-6">Claimed users of Superbike
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed3?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <h1 className="text-2xl font-bold text-center mb-6">Claimed users of SUV Car
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed4?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <h1 className="text-2xl font-bold text-center mb-6">Claimed users of House Fund
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {jackpotClaimed5?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



          

        </div>
    );
};

export default Admin;
