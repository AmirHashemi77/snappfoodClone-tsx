import React, { FC } from 'react';
import style from './SideBarItemWrapper.module.scss';

interface PropsType{
    children:any
};

const SideBarItemWrapper:FC<PropsType> = ({children}) => {
    return (
        
        <div className={style.wrapper}>
            {children}
            
        </div>
    
);
};
export default SideBarItemWrapper;