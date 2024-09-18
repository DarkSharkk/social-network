import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = ({ state, addPost, updatePostText }) => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Navbar />
        <div className="content">
          <Route 
            render={() => (
              <Profile 
                posts={state.posts} 
                addPost={addPost}
                postText={state.postText} 
                updatePostText={updatePostText} 
              />
            )} 
            path="/profile" 
          />
          <Route 
            render={() => <Dialogs users={state.users} messages={state.messages} />} 
            path="/messages" 
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
