import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  adminBannerList,
  adminBannerPost,
  adminDeleteBanner,
} from "../../services/admin/apiMethods";
import { BASE_URL } from "../../constants/baseUrls";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BannerList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const [loading, setLoading] = useState(false);
  const [postStates, setPostStates] = useState([]);
  const [newBannerModel, setNewBannerModel] = useState(false); // New modal state
  const [selectedPost, setSelectedPost] = useState(null); // For viewing banner modal

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    adminBannerList()
      .then((response) => {
        const postData = response.data;
        setPostStates(postData);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch posts.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = postStates.filter((post) =>
    post.id.toString().includes(searchTerm)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewBanner = (post) => {
    setSelectedPost(post); // Open view modal
  };

  const closeModal = () => {
    setSelectedPost(null); // Close view modal
  };

  const handleNewBannerModal = () => {
    setNewBannerModel(true); // Open add new banner modal
  };

  const closeNewBannerModal = () => {
    setNewBannerModel(false); // Close add new banner modal
  };

  const handleBannerSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("img", values.img);

    adminBannerPost(formData)
      .then((response) => {
        console.log("new banner 999 :  :", response);
        toast.success("Banner uploaded successfully!");
        closeNewBannerModal();
        fetchPosts(); // Refresh the post list
      })
      .catch((error) => {
        toast.error("Failed to upload banner.");
        console.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object({
    img: Yup.mixed()
      .required("Image is required")
      .test(
        "fileSize",
        "File size exceeds 2 MB",
        (value) => value && value.size <= 2 * 1024 * 1024 // Max 2MB
      )
      .test(
        "fileType",
        "Only image files are allowed",
        (value) => value && value.type.startsWith("image/")
      ),
  });

  //updata banner
  const adminUpdateBanner = () => {
    console.log("helu form udpate baner");
  };

  //handle delete banner
  const handleDeleteBanner = (img) => {
    adminDeleteBanner(img)
      .then((response) => {
        console.log(response,'delete success');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-9/12">
      {!selectedPost && !newBannerModel ? ( //avoide, selected post popup and add new banner pop up
        <>
          <div className="flex justify-center items-center font-serif text-xl mt-6">
            Posts List
          </div>
          <div className="flex justify-start items-center w-full mr-24 lg:ml-6">
            <div className="mt-6 flex justify-center items-center lg:w-full px-4 rounded-md">
              <div className="flex justify-center border w-full p-4 bg-gray-200 rounded-md">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-4/4 p-2 bg-white">
                  <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                      placeholder="Search for posts"
                    />
                    <button
                      onClick={handleNewBannerModal}
                      className="font-mono text-2xl bg-yellow-200 p-6 m-6 px-4 border border-gray-300 hover:bg-yellow-300   rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      Add New Banner
                    </button>
                  </div>
                  <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Sl.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ImageId
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts.map((post, index) => (
                        <tr
                          onClick={() => handleViewBanner(post)}
                          key={post.id}
                          className="bg-white border-b dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 text-center">
                            {indexOfFirstPost + index + 1}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <img
                              src={BASE_URL + post.img}
                              alt={post.title}
                              className="w-80 object-cover rounded-lg"
                            />
                          </td>
                          <td className="px-6 py-4">{post.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between py-4">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-white border rounded-lg"
                    >
                      Previous
                    </button>
                    <span className="text-sm">
                      Page {currentPage} of{" "}
                      {Math.ceil(filteredPosts.length / postsPerPage)}
                    </span>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={
                        currentPage ===
                        Math.ceil(filteredPosts.length / postsPerPage)
                      }
                      className="px-4 py-2 bg-white border rounded-lg"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* Modal to view banner */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white rounded-lg p-8 z-10 relative max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            <img
              src={BASE_URL + selectedPost.img}
              alt="Banner"
              className="w-full h-96 object-contain mb-6"
            />

            <div className="flex justify-between">
              {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
                Edit
              </button> */}
              <button
                onClick={() => handleDeleteBanner(selectedPost.id)}
                className="bg-red-500 text-2xl hover:bg-red-600 text-white px-6 py-3 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Banner Modal */}
      {newBannerModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-white rounded-lg p-8 z-10 relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeNewBannerModal}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4">Add New Banner</h2>

            <Formik
              initialValues={{ img: null }}
              validationSchema={validationSchema}
              onSubmit={handleBannerSubmit}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="img"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Upload Image
                    </label>
                    <Field name="img">
                      {({ field }) => (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) =>
                            setFieldValue("img", event.currentTarget.files[0])
                          }
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="img"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerList;
