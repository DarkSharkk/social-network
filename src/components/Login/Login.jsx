import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validation";
import { Input } from "../common/FormControl/FormControl";

import styles from './Login.module.css';
import { login } from "../../redux/authReducer.ts";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
            {captchaUrl && (
                <div>
                    <img src={captchaUrl} alt="Captcha" />
                    <Field name="captcha" component={Input} placeholder="Captcha" validate={[required]} />
                </div>
            )}
            {error && <div className={styles.error}>{error}</div>}
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ isAuth, login, captchaUrl }) => {
    const handleSubmit = ({ email, password, rememberMe, captcha }) => {
        login({ email, password, rememberMe: true, captcha });
    };

    if (isAuth) return <Redirect to="/profile" />; 

    return (
        <div className={styles.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={handleSubmit} captchaUrl={captchaUrl} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export const LoginContainer = connect(mapStateToProps, { login })(Login); 