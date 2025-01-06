import { ArrowRight, ChevronRight, Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import ChartComponent from "../components/ChartComponent";
import BoxReveal from "../components/ui/box-reveal.tsx";
import ShinyButton from "../components/ui/shiny-button.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Home = () => {
  const data = Array(8).fill({
    packageAmount: "$50",
    dailyIncome: "1%",
    duration: "300 Day",
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ==================== DATA ===============================

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

  const steps = [
    {
      title: "Login Or Create our account",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendisse consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
    },
    {
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor",
    },
    {
      title: "Choose your crypto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. r adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
    },
    {
      title: "Pre-Sale and Buy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. r adipiscing elit. At sit ut nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse  aliquam ut egestas duis dolor. Congue suspendiss consectetur adipiscing elit. ",
    },
  ];

  return (
    <div className="flex flex-col gap-24 ">
      {/* Hero section */}
      <section className="p-0">
        <div className=" m-auto flex flex-col items-center justify-center text-center gap-6 xl:gap-9 w-full hero-bg py-32">
          <div className="flex flex-col gap-4 xl:gap-6">
            <BoxReveal boxColor={"#070E2D66"} duration={0.5}>
              <h1 className="text-white text-3xl lg:text-4xl xl:text-[54px] font-black leading-tight">
                <span className="text-white text-2xl lg:text-3xl xl:text-[40px] font-normal">
                  Unlock Consistent Passive Income with <br />
                </span>
                High-Value Crypto Investments
              </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#070E2D66"} duration={0.5}>
              <p className="text-white text-base xl:text-lg font-medium">
                Join a platform that merges innovative crypto mechanisms with
                rewarding opportunities.
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-6">
            <BoxReveal boxColor={"#070E2D66"} duration={0.5}>
              <button className="text-white border border-white rounded-full text-sm md:text-lg font-semibold py-3.5 px-14 w-full xl:w-max text-center flex items-center justify-center gap-3 hover:bg-primary hover:text-white hover:border-primary transition duration-300 ease-in-out hover-arrow-btn">
                Get Started Now{" "}
                <ArrowRight className="arrow-icon" size={24} />
              </button>
            </BoxReveal>

            <BoxReveal boxColor={"#070E2D66"} duration={0.5}>
              <Link to="/PageNotFound" className="no-underline">
                <button className="text-white bg-blue rounded-full text-sm md:text-lg font-semibold py-3.5 px-8 w-full xl:w-max hover:bg-primary transform transition-all group duration-300 ease-in-out">
                  Learn More About Our Features
                </button>
              </Link>
            </BoxReveal>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <section data-aos="fade-up" className="container">
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1 flex flex-col gap-5">
            <h6 className="text-primary text-4xl font-bold">AI Trading</h6>
            <p className="text-sm font-normal text-lightblue">Welcome to the Real-Time Website Activity section, where you can stay updated with live insights into the platform's performance and engagement. This dynamic chart provides a comprehensive overview of user activity, including the number of visitors currently exploring the website, recent transactions, and real-time engagement metrics such as clicks, likes, and interactions. You can also see which pages are performing the best, offering a snapshot of the most visited sections of the site.</p>
            <p className="text-sm font-normal text-lightblue">Additionally, the chart highlights geographic data, showcasing where our users are connecting from, and provides trends like bounce rates, session durations, and conversion rates. Whether you're curious about peak activity times or recent spikes in user engagement, this tool keeps you informed with live updates. Dive deeper into the data and optimize your experience with these actionable insights.</p>
          </div>
          <div className="xl:col-span-2 w-full m-auto hover:rounded-3xl  hover:shadow-xl transition-all duration-300 ease-in-out">
            <img src="/images/graph-img.webp" alt="graph" className="rounded-3xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="container" data-aos="fade-up">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="card flex flex-col justify-center items-center rounded-2xl group gap-[18px] px-6 py-8 transform  transition-all group duration-300 ease-in-out group hover:rounded-2xl hover:bg-boxafterhero ">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="w-[70px] h-[70px]">
                <img src="/images/network-growth-img.webp" alt="" />
              </div>
              <h5 className="text-primary text-2xl font-bold">
                Network Growth
              </h5>
            </div>
            <p className="text-lightblue text-base font-medium text-center md:w-[50%] lg:w-[40%] xl:w-full">
              Expand your network and watch your passive income grow. Invite
              friends, family, and colleagues to join our platform. The more
              people you refer, the larger your network becomes, leading to
              exponentially higher earning potential. Think of it as building
              your own financial ecosystem!
            </p>
          </div>
          <div className="card flex flex-col justify-center items-center rounded-2xl group gap-[18px] px-6 py-8 transform  transition-all group duration-300 ease-in-out group hover:rounded-2xl hover:bg-boxafterhero">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="w-[70px] h-[70px]">
                <img
                  src="/images/tiered-reward-img.webp"
                  alt=""
                  className="w-[55px] h-[70px]"
                />
              </div>
              <h5 className="text-primary text-2xl font-bold">
                Tiered Rewards
              </h5>
            </div>
            <p className="text-lightblue text-base font-medium text-center md:w-[50%] lg:w-[40%] xl:w-full">
              Expand your network and watch your passive income grow. Invite
              friends, family, and colleagues to join our platform. The more
              people you refer, the larger your network becomes, leading to
              exponentially higher earning potential. Think of it as building
              your own financial ecosystem!
            </p>
          </div>
          <div className="card flex flex-col justify-center items-center rounded-2xl group gap-[18px] px-6 py-8 transform  transition-all group duration-300 ease-in-out group hover:rounded-2xl hover:bg-boxafterhero">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-[70px] h-[70px]">
                <img
                  src="/images/Passive-income-img.webp"
                  alt=""
                  className=""
                />
              </div>
              <h5 className="text-primary text-2xl font-bold">
                Passive Income
              </h5>
            </div>
            <p className="text-lightblue text-base font-medium text-center  md:w-[50%] lg:w-[40%] xl:w-full">
              Expand your network and watch your passive income grow. Invite
              friends, family, and colleagues to join our platform. The more
              people you refer, the larger your network becomes, leading to
              exponentially higher earning potential. Think of it as building
              your own financial ecosystem!
            </p>
          </div>
        </div>
      </section>

      {/* Referral Income */}
      <section className="container" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 reffral-income-bg py-8 px-8 xl:px-[100px] rounded-3xl">
          <div className="col-span-2 flex flex-col  gap-4">
            <div>
              <h4 className="text-white font-bold text-4xl leading-tight">
                Referral Income
              </h4>
              <p className="text-white font-normal text-base">
                Earn referral income from 10 levels of your network's daily ROI.
              </p>
            </div>
            <p className="text-white font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut
              nulla eu stetur eget. Nec, ac, sollicitudin aliquam ut egestas
              duis dolor. Congue suspendisse aliquam ut egestas duis dolor
            </p>
          </div>
          <div className="m-auto flex flex-col justify-center items-center relative mb-5 lg:mb-auto">
            <div className="shiny-div">Direct 15%</div>

            <p className="bg-[#AFBFF0] rounded-b-3xl w-[236px] h-8 absolute bottom-[-10px] z-[1]"></p>
            <p className="bg-[#8296D3] rounded-b-3xl w-[208px] h-8 absolute bottom-[-20px]"></p>
          </div>
        </div>
      </section>

      {/*Type of Income */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-primary text-4xl  font-bold flex items-center gap-2.5">
              Type of Income{" "}
              <img
                src="/images/rupee-img.webp"
                alt="rupees"
                className="w-[36px] h-[36px]"
              />
            </h2>
            <p className="text-lightblue text-base font-normal">
              Earn referral income from 10 levels of your network's daily ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-center justify-center gap-5 xl:h-[244px] w-full">
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "1" }}
            >
              <img
                src="/images/income-img-1.webp"
                alt="Referral Income"
                className="w-[54px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Referral Income
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "2" }}
            >
              <img
                src="/images/income-img-2.webp"
                alt="Dividend Income"
                className="w-[54px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Dividend Income
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "3" }}
            >
              <img
                src="/images/income-img-3.webp"
                alt="Level Income"
                className="w-[54px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Level Income
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "4" }}
            >
              <img
                src="/images/income-img-4.webp"
                alt="Challenging Income"
                className="w-[54px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Challenging Income
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "5" }}
            >
              <img
                src="/images/income-img-5.webp"
                alt="Per-Hour Mining Income"
                className="w-[64px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Per-Hour Mining Income
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mt-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "6" }}
            >
              <img
                src="/images/income-img-6.webp"
                alt="CTO Fund"
                className="w-[74px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                CTO Fund
              </h3>
            </div>
            <div
              className="flex flex-col gap-4 items-center justify-center text-center py-7 px-5 rounded-2xl shadow-lg mx-auto mb-auto w-full md:w-[160px] contain-income-type"
              style={{ "--i": "7" }}
            >
              <img
                src="/images/income-img-7.webp"
                alt="Jackpot Income"
                className="w-[94px] h-[54px]"
              />
              <h3 className="text-secondary text-lg font-bold leading-5">
                Jackpot Income
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-aos="fade-up" className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[54px] group work rounded-3xl py-6 px-6 xl:px-[100px]">
          <div className="flex flex-col gap-[54px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-4xl font-bold flex items-center gap-3">
                  How It Works{" "}
                  <img
                    src="/images/setting-img.webp"
                    alt="setting"
                    className="w-[30px] h-[36px]"
                  />
                </h4>
                <p className="text-white text-base font-normal">
                  Earn referral income from 10 levels of your network's daily
                  ROI.
                </p>
              </div>
              <p className="text-white text-base font-normal">
                This engaging bonus structure incentivizes you to introduce
                others to the platform's benefits. It's a winwin situation,
                where you earn additional income while expanding the platform's
                reach and community
              </p>
            </div>
            <button className="hover-arrow-btn flex gap-2 items-center justify-start text-center bg-subtext text-white text-lg font-bold rounded-full py-3 px-6 w-max hover:bg-primary hover:text-white transition duration-300 ease-in-out">
              Explore All <ArrowRight className="arrow-icon" size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="text-white text-2xl font-bold">
                Per-Hour Mining Bonus: Engaging Your Network
              </h5>
              <p className="text-white text-base font-normal">
                Earn referral income from 10 levels of your network's daily ROI.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border border-[#CFD3E2] group hover:bg-hovergradient transform transition-all group duration-300 ease-in-out rounded-2xl py-4 px-6">
                <div className="w-max">
                  <p className="bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7">
                    1
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-white text-lg font-bold leading-5">
                    Referrals:
                  </h6>
                  <p className="text-white text-base font-normal leading-5">
                    Bring 10 referrals within 48 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#CFD3E2] group hover:bg-hovergradient transform transition-all group duration-300 ease-in-out rounded-2xl py-4 px-6">
                <div className="w-max">
                  <p className="bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7">
                    2
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-white text-lg font-bold leading-5">
                    Rewards:
                  </h6>
                  <p className="text-white text-base font-normal leading-5">
                    Receive a continuous reward of $0.25 per hour.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#CFD3E2] group hover:bg-hovergradient transform transition-all group duration-300 ease-in-out rounded-2xl py-4 px-6">
                <div className="w-max">
                  <p className="bg-bluegradient text-white text-lg font-bold w-[31px] h-[31px] rounded-full text-center leading-7">
                    3
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-white text-lg font-bold leading-5">
                    Duration:
                  </h6>
                  <p className="text-white text-base font-normal leading-5 text-wrap">
                    Enjoy your bonus for 30 days, credited directly to your
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Income */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <h4 className="text-primary text-4xl font-bold flex items-center justify-center gap-3 w-full">
            Level Income{" "}
            <img
              src="/images/level-income-img.png"
              alt="setting"
              className="w-[37px] h-[36px]"
            />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-center gap-6">
            <div className="p-3 bg-white rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 1</h5>
              <p className="font-bold text-md text-[#031641]">0.25%</p>
            </div>
            <div className="p-3 bg-[#F4F7FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 2</h5>
              <p className="font-bold text-md text-[#031641]">0.25%</p>
            </div>
            <div className="p-3 bg-[#EDF1FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 3</h5>
              <p className="font-bold text-md text-[#031641]">0.25%</p>
            </div>
            <div className="p-3 bg-[#E7EBFF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 4</h5>
              <p className="font-bold text-md text-[#031641]">4%</p>
            </div>
            <div className="p-3 bg-[#DEE5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 5</h5>
              <p className="font-bold text-md text-[#031641]">4%</p>
            </div>
            <div className="p-3 bg-[#D9E1FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 6</h5>
              <p className="font-bold text-md text-[#031641]">3%</p>
            </div>
            <div className="p-3 bg-[#D3DDFF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 7</h5>
              <p className="font-bold text-md text-[#031641]">2%</p>
            </div>
            <div className="p-3 bg-[#CAD5FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 8</h5>
              <p className="font-bold text-md text-[#031641]">1%</p>
            </div>
            <div className="p-3 bg-[#B8C7FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 9</h5>
              <p className="font-bold text-md text-[#031641]">6%</p>
            </div>
            <div className="p-3 bg-[#B1C2FF] rounded-2xl shadow-lg text-grey-darker w-full md:w-max flex flex-col items-center justify-center m-auto py-5 gap-4 px-3.5">
              <h5 className="font-bold text-lg text-secondary">LEVEL 10</h5>
              <p className="font-bold text-md text-[#031641]">5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network section */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold">
            Per-Hour Mining Bonus: Engaging  Your Network
          </h4>
          <div className="flex flex-col md:flex-row  gap-6">
            {/* Card 1 */}
            <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
              <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                <img src="/images/refferal-img.webp" alt="" className="m-auto w-[66px] h-[66px]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-primary">Referral Benefits</h3>
                <p className="text-base font-medium text-secondary">
                  Bring 10 referrals within  48 hours.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
              <img src="/images/dotted-line.webp" alt="" />
            </div>

            {/* Card 2 */}
            <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
              <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center  hover:shadow-xl">
                <img src="/images/reward-img.webp" alt="" className="m-auto  w-[52px] h-[66px]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-primary">Reward</h3>
                <p className="text-base font-medium text-secondary">
                  Receive a continuous  reward of $0.25 per  hour.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[25%] mt-[42px] hidden md:block">
              <img src="/images/dotted-line.webp" alt="" />
            </div>

            {/* Card 3 */}
            <div className="text-center w-full lg:w-[25%] flex flex-col items-center justify-center gap-8">
              <div className="bg-homeabout m-auto w-[90px] h-[90px] rounded-[20px] flex items-center justify-center hover:shadow-xl">
                <img src="/images/timer-img.webp" alt="" className="m-auto w-[56px] h-[66px]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-2xl text-primary">Duration</h3>
                <p className="text-base font-medium text-secondary">
                  Enjoy your bonus for 30  days, credited directly to  your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Jackpot Tours */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-3 justify-between">
            <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 ">
              Jackpot Tours: Exclusive Experiences Await
              <img
                src="/images/jackpot-tours.png"
                alt="setting"
                className="w-[37px] h-[36px]"
              />
            </h4>
            <button className="flex gap-2 items-center justify-center text-center text-nowrap bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-[186px] hover-arrow-btn">
              Explore All
              <ArrowRight className="arrow-icon" size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/dubai-img.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">Dubai Tour</h3>
                <p className="text-lightblue text-base font-medium">
                  $10,000 Direct Business within 45 days
                </p>
              </div>
            </div>

            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/turkey-img.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">
                  Turkey + Dubai Tour
                </h3>
                <p className="text-lightblue text-base font-medium">
                  $10,000 Direct Business within 45 days
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/europe-img.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">Europe Tour</h3>
                <p className="text-lightblue text-base font-medium">
                  $10,000 Direct Business within 45 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divident Income */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h4 className="text-primary text-4xl font-bold flex items-center gap-3">
                Challenging Income: Maximizing  Your Investment Returns
                <img
                  src="/images/divident-img.png"
                  alt="setting"
                  className="w-[37px] h-[36px]"
                />
              </h4>
            </div>
            <p className="text-secondary text-base font-normal">
              Choose from a range of investment packages that offer attractive
              daily returns for a specified duration. This stable Dividend
              income structure provides consistent income, allowing you to grow
              your portfolio with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full investment shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3 transform transition-all duration-[500ms] ease-[ease] delay-0 group ">
              <p className="text-4xl font-black text-white  transform transition-all duration-300 ease-in-out">
                2X
              </p>
              <p className="text-2xl font-bold text-white  transform transition-all duration-300 ease-in-out">
                Double Your Investment
              </p>
              <p className="text-lg font-normal text-white  transform transition-all duration-300 ease-in-out">
                Within 24 hours
              </p>
            </div>
            <div className="w-full cashback shadow-lg flex flex-col justify-center items-center py-8 rounded-3xl gap-3 transform transition-all duration-[500ms] ease-[ease] delay-0 group ">
              <p className="text-4xl font-black text-white  transform transition-all duration-300 ease-in-out">
                50%
              </p>
              <p className="text-2xl font-bold text-white  transform transition-all duration-300 ease-in-out">
                50% Cashback
              </p>
              <p className="text-lg font-normal text-white  transform transition-all duration-300 ease-in-out">
                Bonus reward
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jackpot Rewards */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-3 justify-between">
            <div className="flex flex-col ">
              <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3 ">
                Jackpot Rewards: Luxurious Recognition
                <img
                  src="/images/jackpot-rewards.png"
                  alt="setting"
                  className=" h-[36px]"
                />
              </h4>
              <p className="text-secondary text-base font-normal">
                Beyond travel, we offer luxurious rewards for high-achieving
                investors. Our Jackpot Rewards recognize your exceptional
                dedication and commitment to the platform.
              </p>
            </div>
            {/* <button className="flex gap-2 items-center justify-center text-center text-nowrap bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-[186px] hover-arrow-btn">
              Explore All <ArrowRight className="arrow-icon" size={24} />
            </button> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/superbike.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">Superbike</h3>
                <p className="text-lightblue text-base font-medium">
                  $50,000 Direct Business within 100 days
                </p>
              </div>
            </div>

            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/suv-car.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">SUV Car</h3>
                <p className="text-lightblue text-base font-medium">
                  $100,000 Direct Business within 100 days
                </p>
              </div>
            </div>

            <div className="max-w-sm mx-auto rounded-3xl overflow-hidden border border-bodytext bg-white transform transition-all duration-300 ease-in-out group hover:shadow-xl hover:border-0">
              <div className="relative overflow-hidden">
                <img
                  src="/images/house-fund.png" // Replace with your image URL
                  alt="Dubai Tour"
                  className="w-full h-[262px] object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 gap-2">
                <h3 className="text-2xl font-bold text-primary">House Fund</h3>
                <p className="text-lightblue text-base font-medium">
                  $500,000 Direct Business within 100 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col lg:flex-row gap-3 justify-between">
          <div className="flex flex-col">
            <h4 className="text-primary text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-3">
              About AI Trade
              <img
                src="/images/about_home.svg"
                alt="setting"
                className=" h-[36px]"
              />
            </h4>
            <p className="text-lightblue font-normal">
              Pioneering AI in AI Trading
            </p>
          </div>
          <button className="flex gap-2 items-center justify-center text-center bg-blue text-white text-lg font-bold rounded-full py-3 px-6 h-[54px] w-max text-nowrap hover-arrow-btn">
            View All <ArrowRight className="arrow-icon" size={24} />
          </button>
        </div>
        <p className="text-lightblue font-normal my-4">
          Binance Trading is a trailblazer in the world of arbitrage trading,
          fusing artificial intelligence with financial expertise to redefine
          how you engage with global markets. Our mission is to empower traders
          of all levels with advanced tools and insights, ensuring they navigate
          the complexities of financial markets with confidence and success.
        </p>
        <h4 className="text-primary text-2xl font-bold my-5">
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {aboutus.map((item, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-bluegradient p-[24px] rounded-[16px] flex flex-col h-full transform transition-all group duration-600 ease-in-out group hover:translate-y-[-1px] hover:bg-hoverbluegradient  ">
                <h1 className="text-white font-bold text-lg pb-1 ">
                  {item.title}
                </h1>
                <p className="text-white font-normal text-sm flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenging Income */}
      <section className="container">
        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-2xl font-bold text-primary">Transactions</h2>
              <p className="text-sm font-medium text-[#71717A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a href="#" className="text-secondary text-sm font-semibold flex items-center gap-1 ">
              See All Transactions <ChevronRight size={16} />
            </a>
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
                    <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold flex flex-col w-[20%]">
                      {transaction.card} <span className="text-secondary text-xs font-medium"> {transaction.paymentMethod}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm text-primary font-semibold w-[20%]">
                      {transaction.amount} <span className="text-secondary text-xs font-medium "> <br /> {transaction.date}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap mx-auto text-center w-[35%]">
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

                    <td className="p-4 whitespace-nowrap text-sm text-secondary text-center font-medium w-[20%]">
                      {transaction.category}
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm text-secondary font-medium w-[5%]">
                      <button className="text-secondary hover:text-gray-600">
                        <Ellipsis size={32} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* Meet the Fund Team */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h4 className="flex items-center gap-2 text-primary text-2xl lg:text-3xl xl:text-4xl font-bold">
            Meet the Fund Team{" "}
            <img src="/images/fund-team.webp" className="h-9" alt="" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src="/images/fund-team1.svg"
                alt="wallet"
                className="w-[200px] "
              />
              <p className="text-lg text-primary font-semibold">John Smith</p>
              <p className="text-sm text-lightblue text-center font-medium">
                John Smith is the CTO of our company. He has over 15 years of
                experience in the blockchain and fintech industries.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src="/images/fund-team2.svg"
                alt="wallet"
                className="w-[200px] "
              />
              <p className="text-lg text-primary font-semibold">Jane Doe</p>
              <p className="text-sm text-lightblue text-center font-medium">
                Jane Doe is the Head of Operations for the CTO Fund. She is a
                seasoned financial expert with a passion for innovation.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src="/images/fund-team3.svg"
                alt="wallet"
                className="w-[200px] "
              />
              <p className="text-lg text-primary font-semibold">
                Michael Jones
              </p>
              <p className="text-sm text-lightblue text-center font-medium">
                Michael Jones is the Chief Investment Officer of the CTO Fund.
                He brings a wealth of experience in portfolio management and
                risk assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Exponential Growth with the  CTO Fund */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h4 className="flex items-center gap-2 text-primary text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
            Unlock Exponential Growth with the CTO Fund
            <img src="/images/cto-funds.webp" className="h-9" alt="" />
          </h4>
          <div className="relative w-[300px] h-[300px] mx-auto animate-rotate">
            {/* <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-[322px] h-[322px] rounded-full border-[30px] border-blue "></div>
              <div className="absolute w-[228px] h-[228px] rounded-full border-[20px] border-primary"></div>
              <div className="absolute w-[158px] h-[158px] rounded-full border-[15px] border-[#031641]"></div>
            </div> */}
            <div className="absolute inset-0 flex justify-center items-center">
              <ChartComponent />
            </div>
            <div className="absolute left-[60%] top-[-5%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
              <p className="font-bold">$2,000,000</p>
              <p>20% Bonus</p>
            </div>
            <div className="absolute left-[30%] top-[70%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
              <p className="font-bold">$1,500,000</p>
              <p>10% Bonus</p>
            </div>
            <div className="absolute left-[45%] top-[30%] transform -translate-x-1/2 bg-white shadow-graphlabel rounded-[12px] p-2 text-center text-blue-900">
              <p className="font-bold">$750,000</p>
              <p>5% Bonus</p>
            </div>
          </div>
          {/* <HalfDoughnutChart/> */}
          <p className="text-lg text-secondary font-medium mt-2">
            Invest in the CTO Fund and receive a bonus based on your business
            level. Within 200 days
          </p>
        </div>
      </section>

      {/* Our Visionary Roadmap */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8 items-center justify-center rounded-3xl p-6">
          <h4 className="flex  items-center gap-2 text-primary text-2xl lg:text-3xl xl:text-4xl font-bold">
            Our Visionary Roadmap
            <img src="/images/roadmap.webp" className="h-9" alt="" />
          </h4>

          <div className="flex flex-col items-center justify-center gap-[40px] md:gap-[93px]">
            <div className="relative w-full max-w-4xl">
              {/* Timeline Line */}
              <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-[2px]  bg-[#D0D8EF] h-full"></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center w-full mb-10 last:mb-0 ps-4 md:ps-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Title */}
                  <div className={`w-full md:w-1/2 text-left ps-4 md:ps-8 ${index % 2 === 0 ? '' : 'md:text-right pe-4 md:pe-8'}`}>
                    <h3 className="text-lg md:text-2xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>

                  {/* Circle Indicator */}
                  <div className="relative w-8 h-8 flex-shrink-0 ">
                    <div className="absolute left-[-180px] md:left-1/2 top-[-30px] md:top-0 transform md:-translate-x-1/2 bg-blue-500  w-8 h-8 rounded-full flex items-center justify-center">
                      <div className="bg-blue timeline-shadow w-2 h-2 rounded-full"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={`w-full md:w-1/2 text-left bg-primary rounded-3xl text-lg font-medium ${index % 2 === 0 ? '' : 'text-left'}`}>
                    <p className="text-lightgray bg-gradient rounded-3xl p-4 text-lg font-medium mb-[5px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Supported Wallets */}
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h4 className="flex items-center gap-2 text-primary text-2xl lg:text-3xl xl:text-4xl font-bold">
            Supported Wallets{" "}
            <img src="/images/supported-wallets.webp" className="h-9" alt="" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-center mx-auto gap-16">
            <div
              className="flex flex-col items-center justify-center text-center gap-4 contain-wallet"
              style={{ "--w": "1" }}
            >
              <img
                src="/images/wallet1-img.webp"
                alt="wallet"
                className="w-[70px] h-[68px]"
              />
              <p className="text-base text-primary font-semibold">
                Ton Keeper Wallet
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center text-center gap-4 contain-wallet"
              style={{ "--w": "2" }}
            >
              <img
                src="/images/wallet2-img.webp"
                alt="wallet"
                className="w-[70px] h-[68px]"
              />
              <p className="text-base text-primary font-semibold">
                Ton Keeper Wallet
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center text-center gap-4 contain-wallet"
              style={{ "--w": "3" }}
            >
              <img
                src="/images/wallet3-img.webp"
                alt="wallet"
                className="w-[72px] h-[68px]"
              />
              <p className="text-base text-primary font-semibold">
                Ton Keeper Wallet
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center text-center gap-4 contain-wallet"
              style={{ "--w": "4" }}
            >
              <img
                src="/images/wallet4-img.webp"
                alt="wallet"
                className="w-[68px] h-[68px]"
              />
              <p className="text-base text-primary font-semibold">
                Ton Keeper Wallet
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center text-center gap-4 contain-wallet"
              style={{ "--w": "5" }}
            >
              <img
                src="/images/wallet5-img.webp"
                alt="wallet"
                className="w-[63px] h-[68px]"
              />
              <p className="text-base text-primary font-semibold">
                Ton Keeper Wallet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section data-aos="fade-up" className=" bg-[#F8F9FF]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11  lg:pe-4 xl:pe-20 2xl:pe-[300px]">
          <div>
            <img src="/images/bitcoin-img.webp" alt="bitcoin" />
          </div>
          <div className="flex flex-col gap-8 px-4 lg:px-0 py-8">
            <div>
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
      </section>

      <div className="container flex flex-col gap-6" data-aos="fade-up">
        {/* Terms and Conditions */}
        <section className="bg-terms p-6 rounded-3xl">
          <div className="flex flex-col gap-7">
            <h4 className="text-primary text-2xl font-bold">
              Terms and Conditions
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-normal text-secondary">
                    Deposite of Withdrawal (In 24 hours )
                  </p>
                  <p className="text-sm font-normal text-secondary">
                    Deposite Charges $1
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-secondary text-base font-bold">
                    Withdrawal Charges 4
                  </h6>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-normal text-secondary">
                      $10 to $500- 8%
                    </p>
                    <p className="text-sm font-normal text-secondary">
                      $501 to $2000 - 5%
                    </p>
                    <p className="text-sm font-normal text-secondary">
                      $2001 to $6000 – 2%
                    </p>
                    <p className="text-sm font-normal text-secondary">
                      $6001 to above – no charges
                    </p>
                    <p className="text-sm font-normal text-secondary">
                      The fixed Maintenance fee of $1 is charged for each
                      withdrawal
                    </p>
                    <p className="text-sm font-normal text-secondary">
                      The minimum withdrawal amount is in whole
                      number(10,20,30,40,50etc)
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-base font-medium text-secondary">
                  <input type="checkbox" className="w-[18px] h-[18px] " />I
                  agree to all the above terms and conditions
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section>
          <div className="flex flex-col gap-6 items-center justify-center py-4">
            <h4 className="text-2xl font-bold text-primary">
              Thank You & Contact Us
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
              <div className="flex flex-col gap-2.5 items-center justify-center text-center">
                <img
                  src="/images/platform-img.webp"
                  alt="platform"
                  className="w-[80px] h-[42px]"
                />
                <h6 className="text-primary text-lg font-bold">
                  Explore Our Platform
                </h6>
                <p className="text-secondary text-sm font-medium">
                  Discover the full potential of our innovative investment
                  platform.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center text-center">
                <img
                  src="/images/community-img.webp"
                  alt="community"
                  className="w-[45px] h-[42px]"
                />
                <h6 className="text-primary text-lg font-bold">
                  Explore Our Platform
                </h6>
                <p className="text-secondary text-sm font-medium">
                  Discover the full potential of our innovative investment
                  platform.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center text-center">
                <img
                  src="/images/contact-img.webp"
                  alt="contact"
                  className="w-[35px] h-[42px]"
                />
                <h6 className="text-primary text-lg font-bold">
                  Explore Our Platform
                </h6>
                <p className="text-secondary text-sm font-medium">
                  Discover the full potential of our innovative investment
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
