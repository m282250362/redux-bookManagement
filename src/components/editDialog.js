import React from "react";
import { Button, Dialog, Form, Input } from "element-react";
class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        name: "",
        author: "",
        pubDate: ""
      },
      // 验证规则
      rules: {
        name: [{ required: true, message: "请输入书籍名称", trigger: "blur" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        pubDate: [
          { required: true, message: "请输入出版时间", trigger: "blur" }
        ]
      }
    };
    this.formRef = React.createRef();
  }
  // 处理确定
  handleSubmit = e => {
    e.preventDefault();
    // 验证表单，只有当表单验证规则通过后才能进行确认操作
    this.formRef.current.validate(valid => {
      if (valid) {
        let form = this.state.form;
        form.id = this.props.editId;
        this.setState({
          form: form
        });
        this.props.handleEditConfirm(this.state.form);
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  };
  // 处理取消
  handleCancel = e => {
    e.preventDefault();

    this.props.handleCancel();
    //   重置表单
    this.formRef.current.resetFields();
  };

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }
  render() {
    return (
      <div>
        <Dialog
          title="编辑书籍"
          size="tiny"
          visible={this.props.dialogVisible}
          onCancel={this.props.handleCancel}
          lockScroll={false}
        >
          <Dialog.Body>
            <Form
              ref={this.formRef}
              model={this.state.form}
              rules={this.state.rules}
            >
              <Form.Item label="编号">
                <Input disabled value={this.props.editId}></Input>
              </Form.Item>
              <Form.Item label="书名" prop="name">
                <Input
                  value={this.state.form.name}
                  onChange={this.onChange.bind(this, "name")}
                ></Input>
              </Form.Item>
              <Form.Item label="作者" prop="author">
                <Input
                  value={this.state.form.author}
                  onChange={this.onChange.bind(this, "author")}
                ></Input>
              </Form.Item>
              <Form.Item label="出版日期" prop="pubDate">
                <Input
                  value={this.state.form.pubDate}
                  onChange={this.onChange.bind(this, "pubDate")}
                ></Input>
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={this.handleCancel}>取消</Button>
            <Button type="primary" onClick={this.handleSubmit}>
              确定
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
export default EditDialog;
