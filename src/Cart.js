import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: 'Smart Phone',
                    price: 9999,
                    qty: 1,
                    img: ' ',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 999,
                    qty: 12,
                    img: ' ',
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 39999,
                    qty: 2,
                    img: ' ',
                    id: 3
                }
            ]
        }
    }

    render() {
        const {products} = this.state;
        return (
            <div className='cart'>
                {/* <CartItem title={"Smart Phone"} qty={1} price={999} img={''}/> */}
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id} />
                })}
            </div>
        )
    }
}

export default Cart;