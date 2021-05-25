import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import ContactPage from "../src/components/ContactPage";
import Projects from "../src/components/Projects";
import HomePage from "../src/components/HomePage";
import Footer from "../src/components/Footer";

import {
  ToolkitItems,
  HobbiesItems,
  ProjectsItems,
} from "../src/components/Items";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  const [navStatus, setNavStatus] = useState(true);

  return (
    <>
      <Router>
        <Navbar navStatus={navStatus} setNavStatus={setNavStatus} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage tools={ToolkitItems} hobbies={HobbiesItems} />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/projects">
            <Projects projects={ProjectsItems} />
          </Route>
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
