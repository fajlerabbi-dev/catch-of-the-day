import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return <li>Sorry {fish ? fish.name : 'fish'} is not available</li>;
    }
    return (
      <li key={key}>
        <span>
          <span className='count'>{count}</span>
          lbs {fish.name}
        </span>
        <span className='price'>{formatPrice(fish.price)}</span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      // getting ordered fish object
      const fish = this.props.fishes[key];
      // getting total order quantity
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order'>
        <h2>Order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        Total: {formatPrice(total)}
      </div>
    );
  }
}

export default Order;
