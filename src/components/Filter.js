import React, { Component } from "react";
export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} products found</div>
        <div className="col-md-4">
        <label>
            Filter Size
            <select className="form-control"  onChange={this.props.handleChangeSize}
            value={this.props.size}>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            Order By
            <select className="form-control"  onChange={this.props.handleChangeSort}
            value={this.props.sort}>
              <option value="">Select</option>
              <option value="lowest">From low to high</option>
              <option value="highest">From high to low</option>
            </select>
          </label>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}
