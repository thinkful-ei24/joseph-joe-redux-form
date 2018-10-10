import React from 'react';
import {reduxForm, Field} from 'react-form';

class App extends React.Component {
    onSubmit(value) {
      console.log(value)
    }
    
    render() {
      return (
        <div>
          <header>
            <h1>Report a problem with your delivery</h1>
          </header>
          <div>
            
          </div>
          <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
            <label for="tracking-no">Tracking number</label>
            <Field id="tracking-no" name="tracking-no" type="text" component="input" />
            <label for="issue">What is your issue?</label>
            <select name="issue" id="issue">
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </select>

            <label for="details">Give more details (optional)</label>
            <Field id="details" name="details" component="textarea" />
            <button type="submit" name="submit-form">Submit</button>
          </form>
        </div>
      );
  }
}


export default reduxForm()(App);
