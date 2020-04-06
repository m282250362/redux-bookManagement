import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import action from "../action";
export default function* getData() {
  yield takeEvery("GET_DATA", function* () {
    // 从books.json文件中获取书籍的数据
    const res = yield call(axios.get, "http://localhost:3000/books.json");
    if (res.status === 200) {
      yield put({
        type: action.successData,
        data: [...res.data.data],
        status: 1,
      });
    } else {
      yield put({
        type: action.errorData,
        status: 2,
      });
    }
  });
}
