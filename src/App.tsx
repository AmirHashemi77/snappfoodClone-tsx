import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import FoodList from './Component/Page/FoodList/FoodList';
import Restrants from './Component/Page/Restrants/Restrants';
import Home from './Component/Page/Home/Home';

interface PropsType{};

const App:FC<PropsType> = () => {
  return (
    <>
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