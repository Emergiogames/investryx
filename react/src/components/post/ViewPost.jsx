import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrls";

function ViewPost() {
  const { postId } = useParams();

  // useEffect(()=> {
  //   console.log('postId : ',postId);
  // }, [postId])

  const location = useLocation();
  const post = location.state?.post;
  console.log("status data ii :", post);

  // col 2
  const postName = post.name;
  const postCity = post.city;
  const postOffering = post.offering

  const postAddressOne = post.address_1;
  const postAddressTwo = post.address_2;
  const postState = post.state;
  const postDescription = post.description;
  const postPin = post.pin;
  const postReason = post.reason;

  const postIncomeSource = post.income_source;

  // col 1
  const postEstablish = post.establish_yr;
  const postIndustry = post.industry;
  const postEmployees = post.employees;
  const postEntity = post.entity;
  const postAvgMonthly = post.avg_monthly;
  const postLatestYearly = post.latest_yearly;
  const postEbitda = post.ebitda;
  const postRate = post.rate;
  const postSaleType = post.sale;
  const postUrl = post.url;
  const postTopSelling = post.top_selling;
  const postfeatures = post.features;
  const postFacility = post.facility;

  //img
  const postImage = post.image1;
  const postDoc = post.doc1;
  const postProof = post.proof1;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mt-20 rounded-3xl w-[90%] min-h-screen ">
          <div className="lg:flex">
            {/* box left  */}
            <div className="lg:w-1/2 min-h-[30rem] lg:p-8 lg:m-7  bg-amber-100 rounded-2xl shadow-xl">
              {/* main imag */}
              <div className="p-3">
                <img
                  className="rounded-xl"
                  src={`${BASE_URL}${postImage}`}
                  alt="main_img"
                />
              </div>
              {/* subsidry imag */}
              <div className="flex lg:gap-4 lg:p-3 m-3">
                <div>
                  <img
                    className="rounded-xl"
                    src="https://dummyimage.com/100x100/000/fff.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://dummyimage.com/100x100/000/fff.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://dummyimage.com/100x100/000/fff.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div  className="flex justify-center">
              <div className="text-2xl font-semibold ">{postName}</div>
              </div>
              <div className="text-xl font-semibold lg:flex justify-between">
                <div>Location : {postCity}</div>
                <div>Price : {postOffering}</div>
              </div>
              </div>

            </div>
            {/* box right */}
            <div className="lg:w-1/2 min-h-[30rem] p-6 m-6 bg-amber-100 rounded-2xl shadow-xl">
              <h1 className="text-2xl font-bold text-violet-900 flex justify-center">
                Over
              </h1>
              <ul className="pl-2 ">
                <li>
                  Established: <span className="pl-4">{postEstablish}</span>
                </li>
                <li >
                  Industry: <span className="pl-4">{postIndustry}</span>
                </li>
                <li >
                Entitity: <span className="pl-4">{postEntity}</span>
                </li>
                <li >
                Employees: <span className="pl-4">{postEmployees}</span>
                </li>
                <li >
                Average Monthly Turnover: <span className="pl-4">{postAvgMonthly}</span>
                </li>
                <li >
                Latest Yearly Turnover: <span className="pl-4">{postLatestYearly}</span>
                </li>
                <li >
                EBITDA: <span className="pl-4">{postEbitda}</span>
                </li>
                <li >
                Rate: <span className="pl-4">{postRate}</span>
                </li>
                <li >
                Sale: <span className="pl-4">{postSaleType}</span>
                </li>
                <li >
                Url: <span className="pl-4">{postUrl}</span>
                </li>
                <li >
                Top-selling: <span className="pl-4">{postTopSelling}</span>
                </li>
                <li >
                Features: <span className="pl-4">{postfeatures}</span>
                </li>
                <li >
                Facilities: <span className="pl-4">{postFacility}</span>
                </li>
                <li >
                Income-source: <span className="pl-4">{postIncomeSource}</span>
                </li>
              </ul>
              {/* buttons  */}
              <div className=" lg:flex justify-evenly ">
                <div className="bg-yellow-300 hover:bg-yellow-400 p-3  m-4 px-7 text-xl font-semibold rounded-lg">
                  Buy Now
                </div>
                <div className="bg-yellow-300 hover:bg-yellow-400 p-3 m-4 px-7 text-xl font-semibold rounded-lg">
                  Requset Call
                </div>
              </div>
            </div>
          </div>
          {/* box bottom */}
          <div className=" bg-amber-100  min-h-[19rem]  p-8 m-7 rounded-2xl shadow-xl">
            <div className="text-center text-violet-900 text-2xl font-bold p-3 m-4">
              Detailed Informtion
            </div>
            <div className="text-xl font-semibold p-2 m-2">
              Reason for Selling
            </div>
            <div className="p-2 m-1 mx-6">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. */}
              {postDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPost;
