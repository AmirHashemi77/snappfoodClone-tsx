import React, { FC } from 'react';
import style from './FoodPopUp.module.scss';
import FoodDetail from './FoodDetail';
import Comments from '../Comments/Comments';
import CommentsItem from '../Comments/CommentsItem';

interface PropsType{};

const FoodPopUp:FC<PropsType> = () => {
  return (
    <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
                <FoodDetail/>
                <Comments>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                </Comments>
            </div>
        </>

  );
};
export default FoodPopUp;