export const FETCH_CITY = "FETCH_CITY";
export const SET_INFO = "SET_INFO";
export const SET_NAME = "SET_NAME";
export const SET_TEMP = "SET_TEMP";
export const SET_ICON = "SET_ICON";
export const SET_DESC = "SET_DESC";
export const SET_HUMIDITY = "SET_HUMIDITY";

export const fetchCity = cityname => ({
  type: FETCH_CITY,
  cityname
});
export const setInfo = info => ({
  type: SET_INFO,
  info
});
export const setName = name => ({
  type: SET_NAME,
  name
});
export const setTemp = temp => ({
  type: SET_TEMP,
  temp
});
export const setDesc = desc => ({
  type: SET_DESC,
  desc
});
export const setIcon = icon => ({
  type: SET_ICON,
  icon
});
export const setHumidity = humidity => ({
  type: SET_HUMIDITY,
  humidity
});

// export const auth = (email , password) =>{
//   return dispatch => {
//     dispatch(authStart());
//     axios.post('http://api',{email,password})
//     .then(response=>{
//       console.log(response)
//       if(response.data.error) dispatch(authFail(response.data.error))
//       else {
//         const expirationDate = new Date(new Date().getTime() + response.data.expireIn * 1000);
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('expirationDate', expirationDate);
//         localStorage.setItem('userId', response.data.user.id);
//         dispatch(authSuccess(response.data.token,response.data.user.id))
//         dispatch(checkAuthTimeout(response.data.expireIn));
//       }
//     })
//   }
// }
