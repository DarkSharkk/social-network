import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="app-container">
          <Header />
          <Navbar />
          <div className="content">
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/messages" render={() => <DialogsContainer />} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
