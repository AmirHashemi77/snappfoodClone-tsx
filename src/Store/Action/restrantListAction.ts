import { AppDispatch } from ".."
import { RestrantModel } from "../../Model/RestrantModel"
import { restrantSliceAction } from "../Slice/restrantSlice"
import { uiSliceAction } from "../Slice/uiSlice"








export const fetchRestrantListData=(category:string)=>{
    return async(dispatch:AppDispatch)=>{

        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?type=${category}`)
            dispatch(uiSliceAction.loadingHandler(true))
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data:RestrantModel[]=await response.json();

            
            dispatch(restrantSliceAction.restrantListHandler(data))
            setTimeout(()=>{
                dispatch(uiSliceAction.loadingHandler(false))
            },3000)



        }catch(err:any){
                console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(false))

        }
    }
}