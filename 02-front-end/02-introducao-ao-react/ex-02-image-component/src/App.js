import React from 'react';
import Image from './Image';
import catImg from './cat-img.jpg';

class App extends React.Component {
  render() {
    const altText = 'Cute cat';
    return (
      <Image source={ catImg } alternativeText={ altText } />
    );
  }
}

export default App;
