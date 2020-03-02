import { FETCH_CITY } from "../actions/FetchCity";
import { takeEvery, call } from "redux-saga/effects";

const getCity = cityname =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=067f7547452906e8eaca75810a779fe7`
  )
    .then(res => res.json())
    .then(data => {});

const fetchInitialCity = function*(action) {
  try {
    let city = action.cityname;
    if (city === undefined) {
      console.log("mslaaa");
    }
    const response = yield call(getCity, city);
    const result = yield response.json();
    console.log(result);
    if (result.error) {
    } else {
      console.log("result !!" + result);
    }
  } catch (err) {
    console.log("sagaa error catch ! " + err);
  }
  yield;
};
const rootSaga = function*() {
  yield takeEvery(FETCH_CITY, fetchInitialCity);
};
export default rootSaga;
