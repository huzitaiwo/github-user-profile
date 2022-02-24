import { BrowserRouter, Route, Switch } from "react-router-dom"
// import { useFetch } from './hooks/useFetch'

// styles
import "./App.css"
// pages and components
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"

// pages and components

function App() {
  const { data, error, isPending } = useFetch('http://localhost:5000/posts')

  return (
    <div className="App">
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
