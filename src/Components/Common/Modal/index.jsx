import React from 'react';
import {  Modal } from 'antd';
const  ModalComponent = ({ modalOpen, setModalOpen,}) => {
 return (
    <>
      
      <Modal
      title="Vertically centered modal dialog"
      centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      
    </>
  );
};

export default ModalComponent;