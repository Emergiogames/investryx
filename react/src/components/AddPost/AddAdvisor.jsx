import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import { useFormik } from "formik";
import { HiChevronLeft, HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdvisorPost } from "../../services/user/apiMethods";
import { HiOutlinePlusSm } from "react-icons/hi";
import {
  initialValues,
  validationSchema,
} from "../../utils/validation/postValidation";
import Loader from "../loader/loader";
// import ImageCropperModal from "../accessories/cropperModel/CropperBox";

function AddAdvisor() {
  const selectedUser = (state) => state.auth.user || "";
  const user = useSelector(selectedUser);
  const userId = user.userid || "";

  const [selectedFiles1, setSelectedFiles1] = useState([]);
  const [selectedFiles2, setSelectedFiles2] = useState([]);
  const [selectedFiles3, setSelectedFiles3] = useState([]);
  const [image, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    navigate("/user-profile");
  };

  const resetState = () => {
    formik.resetForm();
    setImages([]);
    setCroppedImages([]);
    setCurrentImageIndex(0);
  };

  const resetState1 = () => {
    formik.resetForm();
    setSelectedFiles1([]);
  };
  const resetState2 = () => {
    formik.resetForm();
    setSelectedFiles2([]);
  };
  const resetState3 = () => {
    formik.resetForm();
    setSelectedFiles3([]);
  };

  const handleFileChange1 = useCallback((event) => {
    const files = Array.from(event.target.files);
    console.log("img test :", files);

    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const invalidFiles = files.filter(
      (file) => !validImageTypes.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      toast.error("Please select only image files (JPEG, PNG, GIF)");
      return;
    }
    setSelectedFiles1(files);
    formik.setFieldValue("image1", files);
  }, []);

  const handleFileChange2 = useCallback((event) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const invalidFiles = files.filter(
      (file) => !validImageTypes.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      toast.error("Please select only image files (JPEG, PNG, GIF)");
      return;
    }
    setSelectedFiles2(files);
    formik.setFieldValue("doc1", files);
  }, []);

  const handleFileChange3 = useCallback((event) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const invalidFiles = files.filter(
      (file) => !validImageTypes.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      toast.error("Please select only image files (JPEG, PNG, GIF)");
      return;
    }
    setSelectedFiles3(files);
    formik.setFieldValue("proof1", files);
  }, []);

  const formik = useFormik({
    initialValues: { ...initialValues, userId: userId },
    // validationSchema: validationSchema,
    onSubmit: async () => {
      setLoading(!loading);
      const {
        name,
        industry,
        establish_yr,
        description,
        address_1,
        address_2,
        state,
        pin,
        city,
        employees,
        entity,
        avg_monthly,
        latest_yearly,
        ebitda,
        rate,
        type_sale,
        url,
        top_selling,
        features,
        facility,
        reason,
        income_source,
        image1,
        doc1,
        proof1,
        userId,
      } = formik.values;
      // const imageUrls = [];

      const formData = new FormData();
      image1.forEach((file) => formData.append("image1", file));
      doc1.forEach((file) => formData.append("doc1", file));
      proof1.forEach((file) => formData.append("proof1", file));
      formData.append("name", name);
      formData.append("industry", industry);
      formData.append("establish_yr", establish_yr);
      formData.append("description", description);
      formData.append("address_1", address_1);
      formData.append("address_2", address_2);
      formData.append("state", state);
      formData.append("pin", pin);
      formData.append("city", city);
      formData.append("employees", employees);
      formData.append("entity", entity);
      formData.append("avg_monthly", avg_monthly);
      formData.append("latest_yearly", latest_yearly);
      formData.append("ebitda", ebitda);
      formData.append("rate", rate);
      formData.append("type_sale", type_sale);
      formData.append("url", url);
      formData.append("top_selling", top_selling);
      formData.append("features", features);
      formData.append("facility", facility);
      formData.append("reason", reason);
      formData.append("income_source", income_source);
      formData.append("userId", userId);

      try {
        const response = await addAdvisorPost(formData);

        if (response.status === 200) {
          console.log("test 00 :", response.statusText);

          // toast.info(response.data.message);
          toast.info("Post Added Successfull");
          // console.log("test 111");

          resetState1();
          resetState2();
          // console.log("test 2222");
          resetState3();
          // console.log("test 3333");
          setLoading(!loading);
          // console.log("test 44444");
          handleCancelClick();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const handleCancelClick = () => {
    resetState1();
    resetState2();
    resetState3();
    // closeAddPost();
    navigate("/");
  };
  return (
    <div className=" w-full mt-20">
      <div>
        <div className="">
          <div className="">
            <div className="flex ">
              <div className="flex items-center">
                {/* close button */}
                <button onClick={handleClose} className=" px-2 py-2 rounded">
                  <HiChevronLeft className="w-10 h-10 text-yellow-400 dark:text-white" />
                </button>
                <span className="font-semibold">BACK</span>
              </div>
              <h2 className="flex justify-center w-full font-bold text-2xl my-10">
                Add Advisor Post
              </h2>
            </div>
            <div className="">
              {loading && (
                <div className=" justify-center z-0 items-center ">
                  <Loader />
                  <p className="mt-6">Uploading...</p>
                </div>
              )}
              {!loading && (
                <form
                  onSubmit={formik.handleSubmit}
                  enctype="multipart/form-data"
                  className=""
                  method="post"
                >
                  <div className=" lg:flex justify-center ">
                    <div className="lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10 ">
                      {/* name */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          type="text"
                          name="name"
                          id="name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="industry"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Name*
                        </label>
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-red-600 text-xs">
                            {formik.errors.name}
                          </p>
                        )}
                      </div>
                      {/* industry 2 */}

                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.industry}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="industry"
                          id="industry"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="industry"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Industry Type *
                        </label>
                        {formik.touched.industry && formik.errors.industry && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.industry}
                          </p>
                        )}
                      </div>
                      {/* establish 3 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.establish_yr}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="establish_yr"
                          id="establish_yr"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="establish_yr"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Established Year *
                        </label>
                        {formik.touched.establish_yr &&
                          formik.errors.establish_yr && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.establish_yr}
                            </p>
                          )}
                      </div>
                      {/* description 4 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="description"
                          id="description"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="description"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Description *
                        </label>
                        {formik.touched.description &&
                          formik.errors.description && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.description}
                            </p>
                          )}
                      </div>
                      {/* addreass 1 5 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.address_1}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="address_1"
                          id="address_1"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="address_1"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Address 1 *
                        </label>
                        {formik.touched.address_1 &&
                          formik.errors.address_1 && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.address_1}
                            </p>
                          )}
                      </div>
                      {/* addreass2 6 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.address_2}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="address_2"
                          id="address_2"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="address_2"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Address 2 *
                        </label>
                        {formik.touched.address_2 &&
                          formik.errors.address_2 && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.address_2}
                            </p>
                          )}
                      </div>
                      {/* state 7 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="state"
                          id="state"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="state"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          State`` *
                        </label>
                        {formik.touched.state && formik.errors.state && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.state}
                          </p>
                        )}
                      </div>
                      {/* pin 8 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.pin}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="pin"
                          id="pin"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="pin"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          PIN *
                        </label>
                        {formik.touched.pin && formik.errors.pin && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.pin}
                          </p>
                        )}
                      </div>
                      {/* city 9 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="city"
                          id="city"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="city"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          City *
                        </label>
                        {formik.touched.city && formik.errors.city && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.city}
                          </p>
                        )}
                      </div>
                      {/* employees numver 10 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.employees}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="employees"
                          id="employees"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="employees"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Employees Number *
                        </label>
                        {formik.touched.employees &&
                          formik.errors.employees && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.employees}
                            </p>
                          )}
                      </div>
                      {/* entity 11 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.entity}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="entity"
                          id="entity"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="entity"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Entity *
                        </label>
                        {formik.touched.entity && formik.errors.entity && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.entity}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* row one col one end */}

                    <div className=" lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10">
                      {/* monthlyAvg 12 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.avg_monthly}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="avg_monthly"
                          id="avg_monthly"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="avg_monthly"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Avg Monthly Salary *
                        </label>
                        {formik.touched.avg_monthly &&
                          formik.errors.avg_monthly && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.avg_monthly}
                            </p>
                          )}
                      </div>

                      {/* latestYearly 13 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.latest_yearly}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="latest_yearly"
                          id="latest_yearly"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="latest_yearly"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Latest Yearly *
                        </label>
                        {formik.touched.latest_yearly &&
                          formik.errors.latest_yearly && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.latest_yearly}
                            </p>
                          )}
                      </div>

                      {/* inline column */}
                      <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                          <input
                            value={formik.values.ebitda}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            name="ebitda"
                            id="ebitda"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            EBITDA *
                          </label>
                        </div>
                        {formik.touched.ebitda && formik.errors.ebitda && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.ebitda}
                          </p>
                        )}
                        <div class="relative z-0 w-full mb-5 group">
                          <input
                            value={formik.values.rate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            name="rate"
                            id="rate"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Rate *
                          </label>
                        </div>
                        {formik.touched.rate && formik.errors.rate && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.rate}
                          </p>
                        )}
                      </div>
                      {/* type sale 16 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.type_sale}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="type_sale"
                          id="type_sale"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="type_sale"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Sale Type *
                        </label>
                        {formik.touched.type_sale &&
                          formik.errors.type_sale && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.type_sale}
                            </p>
                          )}
                      </div>
                      {/* url 17 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.url}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="url"
                          id="url"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="url"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Website URL *
                        </label>
                        {formik.touched.url && formik.errors.url && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.url}
                          </p>
                        )}
                      </div>
                      {/* topselling 18 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.top_selling}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="top_selling"
                          id="top_selling"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="top_selling"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Top Selling *
                        </label>
                        {formik.touched.top_selling &&
                          formik.errors.top_selling && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.top_selling}
                            </p>
                          )}
                      </div>
                      {/* feature 19 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.features}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="features"
                          id="features"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="features"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Features *
                        </label>
                        {formik.touched.features && formik.errors.features && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.features}
                          </p>
                        )}
                      </div>
                      {/* facility 20 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.facility}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="facility"
                          id="facility"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="facility"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Facility *
                        </label>
                        {formik.touched.facility && formik.errors.facility && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.facility}
                          </p>
                        )}
                      </div>
                      {/*reason 21 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.reason}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="reason"
                          id="reason"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="reason"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Reason *
                        </label>
                        {formik.touched.reason && formik.errors.reason && (
                          <p className="text-red-600 text-xs mb-4">
                            {formik.errors.reason}
                          </p>
                        )}
                      </div>
                      {/*income source 22 */}
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={formik.values.income_source}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          name="income_source"
                          id="income_source"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="income_source"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Income Source *
                        </label>
                        {formik.touched.income_source &&
                          formik.errors.income_source && (
                            <p className="text-red-600 text-xs mb-4">
                              {formik.errors.income_source}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  {/* image section start */}
                  <div>
                    {/* box1 */}

                    <div className="lg:flex justify-center">
                      {/* Box 1 */}
                      {/*<div className="lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10 h-96">
                        <div className="">
                          <label
                            htmlFor="custom-file-upload1"
                            className="font-medium text-gray-700 flex justify-center pb-5"
                          >
                            Upload Advisor Image
                          </label>
                          {!selectedFiles1.length && (
                            <div className="flex flex-col justify-center items-center bg-white rounded-2xl h-52">
                              <p className="text-red-600 text-xs">
                                {formik.errors.image1}
                              </p>
                              <img
                                src="/api/placeholder/96/96"
                                alt="Upload"
                                className="w-24 h-24 mt-4"
                              />
                              <p className="text-blue-700 mt-2">
                                Select Image of Advisor
                              </p>
                            </div>
                          )}
                          {formik.values.image1.length > 0 &&
                            !formik.errors.image1 && (
                              <div className="mt-4">
                                <p className="font-medium">Selected Images:</p>
                                <div
                                  className="flex flex-wrap gap-4 mt-2 mb-2"
                                  key={1}
                                >
                                  {selectedFiles1.map((file, index) => (
                                    <div
                                      key={index}
                                      className="w-36 h-32 border border-gray-300 rounded-md overflow-hidden"
                                    >
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-cover"
                                      />
                                      <p className="text-xs text-center">
                                        {file.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          <div className="z-0 w-full mb-5 group">
                            <div className="flex items-center mt-3">
                              <label
                                htmlFor="custom-file-upload1"
                                className="cursor-pointer"
                              >
                                <HiOutlinePlusSm className="w-16 h-16 bg-amber-200 rounded-md" />
                              </label>
                              <input
                                id="custom-file-upload1"
                                type="file"
                                name="image1"
                                className="hidden"
                                multiple
                                onChange={handleFileChange1}
                              />
                            </div>
                          </div>
                        </div>

                        <ImageCropperModal
                          isOpen={showCropModal}
                          onClose={() => setShowCropModal(false)}
                          images={tempFiles}
                          onComplete={handleCropComplete}
                        />
                      </div>*/}
                       <div className="lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10 h-96">
                          <div className="">
                            <label
                              htmlFor="custom-file-upload1"
                              className="font-medium text-gray-700 flex justify-center pb-5"
                            >
                              Upload Advisor Image
                            </label>
                            {!selectedFiles1.length && (
                              <div className="flex flex-col justify-center items-center bg-white rounded-2xl h-52">
                                <p className="text-red-600 text-xs">
                                  {formik.errors.image1}
                                </p>
                                <img
                                  src="https://img.freepik.com/premium-vector/cloud-images-icon-vector-image-can-be-used-networking-data-sharing_120816-84093.jpg?w=740"
                                  alt="Upload"
                                  className="w-24 h-24 mt-4"
                                />
                                <p className="text-blue-700 mt-2">
                                  Select Image of Advisor
                                </p>
                              </div>
                            )}
                            {formik.values.image1.length > 0 &&
                              !formik.errors.image1 && (
                                <div className="mt-4">
                                  <p className="font-medium">Selected Images:</p>
                                  <div
                                    className="flex flex-wrap gap-4 mt-2 mb-2"
                                    key={1}
                                  >
                                    {selectedFiles1.map((file, index) => (
                                      <div
                                        key={index}
                                        className="w-36 h-32 border border-gray-300 rounded-md overflow-hidden"
                                      >
                                        <img
                                          src={URL.createObjectURL(file)}
                                          alt={`Image ${index}`}
                                          className="w-full h-full object-cover"
                                        />
                                        <p className="text-xs text-center">
                                          {file.name}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            <div className="z-0 w-full mb-5 group">
                              <div className="flex items-center mt-3">
                                <label
                                  htmlFor="custom-file-upload1"
                                  className="cursor-pointer"
                                >
                                  <HiOutlinePlusSm className="w-16 h-16 bg-amber-200 rounded-md" />
                                </label>
                                <input
                                  id="custom-file-upload1"
                                  type="file"
                                  name="image1"
                                  className="hidden"
                                  multiple
                                  onChange={handleFileChange1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                      {/* Box 2 */}
                      <div className="lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10 h-96">
                        <div className="">
                          <label
                            htmlFor="custom-file-upload2"
                            className="font-medium text-gray-700 flex justify-center pb-5"
                          >
                            Upload Document Image
                          </label>
                          {!selectedFiles2.length && (
                            <div className="flex flex-col justify-center items-center bg-white rounded-2xl h-52">
                              <p className="text-red-600 text-xs">
                                {formik.errors.doc1}
                              </p>
                              <img
                                src="https://img.freepik.com/premium-vector/cloud-images-icon-vector-image-can-be-used-networking-data-sharing_120816-84093.jpg?w=740"
                                alt="Upload"
                                className="w-24 h-24 mt-4"
                              />
                              <p className="text-blue-700 mt-2">
                                Select Image of Document
                              </p>
                            </div>
                          )}
                          {formik.values.doc1.length > 0 &&
                            !formik.errors.doc1 && (
                              <div className="mt-4">
                                <p className="font-medium">Selected Images:</p>
                                <div
                                  className="flex flex-wrap gap-4 mt-2 mb-2"
                                  key={2}
                                >
                                  {selectedFiles2.map((file, index) => (
                                    <div
                                      key={index}
                                      className="w-36 h-32 border border-gray-300 rounded-md overflow-hidden"
                                    >
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-cover"
                                      />
                                      <p className="text-xs text-center">
                                        {file.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          <div className="z-0 w-full mb-5 group">
                            <div className="flex items-center mt-3">
                              <label
                                htmlFor="custom-file-upload2"
                                className="cursor-pointer"
                              >
                                <HiOutlinePlusSm className="w-16 h-16 bg-amber-200 rounded-md" />
                              </label>
                              <input
                                id="custom-file-upload2"
                                type="file"
                                name="doc1"
                                className="hidden"
                                onChange={handleFileChange2}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* col2  */}
                    <div className="lg:flex justify-center">
                      {/* box3 */}
                      <div className="lg:w-1/3 p-10 bg-amber-100 rounded-2xl m-10 h-96">
                        <div className="">
                          <label
                            htmlFor="custom-file-upload3"
                            className="font-medium text-gray-700 flex justify-center pb-5"
                          >
                            Upload Proof Image
                          </label>
                          {!selectedFiles3.length && (
                            <div className="flex flex-col justify-center items-center bg-white rounded-2xl h-52">
                              <p className="text-red-600 text-xs">
                                {formik.errors.proof1}
                              </p>
                              <img
                                src="https://img.freepik.com/premium-vector/cloud-images-icon-vector-image-can-be-used-networking-data-sharing_120816-84093.jpg?w=740"
                                alt="Upload"
                                className="w-24 h-24 mt-4"
                              />
                              <p className="text-blue-700 mt-2">
                                Select Image of Proof
                              </p>
                            </div>
                          )}
                          {formik.values.proof1.length > 0 &&
                            !formik.errors.proof1 && (
                              <div className="mt-4">
                                <p className="font-medium">Selected Images:</p>
                                <div
                                  className="flex flex-wrap gap-4 mt-2 mb-2"
                                  key={3}
                                >
                                  {selectedFiles3.map((file, index) => (
                                    <div
                                      key={index}
                                      className="w-36 h-32 border border-gray-300 rounded-md overflow-hidden"
                                    >
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-cover"
                                      />
                                      <p className="text-xs text-center">
                                        {file.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          <div className="z-0 w-full mb-5 group">
                            <div className="flex items-center mt-3">
                              <label
                                htmlFor="custom-file-upload3"
                                className="cursor-pointer"
                              >
                                <HiOutlinePlusSm className="w-16 h-16 bg-amber-200 rounded-md" />
                              </label>
                              <input
                                id="custom-file-upload3"
                                type="file"
                                name="proof1"
                                className="hidden"
                                onChange={handleFileChange3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-8 flex justify-center items-center">
                      <button
                        type="submit"
                        className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400 mx-4"
                      >
                        <HiOutlineClipboardCopy className="w-9 h-9 mr-2" />
                        <span className="text-xl">Save Draft</span>
                      </button>
                      <button
                        type="submit"
                        className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400 mx-4"
                      >
                        <HiCheck className="w-9 h-9 mr-2" />
                        <span className="text-xl">Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdvisor;
