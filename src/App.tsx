import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import FoodList from './Page/FoodList/FoodList';
import Restrants from './Page/Restrants/Restrants';
import Home from './Page/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from './Store';
import LogInAndSignUpPopUp from './Component/LogInAndSignUp/LogInAndSignUpPopUp';

interface PropsType{};

const App:FC<PropsType> = () => {

  const showLoginPopUp=useSelector((state:RootState)=>state.ui.showLoginPopUp)


  return (
    <>
    {showLoginPopUp && <LogInAndSignUpPopUp/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service/:category' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory/:twosubcategory' element={<Restrants/>}/>
      <Route path='/menu/:restrantId' element={<FoodList/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </>

  );
};
export default App;