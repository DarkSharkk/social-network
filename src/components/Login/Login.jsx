import React from "react";
import { Field, reduxForm } from "redux-form";

import styles from './Login.module.css';

const LoginForm = ({ handleSubmit }) => {
    // debugger;
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <Field name="login" component="input" placeholder="Login" />
            </div>
            <div>
                <Field name="password" component="input" placeholder="Password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <span>Remember me</span>
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export const Login = () => {
    const handleSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={styles.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>
    );
}