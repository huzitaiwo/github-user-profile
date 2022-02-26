import { BrowserRouter, Route, Switch } from "react-router-dom"

// styles
import "./App.css"
// pages and components
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar"
import Search from "./pages/search/Search"

// pages and components

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
