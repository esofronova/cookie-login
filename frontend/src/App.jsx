import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {

  let cookie = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  let user = cookie !== '' ? cookie : null;

  return (
    <div className="container py-5">
      <Router>
        <Switch>
          <Route exact path="/login">
            {user !== null ? <Redirect to="/welcome" /> : <Login />}
          </Route>
          <Route exact path="/welcome">
            {user !== null ? <Welcome user={cookie} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};