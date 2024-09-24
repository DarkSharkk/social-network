import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = ({ state, dispatch }) => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Navbar />
        <div className="content">
          <Route
            path="/profile" 
            render={() => (
              <Profile 
                posts={state.profilePage.posts} 
                postText={state.profilePage.postText} 
                dispatch={dispatch}
              />
            )} 
          />
          <Route
            path="/messages" 
            render={() => (
              <Dialogs 
                users={state.dialogsPage.users} 
                messages={state.dialogsPage.messages}
                drafts={state.dialogsPage.drafts}
                draftText={state.dialogsPage.draftText}
                dispatch={dispatch} 
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
