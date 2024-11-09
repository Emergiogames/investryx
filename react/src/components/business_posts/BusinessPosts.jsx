import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/baseUrls";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { getWishList } from "../../services/post/apiMethods";
import { postWishList } from "../../services/post/apiMethods";
import { getBusinessPosts } from "../../services/user/apiMethods";


function BusinessPosts({ post, fetchpostss }) {
  const navigate = useNavigate();

  const userData = (state) => state.auth.user || "";
  const user = useSelector(userData);
  const userId = user.id || "";
  console.log('suerid from businesspost :', userId);

  //trigger fetch wishlist for liked
  useEffect(()=> {
    if(userId) {
      fetchWishList(userId)
    }
  }, [userId])

  //fetch wishlist
  const [wishPosts, setPost] = useState([])

  const fetchWishList = (userId) => {
    getWishList()
    .then((response) => {
      const wishlistData = response.data;
      setPost(wishlistData)
    })
    .catch((error) => {
      toast.error(error.message)
    })
  }
 
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

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imageUrlArray = post.image1;
  const imageUrl = `${BASE_URL}${imageUrlArray}`;
  const docImg = post.doc1;
  const postDate = formatDistanceToNow(new Date(post.listed_on), {
    addSuffix: true,
  });
  const postUserId = post.id;
  const userName = post.name;
  const businessType = post.type_sale;
  const businessDiscript = post.description;
  const establishYear = post.establish_yr;
  const city = post.city;
  const ebitda = post.ebitda;

  const handleViewPost = () => {
    navigate(`/view-post/${postUserId}`, { state: { post } });
  };

  const [isSavedByUser, setIsSavedByUser] = useState(false);

  useEffect(() => {
    if (wishPosts.length > 0 && post.id) {
      const isSaved = wishPosts.some(wishPost => wishPost.id === post.id);
      setIsSavedByUser(isSaved);
    }
  }, [wishPosts, post]);



  const handleSave = (Id ) => {
    try {
      postWishList({productId :Id})
        .then((response) => {          
        if(response.data?.status === true){
          toast.success("Post added to wishlist")
        }
        })
        .catch((error) => {
          toast.error(error.message || "error hapenned in handle save");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* business card */}
      <Card
        className="p-3 m-5 hover:cursor-pointer"
        Link
        sx={{ maxWidth: 400, position: "relative" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader={postDate}
        />
        <CardMedia
          onClick={handleViewPost}
          component="img"
          image={imageUrl}
          alt="Image description"
          sx={{
            height: 300,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Location :{city}
            <br />
            ebitda :{ebitda} %
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleSave(post.id)}
          >
            {isSavedByUser ?
            <FavoriteIcon className=" text-red-500" /> 
            : <FavoriteIcon />             
            }  
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ position: 'fixed', zIndex: 1, boxShadow: 3 }}> */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ position: 'fixed',  zIndex: 1, background: 'white', boxShadow: 3 }}> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>discription :{businessDiscript}</Typography>
            <Typography paragraph>discription :{businessDiscript}</Typography>
            <Typography paragraph>text set three</Typography>
            <Typography>text set four</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default BusinessPosts;
