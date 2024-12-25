import axios from "axios";
import { toast } from "react-toastify";

export default function appReducer(current: any , action: any){
    switch(action.type){
        case "login" : {
            console.log("calling from REDUCER");
            
            axios.post("/api/CheckUser", {username: action.payload.values.username, password: action.payload.values.password }).then((res)=>{
                localStorage.setItem('username', action.payload.values.username);
                localStorage.setItem('password', action.payload.values.password);
                
                toast( res.data.message , {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
                window.location.href = "/" ; 
            }).catch((error : any)=>{
                toast( error.response.data.message, {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
            }); 
        }
        case "create" : {
            axios.post('/api/CreateUser' ,  {username: action.payload.values.username, password: action.payload.values.password }).then((res)=>{
                toast("User Crted !" , {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
                console.log("userCreate");
            }).catch((error)=>{
                toast( error.response.data.message , {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
            })
        }
        case "checkUser" : {
            axios.post("/api/CheckUser", {username:  action.payload.userFromLocalStorage, password:  action.payload.passwordFromLocalStorage }).then((res : any)=>{
                console.log(res);
                if (res.data.message === 'User Found') {
          
                    action.payload.setIsUserValid(true);
                } else {
                    action.payload.setIsUserValid(false);
                }
              }).catch((error : any)=>{
                  console.log(error); action.payload.setIsUserValid(false);
              })
        }
    }
}
