import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {recipient: '', step: []};

    this.handleRecipientChange = this.handleRecipientChange.bind(this);
    this.handleNextStep2 = this.handleNextStep2.bind(this);
    this.handleNextStep3 = this.handleNextStep3.bind(this);
    this.recipients = ["Bank of America", "PG&E", "AT&T"];

    this.state.step = [{name: "step1", className: "step step1 activeStep"}, 
                  {name: "step2", className: "step step2 inactiveStep"},
                  {name: "step3", className: "step step3 inactiveStep"}];
    console.log("Initial State: ", this.state);
  }

  handleRecipientChange(event) {
    console.log("handleRecipientChange state: ", this.state);
    console.log("handleRecipientChange Event: ", event);

    let newState = {};

    /* NOTE TO SELF
    Need to use event.currentTarget!!
      - target: whatever element somebody actually clicked on. It can vary, as this can be within an element that the event was bound to.
      - currentTarget: is the element you actually bound the event to. This will never change.
   */
   console.log("handleRecipientChange Select: ", event.currentTarget);

    newState = {recipient: event.currentTarget.value};
    newState = {recipient: event.currentTarget.value};
    console.log("handleRecipientChange newState: ", newState);
    this.setState(newState);
    event.preventDefault();
  }

  handleNextStep2(event) {
    console.log("handleNextStep2 state: ", this.state);
    console.log("handleNextStep2 Event: ", event);

    let newState = {};
    let steps = [...this.state.step];
    steps[0].className = steps[0].className.replace('activeStep', 'inactiveStep');
    steps[1].className = steps[0].className.replace('inactiveStep', 'activeStep');

    newState = {steps: steps};
    console.log("handleNextStep2 newState: ", newState);
    this.setState(newState);
    event.preventDefault();
  }

  handleNextStep3(event) {
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Pay your bills</h2>
            <form>
              <div className={this.state.step[0].className}>
                <select name='recipient' onChange={this.handleRecipientChange} value={this.state.recipient} >
                  <option key='0' value=''>Select the recipient</option>
                  {this.recipients.map((elm, index) => {
                    return <option key={index} value={elm}>{elm}</option>
                  })}
                </select>
                <button name='next1' onClick={this.handleNextStep2}>Next</button>
              </div>
              <div className={this.state.step[1].className}>
                  <h2>Amount</h2>

              </div>
              <div className={this.state.step[2].className}>

              </div>


            </form>
        </header>
      </div>
    );
  }
}

export default App;
