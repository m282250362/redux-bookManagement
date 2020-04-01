import React from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  Table,
  MessageBox,
  Message,
  Form,
  Input
} from "element-react";
import "element-theme-default";
// 主容器
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editDialogVisible: false,
      id: ""
    };
    this.showEditDialog = this.showEditDialog.bind(this);
    this.showDelDialog = this.showDelDialog.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditConfirm = this.handleEditConfirm.bind(this);
  }
  componentDidMount() {
    // 从books.json文件中获取书籍的数据
    axios
      .get("http://localhost:3001/books.json")
      .then(res => {
        this.setState({
          data: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showEditDialog(id) {
    this.setState({
      editDialogVisible: true,
      id: id
    });
  }
  showDelDialog(id) {
    //
    const delId = this.state.data.findIndex(v => {
      return v.id === id;
    });
    let arr = this.state.data;
    arr.splice(delId, 1);

    MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      type: "warning"
    })
      .then(() => {
        this.setState = {
          data: arr
        };
        console.log(this.state.data);

        Message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {
        Message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
  handleEditCancel() {
    this.setState({
      editDialogVisible: false,
      id: ""
    });
  }
  handleEditConfirm() {
    this.setState({
      editDialogVisible: false,
      id: ""
    });
  }
  render() {
    return (
      <TableCom
        data={this.state.data}
        editId={this.state.id}
        editDialogVisible={this.state.editDialogVisible}
        showEditDialog={this.showEditDialog}
        showDelDialog={this.showDelDialog}
        handleEditCancel={this.handleEditCancel}
        handleEditConfirm={this.handleEditConfirm}
      />
    );
  }
}
function TableCom(props) {
  let columns = [
    {
      label: "编号",
      prop: "id",
      width: 180
    },
    {
      label: "书名",
      prop: "name",
      width: 180
    },
    {
      label: "作者",
      prop: "author"
    },
    {
      label: "出版日期",
      prop: "pubDate"
    },
    {
      label: "操作",
      prop: "id",
      render: function(data) {
        return (
          <span>
            <Button
              plain={true}
              type="info"
              size="small"
              onClick={props.showEditDialog.bind(this, data["id"])}
            >
              编辑
            </Button>
            <Button
              type="danger"
              size="small"
              onClick={props.showDelDialog.bind(this, data["id"])}
            >
              删除
            </Button>
          </span>
        );
      }
    }
  ];
  return (
    <>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        data={props.data}
        border={true}
      />
      <EditDialog
        dialogVisible={props.editDialogVisible}
        handleCancel={props.handleEditCancel}
        handleEditConfirm={props.handleEditConfirm}
        data={props.data}
        editId={props.editId}
      />
    </>
  );
}
function EditDialog(props) {
  let form = {
    id: props.editId,
    name: "",
    author: "",
    pubDate: ""
  };
  return (
    <div>
      <Dialog
        title="编辑书籍"
        modal={form}
        size="tiny"
        visible={props.dialogVisible}
        onCancel={props.handleCancel}
        lockScroll={false}
      >
        <Dialog.Body>
          <Form>
            <Form.Item label="编号">
              <Input disabled value={form.id}></Input>
            </Form.Item>
            <Form.Item label="书名">
              <Input value={form.name} onChange={handleChange}></Input>
            </Form.Item>
            <Form.Item label="作者">
              <Input value={form.author}></Input>
            </Form.Item>
            <Form.Item label="出版日期">
              <Input value={form.pubDate}></Input>
            </Form.Item>
          </Form>
        </Dialog.Body>
        <Dialog.Footer className="dialog-footer">
          <Button onClick={props.handleCancel}>取消</Button>
          <Button
            type="primary"
            onClick={props.handleEditConfirm.bind(this, props.editId)}
          >
            确定
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}
export default Container;
