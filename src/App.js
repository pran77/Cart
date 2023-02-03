import Cart from './Cart'
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component{

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

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct} 
        />
      </div>
    );
  }
  
}

export default App;
