import { Component } from 'react';

class App extends Component {
  state = {
    clicksBotaoUm: 0,
    clicksBotaoDois: 0,
    clicksBotaoTres: 0,
  };

  acaoBotaoUm = () => {
    this.setState((prevState) => ({
      clicksBotaoUm: prevState.clicksBotaoUm + 1,
    }))
  }

  acaoBotaoDois = () => {
    this.setState((prevState) => ({
      clicksBotaoDois: prevState.clicksBotaoDois + 1,
    }))
  }
  
  acaoBotaoTres = () => {
    this.setState((prevState) => ({
      clicksBotaoTres: prevState.clicksBotaoTres + 1,
    }))
  }

  render() {
    const { clicksBotaoUm, clicksBotaoDois, clicksBotaoTres } = this.state;
    const { acaoBotaoUm, acaoBotaoDois, acaoBotaoTres } = this;

    return (
      <div>
        <button type="button" onClick={ acaoBotaoUm }>{ clicksBotaoUm }</button>
        <button type="button" onClick={ acaoBotaoDois }>{ clicksBotaoDois }</button>
        <button type="button" onClick={ acaoBotaoTres }>{ clicksBotaoTres }</button>
      </div>
    );
  }
}

export default App;
