import './App.css'
// import './bootstrap.css'
import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-globally'
// import {gs} from 'react-global-state';

import Field from './Field';
// import Welcome from './Welcome';
// import BigTitle from './BigTitle';

// function Welcome(props) { return <h1 hidden>Hello, {props.name}!</h1>;}

export const dimension=3;

class App extends React.Component {

  render () {
    return (
      <div className='App'>
      {/* <Welcome name="Kitty"/> */}
      <Field maxWidth={50*dimension} dimension={dimension}/>
      </div>
    )
  }
}

export default App