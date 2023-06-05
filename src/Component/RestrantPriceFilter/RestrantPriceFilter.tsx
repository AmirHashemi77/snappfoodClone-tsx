import React, { FC, useRef } from 'react';
import style from './RestrantPriceFilter.module.scss';
import SideBarItemWrapper from '../RestrantListSideBar/SideBarItemWrapper';

interface PropsType{};

const RestrantPriceFilter:FC<PropsType> = () => {
    const filter=useRef<HTMLDivElement>(null!);
    const setActive=(e:any)=>{
        const filterItem=filter.current.children
        
        for(let n=0 ; n<=3 ; n++){
            filterItem[n].classList.remove(style.active);
            e.target.classList.add(style.active);

        }
       
        
    }
    return (
       <SideBarItemWrapper>
        <div className={style.container}>
            <h6 className={style.title}>کلاس قیمتی</h6>
            <div ref={filter} className={style.filter}>
                <div onClick={setActive} className={`${style.item} ${style.active}`}>همه</div>
                <div onClick={setActive} className={style.item}>اقتصادی</div>
                <div onClick={setActive} className={style.item}>متوسط</div>
                <div onClick={setActive} className={style.item}>گران</div>
            </div>
        </div>
       </SideBarItemWrapper>
    );
};
export default RestrantPriceFilter;