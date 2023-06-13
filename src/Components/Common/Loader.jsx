import React from "react";
import { Alert, Space, Spin } from 'antd';
import './common.scss';
export default function Loader(){
    return
     <div className="loader">
        <space size = "middle">
           <spin size ="large"/>
        </space>
     </div>;
}