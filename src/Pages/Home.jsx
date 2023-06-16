import React, { useEffect, useState } from "react";
import HomeComponents from "../Components/HomeComponents";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Common/Loader";
export default function Home() {
  const [loading,setLoading]=useState(true)
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (res) => {
        if (!res?.accessToken) {
          navigate("/");
        }
        else {
          setLoading(false);
        }
      }
      //   else {}
    );
  });
  return loading ? <Loader/> : <HomeComponents />;
}
