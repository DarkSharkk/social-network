import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = ({ data }) => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Navbar />
        <div className="content">
          <Route render={() => <Profile posts={data.posts} addPost={data.addPost} />} path="/profile" />
          <Route render={() => <Dialogs users={data.users} messages={data.messages} />} path="/messages" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
