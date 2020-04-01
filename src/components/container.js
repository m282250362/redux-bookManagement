import React from "react";
import axios from "axios";
import { Button, Table, MessageBox, Message } from "element-react";
import EditDialog from "./editDialog";
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
      .get("http://localhost:3000/books.json")
      .then(res => {
        this.setState({
          data: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 显示编辑对话框
  showEditDialog(id) {
    this.setState({
      editDialogVisible: true,
      id: id
    });
  }
  // 显示删除消息弹框
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
        this.setState(prevState => {
          delete prevState.data;
          return prevState;
        });
        this.setState({
          data: arr
        });
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
  // 取消编辑操作
  handleEditCancel() {
    this.setState({
      editDialogVisible: false,
      id: ""
    });
  }
  // 修改表单确认操作
  handleEditConfirm(form) {
    const arr = this.state.data;
    const index = this.state.data.findIndex(v => {
      return v.id === form.id;
    });
    arr[index] = form;
    // 通过将组件数据清空,然后再赋值的操作实现页面重新渲染
    this.setState(
      {
        data: []
      },
      () => {
        this.setState({
          data: arr,
          editDialogVisible: false,
          id: ""
        });
      }
    );
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
    <div>
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
    </div>
  );
}

export default Container;
