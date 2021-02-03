const { authActionTypes } = require("../actions/actionTypes")

const initialState = {
    user:null,
    loading:false,
    message: "",
    error: ""
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
       case authActionTypes.SIGNUP_REQUEST:
       state ={
           ...state,
           loading:true,
           message: "User signup in process"
       }
     break;
     case authActionTypes.SIGNUP_SUCCESS:
       state ={
           ...state,
           loading:true,
           message: "User signup success.."
       }
     break;
     case authActionTypes.SIGNIN_REQUEST:
         state ={
             ...state,
             loading:true,
             message:"user signin in process"
             
         }
         break;
         case authActionTypes.SIGNIN_SUCCESS:
             state ={
                 ...state,
                 loading:false,
                 message:"user successfully signin.."
             }
             break;
             

     default:
         break;


   }
   return state;
}
export default authReducer;