import React from 'react';
import {reduxForm, Field} from 'redux-form';
import reducer from './reducer';
import MessageSuccess from './MessageSuccess';
import MessageError from './MessageError';
import {makeRequest} from './actions';

class App extends React.Component {
    onSubmit(value) {
      console.log(value)
    }
    
    render() {
      return (
          <form onSubmit={this.props.handleSubmit(value => {
            console.log(value);
            this.props.dispatch(makeRequest(value));
          }
          )}>
            <h1>Complaints</h1>
            <div>

            </div>
            <label htmlFor="trackingNumber">Tracking number</label><br/>
            <Field id="trackingNumber" name="trackingNumber" type="text" component="input" />
            <br />
            <label htmlFor="issue">What is your issue?</label><br/>
            <Field name="issue" id="issue" component="select">
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </Field>
            <br />
            <label htmlFor="details">Give more details (optional)</label><br></br>
            <Field id="details" name="details" component="textarea" /><br/>
            <button type="submit" name="submit-form">Submit</button>
          </form>
      );
  }
}

export default reduxForm({form: 'complaint'})(App);
