import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ConsumerForm from "./ConsumerForm";
const BackdropModel = (props) => {
  return (
    <>
      <Modal
        show={true}
        onHide={() => {
          props.setBackdrop();
        }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Consumer Info Table No: {props.tableNo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ConsumerForm
            tableHandlerFunction={props.tableHandlerFunction}
            tableNo={props.tableNo}
            setBackdrop = {props.setBackdrop}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BackdropModel;
