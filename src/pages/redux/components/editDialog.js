import React from "react";
import { Button, Dialog } from "element-react";
function EditDialog(props) {
  return (
    <Dialog
      title="编辑书籍"
      size="tiny"
      visible={props.dialogVisible}
      onCancel={props.handleCancel}
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
                value={props.form.id || ""}
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
                onChange={props.handleFormChange.bind(this, "name")}
                value={props.form.name || ""}
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
                onChange={props.handleFormChange.bind(this, "author")}
                value={props.form.author || ""}
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
                onChange={props.handleFormChange.bind(this, "pubDate")}
                value={props.form.pubDate || ""}
              />
            </div>
          </div>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={props.handleReset}>重置</Button>
        <Button onClick={props.handleCancel}>取消</Button>
        <Button type="primary" onClick={props.handleConfirm}>
          确定
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
}
export default EditDialog;
