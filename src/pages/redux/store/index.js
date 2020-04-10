import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/index";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";

const middleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(middleware));
middleware.run(saga);
