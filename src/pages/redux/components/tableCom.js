import React from "react";
import { Button, Table } from "element-react";
import { connect } from "react-redux";
import { deleteData, showDialog } from "../action/tableAction";

class TableCom extends React.Component {
  render() {
    const { showDialog, delList } = this.props;
    const columns = [
      {
        label: "编号",
        prop: "id",
        width: 180,
      },
      {
        label: "书名",
        prop: "name",
        width: 180,
      },
      {
        label: "作者",
        prop: "author",
      },
      {
        label: "出版日期",
        prop: "pubDate",
      },
      {
        label: "操作",
        prop: "id",
        render: function (data) {
          return (
            <span>
              <Button
                plain={true}
                type="info"
                size="small"
                onClick={showDialog.bind(this, data["id"])}
              >
                编辑
              </Button>
              <Button
                type="danger"
                size="small"
                onClick={delList.bind(this, data["id"])}
              >
                删除
              </Button>
            </span>
          );
        },
      },
    ];
    return (
      <Table
        style={{ width: "100%" }}
        columns={columns}
        data={this.props.data}
        border={true}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    delList: (id) => {
      dispatch(deleteData(id));
    },
    showDialog: (id) => {
      dispatch(showDialog(id));
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
export default connect(mapStateToProps, mapDispatchToProps)(TableCom);
