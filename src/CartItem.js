import React from 'react';

class CartItem extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         title: 'Smart Phone',
    //         price: 9999,
    //         qty: 1,
    //         img: ' '
    //     }
    // }

    // testing = () =>  {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(()=>{
    //         this.setState({ qty: this.state.qty + 10 });
    //         this.setState({ qty: this.state.qty + 10 });
    //         this.setState({ qty: this.state.qty + 10 });
    //         console.log('state', this.state);
    //     });
    // }

    // increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log(this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // setState form 2
        // this.setState((prevState)=>{
        //     return {
        //         qty: prevState.qty + 1,
        //         price: prevState.price + (prevState.price / prevState.qty)
        //     }
        // })
    // }

    // decreaseQuantity = () => {
        // if(this.state.qty >= 2) {
        //     this.setState({
        //         qty: this.state.qty - 1,
        //         price: this.state.price - (this.state.price / this.state.qty)
        //     })
        // }
    //}

    render() {
        const { title, price, qty } = this.props.product;    // object destructoring
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Price: {price} Rs</div>
                    <div style={{ color: '#777' }}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt="increase"
                            className='action-icons'
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" 
                            onClick={()=>{this.props.onIncreaseQuantity(this.props.product)}} 
                        />
                        <img alt="decrease"
                            className='action-icons'
                            src="https://cdn-icons-png.flaticon.com/128/929/929430.png"
                            onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}}
                        />
                        <img alt="delete"
                            className='action-icons'
                            src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;