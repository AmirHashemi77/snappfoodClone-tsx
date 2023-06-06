import React, { FC } from 'react';
import style from './FoodListContainer.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { RestrantModel } from '../../Model/RestrantModel';
import FoodListCategory from './FoodListCategory';

interface PropsType{};

const FoodListContainer:FC<PropsType> = () => {
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant) as RestrantModel
    

    
    return (
        <div className={style.container}>
            {
                currentRestrant.menu &&
                currentRestrant.menu.map((item)=>(
                    <FoodListCategory  key={item.id} id={item.id} title={item.category} foods={item.foods} />

                ))
            }
        </div>
    );
};
export default FoodListContainer;