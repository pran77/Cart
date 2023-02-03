import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const { products } = props;
    return (
        <div className='cart'>
            {/* <CartItem title={"Smart Phone"} qty={1} price={999} img={''}/> */}
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
            {products.map((product)=>{
                return <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                        />
            })}
        </div>
    )
}

export default Cart;