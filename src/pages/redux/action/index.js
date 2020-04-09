export const getData = () => {
  return {
    type: "GET_DATA",
  };
};
export const successData = (list) => {
  return {
    type: "SUCCESS_DATA",
    data: [...list],
    status: 1,
  };
};
export const errorData = () => {
  return {
    type: "ERROR_DATA",
    status: 2,
  };
};
export const deleteData = (list) => {
  return {
    type: "DELETE_DATA",
    data: list,
  };
};
export const setForm = (list) => {
  return {
    type: "SET_FORM",
    form: list,
  };
};
export const showDialog = (list) => {
  return {
    type: "SHOW_DIALOG",
    form: list,
  };
};
export const hiddenDialog = () => {
  return {
    type: "HIDDEN_DIALOG",
  };
};
export const changeForm = (list) => {
  return {
    type: "SET_FORM",
    form: list,
  };
};
export const editConfirm = (list) => {
  return {
    type: "EDIT_CONFIRM",
    data: list,
  };
};
