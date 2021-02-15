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
          <Layout component={HomeView} subTitle="Popular Titles" />
        </Route>
        <Route exact path="/movies">
          <Layout component={MoviesView} subTitle="Popular Movies" />
        </Route>
        <Route exact path="/series">
          <Layout component={SeriesView} subTitle="Popular Series" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
