const initState = {
  data: [],
  editDialogVisible: false,
  form: {},
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return state;
    case "SUCCESS_DATA":
      return Object.assign({}, state, {
        data: [...action.data],
      });
    case "ERROR_DATA":
      return state;
    case "DELETE_DATA":
      return Object.assign({}, state, {
        data: [...action.data],
      });

    case "SHOW_DIALOG":
      return Object.assign({}, state, {
        editDialogVisible: true,
        form: { ...action.form },
      });
    case "HIDDEN_DIALOG":
      return Object.assign({}, state, {
        editDialogVisible: false,
      });
    case "SET_FORM":
      return Object.assign({}, state, {
        form: { ...action.form },
      });
    case "EDIT_CONFIRM":
      return Object.assign({}, state, {
        data: [...action.data],
        editDialogVisible: false,
      });
    default:
      return state;
  }
};
