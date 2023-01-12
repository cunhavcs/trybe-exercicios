import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person: [],
      loading: true,
    };
  }

  componentDidMount() {
    const URL = 'https://api.randomuser.me/';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false,
        })
      })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if(nextState.person[0].registered.age < AGE) return true;
  }

  render() {
    const { person, loading } = this.state;
    
    if(loading) {
      return (
        <div>Carregando...</div>
      );
    }
    
    return (
      <div>
        { console.log(person[0]) }
        <img src={ person[0].picture.large } alt={ person[0].name.first } />
        <p>{ `Nome: ${person[0].name.first} ${person[0].name.last}` }</p>
        <p>{ `E-mail: ${person[0].email}` }</p>
        <p>{ `Idade: ${person[0].registered.age}` }</p>
      </div>
    );
  }
}

export default App;
