import React, { useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import ChatContextProvider from "./contexts/ChatContext";
import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Formik } from "formik";
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

function App() {
  const formValues = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: ''
  }
  const [addContact, SetAddContact] = useState(false);
  const AddContactToggle = () => {
    SetAddContact(!addContact);
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().nullable().required("User name is required!"),
    lastName: Yup.string().nullable().required("User email is required!"),
    mobileNumber: Yup.string().nullable().required("Mobile number is required!"),
});
  const handleSubmit = async (values, actions) => {
  }
  return (
    <div className="App">
      <ChatContextProvider>
        <Row>
          <Col style={{ width: '485px' }}>
            <Contacts AddContactToggle={AddContactToggle} />
          </Col>
          <Col style={{ width: '600px' }}>
            <Main />
          </Col>
          <Modal isOpen={addContact} toggle={AddContactToggle}>
            <ModalBody className="model">
              <ModalHeader>Add Contact</ModalHeader>
              <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
              >
                {({ values, errors, touched, setFieldValue, isSubmitting, setValues }) => {
                  const handleValueChange = async (name, value, { selected }) => {
                    setFieldValue(name, value);
                  }
                  return (
                    <Form>
                      <Row>
                        <Col>
                          <div className="input-container">
                            <label className="label">First Name </label>
                            <input
                              type="text"
                              name="firstName"
                              className="input"
                              placeholder="First Name"
                              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                            />
                            <div style={{ color: 'red' }}>{errors.firstName}</div>
                          </div>
                        </Col>
                        <Col>
                          <div className="input-container">
                            <label className="label">Last Name </label>
                            <input
                              type="text"
                              name="lastName"
                              className="input"
                              placeholder="Last Name"
                              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                            />
                            <div style={{ color: 'red' }}>{errors.lastName}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="input-container">
                          <label className="label">Mobile Number </label>
                          <div style={{ display: 'flex' }}>
                            <Col>
                              <input
                                type="text"
                                style={{ width: '40px', height: '36px' }}
                                value="+91"
                                disabled
                              />
                            </Col>
                            <Col className="ms-1">
                              <InputMask style={{ width: '158px', height: '35px' }} mask="99999 99999" alwaysShowMask
                                name="mobileNumber"
                                onChange={(e) => handleValueChange("mobileNumber", e.target.value.replace(/\D/g, ''), {})}
                              />
                            </Col>
                          </div>
                          <div style={{ color: 'red' }}>{errors.mobileNumber}</div>
                        </Col>
                        <Col className="input-container">
                          <label className="label">Email</label>
                          <input
                            type="text"
                            name="email"
                            className="input"
                            placeholder="ex: abc@gmail.com"
                            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                          />
                          <div style={{ color: 'red' }}>{errors.email}</div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button type="submit" id="login-btn">
                          Save
                        </Button>
                        <Button type="button" id="cancel-btn" onClick={AddContactToggle}>
                          Cancel
                        </Button>
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </ModalBody>
          </Modal>
        </Row>
      </ChatContextProvider>
    </div>
  );
}

export default App;
