import React, { FC } from 'react';
import style from './FoodsCartContainer.module.scss';
import FoodsCartItem from './FoodsCartItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';



const FoodsCartContainer:FC = () => {
    const cartItems=useSelector((state:RootState)=>state.cart.items)
    return (
        <div className={style.container}>
            {
                cartItems.map((item)=>(

                        <FoodsCartItem key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice}/>

                ))
            }
           
        </div>
    );
};
export default FoodsCartContainer;