import React from "react";
function SubSuccess() {
  return (
    <>
      {/* <!-- component --> */}
      <div class="flex justify-center bg-slate-100">
      <div class="max-w-4xl flex justify-center items-center bg-gray-100 h-screen ">
        <div class="bg-white p-6  md:mx-auto">
          <div className="flex justify-center">
        <iframe src="https://lottie.host/embed/b5d98b10-5181-4dcb-9bcc-f7f6e1c8782d/ERBYYUrR0H.json"></iframe>
        </div>
          <svg
            viewBox="0 0 24 24"
            class="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            {/* <div class="py-10 text-center">
              <a
                href="/"
                class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                INVOICE
              </a>
            </div> */}
            <div class="py-10 text-center">
              <a
                href="/"
                class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                HOME
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SubSuccess