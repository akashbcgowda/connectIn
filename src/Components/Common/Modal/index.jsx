import React from 'react';
import {  Modal,Button } from 'antd';
const  ModalComponent = ({ modalOpen,
   setModalOpen,
   sendStatus ,
   setSatatus,
   }) => {
 return (
    <>
      
      <Modal
      title="Create a post"
      centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          
          <Button 
          onClick={sendStatus}
          key="submit" type="primary" disabled ={status.length> 0? false:true} >
            post
          </Button>,
         
        ]}
      >
       < input
       className='Modal-input'
       placeholder='what do you want to talk about?'
       onChange={() => setSatatus(Event.target.value)}
       value={status}
       />

       
      </Modal>
      
    </>
  );
};

export default ModalComponent;