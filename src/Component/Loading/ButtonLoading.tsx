import React, { FC } from 'react';
import style from './ButtonLoading.module.scss';

interface PropsType{};

const ButtonLoading:FC<PropsType> = () => {
    return (
        <div className={style.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        );
};
export default ButtonLoading;