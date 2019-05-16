import axios from "axios";

const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';


//make the states for fetching the employee data
//fetching
//successful
//failure
export const FETCH_EMP = "FETCH_EMP";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: FETCH_EMP });
    return axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      })
      .catch(err => console.log(err));
  };


export const getEmployees = () => (dispatch)=>{
    axios.get('http://localhost:5000/api/employees')
    .then(res=>{
        console.group('GET EMP')
        console.log(res.data, "BBBBBBBBBBBBBBBBBBBBBBBBBBB") 
        dispatch({type: FETCH_EMP, payload: res.data})

        console.groupEnd();
    })
    .catch(err=>console.log(err))
}