import React, { useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import BoxReveal from '../components/ui/box-reveal';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const breadcrumbs = [
        { name: "Home", link: "/" },
        { name: "About Us", isCurrent: true },
    ];

    const aboutus = [
        {
            title: "Diverse Income Streams",
            description:
                "Offers multiple income types, including dividend income, referral income, level income, and more, tailored to suit both experienced and new investors.",
        },
        {
            title: "Investment Packages",
            description:
                "Attractive daily returns ranging from 1% to 1.5% with flexible durations, allowing users to grow their portfolios confidently.",
        },
        {
            title: "Challenging Income Programs",
            description:
                "Rewarding system encouraging strategic investments with features like doubling investment returns within 24 hours or 50% cashback rewards.",
        },
        {
            title: "Tiered Referral System",
            description:
                "Expands earning potential with 10 levels of commissions, rewarding users as their network grows.",
        },
    ];

     const [openIndex, setOpenIndex] = useState(null);
    
      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  const questions = [
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment amount is $100.",
    },
    {
      question: "How does the referral income work?",
      answer: "You earn a 10% commission for each referral.",
    },
    {
      question: "What are the withdrawal policies?",
      answer: "Withdrawals can be made at any time with a minimum fee.",
    },
    {
      question: "What are the withdrawal policies?",
      answer: "Withdrawals can be made at any time with a minimum fee.",
    },
    {
      question: "What are the withdrawal policies?",
      answer: "Withdrawals can be made at any time with a minimum fee.",
    },
  ];

    return (
        <div>
            <div className='about-bg text-white py-6 xl:px-[100px] px-4 '>
                <BreadCrumbs title="About Us" breadcrumbs={breadcrumbs} />
                <div className='flex flex-col items-center justify-center gap-8 pb-[134px]' data-aos="fade-up">
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <BoxReveal boxColor={"#2850cc"} duration={0.5}>
                            <h3 className='text-4xl font-bold'>About AI Trade</h3>
                        </BoxReveal>
                        <BoxReveal boxColor={"#2850cc"} duration={0.5}>
                            <p className='text-center text-lg font-medium text-lightblue'>Pioneering AI in Trading</p>
                        </BoxReveal>
                    </div>
                    <BoxReveal boxColor={"#2850cc"} duration={0.5}>
                        <p className='text-center text-lg font-normal text-lightblue xl:w-[90%] 2xl:w-2/3 mx-auto '>AI Trade redefines cryptocurrency and forex investments by providing diverse income streams, innovative features, and unparalleled rewards. Our mission is to empower individuals with secure and profitable opportunities, enabling them to navigate and thrive in these dynamic markets. With a focus on transparency, growth, and community-driven success, AI Trade offers a robust platform for both experienced investors and newcomers alike.</p>
                    </BoxReveal>
                </div>
            </div>
            <div className='flex flex-col gap-[94px]'>
                <div className='container' data-aos="fade-up">
                    <h4 className="text-primary text-2xl font-bold my-5">
                        Key Features
                    </h4>
                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                        {aboutus.map((item, index) => (
                            <div key={index} className="flex flex-col h-full">
                                <div className="bg-homeabout p-[24px] rounded-[16px] flex flex-col h-full transform transition-all group duration-600 ease-in-out group  hover:bg-boxafterhero hover:shadow-md">
                                    <h1 className="text-primary font-bold text-lg pb-1 ">
                                        {item.title}
                                    </h1>
                                    <p className="text-lightblue font-normal text-sm flex-grow">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container px-4'>
                    <div className='flex flex-col items-center justify-center gap-6 bg-boxafterhero p-6 rounded-3xl hover:shadow-md hover:translate-y-[-1px]' data-aos="fade-up">
                        <h6 className='text-2xl font-bold text-primary'>Get in Touch</h6>
                        <div>
                            <p className='text-lg font-normal text-secondary text-center'>Have questions or need assistance? Contact our support team at support@aitrade.pro We're here for you 24/7.</p>
                            <p className='text-lg font-semibold text-secondary text-center'>Join us on this exciting journey at www.bntrading.pro and let Binance Trading redefine the way you trade!</p>
                        </div>
                    </div>
                </div>
                <div className='text-white advantage-bg py-9 2xl:py-20 xl:px-[100px] px-4 flex flex-col gap-8 items-center justify-center' data-aos="fade-up">
                    <h4 className='text-2xl font-bold'  >Advantages of AI Trade</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                        <div className='flex flex-col gap-3'>
                            <h6 className='text-lg font-bold flex items-center gap-3'><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.67201L3.71939 8.62281C5.15598 9.45098 6.44169 10.5235 7.54865 11.8797C10.412 7.13211 13.7017 3.24216 17.3178 0H20.1516C15.0957 5.6168 10.9696 11.6305 7.67001 18C5.90543 14.2167 3.43732 11.0319 0 8.67201Z" fill="#01A601" />
                            </svg>
                                Flexible Withdrawal Terms</h6>
                            <p className='text-sm font-normal'>Low charges and a seamless process for deposits and withdrawals, including tiered maintenance fees for different transaction volumes.</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h6 className='text-lg font-bold flex items-center gap-3'><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.67201L3.71939 8.62281C5.15598 9.45098 6.44169 10.5235 7.54865 11.8797C10.412 7.13211 13.7017 3.24216 17.3178 0H20.1516C15.0957 5.6168 10.9696 11.6305 7.67001 18C5.90543 14.2167 3.43732 11.0319 0 8.67201Z" fill="#01A601" />
                            </svg>
                                Flexible Withdrawal Terms</h6>
                            <p className='text-sm font-normal'>Low charges and a seamless process for deposits and withdrawals, including tiered maintenance fees for different transaction volumes.</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h6 className='text-lg font-bold flex items-center gap-3'><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.67201L3.71939 8.62281C5.15598 9.45098 6.44169 10.5235 7.54865 11.8797C10.412 7.13211 13.7017 3.24216 17.3178 0H20.1516C15.0957 5.6168 10.9696 11.6305 7.67001 18C5.90543 14.2167 3.43732 11.0319 0 8.67201Z" fill="#01A601" />
                            </svg>
                                Flexible Withdrawal Terms</h6>
                            <p className='text-sm font-normal'>Low charges and a seamless process for deposits and withdrawals, including tiered maintenance fees for different transaction volumes.</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h6 className='text-lg font-bold flex items-center gap-3'><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.67201L3.71939 8.62281C5.15598 9.45098 6.44169 10.5235 7.54865 11.8797C10.412 7.13211 13.7017 3.24216 17.3178 0H20.1516C15.0957 5.6168 10.9696 11.6305 7.67001 18C5.90543 14.2167 3.43732 11.0319 0 8.67201Z" fill="#01A601" />
                            </svg>
                                Flexible Withdrawal Terms</h6>
                            <p className='text-sm font-normal'>Low charges and a seamless process for deposits and withdrawals, including tiered maintenance fees for different transaction volumes.</p>
                        </div>
                    </div>
                </div>
                <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'  data-aos="fade-up">
                    <div className='flex flex-col gap-[18px] border border-[#D6D8DE] p-4 rounded-2xl hover:bg-boxafterhero hover:shadow-md hover:border-none'>
                        <img src="/images/card1-img.webp" alt="card" className='w-[48px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                        <h6 className='text-lg font-bold text-primary'>Multi-Tiered Ecosystem</h6>
                        <p className='text-base font-normal text-lightblue'>A robust platform offering a combination of daily earnings, bonus structures, and community incentives.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[18px] border border-[#D6D8DE] p-4 rounded-2xl  hover:bg-boxafterhero hover:shadow-md hover:border-none'>
                        <img src="/images/card2-img.webp" alt="card" className='w-[71px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                        <h6 className='text-lg font-bold text-primary'>Luxury and Travel Rewards</h6>
                        <p className='text-base font-normal text-lightblue'>Unique opportunities for high-performing investors to earn exclusive rewards, including international tours, luxury vehicles, and house funds.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[18px] border border-[#D6D8DE] p-4 rounded-2xl  hover:bg-boxafterhero hover:shadow-md hover:border-none'>
                        <img src="/images/card3-img.webp" alt="card" className='w-[50px] h-[54px]' />
                        <div className='flex flex-col gap-2'>
                        <h6 className='text-lg font-bold text-primary'>Innovative Bonus Programs</h6>
                        <p className='text-base font-normal text-lightblue'>Per-hour mining bonuses and referral-based rewards incentivize platform engagement and network growth.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[18px] border border-[#D6D8DE] p-4 rounded-2xl  hover:bg-boxafterhero hover:shadow-md hover:border-none'>
                        <img src="/images/card4-img.webp" alt="card" className='w-[52px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                        <h6 className='text-lg font-bold text-primary'>CTO Fund</h6>
                        <p className='text-base font-normal text-lightblue'>A high-value investment option offering up to 20% bonuses, designed to unlock exponential growth for users.</p>
                        </div>
                    </div>
                </div>
                <div className=" container flex flex-col gap-8 px-4 lg:px-0 py-8"  data-aos="fade-up">
            <div className=''>
              <h2 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3">
                Frequently Asked Questions{" "}
                <img
                  src="/images/questionmark-img.webp"
                  alt="questionmark"
                  className="w-[43px] h-[36px]"
                />
              </h2>
              <p className="text-lightblue text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut
                nulla eu stetur eget.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {questions.map((item, index) => (
                <div key={index} className="">
                  <div className="bg-hovergradient hover:bg-[#EAEFFC] p-4 rounded-2xl cursor-pointer">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => handleToggle(index)}
                    >
                      <p className="flex items-center gap-6">
                        <span className="text-white text-lg font-bold bg-bluegradient rounded-full w-[31px] h-[31px] leading-7 text-center">
                          {index + 1}
                        </span>
                        <span className="text-lg font-medium text-primary">
                          {item.question}
                        </span>
                      </p>
                      <span
                        className={`text-lg font-bold text-primary bg-[#CCD5F1] rounded-[8px] ${openIndex === index ? "px-2.5" : "px-2 "
                          }`}
                      >
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-[200px]" : "max-h-0"
                        }`}
                    >
                      <div className="text-lg font-medium text-primary p-2 ps-14">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
        </div>
    )
}

export default About