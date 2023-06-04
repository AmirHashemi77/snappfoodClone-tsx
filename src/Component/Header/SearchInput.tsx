import React, { ChangeEvent, FC, useState } from 'react';
import style from './SearchInput.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store';
import { fetchSearchResultAction } from '../../Store/Action/fetchSearchResultAction';



const SearchInput:FC = () => {
    const [timer,setTimer]=useState<NodeJS.Timeout>()
    const dispatch:AppDispatch=useDispatch()
    const searchHandler=(e:ChangeEvent<HTMLInputElement>)=>{
       
        clearTimeout(timer)

        const newTimer=setTimeout(()=>{
            if(e.target.value && e.target.value.length>=3){
                dispatch(fetchSearchResultAction(e.target.value))
            }
        },1000)
        setTimer(newTimer)
    }

    return (
        <input type="text" id='search' onChange={searchHandler} className={style.searchInput} autoFocus/>

    );
};
export default SearchInput;