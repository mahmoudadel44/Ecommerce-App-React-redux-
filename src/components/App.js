import React, { Component } from "react";
import axios from "axios";
import Products from "./products";
import Filter from './Filter'
import Basket from './Basket'
const url="http://localhost:8000/products"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems:[]
    };
  }
  componentWillMount(){
  axios.get(url)
  .then(res=>{
  this.setState({
      products:res.data,
      filteredProducts:res.data
  })
  })
  if(localStorage.getItem('cartItems'))
  {this.setState({cartItems:JSON.parse(localStorage.getItem('cartItems'))})}
  }
//   componentWillMount() {
//     fetch("http://localhost:8000/products")
//       .then(res => res.json())
//       .then(data =>
//         this.setState({
//           products: data,
//           filteredProducts: data
//         })
//       );
//   }
handleChangeSort=(e)=>{
this.setState({sort:e.target.value})
this.listProducts()
}
handleChangeSize=(e)=>{
    this.setState({size:e.target.value})
    this.listProducts()
    }
listProducts(){
    this.setState(state=>{
        if(state.sort!==''){
            state.products.sort((a,b)=> state.sort==='lowest'?(a.price>b.price?1:-1):(a.price<b.price?1:-1))
        }
        else{
            state.products.sort((a,b)=>(a.id<b.id?1:-1));
        }
        if(state.size!==''){
            return {filteredProducts:state.products.filter(a=>
                a.availableSizes.indexOf(state.size)>=0
                )}
        }
        return {filteredProducts:state.products}
    }
        )
}
handleAddToCart=(e,product)=>{
    this.setState(state=>{
let cartItems=state.cartItems;
let productAlreadyInCart=false;
cartItems.forEach(item=>{
    if(item.id===product.id){
   productAlreadyInCart=true;
   item.count++;
    }
})
if(!productAlreadyInCart){
  cartItems.push({...product,count:1})
  }
  console.log("ITEMS",cartItems)
localStorage.setItem("cartItems",JSON.stringify(cartItems))
return {cartItems}
})
}
handleRemoveFromCart=(e,item)=>{
this.setState(state=>{
  const cartItems=state.cartItems.filter(ele=>ele.id !== item.id)
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
  return {cartItems}
})
}
handleRemoveAllCart = () => {
  this.setState(() => {
    return { cartItems: [] }
  }, () => {
    this.handleRemoveFromCart();
  });
};
  render() {
    return (
      <div className="container-fluid">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
        <div className="col-md-8">
            <Filter
            size={this.state.size} sort={this.state.sort}
            handleChangeSort={this.handleChangeSort} handleChangeSize={this.handleChangeSize}
            count={this.state.filteredProducts.length}
            />
          <Products
            products={this.state.filteredProducts}
            handleAddToCart={this.handleAddToCart}
          />
        </div>
        <div className="col-md-4">
<Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}
handleRemoveAllCart={this.handleRemoveAllCart}/>
</div>
      </div>
      </div>
    );
  }
}
export default App;
