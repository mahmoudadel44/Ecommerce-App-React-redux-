import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class products extends Component {
  render() {
      // console.log(this.props.products)
    const productItems = this.props.products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center" >
          <Link to={`${product.id}`} onClick={(e)=>this.props.handleAddToCart(e,product)}>
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
            <p>{product.title}</p>
          </Link>
          <div>
    <b>${product.price}</b>
    <button className="btn btn-outline-primary m-3"
    onClick={(e)=>this.props.handleAddToCart(e,product)}
    >Add To Card</button>
          </div>
        </div>
      </div>
    ));
    return (
    
    <div className="row">{productItems}</div>
    )
  }
}
