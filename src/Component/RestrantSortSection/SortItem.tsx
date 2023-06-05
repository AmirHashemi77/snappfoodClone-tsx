import React, { FC } from 'react';
import style from './SortItem.module.scss';
import { Link } from 'react-router-dom';

interface PropsType{
    title:string,
    setSortingValue:React.Dispatch<string>
};

const SortItem:FC<PropsType> = ({title,setSortingValue}) => {
    return (
        <li onClick={()=>setSortingValue(title)} className={style.menuItem}><Link to=''>{title}</Link></li>

    );
};
export default SortItem;