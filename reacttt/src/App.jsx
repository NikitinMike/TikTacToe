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

class App extends React.Component {

  state = { rounds:[],dimension:3,round:0} 
  
  menuReSize = (item) => {
    // console.log(item)
    this.setState({dimension:item});
    // window.location = "#"+item;
  }

  menuRounds = (item) => {
    // console.log(item)
    window.location = "/round/"+item;
  }

  getRounds = async () => {
    // read our JSON
    let response = await fetch(`http://localhost:8080/results`)
    let rounds = await response.json();
    // console.log(rounds)
    this.setState({rounds});
  }

  componentDidMount(){
    const round = Math.floor(Math.random()*999)+this.state.dimension*1000
    this.setState({round:round})
    // e.preventDefault();
    // this.setState({dimension:3});    
    this.getRounds(true);
    // console.log(this.state);
    console.log("STATE:",this.state)
  }  

  render () {
    return (
      <div className='App'>
        <MyMenu menu={["3","4","5","6","7","8","9"]} click={this.menuReSize}/>
      { <Welcome name="Kitty"/> }
      <Field dimension={this.state.dimension} round={this.state.round}/>
      <MyMenu1 menu={this.state.rounds} click={this.menuRounds}/>
      </div>
    )
  }
}

export default App