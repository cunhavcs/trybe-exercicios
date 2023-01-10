import { Component } from 'react';

class App extends Component {
  acaoBotaoUm = () => {
    console.log('Clicou no botão 01');
  }

  acaoBotaoDois = () => {
    console.log('Clicou no botão 02');
  }

  acaoBotaoTres = () => {
    console.log('Clicou no botão 03');
  }
  
  render() {
    return (
      <div>
        <button type="button" onClick={ this.acaoBotaoUm }>Botão 01</button>
        <button type="button" onClick={ this.acaoBotaoDois }>Botão 02</button>
        <button type="button" onClick={ this.acaoBotaoTres }>Botão 03</button>
      </div>
    );
  }
}

export default App;
