import React from "react";
import { Alert, Space, Spin } from 'antd';

export default function Loader(){
    return(
     <div className="loader">
      <p>loading..please wait..</p>
        <Space size = "middle">
           <Spin size ="large"/>
        </Space>
     </div>);
}