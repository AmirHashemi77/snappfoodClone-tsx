import { AppDispatch } from ".."
import { RestrantModel } from "../../Model/RestrantModel"
import { restrantSliceAction } from "../Slice/restrantSlice"
import { uiSliceAction } from "../Slice/uiSlice"




export const fetchCurrentRestrant=(id:string)=>{
    return async(dispatch:AppDispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?id=${id}`)
            dispatch(uiSliceAction.loadingHandler(true))

            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data:RestrantModel[]=await response.json()
            
            if(data.length>0){
                dispatch(restrantSliceAction.currentRestrantHandler(data))
            }else{
                
            }
            
           
            setTimeout(()=>{
                dispatch(uiSliceAction.loadingHandler(false))
            },3000)
        }catch(err:any){
            console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(false))
        }
    }
}