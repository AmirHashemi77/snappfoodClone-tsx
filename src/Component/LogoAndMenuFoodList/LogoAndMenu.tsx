import React, { FC } from 'react';
import style from './LogoAndMenu.module.scss';
import RestrantParticulars from './RestrantParticulars';
import MenuList from './MenuList';

interface PropsType{};

const LogoAndMenu:FC<PropsType> = () => {
  return (
    <div className={style.container}>
            <RestrantParticulars/>
            <MenuList/>
        </div>

  );
};
export default LogoAndMenu;