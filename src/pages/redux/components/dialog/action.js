import { nameSpace } from "../../../../utils/index";
const ns = nameSpace("Dialog");
export const HIDDEN_DIALOG = ns("HIDDEN_DIALOG");
export const SET_FORM = ns("SET_FORM");
export const CHANGE_FORM = ns("CHANGE_FORM");
export const EDIT_CONFIRM = ns("EDIT_CONFIRM");
export const hiddenDialog = () => {
  return {
    type: HIDDEN_DIALOG,
  };
};
export const setForm = (form) => {
  form.name = "";
  form.author = "";
  form.pubDate = "";
  return {
    type: SET_FORM,
    form,
  };
};
export const changeForm = (key, form, e) => {
  form[key] = e.target.value;
  return {
    type: CHANGE_FORM,
    form,
  };
};
export const editConfirm = (form, arr) => {
  const data = arr.map((v) => {
    if (v.id === form.id) {
      v = form;
    }
    return v;
  });
  return {
    type: EDIT_CONFIRM,
    data,
  };
};
