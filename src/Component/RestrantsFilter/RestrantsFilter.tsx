import React, { FC } from 'react';
import SideBarItemWrapper from '../RestrantListSideBar/SideBarItemWrapper';
import RestrantFilterItem from './RestrantFilterItem';



const RestrantsFilter:FC = () => {
    return (
        <SideBarItemWrapper>
            <RestrantFilterItem title='دارای کپن'/>
            <RestrantFilterItem title='دارای تخفیف'/>
            <RestrantFilterItem title='ارسال اکسپرس'/>
            <RestrantFilterItem title='رستوران های به صرفه'/>
       
        </SideBarItemWrapper>
    );
};
export default RestrantsFilter;