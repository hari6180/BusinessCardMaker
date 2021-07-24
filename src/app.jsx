import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>
          <Route path="/main">
            <Main authService={authService} FileInput={FileInput}></Main>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
