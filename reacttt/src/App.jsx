import './App.css'
// import './bootstrap.css'
import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-globally'
// import {gs} from 'react-global-state';

import MyMenu from './Menu'
import MyMenu1 from './Menu.1'
import Field from './Field';
// import Welcome from './Welcome';
// import BigTitle from './BigTitle';

function Welcome(props) { return <h1 hidden>Hello, {props.name}!</h1>;}

export const dimension=3;

class App extends React.Component {

  menuBarClick = (item) => {
    console.log(item)
    window.location = "/";
  }

  state = {rounds:[]}

  request = async () => {
    // read our JSON
    let response = await fetch(`http://localhost:8080/results`)
    let rounds = await response.json();
    console.log(rounds)
    this.setState({rounds});
  }

  componentDidMount(){
    // e.preventDefault();
    this.request(true);
    // console.log(this.state.table);
  }  

  render () {
    return (
      <div className='App'>
        <MyMenu menu={["3","4","5","6","7","8","9"]} click={this.menuBarClick}/>
      { <Welcome name="Kitty"/> }
      <Field maxWidth={50*dimension} dimension={dimension}/>
      <MyMenu1 menu={this.state.rounds} click={this.menuBarClick}/>
      </div>
    )
  }
}

export default App