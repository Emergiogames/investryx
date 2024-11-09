import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BusinessPosts from "../../components/business_posts/BusinessPosts";
import { getBusinessPosts } from "../../services/user/apiMethods";
import Loader from "../../components/loader/loader";
import HomePostLoader from "../../components/loader/HomePostLoader";
import { getWishList } from "../../services/post/apiMethods";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { toast } from "sonner";

function Business() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const userData = (state) => state.auth.user || "";
  const user = useSelector(userData);
  const userId = user.id || "";
  console.log("suerid from business.jsx :", user);
  // console.log("postss data @Businessjsx :", posts[0]?.id);

  //trigger display post
  useEffect(() => {
    try {
      fetchposts();
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  //display post
  const fetchposts = () => {
    setLoading(true);
    getBusinessPosts()
      .then((response) => {
        const postDatas = response.data;
        // console.log("front business data :", postDatas);
        setPosts(postDatas);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <>
      <div className="flex mt-16">
        <div className="flex-1 overflow-y-auto h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  {loading && <HomePostLoader />}
                  {!loading && (
                    <BusinessPosts post={post} fetchposts={fetchposts} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
