import { AppDispatch } from ".."
import { userDataObject } from "../../Model/authModel"
import { AuthStep } from "../../Model/authStepModel"
import { authSliceAction } from "../Slice/authSlice"




export const register=(phoneNumber:string)=>{
    return async(dispatch:AppDispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/users?phone=${phoneNumber}`)
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data:userDataObject[]=await response.json()
            
            if(data.length>0){
                dispatch(authSliceAction.hasUserHandler(true));
                dispatch(authSliceAction.registeredUserHandler(data[0]));
                dispatch(authSliceAction.changeStep(AuthStep.password));
                dispatch(authSliceAction.authedUserDataHandler(data[0]))
            }else{
                dispatch(authSliceAction.hasUserHandler(false))
                dispatch(authSliceAction.notRegisterPhoneHandler(phoneNumber))
                dispatch(authSliceAction.changeStep(AuthStep.signup));
            }
            
            

        }catch(err:any){
            console.log(err.message);
        }
    }
}