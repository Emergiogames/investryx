import React, { useState, useEffect } from "react";
import BusinessPosts from "../../components/business_posts/BusinessPosts";
import { getInvestorPosts } from "../../services/user/apiMethods";
import Loader from "../../components/loader/loader";
import HomePostLoader from "../../components/loader/HomePostLoader";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

function Business() {
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  useEffect(() => {
    try {
      fetchposts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchposts = () => {
    setLoading(true);
    getInvestorPosts()
      .then((response) => {
        const postDatas = response.data;
        setPosts(postDatas);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10">{/* <Header /> */}</div>
      <div className="flex mt-16">
        <div className="min-w-70 h-screen overflow-y-auto">
          {/* <SideNavBar /> */}
        </div>

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
