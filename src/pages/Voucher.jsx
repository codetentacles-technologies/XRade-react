import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs';

const Voucher = () => {
    const breadcrumbs = [
        { name: "Home", link: "/" },
        { name: "Dashboard", link: "/Dashboard" },
        { name: "Redeem Voucher", isCurrent: true },
    ];
    return (
        <div className='container text-primary'>
            <BreadCrumbs title="Voucher" breadcrumbs={breadcrumbs} />
            <div className='flex flex-col items-center justify-center h-page'>
                <div className='flex flex-col items-center justify-center mx-auto gap-[74px] h-min bg-bluegradient text-white p-[32px] rounded-2xl w-full md:w-1/2 lg:w-1/3'>
                    <div className='flex flex-col gap-8 items-center justify-center'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Congratulations !</h2>
                        <p className='text-base font-normal text-center'>This dashboard is your gateway to real-time insights, empowering you to track and maximize your earnings effortlessly. Here, you'll find up-to-the-minute updates on your investments, referral performance, and rewards.</p>
                    </div>

                    <button className='bg-white text-primary rounded-full py-4 px-[64px] text-xl font-bold'>Redeem Now</button>
                </div>
            </div>
        </div>
    )
}

export default Voucher