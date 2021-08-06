import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please entire your store</h2>
        <input type="text" required placeholder="Store name" />
        <button type="submit">Visit store</button>
      </form> 
    )
  }
}

export default StorePicker;