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

    handleIncreaseQuantity = (product) => {
        console.log('hey increase the qty of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        const prevQty = products[index].qty;
        const prevPrice = products[index].price;
        products[index].qty = prevQty + 1;
        products[index].price =  prevPrice + (prevPrice / prevQty);
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('hey decrease the qty of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        const prevQty = products[index].qty;
        const prevPrice = products[index].price;
        if(prevQty >= 2) {
            products[index].qty = prevQty - 1;
            products[index].price =  prevPrice - (prevPrice / prevQty);
        }
        this.setState({
            products
        })
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
                    return <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            />
                })}
            </div>
        )
    }
}

export default Cart;