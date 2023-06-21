import React from "react";
import { Formik, Form } from 'formik';
import { Button } from 'reactstrap';
import { Base64 } from 'js-base64';
import * as Yup from 'yup';
import axios from 'axios';

export default function Login(props) {
    let formValues = {
        name: '',
        password: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("User Name is required!"),
        password: Yup.string().required("Password is required!"),
    });

    const handleSubmit = async (values, actions) => {
        axios.get(`https://localhost:44383/api/Register?name=${values.name}&&password=${values.password}`).then((res) => {
            props.history.push('/Chat');
        })
        
    }
    return (
        <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}>
            {({ values, errors, touched, setFieldValue, isSubmitting, setValues }) => {
                const handleValueChange = async (name, value) => {
                    setFieldValue(name, value);
                }
                return (
                    <Form>
                        <div className="w-100 mx-0 my-auto" style={{ position: 'fixed' }}>
                            <div className="container-login">
                                <div className="login align-items-center">
                                    <div className="input-container">
                                        <label className="label">User Name </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input"
                                            placeholder="User Name"
                                            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                                        />
                                        <div style={{ color: 'red' }}>{errors.name}</div>
                                    </div>
                                    <div className="input-container">
                                        <label className="label">Password </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="input"
                                            placeholder="Password"
                                            onChange={(e) => handleValueChange(e.target.name, e.target.value)}
                                        />
                                        <div style={{ color: 'red' }}>{errors.password}</div>
                                        <a href="#" className="link forgotten-password">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <Button type="submit" id="login-btn">
                                        Login
                                    </Button>

                                    <p>
                                        Don't have an account?{" "}
                                        <a href="#/SignUp" className="link">
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Form>)
            }}
        </Formik>
    );
}
