import { nameSpace } from "../../../../utils/index";
const ns = nameSpace("Container");
export const GET_DATA = ns("GET_DATA");
export const SUCCESS_DATA = ns("SUCCESS_DATA");
export const ERROR_DATA = ns("ERROR_DATA");
export const getData = () => {
  return { type: GET_DATA };
};
export const successData = (data) => {
  return {
    type: SUCCESS_DATA,
    data,
    status: 1,
  };
};
export const errorData = () => {
  return {
    type: "ERROR_DATA",
    status: 2,
  };
};
