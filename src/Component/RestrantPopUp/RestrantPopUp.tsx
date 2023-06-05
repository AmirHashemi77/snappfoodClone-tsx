import React, { FC } from 'react';
import style from './RestrantPopUp.module.scss';
import Comments from '../Comments/Comments';
import CommentsItem from '../Comments/CommentsItem';
import RestrantDetail from './RestrantDetail';
import RateSection from './RateSection';

interface PropsType{};

const RestrantPopUp:FC<PropsType> = () => {
  return (
    <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
                <RestrantDetail/>
                <div className={style.wrap}>
                    <RateSection/>
                    <Comments>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                    </Comments>

                </div>
        </div>
        </>

  );
};
export default RestrantPopUp;