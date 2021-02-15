import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeView, MoviesView, SeriesView, Layout } from "./components";
import "./styles/tailwind.dist.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Layout component={HomeView} />
        </Route>
        <Route exact path="/movies">
          <Layout component={MoviesView} />
        </Route>
        <Route exact path="/series">
          <Layout component={SeriesView} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
