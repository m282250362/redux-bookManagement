import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { successData, errorData } from "../action";
export default function* getData() {
  yield takeEvery("GET_DATA", function* () {
    // 从books.json文件中获取书籍的数据
    try {
      const res = yield call(axios.get, "http://localhost:3000/books.json");
      if (res.status === 200) {
        yield put(successData(res.data.data));
      } else {
        yield put(errorData());
      }
    } catch (e) {
      yield put(errorData());
    }
  });
}
