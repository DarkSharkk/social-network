import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validation";
import { Input } from "../common/FormControl/FormControl";

import styles from './Login.module.css';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <Field 
                    name="login"
                    component={Input}
                    placeholder="Login"
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={Input}
                    placeholder="Password"
                    validate={[required]}
                />
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