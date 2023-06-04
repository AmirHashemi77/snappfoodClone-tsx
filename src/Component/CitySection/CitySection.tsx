import React, { FC } from 'react';
import style from './CitySection.module.scss';
import { Link } from 'react-router-dom';
import { city } from '../../utils/city';


const CitySection:FC = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>اسنپ‌فود در شهرهای ایران</h5>
            <div className={style.cities}>
                    {city.map((item:string,index:number)=>{
                    return    <Link to='' key={index} className={style.city}>{item}</Link>
                    })}
            </div>
            
        </div>
    );
};
export default CitySection;