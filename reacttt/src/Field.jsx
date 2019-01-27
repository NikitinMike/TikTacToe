import React from 'react'

import {dimension} from './App'
var SIZE=dimension*dimension;
const GAME=[];

const isNull = (val) => val===0;
// const round = (size) => Math.floor(Math.random()*size);
var round = SIZE;
// var success = false;

class Cell extends React.Component {

    state = { cellDisabled:false} 

    request = async (round,cell,user) => {
        const dimension=Math.trunc(round/1000)
        const col=cell%dimension
        const row=(cell-col)/dimension
        console.log(dimension,cell,":",row,",",col)

        // var result;
        // setTimeout(async function() {
            // DelayNode()
            let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
            let result = await response.json();
        // }.bind(this), 3000);

        console.log(user,cell,result);
        return result.success;
    }

    clickMove = (e) => {
        // console.log(e.target.innerText)
        // if (e.target.innerText) return;
        // const item=e.target.innerText

        const cell=e.target.id
        if (!this.request(round,cell,1)) return;

        GAME[e.target.id]=+1;
        this.move(e,0)
        e.target.innerText="X"
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log("X>",e.target.id)
        this.setState({cellDisabled});

        setTimeout(async function() {
            // DelayNode()
            let response = await fetch(`http://localhost:8080/check/${round}`)
            let result = await response.json();
            if(result.success===1) {
                console.log("WIN!")
                this.props.onSuccess();
            }
            this.setState({success: true})
        }.bind(this), 1000);

        // console.log(GAME.some(isNull));
        // console.log(e.target.parentNode.style)
        if(!GAME.some(isNull)) {
            this.request(round,0,0);
            console.log("GAME OVER",GAME)
            e.target.parentNode.style.background="RED"
        }

    }

    move(e,n) {
        if(n>SIZE) return;

        var cell=Math.floor(Math.random()*SIZE);
/*
        setTimeout(async function() {
            let response = await fetch(`http://localhost:8080/mymove/${round}`)
            let result = await response.json();
            console.log(result.cell)
            cell = result.cell;
        }, 1000);
  */      
        if (GAME[cell]!==0) return this.move(e,n+1)
        // if (item.innerText) return this.move(e,n+1)

        this.request(round,cell,-1);
        GAME[cell]=-1;
        const item=e.target.parentNode.childNodes[cell]
        // console.log(cell,e.target.parentNode.childNodes[cell])
        item.innerText="O"
        item.disabled=true
        console.log("O<",item.id)
    }

    render () {
        return (
            <button className="flex-itm" onClick={this.clickMove} disabled={this.state.cellDisabled} id={this.props.item}>
                {/* &nbsp; */}
                {/* {this.props.item} */}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {table:[],round:0, success: false}

    componentDidMount(){
        // e.preventDefault();
        this.reset(true);
        // console.log(this.state.table);
    }

    changeToSuccess = () =>{
        console.log("YOU WIN!")
        this.setState({success: !this.state.success})
    }

    reset(){
        SIZE = dimension*dimension;
        // let {round} = this.state
        round = Math.floor(Math.random()*999)+dimension*1000;
        // this.setState({round});
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
                {this.state.table.map(item => <Cell onSuccess={this.changeToSuccess} key={item} item={item} />)}
                <button onClick={this.dblClick} >[{round}] RESTART</button>
                <div className="win" hidden={!this.state.success}>YOU WIN!</div>
            </div>
        )
    }
}

export default Field