import "./App.css";
import { Route, Switch } from "react-router";
import { Container } from "react-bootstrap";

// Components
import NavBar from "./components/NavBar";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/shops/:shopSlug">
            <ShopDetail />
          </Route>
          <Route path="/shops">
            <ShopList />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
