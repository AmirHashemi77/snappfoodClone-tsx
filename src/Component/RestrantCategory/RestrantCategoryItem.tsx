import React, { FC } from 'react';
import style from './RestrantCategoryItem.module.scss';
import { Link } from 'react-router-dom';

interface PropsType{
    name:string,
    url:string,
    title:string
};

const RestrantCategoryItem:FC<PropsType> = ({name,url,title}) => {
    return (
        
        <Link to={`/service/restrant/${url}`} className={style.container}>
        <img src={`/images/type-of-restrant/${name}.jpeg`} alt={name} />
        <div className={style.titleWrapper}>
                <p>{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="#FF38AC"><path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path></svg>
            </div>
        </Link>

        
    );
};
export default RestrantCategoryItem;