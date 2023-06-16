import React from 'react'
import "./index.scss";
import LinkedinLogo from '../../../assets/LinkedinLogo.png';
import { AiOutlineHome} from 'react-icons/ai';

export default function Topbar() {
  return (
    <div className="topbar-main">
        <img className='linkedin-logo' src={LinkedinLogo} alt="LinkedinLogo"/>
        <AiOutlineHome size={40}/>
    </div>
  )
}
