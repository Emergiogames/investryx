import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Protect from "./routes/protect";
import OneSignalSetup from "./addOn/oneSignal";
import ErrorBoundary from "./components/accessories/errorBoundarys/errorBoundary";

function App() {
  // const selectUser = (state) => state.auth.user;
  // const user = useSelector(selectUser);
  // console.log("msg from app.js :", user);
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return;
  <>
    {/* <Protect> */}
      {/* <OneSignalSetup /> */}
      <Outlet />
    {/* </Protect> */}
  </>
}

export default App;
