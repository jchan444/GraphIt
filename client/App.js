import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './components/Container.jsx'


class App extends Component {
  render() {
    return(
      <div>
        <Container/>
      </div>
    )
  }

}




// const App = () => (
//     <div id="app">
//     <Container/>
//   </div>
// )



export default App;