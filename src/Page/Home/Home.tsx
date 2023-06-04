import React, { FC } from 'react';
import style from './Home.module.scss';
import Header from '../../Component/Header/Header';
import Loading from '../../Component/Loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import RestrantCategory from '../../Component/RestrantCategory/RestrantCategory';
import Slider from '../../Component/RestrantSlider/Slider';
import AppBanner from '../../Component/Banner/AppBanner';
import SignInBanner from '../../Component/Banner/SignInBanner';
import CitySection from '../../Component/CitySection/CitySection';
import Footer from '../../Component/Footer/Footer';

interface PropsType{};

const Home:FC<PropsType> = () => {

  const loading=useSelector((state:RootState)=>state.ui.showLoading);

  return (
      <>
            <Header/>
          
                {
                    loading &&  <div className={style.loadingWrapper}><Loading/></div>
                }

            
            
            <div className={style.main}>
            {!loading && <RestrantCategory/>}
            <Slider title='برترین ها' tag='top' />
            <Slider title='یک تجربه جدید' tag='newExperience' />
            <Slider title='دارای تخفیف' tag='off'/>
            {!loading &&  <AppBanner/>}
            {!loading &&  <SignInBanner/>}
          </div>
          
            <CitySection/>
            <Footer/>
    </>

  );
};
export default Home;