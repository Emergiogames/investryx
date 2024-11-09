import React, { useEffect } from 'react'
import  { useLocation, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/baseUrls'

function ViewPost() {
  const {postId} = useParams()

  // useEffect(()=> {
  //   console.log('postId : ',postId);
  // }, [postId])

  const location = useLocation()
  const post = location.state?.post
  console.log('status data ii :', post);

  // col 2
  const postName = post.name
  const postCity = post.city

  const postAddressOne = post.address_1
  const postAddressTwo = post.address_2
  const postState = post.state
  const postDescription = post.description
  const postPin = post.pin
  const postReason = post.reason

  const postIncomeSource = post.income_source

  
  // col 1
  const postEstablish = post.establish_yr
  const postIndustry = post.industry
  const postEmployees = post.employees
  const postEntity = post.entity
  const postAvgMonthly = post.avg_monthly
  const postLatestYearly = post.latest_yearly
  const postEbitda = post.ebitda
  const postRate = post.rate
  const postSaleType = post.sale
  const postUrl = post.url
  const postTopSelling = post.top_selling
  const postfeatures = post.features
  const postFacility = post.facility

  //img 
  const postImage = post.image1
  const postDoc = post.doc1
  const postProof = post.proof1
  
 
    
  
  

  return (
     <>
      <div className='w-full h-screen bg-slate-100 mt-14 flex flex-row'>
        {/* first column */}
        <div className='w-1/2 bg-slate-200 flex justify-center items-center'>
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Details :</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Established :
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            State your thoughts
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postEstablish}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Industry
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            pseudo name if 
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postIndustry}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Entitity 
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Generic history available
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postEntity}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Employees
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postEmployees}
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img clas s="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Average Monthly Turnover
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            checkout saved 
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postAvgMonthly}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Latest Yearly Turnover
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postLatestYearly}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            EBITDA
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postEbitda}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Rate
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postRate}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Sale
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postSaleType}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Url
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postUrl}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Top-selling
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postTopSelling}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Features
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postfeatures}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Facilities
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postFacility}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/> */}
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Income-source
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            entered email id
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {postIncomeSource}
                    </div>
                </div>
            </li>
                       
        </ul>
   </div>
</div>

        </div>  
        {/* second column */}
        <div className='w-full bg-slate-300'>
          <div className=' h-full w-2/3  bg-slate-400-200 m-6 p-3'>

{/* //heading start */}
<div className='w-full h-auto bg-slate-300'>
{/* location start */}
<div className='text-xl'>Location : {postCity}</div>


{/* location end */}

{/* heading start  */}
<div className='flex justify-around'>
<div className='text-4xl '>{postName}</div>

          {/* notification badge  */}
          
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
</button>
</div>

{/* notification badhge end */}
</div>
{/* heading end */}

{/* image slider  */}
{/* <div className="w-100 h-1/2 rounded-lg shadow bg-slate-200 p-6 m-3">
  <img src={`${BASE_URL}${postImage}`} alt="post image" />
</div> */}

<div className="w-100 h-1/2 rounded-lg shadow bg-slate-200 p-6 m-3">
  <img src={`${BASE_URL}${postImage}`} alt="post image" className="w-full h-full object-cover" />
</div>



{/* image slider end */}


{/* comment bar start */}

<div className='m-6 p-5'>
<div className='flex flex-row justify-around  bg-slate-200'>
    <div className='text-xl px-4 my-2'>
        Description :
    </div>
    <div className='px-7 my-2'>
        {postDescription}
    </div>
</div>
<div className='flex flex-row justify-around  bg-slate-200'>
    <div className='text-xl px-4'>
        Reason :
    </div>
    <div className='px-7'>
        {postReason}
    </div>
</div>
</div>

{/* comment bar end */}

{/* comment bar two start  */}

{/* comment bar trwo end  */}

          </div>

        </div>



        {/* thrid columen start */}
       
     <div className='w-1/2 bg-slate-100'>

     {/* sale post start  */}
        <div class=" max-w-sm h-96 bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 shadow-lg dark:border-gray-700 m-5 ">
            <a href="#">
                <img class="p-10 rounded-t-lg " src="/images/apple-watch.png" alt="product image" />
            </a>
            <div class="px-2 my-2 ">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
        {/* sale post end */}
        {/* comment bar one start  */}
        <div
  class="relative flex mx-5 w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <div
    class="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      alt="Tania Andrew"
      class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
    <div class="flex w-full flex-col gap-0.5">
      <div class="flex items-center justify-between">
        <h5
          class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Tania Andrew
        </h5>
        <div class="flex items-center gap-0 5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        Frontend Lead @ Google
      </p>
    </div>
  </div>
  <div class="p-0 mb-6">
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      "I found solution to all my design needs from Creative Tim. I use
      them as a freelancer in my hobby projects for fun! And its really
      affordable, very humble guys !!!"
    </p>
  </div>
</div>  
        {/* comment bar one end  */}
        {/* coment bar two start  */}

        <div
  class="relative flex w-full mx-5 max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <div
    class="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      alt="Tania Andrew"
      class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
    <div class="flex w-full flex-col gap-0.5">
      <div class="flex items-center justify-between">
        <h5
          class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Tania Andrew
        </h5>
        <div class="flex items-center gap-0 5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-700">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        Frontend Lead @ Google
      </p>
    </div>
  </div>
  <div class="p-0 mb-6">
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      "I found solution to all my design needs from Creative Tim. I use
      them as a freelancer in my hobby projects for fun! And its really
      affordable, very humble guys !!!"
    </p>
  </div>
</div>  

        {/* comment bar two end  */}
        
        </div>

        

        

        {/* third columne end */}
      </div> 
     </>
  )
}

export default ViewPost