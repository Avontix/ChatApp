import { Fragment, useState } from "react";
import "./SenderMessage.css";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Formik } from "formik";

const SenderMessage = ({ message }) => {
  const [model, setModel] = useState(false);
  const toggle =()=>{
    setModel(!model)
  }
  return (
    <Fragment>
      {message.image ?
        <div className="senderMessage senderMessage_image" onClick={toggle}>
          <img alt="preview image" src={message.image} className="" />
          <div style={{ display: 'flex', float: 'right', fontSize: '0.9em', color: '#565a53' }}>
            <div>{message.timestamp}</div> <div style={{ fontSize: '15px', color: 'Highlight', paddingLeft:'5px' }}><DoneAllIcon /></div>
          </div>
        </div>
        :
        <div className="senderMessage">
          <div>{message.content}</div>
          <span>
            {message.timestamp} <div style={{ fontSize: '15px', color: 'Highlight' }}><DoneAllIcon /></div>
          </span>
        </div>
      }

<Modal isOpen={model} toggle={toggle}>
            <ModalBody className="model">
              <ModalHeader>Add Contact</ModalHeader>
              <Formik
              >
                {({ values, errors, touched, setFieldValue, isSubmitting, setValues }) => {
                  const handleValueChange = async (name, value, { selected }) => {
                    setFieldValue(name, value);
                  }
                  return (
                    <div>
                      
                    </div>
                  )
                }}
              </Formik>
            </ModalBody>
          </Modal>

    </Fragment>
  );
};

export default SenderMessage;
