import React from "react";
import { Button, Dialog, Form, Input } from "element-react";
function EditDialog(props) {
  // 当表单改变时修改state中的表单数据
  function onChange(key, value) {
    props.onFormChange(key, value);
  }
  //当表单重置
  function handleReset(e) {
    e.preventDefault();
    props.handleReset();
  }
  function validateForm() {
    // 验证表单，只有当表单都填才能确认
    if (
      props.form.name.trim().length !== 0 &&
      props.form.author.trim().length !== 0 &&
      props.form.pubDate.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  function handleConfirm(e) {
    e.preventDefault();
    let flag = validateForm();
    props.handleEditConfirm(flag);
  }
  function handleCancel(e) {
    e.preventDefault();
    props.handleCancel();
  }
  return (
    <Dialog
      title="编辑书籍"
      size="tiny"
      visible={props.dialogVisible}
      onCancel={props.handleCancel}
      lockScroll={false}
    >
      <Dialog.Body>
        <Form>
          <Form.Item label="编号">
            <Input disabled value={props.form.id}></Input>
          </Form.Item>
          <Form.Item label="书名">
            <Input
              onChange={onChange.bind(this, "name")}
              value={props.form.name}
            ></Input>
          </Form.Item>
          <Form.Item label="作者">
            <Input
              onChange={onChange.bind(this, "author")}
              value={props.form.author}
            ></Input>
          </Form.Item>
          <Form.Item label="出版日期">
            <Input
              onChange={onChange.bind(this, "pubDate")}
              value={props.form.pubDate}
            ></Input>
          </Form.Item>
        </Form>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={handleReset}>重置</Button>
        <Button onClick={handleCancel}>取消</Button>
        <Button type="primary" onClick={handleConfirm}>
          确定
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
}
export default EditDialog;
