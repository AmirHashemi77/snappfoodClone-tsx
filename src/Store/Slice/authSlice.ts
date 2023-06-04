import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userDataObject } from "../../Model/authModel";





interface initialStateType{
    authed:boolean,
    authedUserData :userDataObject | {} ,
    stepName:string,
    hasUser:null | boolean,
    registeredUser :userDataObject | {} ,
    notRegisterPhone:null | string
}




const initialState:initialStateType={
    authed:false,
    authedUserData:{},
    stepName:'phoneNumber',
    hasUser:null,
    registeredUser:{},
    notRegisterPhone:null
    


}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
            authedHandler(state,action:PayloadAction<boolean>){
                state.authed=action.payload
            },
            authedUserDataHandler(state,action:PayloadAction<userDataObject>){
                state.authedUserData=action.payload;
            },
            registeredUserHandler(state,action:PayloadAction<userDataObject>){
                state.registeredUser=action.payload;
            },
            changeStep(state,action:PayloadAction<string>){
                state.stepName=action.payload;
            },
            hasUserHandler(state,action:PayloadAction<boolean>){
                state.hasUser=action.payload;
            },
            notRegisterPhoneHandler(state,action:PayloadAction<string>){
                state.notRegisterPhone=action.payload
            },
            clearData(state){
                state.notRegisterPhone=null;
                state.registeredUser={};
                state.stepName='phoneNumber'
                state.hasUser=null
            },
            deepClearData(state){
                state.notRegisterPhone=null;
                state.registeredUser={};
                state.stepName='phoneNumber'
                state.hasUser=null
                state.authedUserData={}
                
            }
    }
})


export const authSliceAction=authSlice.actions;
export default authSlice.reducer;