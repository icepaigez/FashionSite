import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/header/Navbar";
import Content from "./components/home/Content";
import Brand from "./components/brand/Brand";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/brand'>
            <NavBar />
            <Brand />
          </Route>
          <Route path='/'>
            <NavBar />
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
