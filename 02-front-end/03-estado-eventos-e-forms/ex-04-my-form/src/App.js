import { Component } from 'react';

class App extends Component {
  state = {
    userName: '',
    email: '',
    skills: 'html',
    about: '',
    isStudent: false,
  }

  handleChange = ({ target }) => {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [id]: value,
    });
  };

  render() {
    const { userName, email, skills, about, isStudent } = this.state;

    return (
      <div>
        <h1>Form com React</h1>
        <form>
          <fieldset>
            <legend>Dados para login</legend>
            <label htmlFor='userName'>
              Nome:
              <input
              type='text'
              id='userName'
              placeholder='Digite seu nome'
              onChange={ this.handleChange }
              value={ userName }
              />
            </label>
            <br />
            <br />
            <label htmlFor='email'>
              E-mail:
              <input
                type='email'
                id='email'
                placeholder='Digite seu email'
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
          </fieldset>
          <br />
          <br />
          <label htmlFor='skills'>
            Selecione uma habilidade:
            <select
             id='skills'
             onChange={ this.handleChange }
             value={ skills }
            >
              <option value='html'>HTML</option>
              <option value='css'>CSS</option>
              <option value='javascript'>JavaScript</option>
              <option value='react'>React</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor='about'>
            Escreva um resumo sobre você:
            <br />
            <textarea
             id='about'
             rows='4'
             cols='50'
             onChange={ this.handleChange }
             value={ about }
            />
          </label>
          <br />
          <br />
          <label htmlFor='isStudent'>
            <input
             type='checkbox'
             id='isStudent'
             onChange={ this.handleChange }
             checked={ isStudent }
            />
            Sou estudante da Trybe
          </label>
          <br />
          <br />
          <label htmlFor='idNumber'>
            Anexar seu documento com foto:
            <br />
            <input type='file' id='idNumber' />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
