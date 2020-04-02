import React from "react";
import axios from "axios";
import { MessageBox, Message } from "element-react";
import TableCom from "./tableCom";
import "element-theme-default";
// 主容器
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editDialogVisible: false,
      form: {
        id: "",
        name: "",
        author: "",
        pubDate: ""
      },
      index: -1
    };
    this.showEditDialog = this.showEditDialog.bind(this);
    this.showDelDialog = this.showDelDialog.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditConfirm = this.handleEditConfirm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
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
  componentWillReceiveProps() {
    console.log(this.state.form);
    console.log(this.state.index);

    if (this.state.index !== -1) {
      const obj = this.state.data[this.state.index];
      this.setState({
        form: obj
      });
    }
    // return true;
  }
  // 显示编辑对话框
  showEditDialog(id) {
    const index = this.state.data.findIndex(v => {
      return v.id === id;
    });
    this.setState({
      editDialogVisible: true,
      index: index,
      form: this.state.data[index]
    });
  }
  // 显示删除消息弹框
  showDelDialog(id) {
    //
    MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      type: "warning"
    })
      .then(() => {
        // 点击确认删除后，查找编号所对应的索引
        const delId = this.state.data.findIndex(v => {
          return v.id === id;
        });
        let arr = this.state.data;
        // 删除后重新赋值
        arr.splice(delId, 1);
        this.setState({
          data: [...arr]
        });
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
      editDialogVisible: false
    });
  }
  handleFormChange(key, value) {
    console.log(key, value);

    const formObj = this.state.form;
    formObj[key] = value;
    this.setState({
      form: formObj
    });
  }
  // 修改表单确认操作
  handleEditConfirm(value, flag) {
    // console.log(value);
    // console.log(flag);
  }

  render() {
    return (
      <TableCom
        data={this.state.data}
        editDialogVisible={this.state.editDialogVisible}
        showEditDialog={this.showEditDialog}
        showDelDialog={this.showDelDialog}
        handleEditCancel={this.handleEditCancel}
        handleEditConfirm={this.handleEditConfirm}
        handleFormChange={this.handleEditConfirm}
        form={this.state.form}
      />
    );
  }
}

export default Container;
