export const hiddenDialog = () => {
  return {
    type: "HIDDEN_DIALOG",
  };
};
export const setForm = () => {
  return {
    type: "SET_FORM",
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
