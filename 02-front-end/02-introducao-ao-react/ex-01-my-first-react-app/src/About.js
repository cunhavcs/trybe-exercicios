import React from "react";

class About extends React.Component {
  render() {
    const myName = 'Vinicius Cunha';
    const aboutMe = 'Estudante de desenvolvimento web full stack na Trybe (Turma 27 A).';
    const skillsTitle = 'Minhas Habilidade';

    return(
      <div>
        <h1>{myName}</h1>
        <p>{aboutMe}</p>
        <h2>{skillsTitle}</h2>
        <ul>
          <li>HTML e CSS;</li>
          <li>Git e GitHub;</li>
          <li>JavaScript Vanilla;</li>
          <li>Testes Unitários com Jest;</li>
          <li>React (Básico).</li>
        </ul>
      </div>
    );
  }
}

export default About;
