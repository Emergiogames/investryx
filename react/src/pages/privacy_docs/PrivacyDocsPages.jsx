import React from "react";
import { useLocation } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function PrivacyDocsPages() {
  const navigate = useNavigate()
  const location = useLocation();
  const { datas } = location.state || {}; // Extract data from state
  console.log("pages, data ::::", datas);
  console.log(datas?.text);

  const handleClose = () => {
    navigate("/legal_privacy");
  };

  return (
    <>
      {!datas?.title_one ? (
        <div>
          <div className="flex items-center bg-amber-50">
            <button onClick={handleClose} className="px-2 py-2 rounded">
              <HiChevronLeft className="w-10 h-10 text-yellow-400 dark:text-white" />
            </button>
            <span className="font-semibold">BACK</span>
          </div>
          <div className="w-screen min-h-screen flex justify-center items-center bg-amber-50">
            <div className="w-1/2 flex flex-col justify-center items-center text-slate-800">
              <div className="text-4xl m-5">{datas?.title}</div>
              <div className="p-3 m-5">{datas?.text}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center bg-amber-50">
            <button onClick={handleClose} className="px-2 py-2 rounded">
              <HiChevronLeft className="w-10 h-10 text-yellow-400 dark:text-white" />
            </button>
            <span className="font-semibold">BACK</span>
          </div>
          <div className="h-screen flex justify-center items-center bg-amber-50">
            <div className="w-1/2 ">
              <div className="flex justify-center">
                <div className="text-4xl m-5 pt-6">Best Practices</div>
              </div>
              <div className="text-2xl m-4">{datas?.title_one}</div>
              <div>{datas?.text_one}</div>
              <div className="text-2xl m-4">{datas?.title_two}</div>
              <div>{datas?.text_two}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PrivacyDocsPages;
