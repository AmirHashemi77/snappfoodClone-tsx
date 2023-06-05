import React, { FC, ReactNode } from 'react';
import style from './RestrantsList.module.scss';

interface PropsType{
    children:ReactNode
};

const RestrantsList:FC<PropsType> = ({children}) => {
    return (
        <div className={style.container}>
            
                {children}
            
        </div>
    );
};
export default RestrantsList;