import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/header/Navbar";
import Content from "./components/body/Content";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
