import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { Button, Col, Row } from 'reactstrap';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from "sweetalert2";

export const handleSuccess = (msg, status) => {
    Swal.fire({
        text: msg ? msg : 'Successful',
        position: 'center',
        timer: 50000,
        icon: status ? 'success' : 'error'
    })
}
export default function SignUp(props) {
    const [verify, setVerify] = useState(true);
    const [OTP, setOTP] = useState('');
    const [verifyOTP, setVerifyOTP] = useState(false);
    let formValues = {
        name: '',
        email: '',
        mobileNumber: '',
        password: '',
        conformPassword: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("User name is required!"),
        email: Yup.string().required("User email is required!"),
        mobileNumber: Yup.string().required("Mobile number is required!"),
        password: Yup.string().nullable().required("Password is required!"),
        conformPassword: Yup.string().nullable().oneOf([Yup.ref("password")], "Password's need to be same!").required("Conform password is required!"),
    });
    const handleSubmit = async (values, actions) => {
        axios.post('https://localhost:44383/api/Register', values).then((res) => {

        })
        props.history.push('/Login');
    }
    const SendOTP = async () => {
        var otp = Math.floor(1000 + Math.random() * 9000);
        setOTP(otp);
        setVerify(false);
        handleSuccess(otp, true);
    }
    const VerifyOTP = async (value) => {
        var status = false;
        if (value == OTP) {
            status = true;
            setVerifyOTP(true);
        }
        handleSuccess(status ? "OTP Successfully Verified" : "Invalid OTP", status);

    }
    return (
        <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}>
            {({ values, errors, touched, setFieldValue, isSubmitting, setValues }) => {
                const handleValueChange = async (name, value) => {
                    setFieldValue(name, value);
                    if (name == 'mobileNumber' && value.length != 10) {
                        setVerify(true);
                        setVerifyOTP(false);
                    }
                }
                return (
                    <Form>
                        <div className="w-100 mx-0 my-auto" style={{ position: 'fixed' }}>
                            <div className="container-login">
                                <div className="login">
                                    <Row>
                                        <Col className="input-container">
                                            <label className="label">User Name </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="input"
                                                placeholder="User Name"
                                                onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                                            />
                                            <div style={{ color: 'red' }}>{errors.name}</div>
                                        </Col>
                                        <Col className="input-container">
                                            <label className="label">User Email</label>
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
                                        {values.mobileNumber.length == 10 && verify && <Col>
                                            <Button type="button" id="OTP-btn" onClick={SendOTP}>
                                                Send OTP
                                            </Button>
                                        </Col>}
                                        {!verify && <Col className="input-container">
                                            <div style={{ display: 'flex' }}>
                                                <Col>
                                                    <InputMask style={{ width: '50px', height: '35px', marginTop: '25px' }}
                                                        mask="9999" alwaysShowMask
                                                        disabled={verifyOTP}
                                                        name="otp"
                                                        onChange={(e) => handleValueChange("otp", e.target.value.replace(/\D/g, ''), {})}
                                                    />
                                                </Col>
                                                <Col className="ms-3">
                                                    <Button type="button" id="verify" onClick={() => VerifyOTP(values.otp)} disabled={verifyOTP}>
                                                        {!verifyOTP ? "Verify" : "Verified"}
                                                    </Button>
                                                </Col>
                                            </div>
                                            {!verifyOTP && <p>
                                                <a className="link" onClick={SendOTP} >
                                                    ReSend OTP
                                                </a>
                                            </p>}
                                        </Col>
                                        }
                                    </Row>
                                    {verifyOTP && <Row>
                                        <Col className="input-container">
                                            <label className="label">Password </label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="input"
                                                placeholder="Password"
                                                onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                                            />
                                            <div style={{ color: 'red' }}>{errors.password}</div>
                                        </Col>
                                        <Col className="input-container">
                                            <label className="label">Conform Password </label>
                                            <input
                                                type="password"
                                                name="conformPassword"
                                                className="input"
                                                placeholder="Conform Password"
                                                onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                                            />
                                            <div style={{ color: 'red' }}>{errors.conformPassword}</div>
                                        </Col>
                                    </Row>}
                                    <Button type="submit" id="login-btn" disabled={!verifyOTP}>
                                        Register
                                    </Button>
                                    <Row className="text-center">
                                        <p>
                                            Already have an account?{" "}
                                            <a href="#/Login" className="link">
                                                Sign In
                                            </a>
                                        </p>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Form>)
            }}
        </Formik>
    );
}
