import { AppDispatch } from ".."
import { uiSliceAction } from "../Slice/uiSlice"
import { RestrantModel } from '../../Model/RestrantModel';
import  React  from 'react';






export const fetchSliderData=(setData:React.Dispatch<RestrantModel[]>,tag:string)=>{
    return async(dispatch:AppDispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?tag=${tag}`)
            dispatch(uiSliceAction.loadingHandler(true))
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data:RestrantModel[]= await response.json();
            setData(data)
            dispatch(uiSliceAction.loadingHandler(false))

       }catch(err:any){
            console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(true))

       }

    }
}