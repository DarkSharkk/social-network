import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../utils/validation.js";
import { Input } from "../common/FormControl/FormControl.tsx";
import { login } from "../../redux/authReducer.ts";
import { AppStateType } from "../../redux/store.ts";

import styles from './Login.module.css';

type OwnProps = {
    captchaUrl: string | null,
};

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type LoginProps = { isAuth: boolean, login: (obj: LoginFormValuesType) => void } & OwnProps;

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, OwnProps> & OwnProps> = ({ handleSubmit, error, captchaUrl }) => {
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

const LoginReduxForm = reduxForm<LoginFormValuesType, OwnProps>({ form: 'login' })(LoginForm);

const Login: React.FC<LoginProps> = ({ isAuth, login, captchaUrl }) => {
    const handleSubmit = ({ email, password, rememberMe, captcha }: LoginFormValuesType) => {
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

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export const LoginContainer = connect(mapStateToProps, { login })(Login); 