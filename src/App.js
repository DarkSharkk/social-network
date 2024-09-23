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
                posts={state.posts} 
                postText={state.postText} 
                dispatch={dispatch}
              />
            )} 
          />
          <Route
            path="/messages" 
            render={() => (
              <Dialogs 
                users={state.users} 
                messages={state.messages}
                drafts={state.drafts}
                draftText={state.draftText}
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
