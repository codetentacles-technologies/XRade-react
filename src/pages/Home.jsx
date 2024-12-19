import { ArrowRight } from 'lucide-react';
import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Hero section */}
            <section className='container  py-14'>
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

            <div className='flex flex-col gap-24 '>

                {/* Card Section */}
                <section className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className='bg-gradient  flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl shadow-2xl'>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='w-[70px] h-[70px]'>
                                    <img src="/images/network-growth-img.webp" alt="" />
                                </div>
                                <h5 className='text-primary text-2xl font-bold'>Network Growth</h5>
                            </div>
                            <p className='text-lightblue text-base font-medium text-center'>Expand your network and watch your passive  income grow. Invite friends, family, and  colleagues to join our platform. The more  people you refer, the larger your network  becomes, leading to exponentially higher  earning potential. Think of it as building your  own financial ecosystem!</p>
                        </div>
                        <div className='bg-gradient flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl shadow-2xl'>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='w-[70px] h-[70px]' >
                                    <img src="/images/tiered-reward-img.webp" alt="" className='w-[55px] h-[70px]' />
                                </div>
                                <h5 className='text-primary text-2xl font-bold'>Tiered Rewards</h5>
                            </div>
                            <p className='text-lightblue text-base font-medium text-center'>Expand your network and watch your passive  income grow. Invite friends, family, and  colleagues to join our platform. The more  people you refer, the larger your network  becomes, leading to exponentially higher  earning potential. Think of it as building your  own financial ecosystem!</p>
                        </div>
                        <div className='bg-gradient flex flex-col justify-center items-center gap-[18px] px-6 py-8 rounded-2xl shadow-2xl'>
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
                <section className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 reffral-income-bg py-8 px-8 xl:px-[100px] rounded-3xl'>
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

                {/*Type of Income */}
                <section>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-primary text-4xl  font-bold flex items-center gap-2.5">Type of Income <img src="/images/rupee-img.webp" alt="rupees" className='w-[36px] h-[36px]' /></h2>
                            <p className="text-lightblue text-base font-normal">Earn referral income from 10 levels of your network's daily ROI.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-center justify-center gap-5 xl:h-[244px] w-full">
                            <div className="flex flex-col gap-4 items-center justify-center text-center  py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-[160px]">
                                <img src="/images/income-img-1.webp" alt="Referral Income" className="w-[54px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Referral Income</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-[160px]">
                                <img src="/images/income-img-2.webp" alt="Dividend Income" className="w-[54px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Dividend Income</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-[160px]">
                                <img src="/images/income-img-3.webp" alt="Level Income" className="w-[54px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Level Income</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-[160px]">
                                <img src="/images/income-img-4.webp" alt="Challenging Income" className="w-[54px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Challenging Income</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-[160px]">
                                <img src="/images/income-img-5.webp" alt="Per-Hour Mining Income" className="w-[64px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Per-Hour Mining Income</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-[160px]">
                                <img src="/images/income-img-6.webp" alt="CTO Fund" className="w-[74px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">CTO Fund</h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-[160px]">
                                <img src="/images/income-img-7.webp" alt="Jackpot Income" className="w-[94px] h-[54px]" />
                                <h3 className="text-secondary text-lg font-bold leading-5">Jackpot Income</h3>
                            </div>
                        </div>
                    </div>
                </section>


                {/* How It Works */}
                <section>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[54px] bg-workgradient rounded-3xl py-6 px-6 xl:px-[100px]'>
                        <div className='flex flex-col gap-[54px]'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-primary text-4xl font-bold flex items-center gap-3'>How It Works <img src="/images/setting-img.webp" alt="setting" className='w-[30px] h-[36px]' /></h4>
                                    <p className='text-lightblue text-base font-normal'>Earn referral income from 10 levels of your network's daily ROI.</p>
                                </div>
                                <p className='text-lightblue text-base font-normal'>This engaging bonus structure incentivizes you to introduce others to the platform's benefits. It's a winwin situation, where you earn additional income while expanding the platform's reach and community</p>
                            </div>
                            <button className='flex gap-2 items-center justify-start text-center bg-blue text-white text-lg font-bold rounded-full py-3 px-6 w-max'>Explore All <ArrowRight /></button>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <h5 className='text-primary text-2xl font-bold'>Per-Hour Mining Bonus: Engaging  Your Network</h5>
                                <p className='text-lightblue text-base font-normal'>Earn referral income from 10 levels of your network's daily ROI.</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center gap-4 border border-[#CFD3E2] rounded-2xl py-4 px-6'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center'>1</p>
                                    <div className='flex flex-col gap-2'>
                                        <h6 className='text-secondary text-lg font-bold leading-5'>Referrals:</h6>
                                        <p className='text-lightblue text-base font-normal leading-5'>Bring 10 referrals within  48 hours.</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 border border-[#CFD3E2] rounded-2xl py-4 px-6'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center'>2</p>
                                    <div className='flex flex-col gap-2'>
                                        <h6 className='text-secondary text-lg font-bold leading-5'>Rewards:</h6>
                                        <p className='text-lightblue text-base font-normal leading-5'>Receive a continuous  reward of $0.25 per  hour.</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 border border-[#CFD3E2] rounded-2xl py-4 px-6'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center'>3</p>
                                    <div className='flex flex-col gap-2'>
                                        <h6 className='text-secondary text-lg font-bold leading-5'>Duration:</h6>
                                        <p className='text-lightblue text-base font-normal leading-5'>Enjoy your bonus for 30  days, credited directly to  your account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Home;
