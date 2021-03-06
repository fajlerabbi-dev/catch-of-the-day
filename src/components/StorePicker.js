import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // Stop the form from submitting
    event.preventDefault();
    // get the text from that input
    const storeName = this.myInput.current.value;
    // change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please entire your store</h2>
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Store name'
          defaultValue={getFunName()}
        />
        <button type='submit'>Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
