import React from "react";
import TableCom from "./tableCom";
import EditDialog from "./editDialog";
import "element-theme-default";
import { connect } from "react-redux";
import { getData } from "../action/index";
// 主容器
class Container extends React.Component {
  componentWillMount() {
    this.props.getList();
  }
  render() {
    return (
      <div className="showTable">
        <TableCom />
        <EditDialog />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getData());
    },
  };
};
export default connect(null, mapDispatchToProps)(Container);
