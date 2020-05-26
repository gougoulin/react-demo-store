import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoomProvider } from "./context";

const Router = () => {
  return (
    <RoomProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </RoomProvider>
  );
};

export default Router;
