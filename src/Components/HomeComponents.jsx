import React from "react";
import { onLogout } from "../api/AuthApi";

export default function HomeComponents() {
  return <div>
    <button onClick={onLogout}>Logout</button>
  </div>;
}
