import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const Home = () => {

    const data = Array(8).fill({
        packageAmount: "$50",
        dailyIncome: "1%",
        duration: "300 Day",
    });

    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "What is the minimum investment amount?",
            answer: "The minimum investment amount is $100."
        },
        {
            question: "How does the referral income work?",
            answer: "You earn a 10% commission for each referral."
        },
        {
            question: "What are the withdrawal policies?",
            answer: "Withdrawals can be made at any time with a minimum fee."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-24 '>

            {/* Hero section */}
            <section className='container'>
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
                                <div className='w-max'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7'>1</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h6 className='text-secondary text-lg font-bold leading-5'>Referrals:</h6>
                                    <p className='text-lightblue text-base font-normal leading-5'>Bring 10 referrals within  48 hours.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 border border-[#CFD3E2] rounded-2xl py-4 px-6'>
                                <div className='w-max'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7'>2</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h6 className='text-secondary text-lg font-bold leading-5'>Rewards:</h6>
                                    <p className='text-lightblue text-base font-normal leading-5'>Receive a continuous  reward of $0.25 per  hour.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 border border-[#CFD3E2] rounded-2xl py-4 px-6'>
                                <div className='w-max'>
                                    <p className='bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7'>3</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h6 className='text-secondary text-lg font-bold leading-5'>Duration:</h6>
                                    <p className='text-lightblue text-base font-normal leading-5 text-wrap'>Enjoy your bonus for 30  days, credited directly to  your account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Level Income */}
            <section>
                <div className='flex flex-col gap-8'>
                    <h4 className='text-primary text-4xl font-bold flex items-center justify-center gap-3 w-full'>Level Income <img src="/images/level-income-img.png" alt="setting" className='w-[37px] h-[36px]' /></h4>
                    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-center gap-6'>
                        <div className='p-3 bg-white rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 1</h5>
                            <p className='font-bold text-lg text-subtext'>0.25%</p>
                        </div>
                        <div className='p-3 bg-[#F4F7FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 2</h5>
                            <p className='font-bold text-lg text-subtext'>0.25%</p>
                        </div>
                        <div className='p-3 bg-[#EDF1FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 3</h5>
                            <p className='font-bold text-lg text-subtext'>0.25%</p>
                        </div>
                        <div className='p-3 bg-[#E7EBFF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 4</h5>
                            <p className='font-bold text-lg text-subtext'>4%</p>
                        </div>
                        <div className='p-3 bg-[#DEE5FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 5</h5>
                            <p className='font-bold text-lg text-subtext'>4%</p>
                        </div>
                        <div className='p-3 bg-[#D9E1FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 6</h5>
                            <p className='font-bold text-lg text-subtext'>3%</p>
                        </div>
                        <div className='p-3 bg-[#D3DDFF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 7</h5>
                            <p className='font-bold text-lg text-subtext'>2%</p>
                        </div>
                        <div className='p-3 bg-[#CAD5FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 8</h5>
                            <p className='font-bold text-lg text-subtext'>1%</p>
                        </div>
                        <div className='p-3 bg-[#B8C7FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 9</h5>
                            <p className='font-bold text-lg text-subtext'>6%</p>
                        </div>
                        <div className='p-3 bg-[#B1C2FF] rounded-2xl shadow-lg text-grey-darker w-max flex flex-col items-center justify-center m-auto py-7 gap-4 px-3.5'>
                            <h5 className='font-bold text-lg text-secondary'>LEVEL 10</h5>
                            <p className='font-bold text-lg text-subtext'>5%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jackpot Tours */}
            <section>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col lg:flex-row gap-3 justify-between'>
                        <h4 className='text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 '>Jackpot Tours: Exclusive Experiences  Await<img src="/images/jackpot-tours.png" alt="setting" className='w-[37px] h-[36px]' />
                        </h4>
                        <button className='flex gap-2 items-center justify-start text-center bg-blue text-white text-lg font-bold rounded-full py-3 px-6 w-max'>Explore All <ArrowRight /></button>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/dubai-img.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">Dubai Tour</h3>
                                <p className="text-lightblue text-base font-medium">$10,000 Direct Business within 45 days</p>
                            </div>
                        </div>

                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/turkey-img.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">Turkey + Dubai Tour</h3>
                                <p className="text-lightblue text-base font-medium">$10,000 Direct Business within 45 days</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/europe-img.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">Europe Tour</h3>
                                <p className="text-lightblue text-base font-medium">$10,000 Direct Business within 45 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divident Income */}
            <section>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <h4 className='text-primary text-4xl font-bold flex items-center gap-3 '>Dividend Income<img src="/images/divident-img.png" alt="setting" className='w-[37px] h-[36px]' />
                            </h4>
                        </div>
                        <p className='text-secondary text-base font-normal'>Choose from a range of investment packages that offer attractive daily returns for a specified duration. This stable  Dividend income structure provides consistent income, allowing you to grow your portfolio with confidence.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='w-full bg-gradient shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3'>
                            <p className='text-4xl font-black text-primary'>2X</p>
                            <p className='text-2xl font-bold text-primary'>Double Your Investment</p>
                            <p className='text-lg font-normal text-secondary'>Within 24 hours</p>
                        </div>
                        <div className='w-full bg-gradient shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3'>
                            <p className='text-4xl font-black text-primary'>50%</p>
                            <p className='text-2xl font-bold text-primary'>50% Cashback</p>
                            <p className='text-lg font-normal text-secondary'>Bonus reward</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jackpot Rewards */}
            <section>
                <div className='flex flex-col gap-8'>

                    <div className="flex flex-col lg:flex-row gap-3 justify-between">
                        <div className='flex flex-col '>
                            <h4 className='text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 '>Jackpot Rewards: Luxurious Recognition<img src="/images/jackpot-rewards.png" alt="setting" className=' h-[36px]' />
                            </h4>
                            <p className='text-secondary text-base font-normal'>Beyond travel, we offer luxurious rewards for high-achieving investors. Our Jackpot Rewards recognize your exceptional  dedication and commitment to the platform.</p>
                        </div>
                        <button className='flex gap-2 items-center justify-center text-center text-nowrap bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-[186px]'>Explore All <ArrowRight /></button>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/superbike.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">Superbike</h3>
                                <p className="text-lightblue text-base font-medium">$50,000 Direct Business  within 100 days</p>
                            </div>
                        </div>

                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/suv-car.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">SUV Car</h3>
                                <p className="text-lightblue text-base font-medium">$100,000 Direct Business  within 100 days</p>
                            </div>
                        </div>

                        <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white">
                            <div className="relative">
                                <img
                                    src="/images/house-fund.png" // Replace with your image URL
                                    alt="Dubai Tour"
                                    className="w-full h-[262px] object-cover"
                                />
                            </div>
                            <div className="p-6 gap-2">
                                <h3 className="text-2xl font-bold text-primary">House Fund</h3>
                                <p className="text-lightblue text-base font-medium">$500,000 Direct Business  within 100 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenging Income */}
            <section>
                <div className='flex flex-col gap-8'>

                    <div className="flex flex-col lg:flex-row gap-3 justify-between">
                        <div className='flex flex-col'>
                            <h4 className='text-primary text-2xl md:text-3xl xl:text-4xl  font-bold flex items-center gap-3 '>Challenging Income: Maximizing  Your Investment Returns<img src="/images/challenging-income.png" alt="setting" className=' h-[36px]' />
                            </h4>
                            <p className='text-secondary text-base font-normal'>Unlock exceptional rewards for your investment prowess. This unique feature challenges you to leverage our platform's  potential for rapid growth.</p>
                        </div>
                        <button className='flex gap-2 items-center justify-center text-center bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-max text-nowrap'>View All <ArrowRight /></button>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <table className="w-full border-collapse rounded-2xl shadow-lg overflow-hidden">
                                <thead className="bg-white">
                                    <tr>
                                        <th className="py-6 px-6 text-center text-lg font-semibold text-[#031641]">
                                            Package Amount
                                        </th>
                                        <th className="py-6 px-6 text-center text-lg font-semibold text-[#031641]">
                                            Daily Income
                                        </th>
                                        <th className="py-6 px-6 text-center text-lg font-semibold text-[#031641]">
                                            Duration
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                                                } hover:bg-gray-100`}
                                        >
                                            <td className="p-6 text-center text-secondary">{row.packageAmount}</td>
                                            <td className="p-6 text-center text-secondary">{row.dailyIncome}</td>
                                            <td className="p-6 text-center text-secondary">{row.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className='text-secondary text-base font-normal mt-8'>This rewarding system encourages strategic investment and enables you to capitalize on the platform's inherent benefits.  It's an opportunity to maximize your earnings and amplify your investment success.</p>
                        </div>
                    </div>
                </div>
            </section>

              {/* Supported Wallets */}
              <section>
                <div className='flex flex-col gap-8 items-center justify-center'>
                    <h4 className='text-primary text-2xl lg:text-3xl xl:text-4xl font-bold'>Supported Wallets</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src="/images/wallet1-img.webp" alt="wallet" className='w-[70px] h-[68px]'/>
                            <p className='text-base text-primary font-medium'>Ton Keeper Wallet</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src="/images/wallet2-img.webp" alt="wallet" className='w-[70px] h-[68px]'/>
                            <p className='text-base text-primary font-medium'>Ton Keeper Wallet</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src="/images/wallet3-img.webp" alt="wallet" className='w-[72px] h-[68px]'/>
                            <p className='text-base text-primary font-medium'>Ton Keeper Wallet</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src="/images/wallet4-img.webp" alt="wallet" className='w-[68px] h-[68px]'/>
                            <p className='text-base text-primary font-medium'>Ton Keeper Wallet</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img src="/images/wallet5-img.webp" alt="wallet" className='w-[63px] h-[68px]'/>
                            <p className='text-base text-primary font-medium'>Ton Keeper Wallet</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section>
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3">Frequently Asked Questions <img src="/images/questionmark-img.webp" alt="questionmark" className='w-[43px] h-[36px]' /></h2>
                        <p className="text-lightblue text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {questions.map((item, index) => (
                            <div key={index} className="">
                                <div className='bg-graygradient p-4 rounded-2xl cursor-pointer'>
                                    <div
                                        className="flex justify-between items-center"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <p className='flex items-center gap-6'>
                                            <span className='text-white text-lg font-bold bg-bluegradient rounded-full w-[31px] h-[31px] leading-7 text-center'>{index + 1}</span>
                                            <span className='text-lg font-medium text-primary'>{item.question}</span>
                                        </p>
                                        <span className={`text-lg font-bold text-primary bg-[#CCD5F1] rounded-[8px] ${openIndex === index ? 'px-2.5' : 'px-2 '}`}>
                                            {openIndex === index ? '-' : '+'}
                                        </span>

                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-[200px]' : 'max-h-0'}`}>
                                        <div className='text-lg font-medium text-primary p-2 ps-14'>
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <div className='flex flex-col gap-6'>

                {/* Terms and Conditions */}
                <section className='bg-terms p-6 rounded-3xl'>
                    <div className='flex flex-col gap-7'>
                        <h4 className='text-primary text-2xl font-bold'>Terms and Conditions</h4>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-4 '>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-sm font-normal text-secondary'>Deposite of Withdrawal (In 24 hours )</p>
                                    <p className='text-sm font-normal text-secondary'>Deposite Charges $1</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h6 className='text-secondary text-base font-bold'>Withdrawal Charges 4</h6>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-sm font-normal text-secondary'>$10 to $500- 8%</p>
                                        <p className='text-sm font-normal text-secondary'>$501 to $2000 - 5%</p>
                                        <p className='text-sm font-normal text-secondary'>$2001 to $6000 – 2%</p>
                                        <p className='text-sm font-normal text-secondary'>$6001 to above – no charges</p>
                                        <p className='text-sm font-normal text-secondary'>The fixed Maintenance fee of $1 is charged for each withdrawal</p>
                                        <p className='text-sm font-normal text-secondary'>The minimum withdrawal amount is in whole number(10,20,30,40,50etc)</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='flex items-center gap-2 text-base font-medium text-secondary'>
                                    <input type='checkbox' className='w-[18px] h-[18px] ' />
                                    I agree to all the above terms and conditions
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us */}
                <section>
                    <div className='flex flex-col gap-6 items-center justify-center'>
                        <h4 className='text-2xl font-bold text-primary'>Thank You & Contact Us</h4>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
                            <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
                                <img src="/images/platform-img.webp" alt="platform" className='w-[80px] h-[42px]' />
                                <h6 className='text-primary text-lg font-bold'>Explore Our Platform</h6>
                                <p className='text-secondary text-sm font-medium'>Discover the full potential of our  innovative investment platform.</p>
                            </div>
                            <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
                                <img src="/images/community-img.webp" alt="community" className='w-[45px] h-[42px]' />
                                <h6 className='text-primary text-lg font-bold'>Explore Our Platform</h6>
                                <p className='text-secondary text-sm font-medium'>Discover the full potential of our  innovative investment platform.</p>
                            </div>
                            <div className='flex flex-col gap-2.5 items-center justify-center text-center'>
                                <img src="/images/contact-img.webp" alt="contact" className='w-[35px] h-[42px]' />
                                <h6 className='text-primary text-lg font-bold'>Explore Our Platform</h6>
                                <p className='text-secondary text-sm font-medium'>Discover the full potential of our  innovative investment platform.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>


    );
};

export default Home;
