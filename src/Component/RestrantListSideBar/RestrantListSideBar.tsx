import React, { FC, useEffect, useState } from 'react';
import style from './RestrantListSideBar.module.scss';
import { useParams } from 'react-router';
import { sideBarCategory } from '../../utils/sideBarCategory';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SideBarItemWrapper from './SideBarItemWrapper';
import { SubCategoryModel } from '../../Model/categoryModel';
import { CategoryModel } from '../../Model/categoryModel';
import GroupingItem from './GroupingItem';

interface PropsType{};

const RestrantListSideBar:FC<PropsType> = () => {
    const parmas =useParams() as {category:string,subcategory?:string};
    const [categoryData,setCategoryData]=useState<Partial<CategoryModel>[]>([])
    const [isSubCategoryMenu,setIsSubCategoryMenu]=useState<boolean>(false)
    const [groupTitle,setGroupTitle]=useState<{title:string,link:string}>({
        title:'همه دسته بندی ها',
        link:`/service/${parmas.category}`
    })

    useEffect(()=>{
        if(parmas.category){
        if(sideBarCategory[parmas.category]){
                setCategoryData(sideBarCategory[parmas.category]);
                setIsSubCategoryMenu(false);
            }
           
            if(parmas.subcategory){
                const subcategoryItem= sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory)
                if(subcategoryItem && subcategoryItem.subCategory){
                    setCategoryData(subcategoryItem.subCategory);
                    setIsSubCategoryMenu(true);
                    
                }
                
                
            }

            
        }
       
        
    },[parmas.category,parmas.subcategory,categoryData])
    useEffect(()=>{
            switch (parmas.subcategory) {
                case 'fastfood':
                    setGroupTitle({
                        title:'همه فست فود ها',
                        link:`/service/restrant/fastfood`
                    })
                    
                    break;
                case 'irani':
                   
                    setGroupTitle({
                        title:'همه ایرانی ها',
                        link:`/service/restrant/irani`
                    })
                    break;
                case 'kebab':
                    setGroupTitle({
                        title:'همه کباب ها',
                        link:`/service/restrant/kebab`
                    })
                    break;
                case 'food':
                    setGroupTitle({
                        title:'همه غذا ها',
                        link:`/service/cofe/food`
                    })
                    break;
                case 'warmdrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های گرم',
                        link:`/service/cofe/warmdrink`
                    })
                    break;
                case 'colddrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های سرد',
                        link:`/service/cofe/colddrink`
                    })
                    break;
               
                default:
                    setGroupTitle({
                        title:'همه دسته بندی ها',
                        link:`/service/${parmas.category}`
                    })
                    break;
            }
            
    },[parmas.subcategory,parmas.category])

   
   

    return (
   
     
        <>
        {categoryData.length>0 &&

            <SideBarItemWrapper>
            {isSubCategoryMenu && 
             <Link to={`/service/${parmas.category}`} className={style.backBtn}>
             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 9 16" fill="var(--sf-carbon-main)"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg>
             <span>بازگشت</span>
             </Link>
             }
             
         <div className={style.container}>
             <NavLink to={groupTitle.link} end className={({isActive})=>isActive ? style.activeLink : style.unActiveLink}>{groupTitle.title}</NavLink>
             {categoryData.map((item)=>(
                 <GroupingItem key={item.id} id={item.id as string} title={item.title as string} menuNum={item.menuNum as number} img={item.img as string} hasSubCategory={Boolean(item.subCategory)} category={parmas.category} subcategory={parmas.subcategory} />
             ))}
 
             
         </div>
 
         </SideBarItemWrapper> 
        }
        </>

    );
};
export default RestrantListSideBar;