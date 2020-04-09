const initState = {
  data: [],
  editDialogVisible: false,
  form: {},
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return state;
    // 请求成功
    case "SUCCESS_DATA":
      return Object.assign({}, state, {
        data: [...action.data],
      });
    // 请求失败
    case "ERROR_DATA":
      return state;
    // 删除数据
    case "DELETE_DATA": {
      const arr = state.data.filter((v) => {
        return v.id !== action.id;
      });
      return Object.assign({}, state, {
        data: [...arr],
      });
    }

    //显示修改对话框
    case "SHOW_DIALOG": {
      const arr = state.data.filter((v) => {
        return v.id === action.id;
      });
      return Object.assign({}, state, {
        editDialogVisible: true,
        form: { ...arr[0] },
      });
    }

    //隐藏对话框
    case "HIDDEN_DIALOG":
      return Object.assign({}, state, {
        editDialogVisible: false,
      });
    //处理表单输入框变化
    case "CHANGE_FORM": {
      let newForm = state.form;
      newForm[action.key] = action.e.target.value;
      return Object.assign({}, state, { form: { ...newForm } });
    }
    //处理表单重置 将除了编号之外的数据全部清空
    case "SET_FORM":
      return Object.assign({}, state, {
        form: { id: state.form.id, name: "", author: "", pubDate: "" },
      });
    // 修改表单确认操作
    case "EDIT_CONFIRM": {
      const { form } = state;
      const arr = state.data.map((v) => {
        if (v.id === form.id) {
          v = form;
        }
        return v;
      });
      return Object.assign({}, state, {
        data: [...arr],
        editDialogVisible: false,
      });
    }

    default:
      return state;
  }
};
