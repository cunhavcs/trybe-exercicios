import { Component } from 'react';
import Image from './Image';
import catImg from './cat-img.jpg';

class App extends Component {
  render() {
    return <Image source={ catImg } alternativeText="Cute cat staring" />
  }
}

export default App;
