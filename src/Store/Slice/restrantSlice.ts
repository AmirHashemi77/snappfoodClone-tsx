import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FoodItemModel, RestrantModel } from '../../Model/RestrantModel';



interface InitialStateType {
    restrantListArr:RestrantModel[],
    currentRestrant:RestrantModel | {},
    currentFood:FoodItemModel | {}
}



const initialState:InitialStateType={
    restrantListArr:[],
    currentRestrant:{},
    currentFood:{}


}
    
const restrantSlice=createSlice({
    name:'restrants',
    initialState,
    reducers:{
        restrantListHandler(state,action:PayloadAction<RestrantModel[]>){
            state.restrantListArr=[...action.payload]
        },
        currentRestrantHandler(state,action:PayloadAction<RestrantModel[]>){
            
            state.currentRestrant=action.payload[0]
        },
        currentFoodHandler(state,action:PayloadAction<FoodItemModel>){
            state.currentFood=action.payload
        }

    }
})


export const restrantSliceAction=restrantSlice.actions;
export default restrantSlice.reducer;