import React from "react";

function Notification() {
  return (
    <>
      <div className="bg-slate-200 min-h-screen w-full flex flex-col">
        {/* Outside box */}
        <div className="mt-24 m-7  flex-grow">
          {/* profile name center */}
          <div className="text-2xl mt-12 text-violet-900 font-semibold ml-[33rem] h-12">
            Business Profile :
          </div>

          {/* Main content */}
          <div className="flex">
            {/* Left box */}
            <div className="w-1/4 h-[50vh] ">
              <div className="p-6 m-6 bg-amber-100 rounded-md h-full mb-6">
                <div className="text-xl font-medium text-violet-900 text-center">
                  About
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>

                  <div className="text-2xl font-light text-violet-900">
                    Male
                  </div>
                </div>
                <hr className="border-t border-gray-300 m-3 mx-7" />

                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6  text-yellow-400"
                  >
                    <path d="m4.75 1-.884.884a1.25 1.25 0 1 0 1.768 0L4.75 1ZM11.25 1l-.884.884a1.25 1.25 0 1 0 1.768 0L11.25 1ZM8.884 1.884 8 1l-.884.884a1.25 1.25 0 1 0 1.768 0ZM4 7a2 2 0 0 0-2 2v1.034c.347 0 .694-.056 1.028-.167l.47-.157a4.75 4.75 0 0 1 3.004 0l.47.157a3.25 3.25 0 0 0 2.056 0l.47-.157a4.75 4.75 0 0 1 3.004 0l.47.157c.334.111.681.167 1.028.167V9a2 2 0 0 0-2-2V5.75a.75.75 0 0 0-1.5 0V7H8.75V5.75a.75.75 0 0 0-1.5 0V7H5.5V5.75a.75.75 0 0 0-1.5 0V7ZM14 11.534a4.749 4.749 0 0 1-1.502-.244l-.47-.157a3.25 3.25 0 0 0-2.056 0l-.47.157a4.75 4.75 0 0 1-3.004 0l-.47-.157a3.25 3.25 0 0 0-2.056 0l-.47.157A4.748 4.748 0 0 1 2 11.534V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.466Z" />
                  </svg>

                  <div className="text-2xl font-light text-violet-900">DOB</div>
                </div>
                <hr className="border-t border-gray-300 m-3 mx-7" />

                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6  text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="text-2xl font-light text-violet-900">
                    Address
                  </div>
                </div>

                <hr className="border-t border-gray-300 m-3 mx-7" />
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6  text-yellow-400"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>

                  <div className="text-2xl font-light text-violet-900">
                    Mail Id
                  </div>
                </div>
                <hr className="border-t border-gray-300 m-3 mx-7" />

                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6  text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="text-2xl font-light text-violet-900">
                    Phone Number
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-center text-center ">
                <div className="p-4 m-4 px-3 bg-yellow-300 hover:bg-yellow-400 mb-6 min-w-64 rounded-lg shadow-md">
                  Delete Account
                </div>
                <div className="p-4 m-4 px-3 bg-yellow-300 hover:bg-yellow-400 mb-6 min-w-64 rounded-lg shadow-md">
                  Pause Account
                </div>
              </div>
            </div>
            {/* middle box */}
            <div className="w-1/2 min-h-[90vh]">
            
              <div className=" p-6 m-6 px-20  bg-amber-100 rounded-md h-fit">
                <div className="text-2xl font-medium text-violet-900 text-center  ">
                  My Posts
                </div>
                {/* thick-yellow-underline */}
                <hr className="p-4 m-4 border-gray-400 " />
                {/* noti one */}
                <div className="flex max-h-36  m-6 bg-gray-50 rounded-2xl">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="relative  object-cover rounded-l-2xl"
                    alt=""
                  />
                  <div className="flex flex-col justify-evenly pl-10">
                    <div className="font-light text-xl text-gray-600">
                      Strategies define how to react business goals
                    </div>
                    <div className="font-normal text-lg text-violet-900">
                      Posted 3 days before
                    </div>
                    <div className="flex justify-around">
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </div>
                        <div>40 Views</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                        <div>3 Like</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </div>
                        <div>Delete</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex max-h-36 m-6 bg-gray-50 rounded-2xl">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="relative  object-cover rounded-l-2xl"
                    alt=""
                  />
                  <div className="flex flex-col justify-evenly pl-10">
                    <div className="font-light text-xl text-gray-600">
                      Strategies define how to react business goals
                    </div>
                    <div className="font-normal text-lg text-violet-900">
                      Posted 3 days before
                    </div>
                    <div className="flex justify-around">
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </div>
                        <div>40 Views</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                        <div>3 Like</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </div>
                        <div>Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-h-36 m-6 bg-gray-50 rounded-2xl">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="relative  object-cover rounded-l-2xl"
                    alt=""
                  />
                  <div className="flex flex-col justify-evenly pl-10">
                    <div className="font-light text-xl text-gray-600">
                      Strategies define how to react business goals
                    </div>
                    <div className="font-normal text-lg text-violet-900">
                      Posted 3 days before
                    </div>
                    <div className="flex justify-around">
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </div>
                        <div>40 Views</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                        <div>3 Like</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </div>
                        <div>Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-h-36 m-6 bg-gray-50 rounded-2xl">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="relative  object-cover rounded-l-2xl"
                    alt=""
                  />
                  <div className="flex flex-col justify-evenly pl-10">
                    <div className="font-light text-xl text-gray-600">
                      Strategies define how to react business goals
                    </div>
                    <div className="font-normal text-lg text-violet-900">
                      Posted 3 days before
                    </div>
                    <div className="flex justify-around">
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </div>
                        <div>40 Views</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                        <div>3 Like</div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </div>
                        <div>Delete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right box */}
            <div className="w-1/4 ">
              <div className="p-6 m-6 h-[40vh] bg-amber-100 rounded-md ">
                <div className="mb-5 text-3xl font-medium font-sans text-violet-900">
                  You might know
                </div>
                <div className="h-16 w-full mb-5 flex">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="rounded-full w-14 h-14"
                    alt=""
                  />
                  <div className="text-violet-900 pl-5">
                    <div className=" text-2xl font-light">Name One</div>
                    <div className="font-normal ">mailId@gamil.com</div>
                  </div>
                </div>
                <div className="h-16 w-full  mb-5 flex">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="rounded-full w-14 h-14"
                    alt=""
                  />
                  <div className="text-violet-900 pl-5 ">
                    <div className=" text-2xl font-light">Name One</div>
                    <div className="font-normal ">mailId@gamil.com</div>
                  </div>
                </div>
                <div className="h-16 w-full  mb-5 flex">
                  <img
                    src="https://dummyimage.com/200x200/000/fff"
                    className="rounded-full w-14 h-14"
                    alt=""
                  />
                  <div className="text-violet-900 pl-5">
                    <div className=" text-2xl font-light">Name One</div>
                    <div className="font-normal ">mailId@gamil.com</div>
                  </div>
                </div>
              </div>
              <div className="p-6 m-6 h-[55vh] bg-amber-100 rounded-md ">
                <div className="text-4xl text-violet-900 font-semibold">
                  Standard
                </div>
                <div>Business our Services</div>
                <div className="text-4xl text-violet-900 font-semibold">
                  $79
                </div>
                <div>/per day</div>

                <div className="bg-blue-700 text-2xl p-4 m-4 px-6 text-white rounded-xl">
                  Buy Now
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>lorel ipsum</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>lorel ipsum</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>lorel ipsum</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>lorel ipsum</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>lorel ipsum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;












// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const images = [
//   'https://source.unsplash.com/random/300x300?1',
//   'https://source.unsplash.com/random/300x300?2',
//   'https://source.unsplash.com/random/300x300?3',
//   'https://source.unsplash.com/random/300x300?4',
//   'https://source.unsplash.com/random/300x300?5',
//   'https://source.unsplash.com/random/300x300?6',
//   'https://source.unsplash.com/random/300x300?7',
//   'https://source.unsplash.com/random/300x300?8',
//   'https://source.unsplash.com/random/300x300?9',
// ];

// const Gallery = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const images = gsap.utils.toArray('.image');

//     gsap.from(images, {
//       opacity: 0,
//       scale: 0.5,
//       stagger: 0.2,
//       duration: 0.5,
//       ease: 'power1.out',
//       scrollTrigger: {
//         trigger: '.gallery-container',
//         start: 'top 80%',
//         toggleActions: 'play none none none',
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <header className="bg-indigo-600 text-white p-4 text-center">
//         <h1 className="text-3xl font-bold">Animated Image Gallery</h1>
//       </header>

//       <div className="gallery-container container mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((src, index) => (
//           <div className="image bg-white shadow-lg rounded-lg overflow-hidden" key={index}>
//             <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Image {index + 1}</h3>
//               <p className="text-sm text-gray-600">This is a description for image {index + 1}.</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Additional scrolling sections for better experience */}
//       <div className="h-screen bg-gray-200 flex items-center justify-center">
//         <h2 className="text-2xl">Keep scrolling for more!</h2>
//       </div>
//       <div className="h-screen bg-gray-300 flex items-center justify-center">
//         <h2 className="text-2xl">Amazing content awaits!</h2>
//       </div>
//       <div className="h-screen bg-gray-400 flex items-center justify-center">
//         <h2 className="text-2xl">Almost there!</h2>
//       </div>
//     </div>
//   );
// };

// export default Gallery;






// // src/Notification.jsx
// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Notification = () => {
//   // Register the ScrollTrigger plugin
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const cards = gsap.utils.toArray('.card');

//     gsap.from(cards, {
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       duration: 0.5,
//       ease: 'power1.out',
//       scrollTrigger: {
//         trigger: '.container',
//         start: 'top 80%',
//         toggleActions: 'play play play none',
//       },
//     });
//   }, []);

//   return (
//     <div className='mt-28'>

//       <header className="bg-blue-600 text-white p-4 text-center">
//         <h1 className="text-3xl font-bold">GSAP with Tailwind Example</h1>
//       </header>

//       <div className="container mx-auto py-20">
//         <h2 className="text-2xl text-center mb-10">Notifications</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 1</h3>
//             <p className="mt-2">This is the first notification content.</p>
//           </div>
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 2</h3>
//             <p className="mt-2">This is the second notification content.</p>
//           </div>
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 3</h3>
//             <p className="mt-2">This is the third notification content.</p>
//           </div>
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 4</h3>
//             <p className="mt-2">This is the fourth notification content.</p>
//           </div>
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 5</h3>
//             <p className="mt-2">This is the fifth notification content.</p>
//           </div>
//           <div className="card bg-white shadow-lg rounded-lg p-4">
//             <h3 className="text-xl font-bold">Notification 6</h3>
//             <p className="mt-2">This is the sixth notification content.</p>
//           </div>
//         </div>
//       </div>

//       {/* Additional content for scrolling */}
//       <div className="h-screen bg-gray-200 flex items-center justify-center">
//         <h2 className="text-2xl">Scroll down for more!</h2>
//       </div>
//       <div className="h-screen bg-gray-300 flex items-center justify-center">
//         <h2 className="text-2xl">Keep scrolling!</h2>
//       </div>
//       <div className="h-screen bg-gray-400 flex items-center justify-center">
//         <h2 className="text-2xl">Almost there!</h2>
//       </div>
//     </div>
//   );
// };

// export default Notification;
