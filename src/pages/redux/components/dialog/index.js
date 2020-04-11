import React from "react";
import { connect } from "react-redux";
import { hiddenDialog, changeForm, editConfirm, setForm } from "./action";
import { Button, Dialog } from "element-react";
import { bindActionCreators } from "redux";
class EditDialog extends React.Component {
  render() {
    let {
      form: { id, name, author, pubDate },
      form,
      data,
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
                  onChange={changeForm.bind(this, "name", form)}
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
                  onChange={changeForm.bind(this, "author", form)}
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
                  onChange={changeForm.bind(this, "pubDate", form)}
                  value={pubDate || ""}
                />
              </div>
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={setForm.bind(this, form)}>重置</Button>
          <Button onClick={hiddenDialog}>取消</Button>
          <Button type="primary" onClick={editConfirm.bind(this, form, data)}>
            确定
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hiddenDialog: bindActionCreators(hiddenDialog, dispatch),
    changeForm: bindActionCreators(changeForm, dispatch),
    setForm: bindActionCreators(setForm, dispatch),
    editConfirm: bindActionCreators(editConfirm, dispatch),
  };
};
export default connect((state) => {
  return state.Container;
}, mapDispatchToProps)(EditDialog);
