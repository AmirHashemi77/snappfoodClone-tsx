import React, { FC, useEffect, useState } from 'react';
import style from './BreadCrumb.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { breadCrumbData } from '../../utils/breadCrumbData';
import { sideBarCategory } from '../../utils/sideBarCategory';
import { Link } from 'react-router-dom';
import { CategoryModel } from '../../Model/categoryModel';

interface PropsType{};

const BreadCrumb:FC<PropsType> = () => {
    const parmas:Partial<{category:string,subcategory:string,twosubcategory:string,restrantId:string}> =useParams()
    const [breadCrumbArr,setBreadCrumbArr]=useState<{id:string,title:string,link?:string}[]>([])
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant)
    useEffect(()=>{
        if(parmas.category){
            const currentCategory={...breadCrumbData.find((item)=>item.id ===parmas.category)!, link:`/service/${parmas.category}`};

            setBreadCrumbArr([currentCategory]);

            if(parmas.subcategory){
                const currentSubCategory={...sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory), link:`/service/${parmas.category}/${parmas.subcategory}`}
                
                const breadCrumbCurrentSubCategory={id:currentSubCategory.id!,title:currentSubCategory.title!,link:currentSubCategory.link}

                setBreadCrumbArr((prev)=>[...prev,breadCrumbCurrentSubCategory]) 
            }

            if('twosubcategory' in parmas){   
                const currentSubCategory=sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory) as CategoryModel;

                if(currentSubCategory.subCategory){
                    const currentTwoSubCategory=currentSubCategory.subCategory.find((item)=>item.id ===parmas.twosubcategory)!;

                    const breadCrumbCurrentTwoSubCategory={id:currentTwoSubCategory.id,title:currentTwoSubCategory.title}

                    setBreadCrumbArr((prev)=>[...prev,breadCrumbCurrentTwoSubCategory])
                }
            }
        }
       
    },[parmas.category,parmas.subcategory,parmas.twosubcategory])
    useEffect(()=>{
        if(parmas.restrantId && "id" in currentRestrant){
            
                const category={...breadCrumbData.find((item)=>item.id===currentRestrant.type)!,link:`/service/${currentRestrant.type}`};
                
                const restrantname={title:currentRestrant.title,id:currentRestrant.id};

                setBreadCrumbArr([category,restrantname])
        }
    },[parmas.restrantId,currentRestrant])



    return (
        <div className={style.container}>
            <Link to='/' className={style.breadCrumbItem}>اسنپ فود /</Link>
            {    
                breadCrumbArr.map((item,index)=>{

                    return index === (breadCrumbArr.length -1 ) ? <p key={item.id} className={style.lastBreadCrumbItem}>{item.title}</p> : <Link key={item.id} className={style.breadCrumbItem}  to={item.link as string}>{`${item.title} /`}</Link>
                       
                })
            }
        </div>
    );
};
export default BreadCrumb;