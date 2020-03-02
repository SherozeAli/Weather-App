import {
  FETCH_CITY,
  SET_NAME,
  SET_TEMP,
  SET_DESC,
  SET_ICON,
  SET_HUMIDITY
} from "../actions/FetchCity";

initialState = {
  cityname: "rawalpindi",

  name: "france",
  icon: "Loading !",
  temp: "Loading !",
  desc: "Loading !",
  humidity: "Loading !"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY:
      console.log(action.cityname);
      return {
        ...state,
        cityname: action.cityname
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case SET_TEMP:
      return {
        ...state,
        temp: action.temp
      };
    case SET_ICON:
      return {
        ...state,
        icon: action.icon
      };
    case SET_DESC:
      return {
        ...state,
        desc: action.desc
      };
    case SET_HUMIDITY:
      return {
        ...state,
        humidity: action.humidity
      };

    default:
      return state;
  }
};

export default reducer;
