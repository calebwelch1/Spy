import React, { useContext } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
// Let's try getting theme working
import { ThemeProvider } from "./components/ThemeContextProvider.js";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Members from "./pages/Members";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Main from "./pages/Main";

// Even though this is the App.js file, in the end we are not exactly exporting
// the App component.  We actually set up the app component to implement our react
// router, but in the end we export App wrapped in the context provider

function App() {
  // Here we subscribe the authentication context using the useContext hook
  // we use isAuth to determine whether the user is logged in, and setIsAuth
  // to change their status on logout.
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are creating a private route wrapper to prevent front end routing to
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing
  // props, but using object destucturing.  the ...rest is literally the rest of
  // the props that were not destructured.
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route exact path="/main" render={(props) => <Main {...props} />} />
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />
          <PrivateRoute exact path="/members" component={Members} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

// Here we export the final product of our app/context configuration, and
// even though it is unnamed here, it will be imported as App in index.js
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
