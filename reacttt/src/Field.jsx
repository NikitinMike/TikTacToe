import React from 'react'

import {dimension} from './App'
var SIZE=dimension*dimension;
const GAME=[];

const isNull = (val) => val===0;
// const round = (size) => Math.floor(Math.random()*size);
var round = SIZE;

class Cell extends React.Component {

    state = { cellDisabled:false } 

    request = async () => {
        // fetch(`http://localhost:8080/move/${round}`
        //         ,{
        //             'mode':'cors',
        //             'method': 'GET',
        //             headers: {
        //                 // 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //                 // 'Content-Type': 'application/json;charset=UTF-8'
        //             }
        //             // ,credentials: 'include' 
        //         }
        //     )
        // // .then(response => { console.log(response) })
        // .then(msg => { console.log(msg) })
        // .catch(error => { console.log('Failed', error) });
  
        // read our JSON
        let response = await fetch(`http://localhost:8080/move/${round}`)
        let data = await response.json();
        console.log(data)    
    }

    moveClick = (e) => {

        this.request();

        // console.log(e.target.innerText)
        // if (e.target.innerText) return;
        // const item=e.target.innerText
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log("X>",e.target.id)
        this.setState({cellDisabled});
        // this.render()
        e.target.innerText="X"
        this.move(e,0)
        GAME[e.target.id]=+1;
        // console.log(GAME.some(isNull));
        if(!GAME.some(isNull)) 
            e.target.parentNode.style.background="RED"
            // console.log(GAME)
            // console.log("GAME OVER")
            // console.log(e.target.parentNode.style)
    }

    move(e,n) {
        if(n>SIZE) return;
        const cell=Math.floor(Math.random()*SIZE);
        const item=e.target.parentNode.childNodes[cell]
        // console.log(cell,e.target.parentNode.childNodes[cell])
        if (item.innerText) return this.move(e,n+1)
        item.innerText="O"
        console.log("O<",item.id)
        GAME[item.id]=-1;
    }

    render () {
        return (
            <button className="flex-itm" onClick={this.moveClick} disabled={this.state.cellDisabled} id={this.props.item}>
                {/* &nbsp; */}
                {/* {this.props.item} */}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {table:[]}

    componentDidMount(){
        // e.preventDefault();
        this.reset(true);
        // console.log(this.state.table);
    }

    reset(){
        SIZE = dimension*dimension;
        round = Math.floor(Math.random()*SIZE);
        const {table} = this.state
        for(var i=0;i<SIZE;i++) {table[i]=i;GAME[i]=0;}
        this.setState(table);
    }

    dblClick = (e) => {
        // console.log(e)
        // GAME=[];
        // this.reset();
        window.location = "/";
    }

    render () {
        // e.preventDefault();
        // console.log(this.state)
        // const endGame=GAME.some(isNull);
        // console.log(endGame)
        return (
            <div className="field" style={{maxWidth: this.props.maxWidth}} id="gameField" onDoubleClick={this.dblClick}>
                {this.state.table.map(item => <Cell key={item} item={item} />)}
                <button onClick={this.dblClick} >REPLAY</button>
            </div>
        )
    }
}

export default Field