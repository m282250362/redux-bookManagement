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
      form: {},
      index: -1
    };
  }
  componentWillMount() {
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
  showEditDialog = id => {
    const arr = this.state.data.filter(v => {
      return v.id === id;
    });
    this.setState({
      editDialogVisible: true,
      form: { ...arr[0] }
    });
  };
  // 显示删除消息弹框
  showDelDialog = id => {
    //
    MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      type: "warning"
    })
      .then(() => {
        // 点击确认删除后，查找编号所对应的索引
        const arr = this.state.data.filter(v => {
          return v.id !== id;
        });
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
  };
  // 取消编辑操作
  handleEditCancel = () => {
    this.setState({
      editDialogVisible: false
    });
  };
  //处理表单输入框变化
  handleFormChange = (key, value) => {
    let { form } = this.state;
    form[key] = value;
    this.setState({
      form: form
    });
  };
  // 修改表单确认操作
  handleEditConfirm = flag => {
    if (flag) {
      const { form } = this.state;
      const arr = this.state.data.map(v => {
        if (v.id === form.id) {
          v = form;
        }
        return v;
      });
      this.setState({
        data: [...arr],
        editDialogVisible: false
      });
    } else {
      return false;
    }
  };
  //处理表单重置 将除了编号之外的数据全部清空
  handleReset = () => {
    let { form } = this.state;
    form.name = "";
    form.author = "";
    form.pubDate = "";
    this.setState({
      form: form
    });
  };
  render() {
    return (
      <TableCom
        data={this.state.data}
        editDialogVisible={this.state.editDialogVisible}
        showEditDialog={this.showEditDialog}
        showDelDialog={this.showDelDialog}
        handleEditCancel={this.handleEditCancel}
        handleEditConfirm={this.handleEditConfirm}
        handleFormChange={this.handleFormChange}
        form={this.state.form}
        handleReset={this.handleReset}
      />
    );
  }
}

export default Container;
