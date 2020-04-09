import React from "react";
import { MessageBox, Message } from "element-react";
import TableCom from "./tableCom";
import DialogContainer from "./dialogContainer";
import "element-theme-default";
import { connect } from "react-redux";
import { getData, deleteData, setForm, showDialog } from "../action/index";
// 主容器
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogVisible: false,
      form: {},
    };
  }
  componentWillMount() {
    this.props.getList();
  }
  // 显示编辑对话框
  showEditDialog = (id) => {
    const arr = this.props.data.filter((v) => {
      return v.id === id;
    });
    this.props.showDialog(arr[0]);
  };
  // 显示删除消息弹框
  showDelDialog = (id) => {
    //
    MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      type: "warning",
    })
      .then(() => {
        // 点击确认删除后，查找编号所对应的索引
        const arr = this.props.data.filter((v) => {
          return v.id !== id;
        });
        this.props.delList(arr);
        Message({
          type: "success",
          message: "删除成功!",
        });
      })
      .catch(() => {
        Message({
          type: "info",
          message: "已取消删除",
        });
      });
  };

  render() {
    return (
      <>
        <TableCom
          data={this.props.data}
          showEditDialog={this.showEditDialog}
          showDelDialog={this.showDelDialog}
        />
        <DialogContainer />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getData());
    },
    delList: (list) => {
      dispatch(deleteData(list));
    },
    setForm: (list) => {
      dispatch(setForm(list));
    },
    showDialog: (data) => {
      dispatch(showDialog(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    editDialogVisible: state.editDialogVisible,
    form: state.form,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
