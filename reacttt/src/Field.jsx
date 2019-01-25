import React from 'react'

import {dimension} from './App'
var SIZE=dimension*dimension;
const GAME=[];

const isNull = (val) => val===0;
// const round = (size) => Math.floor(Math.random()*size);
var round = SIZE;

class Cell extends React.Component {

    state = { cellDisabled:false } 

    request = async (id,user) => {
        const col=id%dimension
        const row=(id-col)/dimension
        console.log(id,":",row,",",col)
        // read our JSON
        let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
        let data = await response.json();
        console.log(data)    
    }

    moveClick = (e) => {
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
        const id=e.target.id
        this.request(id,1);
        // console.log(GAME.some(isNull));
        // console.log(e.target.parentNode.style)
        if(!GAME.some(isNull)) {
            this.request(0,0);
            console.log("GAME OVER",GAME)
            e.target.parentNode.style.background="RED"
        }
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
        this.request(item.id,-1);
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
        round = Math.floor(Math.random()*999)+dimension*1000;
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