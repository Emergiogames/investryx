import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ImgSlider from "../../components/accessories/homePageImgSlider/ImgSlider";
import Calculator from "../../components/accessories/valueCalculator/Calculator";
import {
  getFeaturedList,
  getRecommendedList,
  getBanner,
  getFeaturedExperts,
  getGraph,
} from "../../services/user/apiMethods";
import FeaturedListing from "../../components/accessories/homePageAddOn/featuredListing/FeaturedListing";
import RecommendedListing from "../../components/accessories/homePageAddOn/recommededListing/RecommendedListing";
import Banner from "../../components/accessories/homePageAddOn/banner/Banner";
import Graph from "../../components/accessories/homePageAddOn/graph/Graph";
import { motion, useAnimation } from 'framer-motion'

function HomePage() {
  const navigate = useNavigate();
  if (localStorage.getItem("userData")) {
    console.log("HomePage data :", localStorage.getItem("userData"));
  }

  // featured listing
  // recommendation list
  // banner
  // featured experts
  // graph
  // testmonial
  const [featuredData, setData1] = useState(null);
  const [recommendedData, setData2] = useState(null);
  const [bannerData, setData3] = useState(null);
  const [expertsData, setData4] = useState(null);
  const [graphData, setData5] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.allSettled([
          getFeaturedList(),
          getRecommendedList(),
          getBanner(),
          getFeaturedExperts(),
          getGraph(),
        ]);

        console.log("fetch data status :", results);

        results.forEach((result, index) => {
          if (result.status === "fulfilled") {
            // Directly use the value returned by the API
            const data = result.value;
            switch (index) {
              case 0:
                setData1(data);
                break;
              case 1:
                setData2(data);
                break;
              case 2:
                setData3(data);
                break;
              case 3:
                setData4(data);
                break;
              case 4:
                setData5(data);
                break;
            }
          } else {
            console.error(`Failed to fetch data ${index + 1}:`, result.reason);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("featured list :", featuredData); //
  console.log("recommended list", recommendedData);
  console.log("banner list", bannerData); ///
  console.log("featured experts list", expertsData);
  console.log("graph list", graphData); //


  const controls = useAnimation();

  // Trigger scroll-based animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        // Swipe right and fade out on scroll
        controls.start({ x: '100vw', opacity: 0, transition: { duration: 0.8 } });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      <div className=""></div>
      {/* banner/slider start */}
      <div className="relative h-[130vh] w-[100vw] overflow-hidden">
        <img
          src="/images/investment_img/emergio_tree_grow.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Fade-in on page load and swipe on scroll */}
      <motion.div
        initial={{ opacity: 0 }} // Start with 0 opacity
        animate={{ opacity: 1 }} // Fade to full opacity
        transition={{ duration: 3.0 }} // Duration of fade-in
        className="absolute top-1/2 left-80 transform -translate-y-1/2 text-white text-8xl font-bold"
      >
        Profit
        <svg
          className="inline w-36 h-36 text-slate-50 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="5 1 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m10 16 4-4-4-4"
          />
        </svg>{" "}
        <br />
        Pioneering
      </motion.div>
        {/* <div className="absolute top-1/2 left-80 transform -translate-y-1/2 text-white text-8xl font-bold">
          Profit
          <svg
            className="inline w-36 h-36 text-slate-50 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="5 1 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10 16 4-4-4-4"
            />
          </svg>{" "}
          <br />
          Pioneering
        </div> */}
      </div>
      {/* banner /slider end */}
      {/* Landing page block */}
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Discover investment opportunities and
              <br className="hidden lg:inline-block" />
              grow your business with Emergio Invest.
            </h1>
            <p className="mb-8 leading-relaxed">
              Emergio Invest connects business owners seeking investment with
              investors looking for promising ventures, creating a dynamic
              online marketplace for growth and innovation.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">
                Explore
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Experience
              </button>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/investment_img/emergio_handshake.jpg"
            />
          </div>
        </div>
      </section>
      {/* Landing page block end */}
      {/* Featured listing start */}
      <FeaturedListing featuredData={featuredData} />
      {/* Featured listing End */}
      {/* Banner start */}
      {/* <Banner props={bannerData}/> */}
      <ImgSlider props={bannerData} />
      {/* Banner End */}
      {/* Recommended listing start */}
      <RecommendedListing props={recommendedData} />
      {/* Recommended listing End */}
      {/* Featured Experts Start */}
      {/* Featured Experts End */}
      {/* Business Analysis Graph Start */}
      <Graph props={graphData} />
      {/* Business Analysis Graph End */}
      {/* Checkout latest our lates transactions and activities start */}
      {/* Checkout latest our lates transactions and activities End */}
      {/* ebtda calculator */}
      <Calculator />
      {/* ebitda calculator end */}
      {/* priceing start */}
      {/* <!-- component --> */}
      <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:p-8 p-4 font-sans bg-slate-100 ">
        <div className="lg:w-[23rem] bg-white w-full border-2 lg:border-r-0 border-gray-200 p-5 rounded-2xl lg:rounded-r-none">
          <div className="pb-3 mb-4 border-b border-gray-200">
            <div className="text-xs text-slate-800 mb-2">START</div>
            <h2 className="text-5xl m-0 font-normal">Free</h2>
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Direct Reach
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            10% high Promotion
          </div>
          <div className="flex items-center mb-5">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Customer Service
          </div>
          <div className="mt-auto w-full">
            <button className="bg-white rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
              Get Free
              <svg
                className="ml-auto"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </button>
            <div className="text-xs mt-3 text-slate-600 line-height-2">
              gateway to connecting with investors who believe in your vision.
            </div>
          </div>
        </div>
        <div className="lg:w-[23rem] bg-white w-full lg:my-0 my-4 border-2 border-gray-200 p-5 rounded-2xl lg:shadow-8">
          <div className="pb-3 mb-4 border-b border-gray-200">
            <div className="text-xs text-slate-800 mb-2">PRO</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$38</h2>
              <span className="text-slate-300 ml-1">/mo</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            35 Proposal/month
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            80% high Promotion
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Unlimited Transactions
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Analytics
          </div>
          <div className="flex items-center mb-5">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Premium Customer Service
          </div>
          <div className="mt-auto w-full">
            <button
              onClick={() => navigate("/subscribe")}
              className="bg-purple-500 rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3"
            >
              Get Pro
              <svg
                className="ml-auto"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </button>
            <div className="text-xs mt-3 text-slate-600 line-height-2">
              gateway to connecting with investors who believe in your vision.
            </div>
          </div>
        </div>
        <div className="lg:w-[23rem] bg-white w-full border-2 lg:border-l-0 border-gray-200 p-5 rounded-2xl lg:rounded-l-none">
          <div className="pb-3 mb-4 border-b border-gray-200">
            <div className="text-xs text-slate-800 mb-2">ENTERPRISE</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$72</h2>
              <span className="text-slate-300 ml-1">/mo</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            60 Proposals/month
          </div>
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            One-to-One Premium Care
          </div>
          <div className="flex items-center mb-5">
            <svg
              width="24"
              height="24"
              fill="none"
              className="text-purple-500 mr-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            Unlimited Transactions
          </div>
          <div className="mt-auto w-full">
            <button className="bg-white rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
              Get Enterprise
              <svg
                className="ml-auto"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </button>
            <div className="text-xs mt-3 text-slate-600 line-height-2">
              gateway to connecting with investors who believe in your vision.
            </div>
          </div>
        </div>
      </div>
      {/* pricing end */}
      {/* //bigbanner start */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Progress for a better future{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Emergio Invest is an innovative web app designed to bridge the gap
              between businesses and investors. Entrepreneurs can showcase their
              ventures and attract funding, while investors can explore a
              variety of business opportunities, making it easier to find and
              support promising startups and established companies alike.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {/* {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))} */}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {/* {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))} */}
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Lorel two text
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Acceptance+ 38%
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Lorel two text 3000+
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  eBDTA growth 200+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Lorel two text
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Premium Prospects
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Lorel two text
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Industrilazation 4.0
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      ){/* <Footer/> */}
    </>
  );
}

export default HomePage;
