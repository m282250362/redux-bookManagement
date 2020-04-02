import React from "react";
import { Button, Dialog, Form, Input } from "element-react";
class EditDialog extends React.Component {
  // let formValue = {
  //   id: props.form.id,
  //   name: props.form.name,
  //   author: props.form.author,
  //   pubDate: props.form.pubDate
  // };
  constructor(props) {
    super(props);
    console.log(props.form);

    this.state = {
      formValue: {}
    };
  }
  // 当表单改变时修改state中的表单数据
  onChange = (key, value) => {
    console.log(key, value);

    this.props.onFormChange(key, value);
  };
  //当表单重置
  handleReset = e => {
    e.preventDefault();
    // formValue = {
    //   id: this.state.form.id,
    //   author: "",
    //   name: "",
    //   pubDate: ""
    // };
  };
  validateForm = e => {
    // 验证表单，只有当表单都填才能确认
    if (
      this.state.formValue.name.length !== 0 &&
      this.state.formValue.author.length !== 0 &&
      this.state.formValue.pubDate.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  handleConfirm = e => {
    e.preventDefault();
    let flag = this.validateForm();
    this.props.handleEditConfirm(this.state.formValue, flag);
  };
  handleCancel = e => {
    e.preventDefault();
    this.props.handleCancel();
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
              <Input disabled value={this.state.formValue.id}></Input>
            </Form.Item>
            <Form.Item label="书名">
              <Input
                onChange={this.onChange.bind(this, "name")}
                value={this.state.formValue.name}
              ></Input>
            </Form.Item>
            <Form.Item label="作者">
              <Input
                onChange={this.onChange.bind(this, "author")}
                value={this.state.formValue.author}
              ></Input>
            </Form.Item>
            <Form.Item label="出版日期">
              <Input
                onChange={this.onChange.bind(this, "pubDate")}
                value={this.state.formValue.pubDate}
              ></Input>
            </Form.Item>
          </Form>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={this.handleReset}>重置</Button>
          <Button onClick={this.handleCancel}>取消</Button>
          <Button type="primary" onClick={this.handleConfirm}>
            确定
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}
export default EditDialog;
