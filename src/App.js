import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import ReactContainer from "./pages/react/components/container";
import Container from "./pages/redux/pages/container/index";
import "./App.css";
import { Provider } from "react-redux";
import store from "./pages/redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <div className="link">
            <Link to="/">react</Link>
            <Link to="/react-redux">react-redux</Link>
          </div>
          <Route exact path="/" component={ReactContainer} />
          <Route exact path="/react-redux" component={Container} />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
