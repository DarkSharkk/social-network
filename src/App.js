import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
      		<div className="app-container">
        		<Header />
        		<Navbar />
        		<div className="content">
          			<Route
						path="/profile"
						render={() => <Profile store={props.store} />}
					/>
          			<Route
            			path="/messages"
            			render={() => <DialogsContainer store={props.store} />}
          			/>
        		</div>
      		</div>
    	</BrowserRouter>
	);
};

export default App;
