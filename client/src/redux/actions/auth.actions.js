import AxiosInstance from "../axios";
import { authActionTypes } from "./actionTypes";
import M from "materialize-css";

export const signupActions = (user) => async (dispatch) => {
  return await AxiosInstance.post("/user/signup", user).then((res) => {
    console.log(res);
    if (res.status === 200) {
      M.toast({ html: res.data.message, classes: "toast warning" });
    } else if (res.status === 201) {
      M.toast({ html: res.data.message, classes: "toast success" });
      // toast.success("you have successfull signup");
      dispatch({
        type: authActionTypes.SIGNUP_SUCCESS,
        payload: {
          user: res.data.userdata,
        },
      });
    } else {
      M.toast({ html: res.data.message, classes: "toast error" });

      dispatch({
        type: authActionTypes.SIGNUP_FAILURE,
        payload: {
          message: res.data.userdata,
        },
      });
    }
    return res;
  });
};

// signin action 
export const signinpActions =(user) => async (dispatch) =>{
  return await AxiosInstance.post('/user/signin',user).then((res)=>{
    console.log(res);
    if(res.status === 200){
      M.toast({ html: res.data.message, classes: "toast success" });
      localStorage.setItem("token", res.data.token);
      dispatch({
        type : authActionTypes.SIGNIN_SUCCESS,
        payload:{
          user : res.data.user,
          token: res.data.token
        },
      })
    }else if(res.status === 401){
      M.toast({ html: res.data.message, classes: "toast warning" });

    }else{
      M.toast({ html: res.data.message, classes: "toast error" });
        dispatch({
          type: authActionTypes.SIGNIN_FAILURE,
          payload:{
            message: res.data.message,
          },
        })
    }
    return res;
  }).catch(e =>{ console.log(e);
  return e})





}
