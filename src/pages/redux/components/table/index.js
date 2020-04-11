import React from "react";
import { Button, Table } from "element-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteData, showDialog } from "./action";

class TableCom extends React.Component {
  render() {
    let { data, showDialog, deleteData } = this.props;
    let arr = [...data];
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
                onClick={showDialog.bind(this, data["id"], arr)}
              >
                编辑
              </Button>
              <Button
                type="danger"
                size="small"
                onClick={deleteData.bind(this, data["id"], arr)}
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
        data={data}
        border={true}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteData: bindActionCreators(deleteData, dispatch),
    showDialog: bindActionCreators(showDialog, dispatch),
  };
};
export default connect((state) => {
  return state.Container;
}, mapDispatchToProps)(TableCom);
