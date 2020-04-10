import { combineReducers } from "redux";
import Container from "../pages/container/reducer";
import TableCom from "../components/table/reducer";
import EditDialog from "../components/dialog/reducer";
export const initState = {
  data: [],
  editDialogVisible: false,
  form: {
    id: "",
    name: "",
    author: "",
    pubDate: "",
  },
};
export default combineReducers({
  Container,
  TableCom,
  EditDialog,
});
