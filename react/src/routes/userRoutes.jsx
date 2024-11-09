import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import HomePage from "../pages/userHomePage/HomePage";
import Signup from "../pages/signup/Signup";
import Business from "../pages/business/Business";
import Investors from "../pages/investors/Investors";
import Franchises from "../pages/franchises/Franchises";
import Advisors from "../pages/advisors/Advisors";
import HomeLayout from "../layout/HomeLayout";
import MainLayout from "../layout/MainLayout";
import AddPost from "../components/AddPost/AddPost";
import UserProfile from "../pages/userProfile/UserProfile";
import Settings from "../pages/settings/Settings";
import ViewPost from "../components/post/ViewPost";
import Saved from "../pages/saved/Saved";
import Otp from "../pages/otpPage/otp";
import OauthPage from "../pages/signup/PhoneOtp";
import { adminRouter, adminLoginRouter } from "./adminRouter";
import Protect from "./protect/protectedRoute";
import PhoneOtp from "../pages/signup/PhoneOtp";
import Preference from "../components/preference/Preference";
import RenewPassword from "../components/forgotPassword/renewPassword";
import ForgotPassword from "../components/forgotPassword/forgotPassword";
import ForgotOtp from "../components/forgotPassword/forgotOtp";
import Contact from "../pages/contactUs/contact";
import Subscription from "../pages/subscription/Subscription";
import BuySubscription from "../pages/buy_subscription/BuySubscription";
import SubSuccess from "../pages/subscription_success/SubSuccess";
import Notification from "../pages/notification/Notification";
import HomePage3 from "../pages/userHomePage/HomePage3"; 
import NotFound from "../components/accessories/errorBoundarys/NotFound"
import PrivacyDocs from "../pages/privacy_docs/PrivacyDocs";
import PrivacyDocsPages from "../pages/privacy_docs/PrivacyDocsPages";
import Profile1 from "../pages/userProfile/Profile1";

const appRouter = createBrowserRouter([
  //public routes
  {
    path: "/",
    element: ( <HomeLayout/>),
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path:"/3",
        element: <HomePage3/>,
      },
      {
        path: "/business",
        element: <Business/>,
      },
      {
        path: "/investment",
        element: <Investors/>,
      },
      {
        path: "/franchise",
        element: <Franchises/>
      }
    ]
  },
  {
    path: "/",
    element: (
      <Protect>
        <HomeLayout />
      </Protect>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact_us",
        element: <Contact />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/subscribe",
        element: <Subscription />,
      },
      {
        path: "/buy-subscription",
        element: <BuySubscription />,
      },
      {
        path: "/subscription-success",
        element: <SubSuccess />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
    ],
  },
  {
    path: "/",
    
    element:(<Protect> 
    <MainLayout />
    </Protect>),
    children: [
      // {
      //   path: "/business",
      //   element: <Business />,
      // },
      // {
      //   path: "/investment",
      //   element: <Investors />,
      // },
      // {
      //   path: "/franchise",
      //   element: <Franchises />,
      // },
      {
        path: "/advisors",
        element: <Advisors />,
      },
      {
        path: "/view-post/:postId",
        element: <ViewPost />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: '/Profile1',
        element: <Profile1/>
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/legal_privacy",
    element: <PrivacyDocs/>
  },
  {
    path: "/legal_privacy_page",
    element: <PrivacyDocsPages/>
  },
  // {
  //   path: '/otp/:phoneNo', // here dynamic route praameter mthod si userd ie pathe parameter
  //   element: <Otp/>
  // },
  // {
  //   path: "/homepage2",
  //   element: <Homepage1/>
  // },
  {
    path: "/otp/",
    element: <Otp />,
  },
  {
    path: "/auth-verify",
    element: <OauthPage />,
  },
  {
    path: "/phoneOtp",
    element: <PhoneOtp />,
  },
  {
    path: "/preference",
    element: <Preference />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-otp",
    element: <ForgotOtp />,
  },
  {
    path: "/renew-password",
    element: <RenewPassword />,
  },

  adminRouter,
  adminLoginRouter,
  {
    path: '*',  // This will match any unmatched route
    element: <NotFound />,
  },
]);

export default appRouter;
