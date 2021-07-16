import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/header/Navbar";
import Content from "./components/home/Content";
import Brand from "./components/brand/Brand";
import Consult from "./components/consult/Consult";
import Contact from "./components/contact/Contact";
import Media from "./components/media/Media";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
         <Route path='/media'>
            <Media />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/consult'>
            <Consult />
          </Route>
          <Route path='/brand'>
            <Brand />
          </Route>
          <Route path='/'>
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
