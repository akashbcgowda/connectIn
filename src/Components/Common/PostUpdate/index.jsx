import React ,{useState}from 'react'
import ModalComponent from '../Modal';
import "./index.scss";
export default function PostStatus() {
    const [modal1Open, setModalOpen] = useState(false);
  return (
    <div className='post-status-main'>
        <div className='post-status'>
          <button className='Open-post-model'onClick={() => setModal1Open(true)}>
            Start a post
            </button>  
         </div>
       
       <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}
