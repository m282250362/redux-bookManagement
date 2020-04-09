import React from "react";
import EditDialog from "./editDialog";
import { connect } from "react-redux";
import { hiddenDialog, changeForm, editConfirm } from "../action";
class DialogContainer extends React.Component {
  handleCancel = () => {
    this.props.hiddenDialog();
  };
  //处理表单重置 将除了编号之外的数据全部清空
  handleReset = () => {
    let { form } = this.props;
    form.name = "";
    form.author = "";
    form.pubDate = "";
    this.props.changeForm(form);
  };
  //处理表单输入框变化
  handleFormChange = (key, e) => {
    let { form } = this.props;
    form[key] = e.target.value;
    this.props.changeForm(form);
  };
  validateForm = () => {
    // 验证表单，只有当表单都填才能确认
    if (
      this.props.form.name.trim().length !== 0 &&
      this.props.form.author.trim().length !== 0 &&
      this.props.form.pubDate.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  // 修改表单确认操作
  handleEditConfirm = () => {
    let flag = this.validateForm();
    if (flag) {
      const { form } = this.props;
      const arr = this.props.data.map((v) => {
        if (v.id === form.id) {
          v = form;
        }
        return v;
      });
      this.props.editConfirm(arr);
    } else {
      return false;
    }
  };

  render() {
    return (
      <EditDialog
        form={this.props.form}
        dialogVisible={this.props.editDialogVisible}
        handleFormChange={this.handleFormChange}
        handleCancel={this.handleCancel}
        handleReset={this.handleReset}
        handleConfirm={this.handleEditConfirm}
      />
    );
  }
}
const mapSateToProps = (state) => {
  return {
    data: state.data,
    form: state.form,
    editDialogVisible: state.editDialogVisible,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hiddenDialog: () => {
      dispatch(hiddenDialog());
    },
    changeForm: (list) => {
      dispatch(changeForm(list));
    },
    editConfirm: (list) => {
      dispatch(editConfirm(list));
    },
  };
};
export default connect(mapSateToProps, mapDispatchToProps)(DialogContainer);
