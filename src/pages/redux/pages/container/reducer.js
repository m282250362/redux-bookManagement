import { initState } from "../../reducer/index";
import { SUCCESS_DATA, ERROR_DATA } from "./action";
import { DELETE_DATA, SHOW_DIALOG } from "../../components/table/action";
import {
  HIDDEN_DIALOG,
  CHANGE_FORM,
  SET_FORM,
  EDIT_CONFIRM,
} from "../../components/dialog/action";
export default function index(state = initState, action) {
  switch (action.type) {
    case SUCCESS_DATA:
      initState.data = action.data;
      return Object.assign({}, state, { data: [...action.data] });
    case ERROR_DATA:
      return state;
    // 删除数据
    case DELETE_DATA: {
      return Object.assign({}, state, {
        data: [...action.data],
      });
    }
    //显示修改对话框
    case SHOW_DIALOG: {
      return Object.assign({}, state, {
        editDialogVisible: true,
        form: { ...action.form },
      });
    }
    //隐藏对话框
    case HIDDEN_DIALOG:
      return Object.assign({}, state, {
        editDialogVisible: false,
      });
    //处理表单输入框变化
    case CHANGE_FORM: {
      return Object.assign({}, state, { form: { ...action.form } });
    }
    //处理表单重置 将除了编号之外的数据全部清空
    case SET_FORM:
      return Object.assign({}, state, {
        form: { ...action.form },
      });
    // 修改表单确认操作
    case EDIT_CONFIRM: {
      return Object.assign({}, state, {
        data: [...action.data],
        editDialogVisible: false,
      });
    }
    default:
      return state;
  }
}
