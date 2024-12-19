import { ArrowRight } from 'lucide-react';
import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Hero section */}
            <section className='container px-4 py-14'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='col-span-2 m-auto flex flex-col gap-6 xl:gap-9'>
                        <div className='flex flex-col gap-4 xl:gap-6'>
                            <h1 className='text-primary text-3xl lg:text-4xl xl:text-[54px] font-black leading-tight'>  <span className='text-lightblue text-2xl lg:text-3xl xl:text-[40px] font-normal'>Unlock Consistent Passive Income with </span> High-Value Crypto Investments</h1>
                            <p className='text-lightblue  text-base xl:text-lg font-medium'>Join a platform that merges innovative crypto mechanisms with rewarding opportunities.</p>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-6'>
                            <button className='text-primary border border-primary rounded-full text-lg font-semibold py-3.5  px-9 w-full lg:w-max text-center flex items-center justify-center gap-3 hover:bg-primary hover:text-white  transition duration-300 ease-in-out'>Get Started Now <ArrowRight /></button>
                            <button className='text-white bg-blue rounded-full text-lg font-semibold py-3.5 px-9 w-full lg:w-max  hover:bg-primary transition duration-300 ease-in-out'>Learn More About Our Features</button>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src="/images/hero-section-img.webp" alt="" />
                    </div>
                </div>
            </section>

            {/* Card Section */}
            <section>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='bg-gradient  flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl '>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='w-[70px] h-[70px]'>
                                <img src="/images/network-growth-img.webp" alt="" />
                            </div>
                            <h5 className='text-primary text-2xl font-bold'>Network Growth</h5>
                        </div>
                        <p className='text-lightblue text-base font-medium text-center'>Expand your network and watch your passive  income grow. Invite friends, family, and  colleagues to join our platform. The more  people you refer, the larger your network  becomes, leading to exponentially higher  earning potential. Think of it as building your  own financial ecosystem!</p>
                    </div>
                    <div className='bg-gradient flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='w-[70px] h-[70px]' >
                                <img src="/images/tiered-reward-img.webp" alt="" className='w-[55px] h-[70px]' />
                            </div>
                            <h5 className='text-primary text-2xl font-bold'>Tiered Rewards</h5>
                        </div>
                        <p className='text-lightblue text-base font-medium text-center'>Expand your network and watch your passive  income grow. Invite friends, family, and  colleagues to join our platform. The more  people you refer, the larger your network  becomes, leading to exponentially higher  earning potential. Think of it as building your  own financial ecosystem!</p>
                    </div>
                    <div className='bg-gradient flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='w-[70px] h-[70px]' >
                                <img src="/images/Passive-income-img.webp" alt="" />
                            </div>
                            <h5 className='text-primary text-2xl font-bold'>Passive Income</h5>
                        </div>
                        <p className='text-lightblue text-base font-medium text-center'>Expand your network and watch your passive  income grow. Invite friends, family, and  colleagues to join our platform. The more  people you refer, the larger your network  becomes, leading to exponentially higher  earning potential. Think of it as building your  own financial ecosystem!</p>
                    </div>
                </div>
            </section>

            {/* Referral Income */}
            <section className='py-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 reffral-income-bg py-8 px-[100px] rounded-3xl'>
                    <div className='col-span-2 flex flex-col  gap-4'>
                        <div>
                            <h4 className='text-white font-bold text-4xl leading-tight'>Referral Income</h4>
                            <p className='text-white font-normal text-base'>Earn referral income from 10 levels of your network's daily ROI.</p>
                        </div>
                        <p className='text-white font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor</p>
                    </div>
                    <div className='m-auto flex flex-col justify-center items-center relative'>
                        <button className='bg-white text-[32px] font-bold text-blue py-5 px-12 rounded-3xl w-[256px] absotute z-10'>
                            Direct 15%
                        </button>
                        <p className='bg-[#AFBFF0] rounded-b-3xl w-[236px] h-8 absolute bottom-[-10px] z-[1]'></p>
                        <p className='bg-[#8296D3] rounded-b-3xl w-[208px] h-8 absolute bottom-[-20px]'></p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
