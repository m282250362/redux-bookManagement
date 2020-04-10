import { nameSpace } from "../../../../utils/index";
const ns = nameSpace("Table");
export const DELETE_DATA = ns("DELETE_DATA");
export const SHOW_DIALOG = ns("SHOW_DIALOG");
export const deleteData = (id, arr) => {
  const data = arr.filter((v) => {
    return v.id !== id;
  });
  return {
    type: DELETE_DATA,
    data,
  };
};
export const showDialog = (id, arr) => {
  const data = arr.filter((v) => {
    return v.id === id;
  });
  return {
    type: SHOW_DIALOG,
    form: data[0],
  };
};
