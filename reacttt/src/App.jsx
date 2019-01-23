import './App.css'
// import './bootstrap.css'
import React from 'react'

import Field from './Field';
// import Welcome from './Welcome';
// import BigTitle from './BigTitle';

// function Welcome(props) { return <h1 hidden>Hello, {props.name}!</h1>;}

const dimension=3;
const size=dimension*dimension-1;

class App extends React.Component {

  state = { disabled: [],table : [] } 

  componentWillMount(){
    const {table,disabled} = this.state
    for(var i=0;i<=size;i++) {
      disabled[i]=false;
      table[i]=i;
    }
    this.setState(table);
    this.setState(disabled);
    // console.log(this.state.table);
    // console.log(this.state.disabled);
  }

  menuBarClick = (e) => {
    // e.preventDefault();
    const item=e.target.innerText
    const {disabled} = this.state
    disabled[item]=!disabled[item];
    console.log(item,disabled[item])
    this.setState(disabled);
    // this.render()
  }

  render () {
    return (
      <div className='App'>
      {/* <Welcome name="Kitty"/> */}
      <Field maxWidth={50*dimension} table={this.state.table} click={this.menuBarClick}/>
      </div>
    )
  }
}

export default App