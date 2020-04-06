import React from "react";
import { Button, Dialog } from "element-react";
class EditDialog extends React.Component {
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
  handleConfirm = () => {
    let flag = this.validateForm();
    this.props.handleEditConfirm(flag);
  };
  render() {
    return (
      <Dialog
        title="编辑书籍"
        size="tiny"
        visible={this.props.dialogVisible}
        onCancel={this.props.handleCancel}
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
                  value={this.props.form.id || ""}
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
                  onChange={this.props.onFormChange.bind(this, "name")}
                  value={this.props.form.name || ""}
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
                  onChange={this.props.onFormChange.bind(this, "author")}
                  value={this.props.form.author || ""}
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
                  onChange={this.props.onFormChange.bind(this, "pubDate")}
                  value={this.props.form.pubDate || ""}
                />
              </div>
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={this.props.handleReset}>重置</Button>
          <Button onClick={this.props.handleCancel}>取消</Button>
          <Button type="primary" onClick={this.handleConfirm}>
            确定
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}
export default EditDialog;
