import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', imageUrl: ''};

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Plastiq Interview Code</h2>
            
        </header>
      </div>
    );
  }
}

export default App;
