import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    clicks: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }))
  };
  
  render() {
    const { clicks } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Botão
        </button>
        <p>Número de clicks: { clicks }</p>
      </div>
    );
  }
}

export default App;
