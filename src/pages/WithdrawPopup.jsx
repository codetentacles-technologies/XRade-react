import { X } from 'lucide-react'
import React, { useEffect } from 'react'

const WithdrawPopup = ({ handleClose }) => {
    useEffect(() => {
        // Disable scrolling when the modal is open
        document.body.style.overflow = 'hidden';

        // Cleanup function to restore scrolling
        return () => {
            document.body.style.overflow = 'unset'; 
        };
    }, []);
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-3xl shadow-lg  w-full md:w-[80%] lg:w-2/3 2xl:w-1/2 p-8 relative flex flex-col gap-4">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-secondary bg-homeabout p-1.5 rounded-full"
      >
        <X size={20} />
      </button>
      {/* Challenging Income */}
      <section className="container">
        <div className=" flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-2xl font-bold text-primary">Imcome</h2>
              <p className="text-sm font-medium text-[#71717A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
           
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">

              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    card: "Mastercard **** 6442",
                    paymentMethod: "Card payment",
                    amount: "$99.00",
                    date: "Jan 17, 2022",
                    status: "Completed",
                    statusColor: "bg-[#DCFCE7] text-[#14532D",
                    category: "Dividend",
                    dotColor: "bg-[#22C55E]",
                  },
                  {
                    card: "Account ****882",
                    paymentMethod: "Bank payment",
                    amount: "$249.94",
                    date: "Jan 17, 2022",
                    status: "Pending",
                    statusColor: "bg-[#FEF9C3] text-[#713F12]",
                    category: "Challenging",
                    dotColor: "bg-[#FACC15]",
                  },
                  {
                    card: "Account ****882",
                    paymentMethod: "Bank payment",
                    amount: "$249.94",
                    date: "Jan 17, 2022",
                    status: "Canceled",
                    statusColor: "bg-[#FEE2E2] text-[#7F1D1D]",
                    category: "Challenging",
                    dotColor: "bg-[#EF4444] ",
                  },
                  {
                    card: "Account ****882",
                    paymentMethod: "Bank payment",
                    amount: "$249.94",
                    date: "Jan 17, 2022",
                    status: "Completed",
                    statusColor: "bg-[#DCFCE7] text-[#14532D",
                    category: "Challenging",
                    dotColor: "bg-[#22C55E]",
                  },
                  {
                    card: "Account ****882",
                    paymentMethod: "Card payment",
                    amount: "$249.94",
                    date: "Jan 17, 2022",
                    status: "Pending",
                    statusColor: "bg-[#FEF9C3] text-[#713F12]",
                    category: "Challenging",
                    dotColor: "bg-[#FACC15]",
                  },
                  {
                    card: "Amex card **** 5666",
                    paymentMethod: "Card payment",
                    amount: "$199.24",
                    date: "Jan 17, 2022",
                    status: "Canceled",
                    statusColor: "bg-[#FEE2E2] text-[#7F1D1D]",
                    category: "CTO Fund",
                    dotColor: "bg-[#EF4444] ",
                  },
                ].map((transaction, index) => (
                  <tr key={index}>
                    <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold flex flex-col w-[40%] ">
                      {transaction.card} <span className="text-secondary text-xs font-medium"> {transaction.paymentMethod}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold  w-[30%]  mx-auto ">
                      {transaction.amount} <span className="text-secondary text-xs font-medium "> <br /> {transaction.date}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm text-secondary text-center font-medium w-[20%]  mx-auto ">
                      {transaction.category}
                    </td>
                    <td className="p-4 whitespace-nowrap mx-auto text-center w-[10%]">
                      <span className="flex flex-col items-center">
                        {/* Dot */}

                        {/* Status */}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.statusColor}`}
                        >
                          <span className={`w-2 h-2 rounded-full inline-block mr-1 ${transaction.dotColor}`}></span>
                          {transaction.status}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="bg-primary text-white py-3 px-6 rounded-full w-max mt-4 mx-auto">
          Withdraw Income
          </button>
        </div>
      </section>
   
    </div>
  </div>
  )
}

export default WithdrawPopup