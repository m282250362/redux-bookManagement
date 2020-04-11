import { nameSpace } from "../../../../utils/index";
import axios from "axios";
const ns = nameSpace("Container");
export const GET_DATA = ns("GET_DATA");
export const SUCCESS_DATA = ns("SUCCESS_DATA");
export const ERROR_DATA = ns("ERROR_DATA");
export const getData = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("http://localhost:3000/books.json");
    if (res.status === 200) {
      dispatch({ type: SUCCESS_DATA, data: res.data.data, status: 1 });
    } else {
      dispatch({ type: ERROR_DATA, status: 2 });
    }
  };
};
