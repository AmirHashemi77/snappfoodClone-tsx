
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RestrantModel } from '../../Model/RestrantModel';

interface InitialStateType{
    resultArr:RestrantModel[]
}


const initialState={
    resultArr:[]

}
 

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setResultArr(state,action){
            state.resultArr=action.payload
        }
    }
})


export const searchSliceAction=searchSlice.actions;

export default searchSlice.reducer;