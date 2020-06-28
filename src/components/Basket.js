import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        const {cartItems}=this.props
        return (
            <div className="alert alert-primary">
                {cartItems.length===0?"basket is empty":
                <div>you have {cartItems.length} products</div>}
                {
                    cartItems.length>0 && 
                    <div>
                        <ul>
                            {cartItems.map(item=>
                                <li>
                              <b className="m-3">{item.title}</b>
                              {item.count} cost of {item.count}={item.price * item.count}$
                         <img className="img-thumbnail ml-3" style={{width:'100px', height:'100px'}}
                         src={`/products/${item.sku}_2.jpg`} alt={item.title}/>
                              <button className="btn btn-danger m-3"
                              onClick={(e)=>this.props.handleRemoveFromCart(e,item)}
                              >
                              X
                              </button>
                                </li>
                            )}
                        </ul>
                      <button className="btn btn-success">Total:{cartItems.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price * currentValue.count,
    0
  )}$
  </button>

  <button className="btn btn-danger m-3"
                              onClick={(e)=>this.props.handleRemoveAllCart(e,cartItems)}
                              >
Remove All                              </button>
                    </div>
                }
            </div>
        )
    }
}
