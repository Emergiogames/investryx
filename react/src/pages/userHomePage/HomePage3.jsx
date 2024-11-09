import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ImgSlider from "../../components/accessories/homePageImgSlider/ImgSlider";
import Calculator from "../../components/accessories/valueCalculator/Calculator";
import {
  getFeaturedList,
  getRecommendedList,
  getBanner,
  getFeaturedExperts,
  getGraph,
} from "../../services/user/apiMethods";
import FeaturedListing from "../../components/accessories/homePageAddOn/featuredListing/FeaturedListing";
import RecommendedListing from "../../components/accessories/homePageAddOn/recommededListing/RecommendedListing";
import Banner from "../../components/accessories/homePageAddOn/banner/Banner";
import Graph from "../../components/accessories/homePageAddOn/graph/Graph";
import { motion, useAnimation } from "framer-motion";

function HomePage3() {
  return (
    <>
      <div className="relative h-[130vh] w-[100vw] overflow-hidden">
        <img
          src="/images/investment_img/emergio_tree_grow.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Backdrop Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          className="w-full object-cover "
          src="/images/Backdrop_Homepage.jpeg"
          alt="Backdrop"
        />

        {/* main container for backdrop wrapping */}
        <div className="absolute top-0 left-0 w-full ">
          {/* container one */}
          <div className="w-full h-[50rem] bg-fuchsia-400"></div>
          <div className="w-full h-[50rem] bg-yellow-300"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage3;
