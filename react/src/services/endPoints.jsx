import { deleteWishList, getWishList, postWishList } from "./post/apiMethods";
import { addBusinessPost, addContact } from "./user/apiMethods";

export const userUrls = {
  register: "/register",
  registerOtp: "/verifyOTP",
  resendOtp: "/resendOTP",
  login: "/login",
  forgotPassword: "/forgotpwd",
  forgotOtp: "/otpconfirm",
  resetPassword: "/changepwd",
  googleAuth: "/google-auth",
  googleSignIn: "/social",
  getUserDetails: "/user-details",
  editProfile: "/edit-profile",
  getUserData: "/user",
  postOtp  : "/regotp",
  pref : "/prefer",
  addContact: "/contact",
  getActivity: "/activity",
  getPlan: "/plans",
  getFeatured: "/featured",
  getRecommended: "/recommended",
  getBanner: "/banner",
  getFeaturedExperts: "/featured?type=advisor", //need to pass type = advisor
  getGraph: "/graph" ,
  setSub: "/subscribe",
  getNoti: "/notification",
  getLeftPlan: "/subscribe"
  
};

export const postUrls = {
  getBusinessData: "/business0",
  getInvestorData: "/investor0",
  getFranchisData: "/franchise0",
  getAdvisorData: "/advisor0",
  addBusinessPost: "/business",
  addFranchisePost: "/franchise",
  addInvestorPost: "/investor",
  addAdvisorPost: "/advisor",
  postContact: "/contact",
  wishList: "/wishlist",
};

export const adminUrls = {
  login: "/admin/login",
  userBlock: "/admin/user-block",
  userList: "/admin/user",
  businessList: "/admin/business",
  franchiseList: "/admin/franchise",
  investorList: "/admin/investor",
  advisorList: "/admin/advisor",
  bannerList: "/admin/banner",
  notificationData: "/admin/notification",
  // postList: "/admin/get-posts",
  // reportList: "/admin/get-reports",
  // postBlock: "/admin/post-block",
  // getDetails: "/admin/get-details",
  // chartData:'/admin/chart-data',
};
