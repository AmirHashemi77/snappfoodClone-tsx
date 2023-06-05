import React, { FC, ReactNode } from 'react';
import style from './SideBarItemWrapper.module.scss';

interface PropsType{
    children:ReactNode
};

const SideBarItemWrapper:FC<PropsType> = ({children}) => {
    return (
        
        <div className={style.wrapper}>
            {children}
            
        </div>
    
);
};
export default SideBarItemWrapper;