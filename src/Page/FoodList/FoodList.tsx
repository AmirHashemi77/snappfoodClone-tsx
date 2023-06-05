import React, { FC, useEffect } from 'react';
import style from './FoodList.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice';
import Header from '../../Component/Header/Header';
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb';
import Footer from '../../Component/Footer/Footer';
import { fetchCurrentRestrant } from '../../Store/Action/currentRestrantAction';
import { fetchCartData } from '../../Store/Action/fetchCartData';
import SubmitAlert from '../../Component/SubmitAlert/SubmitAlert';
import FoodPopUp from '../../Component/FoodPopUp/FoodPopUp';
import RestrantPopUp from '../../Component/RestrantPopUp/RestrantPopUp';
import LogoAndMenu from '../../Component/LogoAndMenuFoodList/LogoAndMenu';

interface PropsType{};
 
const FoodList:FC<PropsType> = () => {
  const showFoodPopUp=useSelector((state:RootState)=>state.ui.showFoodPopUp)
  const showRestrantPopUp=useSelector((state:RootState)=>state.ui.showRestrantPopUp)
  const showSubmitAlert=useSelector((state:RootState)=>state.ui.showSubmitAlert)
  const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant)

  const parmas=useParams()
  const dispatch:AppDispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(fetchCurrentRestrant(parmas.restrantId ?? ""))
    dispatch(fetchCartData(parmas.restrantId ?? ""))
    dispatch(uiSliceAction.inActiveSearchInput());

    
  },[parmas.restrantId,dispatch])
  
    return (
        <>
          <Header/>
          {showSubmitAlert && <SubmitAlert/>}
          {showFoodPopUp && <FoodPopUp/>}
          {showRestrantPopUp && <RestrantPopUp/>}
          <div className={style.container}>
            {"id" in currentRestrant ?
              <>
                <div className={style.breadCrumbWrapper}>
              <BreadCrumb/>
            </div>
            <div className={style.main}>
                <div className={style.flexContainer}>
                        <div className={style.logoAndFoodList}>
                          <LogoAndMenu/> 
                          <FoodListContainer/> 

                        </div>
                        <CartContainer/>
                </div>


            </div>
              </> :
              <p className={style.noItem}>آیتم مورد نظر یافت نشد</p>
            }
            <Footer/>

          </div>
        </>
    );
};
export default FoodList;