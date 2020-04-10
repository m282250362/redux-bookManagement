import React from "react";
import "element-theme-default";
import { connect } from "react-redux";
import { getData } from "./action";
import { bindActionCreators } from "redux";
import TableCom from "../../components/table/index";
import EditDialog from "../../components/dialog/index";
// 主容器
class Container extends React.Component {
  componentWillMount() {
    this.props.getData();
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
export default connect(null, (dispatch) => ({
  getData: bindActionCreators(getData, dispatch),
}))(Container);
