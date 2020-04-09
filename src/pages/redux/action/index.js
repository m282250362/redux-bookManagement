export const getData = () => {
  return {
    type: "GET_DATA",
  };
};
export const successData = (data) => {
  return {
    type: "SUCCESS_DATA",
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
export const deleteData = (id) => {
  return {
    type: "DELETE_DATA",
    id,
  };
};
export const setForm = () => {
  return {
    type: "SET_FORM",
  };
};
export const showDialog = (id) => {
  return {
    type: "SHOW_DIALOG",
    id,
  };
};
export const hiddenDialog = () => {
  return {
    type: "HIDDEN_DIALOG",
  };
};
export const changeForm = (key, e) => {
  return {
    type: "CHANGE_FORM",
    key,
    e,
  };
};
export const editConfirm = () => {
  return {
    type: "EDIT_CONFIRM",
  };
};
