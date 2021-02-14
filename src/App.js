import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeView, MoviesView, SeriesView } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <HomeView />
        </Route>
        <Route exact path="/movies">
          <MoviesView />
        </Route>
        <Route exact path="/series">
          <SeriesView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
