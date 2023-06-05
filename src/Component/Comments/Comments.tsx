import React, { FC, ReactNode } from 'react';
import style from './Comments.module.scss';

interface PropsType{
    children:ReactNode;
};

const Comments:FC<PropsType> = ({children}) => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>نظرات کاربران</h4>
            <div className={style.commentsWrapper}>
                    {children}
            </div>
            
        </div>
    );
};
export default Comments;