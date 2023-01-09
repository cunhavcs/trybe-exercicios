import { Component } from 'react';

class About extends Component {
  render() {
    const name = 'Vinicius Cunha';
    const aboutMe = 'Aluno de desenvolvimento web na Trybe (Turma 27A)';

    return (
      <div>
        <h1>{ name }</h1>
        <p>{ aboutMe }</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>Git e GitHub</li>
          <li>HTML e CSS</li>
          <li>JavaScript Vanilla</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
}

export default About;
