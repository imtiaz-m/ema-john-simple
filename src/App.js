import React, { createContext } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotF from "./Components/NotFound/NotF";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Login from "./Components/Login/Login";
import { AuthContextProvider, PrivateRoute } from "./Components/Login/useAuth";
import Shipment from "./Components/Shipment/Shipment";

function App(props) {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotF></NotF>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
