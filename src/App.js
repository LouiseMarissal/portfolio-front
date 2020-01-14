import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Home";
import NavBar from "./components/NavBar";
import About from "./views/About";
import ContactForm from "./views/ContactForm";
import layout from "./CSS/layout.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
