import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Profile } from "./components/Profile/Profile";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { Login } from "./components/Login/Login";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="app-container">
          <HeaderContainer />
          <Navbar />
          <div className="content">
            <Route path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/messages" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
