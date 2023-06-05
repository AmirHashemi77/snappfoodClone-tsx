import React, { FC } from 'react';
import style from './SubmitAlert.module.scss';

interface PropsType{};

const SubmitAlert:FC<PropsType> = () => {
  return (
    <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
            <p className={style.text}>سفارش شما با موفقیت ثبت شد</p>
        </div>
    </>

  );
};
export default SubmitAlert;