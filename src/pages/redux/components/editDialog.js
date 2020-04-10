import React from "react";
import { connect } from "react-redux";
import {
  hiddenDialog,
  changeForm,
  editConfirm,
  setForm,
} from "../action/dialogAction";
import { Button, Dialog } from "element-react";
class EditDialog extends React.Component {
  render() {
    const {
      form: { id, name, author, pubDate },
      editDialogVisible,
      hiddenDialog,
      changeForm,
      setForm,
      editConfirm,
    } = this.props;
    return (
      <Dialog
        title="编辑书籍"
        size="tiny"
        visible={editDialogVisible}
        onCancel={hiddenDialog}
        lockScroll={false}
      >
        <Dialog.Body>
          <div className="el-form-item">
            <label className="el-form-item__label">编号</label>
            <div className="el-form-item__content">
              <div className="el-input is-disabled">
                <input
                  disabled=""
                  type="text"
                  className="el-input__inner"
                  value={id || ""}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="el-form-item">
            <label className="el-form-item__label">书名</label>
            <div className="el-form-item__content">
              <div className="el-input">
                <input
                  type="text"
                  className="el-input__inner"
                  onChange={changeForm.bind(this, "name")}
                  value={name || ""}
                />
              </div>
            </div>
          </div>
          <div className="el-form-item">
            <label className="el-form-item__label">作者</label>
            <div className="el-form-item__content">
              <div className="el-input">
                <input
                  type="text"
                  className="el-input__inner"
                  onChange={changeForm.bind(this, "author")}
                  value={author || ""}
                />
              </div>
            </div>
          </div>
          <div className="el-form-item">
            <label className="el-form-item__label">出版日期</label>
            <div className="el-form-item__content">
              <div className="el-input">
                <input
                  type="text"
                  className="el-input__inner"
                  onChange={changeForm.bind(this, "pubDate")}
                  value={pubDate || ""}
                />
              </div>
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={setForm}>重置</Button>
          <Button onClick={hiddenDialog}>取消</Button>
          <Button type="primary" onClick={editConfirm}>
            确定
          </Button>
        </Dialog.Footer>
      </Dialog>
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
    changeForm: (key, e) => {
      dispatch(changeForm(key, e));
    },
    setForm: () => {
      dispatch(setForm());
    },
    editConfirm: () => {
      dispatch(editConfirm());
    },
  };
};
export default connect(mapSateToProps, mapDispatchToProps)(EditDialog);
