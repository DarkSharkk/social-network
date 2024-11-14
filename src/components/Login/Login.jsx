import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validation";
import { Input } from "../common/FormControl/FormControl";

import styles from './Login.module.css';
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <Field 
                    name="email"
                    component={Input}
                    placeholder="Email"
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={Input}
                    placeholder="Password"
                    validate={[required]}
                    type="password"
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

const Login = ({ isAuth, login }) => {
    const handleSubmit = ({ email, password, rememberMe }) => {
        login({ email, password, rememberMe: true });
    };

    if (isAuth) return <Redirect to="/profile" />; 

    return (
        <div className={styles.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={handleSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export const LoginContainer = connect(mapStateToProps, { login })(Login); 