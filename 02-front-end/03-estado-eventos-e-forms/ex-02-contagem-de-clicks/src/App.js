import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    clicks: 0,
  }

  getButtonColor = (num) => (num % 2 === 0) ? 'green' : 'yellow';

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };
  
  render() {
    const { clicks } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          style={ { backgroundColor: this.getButtonColor(this.state.clicks) } }
        >
          Botão
        </button>
        <p>Número de clicks: { clicks }</p>
      </div>
    );
  }
}

export default App;
