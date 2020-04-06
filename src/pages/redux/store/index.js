import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducer/index";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";
const initState = {
  data: [],
  editDialogVisible: false,
  form: {
    id: "",
    name: "",
    author: "",
    pubDate: "",
  },
};
const middleware = createSagaMiddleware();
export default createStore(reducer, initState, applyMiddleware(middleware));
middleware.run(saga);
