import { Component } from 'react';

class About extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <label htmlFor='about'>
        Escreva um resumo sobre você:
        <br />
        <textarea
          id='about'
          rows='4'
          cols='50'
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default About;
