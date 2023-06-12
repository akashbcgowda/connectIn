import React, { useEffect, useState } from "react";
import LoginComponents from "../Components/LoginComponents";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function login() {
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (res) => {
        if (res?.accessToken) {
          navigate("/home");
        }
      }
      //   else {}
    );
  });
  return <LoginComponents />;
}
