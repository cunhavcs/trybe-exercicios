import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    email: '',
  };
  
  handleChange = ({ target }) => {
    this.setState({
      email: target.value,
    });
  };

  render() {
    const { email } = this.state;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="userName">
              Nome:
              <input type="text" id="userName" placeholder="Digite seu nome" />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="texto">
              Texto:
              <div>
              <textarea id="texto" placeholder="Digite seu texto" rows="4" cols="50"></textarea>
              </div>
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="yes-or-no">
              Selecione uma das opções:
              <select name="yes-or-no" id="yes-or-no">
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
          </label>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
