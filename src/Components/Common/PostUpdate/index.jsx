import React ,{useState,useMemo}from 'react'
import { postStatus,getStatus} from '../../../api/FirestoreAPI';
import ModalComponent from '../Modal';
import postsCard from '../PostsCard';
import { getCurrentTimeStamp } from '../../../helper/useMoment';
import "./index.scss";
import { Empty } from 'antd';
export default function PostStatus({ currentUser }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [status ,setstatus] = useState("");
    const [allStatuses , setallStatuses] = useState([])
    const sendStatus = async() =>{
      let object = {
        status: status,
        timeStamp: getCurrentTimeStamp("LLL"),
      }
      await postStatus(status);
      await setModalOpen(false)
      await setstatus("")
    };
    console.log( getCurrentTimeStamp("LLL")),
  
    useMemo (() => {
        // getPost();
    },[] )
    
  return (
    <div className='post-status-main'>
        <div className='post-status'>
          <button className='Open-post-model'onClick={() => setModalOpen(true)}>
            Start a post
            </button>  
         </div>
       
       <ModalComponent 
       setstatus = {setstatus}
       modalOpen={modalOpen} setModalOpen={setModalOpen}
       status ={status}
       sendStatus={sendStatus}
       />
       <div>
       {allStatuses.map((status)=> {
        return  <postsCard posts ={posts}/>;
      })}
      </div>
    </div>
  )
}
