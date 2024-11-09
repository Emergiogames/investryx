import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/baseUrls";

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

function InvestmentPosts({ post, fetchposts }) {
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
  //   const [posts,setPosts] = useState([])
  //   const [loading, setLoading] = useState(false)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log("dat from businessposts comp :", post);
  // console.log("dat forom businespost comp, fetchpost :", fetchposts);

  const imageUrlArray = post.image1;
  const imageUrl = `${BASE_URL}${imageUrlArray}`;
  // const imageUrlArray =  post.image1
  const docImg = post.doc1;
  const postDate = post.listed_on;
  const postUserId = post.id;
  const userName = post.name;
  // const businessTitle = post.
  const businessType = post.type_sale;
  const businessDiscript = post.discription;
  // console.log("imgaMM :", imageUrlArray );

  return (
    <>
      {/* business product container */}

      {/* <div className="flex-grow m-5 p-5 bg-white rounded-lg shadow-lg"> */}
      {/* business card */}
      <Card className="p-5 m-9" sx={{ maxWidth: 400 }}>
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
          // title="Shrimp and Chorizo Paella"
          title={userName}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          // href= {imageUrlArray}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
            {businessDiscript}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes. */}
              {businessDiscript}
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and stirring, until mussels have opened and rice is just tender, 5
              to 7 minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* </div> */}
    </>
  );
}

export default InvestmentPosts;
