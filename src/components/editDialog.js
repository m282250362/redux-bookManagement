import React from "react";
import { Button, Dialog, Form, Input } from "element-react";
class EditDialog extends React.Component {
  constructor(props) {
    super(props);
  }
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
          <Form>
            <Form.Item label="编号">
              <Input disabled value={this.props.form.id}></Input>
            </Form.Item>
            <Form.Item label="书名">
              <Input
                onChange={this.props.onFormChange.bind(this, "name")}
                value={this.props.form.name}
              ></Input>
            </Form.Item>
            <Form.Item label="作者">
              <Input
                onChange={this.props.onFormChange.bind(this, "author")}
                value={this.props.form.author}
              ></Input>
            </Form.Item>
            <Form.Item label="出版日期">
              <Input
                onChange={this.props.onFormChange.bind(this, "pubDate")}
                value={this.props.form.pubDate}
              ></Input>
            </Form.Item>
          </Form>
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
