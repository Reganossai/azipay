import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landingpage } from "./pages/Landingpage";
import { Dashboard } from "./pages/Dashboard";
import { Totalemployee } from "./pages/Totalemployee";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/dashboard">
            < Dashboard/>
          </Route>
          <Route path="/employee">
            <Totalemployee/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
