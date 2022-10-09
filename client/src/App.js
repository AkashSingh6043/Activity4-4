import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: "hello"
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error('Error fetching data: $(error)');
      }) 
  }

  render() {
    return  (
     <div className="App">
      <header className="App-header">
        Good Things
      </header>
      {this.state.data}     
    </div>
  );
 }
}

export default App;
