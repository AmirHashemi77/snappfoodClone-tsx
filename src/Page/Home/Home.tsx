import React, { FC } from 'react';
import style from './Home.module.scss';
import Header from '../../Component/Header/Header';

interface PropsType{};

const Home:FC<PropsType> = () => {

  const loading=useSelector((state)=>state.ui.showLoading);

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