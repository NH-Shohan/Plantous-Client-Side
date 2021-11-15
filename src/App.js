import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products/Products";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Contact from "./Pages/Shared/Contact/Contact";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Register from "./Pages/Login/Register/Register";
import Purchase from "./Pages/Products/Purchase/Purchase";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/purchase/:productName/:productPrice">
              <Purchase />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
