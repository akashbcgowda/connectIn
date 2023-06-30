import React from "react";
// import PostStatus from "./Common/PostUpdate";
import Topbar from "./Common/Topbar";

export default function HomeComponent({ currentUser }) {
  return (
    <div className="home-component">
      <Topbar/>
      {/* <PostStatus currentUser={currentUser} /> */}
    </div>
  );
}