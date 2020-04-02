import React from "react";
import { Button, Table } from "element-react";
import EditDialog from "./editDialog";
function TableCom(props) {
  const columns = [
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
        onFormChange={props.handleFormChange}
        form={props.form}
      />
    </div>
  );
}
export default TableCom;
