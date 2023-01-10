import { Component } from 'react';

class App extends Component {
  state = {
    clicksBtnUm: 0,
    clicksBtnDois: 0,
    clicksBtnTres: 0,
  };

  defineCorBtn = (num) => (num % 2 === 0) ? 'green' : 'gray';

  acaoBtnUm = () => {
    this.setState((prevState) => ({
      clicksBtnUm: prevState.clicksBtnUm + 1,
    }), () => console.log(`Cor botão 01: ${this.defineCorBtn(this.state.clicksBtnUm)}`)
    )
  };
  
  acaoBtnDois = () => {
    this.setState((prevState) => ({
      clicksBtnDois: prevState.clicksBtnDois + 1,
    }), () => console.log(`Cor botão 02: ${this.defineCorBtn(this.state.clicksBtnDois)}`)
    )
  };

  acaoBtnTres = () => {
    this.setState((prevState) => ({
      clicksBtnTres: prevState.clicksBtnTres + 1,
    }), () => console.log(`Cor botão 03: ${this.defineCorBtn(this.state.clicksBtnTres)}`)
    )
  };

  render() {
    const { clicksBtnUm, clicksBtnDois, clicksBtnTres } = this.state;
    const { defineCorBtn, acaoBtnUm, acaoBtnDois, acaoBtnTres } = this;

    return (
      <div>
        <button
          type="button"
          onClick={ acaoBtnUm }
          style={ { backgroundColor: defineCorBtn(clicksBtnUm) } }
        >
          { clicksBtnUm }
        </button>
        <button
          type="button"
          onClick={ acaoBtnDois }
          style={ { backgroundColor: defineCorBtn(clicksBtnDois) } }
        >
          { clicksBtnDois }
        </button>
        <button
          type="button"
          onClick={ acaoBtnTres }
          style={ { backgroundColor: defineCorBtn(clicksBtnTres) } }
        >
          { clicksBtnTres }
        </button>
      </div>
    );
  }
}

export default App;
