import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Notfound from "./Notfound";
import Signin from "./Signin";
import Signup from "./Signup";
import "./App.css";

import store from "../redux/store/index";
import { useDispatch } from "react-redux";
import DashBoard from "./DashBoard";
import { getAllCategories } from "../redux/actions/category.actions";
window.store = store;
const App = () => {
  const dispatch = useDispatch();
  ///LifeCycle METHOD
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/dashboard" component={DashBoard} />
          <Route component={Notfound} />
        </Switch>
      </Router>
  );
};

export default App;
