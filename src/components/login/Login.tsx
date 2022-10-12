import React from "react";
import { Field, Formik } from 'formik';
import css from './Login.module.css';
import { useMutation } from "@tanstack/react-query";
import * as api from '../../api';
import { LoginResult } from "../../models/loginResult";

interface LoginModel {
    username: string;
    password: string;
}

interface LoginProps {
    OnLogin: (res: LoginResult) => void
}


const Login: React.FC<LoginProps> = ({OnLogin}) => {

    const loginMutation = useMutation<LoginResult, any, LoginModel>(
        data => api.login(data.username, data.password));


    const initialVal: LoginModel = {username: '', password: ''}
    
    const login = async (data: LoginModel) => {
        const res = await loginMutation.mutateAsync(data);
        OnLogin(res);
    }

    const validation = (values: any) => {
        const errors: any = {};
        if (!values.username) {
            errors.username = 'username is required';
        }

        if (!values.password) {
            errors.password = 'password is required';
        }


        return errors;
    }


    return (
        <Formik 
            initialValues={initialVal}
            validate={validation}
            onSubmit={login}>
            {({values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting}) => (
                    <>
                        <form className={css.form} onSubmit={handleSubmit}>
                            <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                            {touched.username && errors.username && <pre>{errors.username}</pre>}
                            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            {touched.password && errors.password && <pre>{errors.password}</pre>}
                            <input type="submit" name="login"/>
                        </form>
                        {loginMutation.error && <h3>credenziali invalide</h3>}
                        {loginMutation.isSuccess && <h3>logged</h3>}
                    </>
                
            )}
        </Formik>
    ) 
}


export default Login;