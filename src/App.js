import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Profile } from "./components/Profile/Profile";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { UsersContainer } from "./components/Users/UsersContainer";
import { LoginContainer } from "./components/Login/Login";
import "./App.css";
import { initializeApp } from "./redux/appReducer.ts";
import loader from "./bouncing-circles.svg";
import { compose } from "redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialize) {
            return <img src={loader} alt="" />;
        }

        return (
            <div className="app-container">
                <HeaderContainer />
                <Navbar />
                <div className="content">
                    <React.Suspense fallback={<div>Page loading...</div>}>
                        <Route path="/profile/:userId?" render={() => <Profile />} />
                        <Route path="/messages" render={() => <DialogsContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <LoginContainer />} />
                    </React.Suspense>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    isInitialize: state.app.isInitialize,
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);
