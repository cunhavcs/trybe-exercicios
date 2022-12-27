import React from 'react';
import './App.css';

class App extends React.Component {
  handleButton1 = ({ target }) => {
    target = console.log('Clicou no botão 01');
  }

  handleButton2 = ({ target }) => {
    target = console.log('Clicou no botão 02');
  }

  handleButton3 = ({ target }) => {
    target = console.log('Clicou no botão 03');
  }

  render() {
    return (
      <div>
        <button
          type='button'
          onClick={ this.handleButton1 }
        >
          Botão 01
        </button>
        <button
          type='button'
          onClick={ this.handleButton2 }
        >
          Botão 02
        </button>
        <button
          type='button'
          onClick={ this.handleButton3 }
        >
          Botão 03
        </button>
      </div>
    );
  }
}

export default App;
