import React from 'react'

const PLAYER=+1
const COMPUTER=-1
var GAME=[]
const USER=['<','0','>']

class Cell extends React.Component {
    render () {
        return (
            <button className="flex-itm" id={this.props.item} onClick={this.props.clickMove}>
                {/* &nbsp; */}
                {/*this.props.item*/}
            </button>
        )
    }
}

class Field extends React.Component {

    state = {gameover:false}
    message="GAME OVER!"
    size = 0

    changeBanner = (winner) =>{
        console.log("WIN:",winner)
        // console.log(this.message,winner,this.GAME)
        if (winner===PLAYER) this.message="YOU WIN!"
        if (winner===COMPUTER) this.message="YOU LOOSE!"
        this.setState({gameover:true})
        // return true
    }

    checkWinner = async (user) => {
        let response = await fetch(`http://localhost:8080/check/${this.props.round}/${user}`)
        let result = await response.json();
        // console.log(result)
        // console.log("GAME:",GAME)
        if(!GAME.some(elem => (elem===0)))
         {
            // console.log("BINGO")
            this.changeBanner(0);
            this.requestMove(0,0);
            // e.target.parentNode.style.background="RED"
        }
        if(result.success) this.changeBanner(user);
    }

    requestMove = (user,cell) => {
        console.log("MOVE:",USER[user+1],cell)
        const {dimension} = this.props
        const col=cell%dimension
        const row=(cell-col)/dimension
        // console.log(cell,":",row,",",col)
        let result,response
        setTimeout(async function() {
            response = await fetch(`http://localhost:8080/move/${dimension}/${this.props.round}/${user}/${row}/${col}`)
            result = await response.json();
            // let response = await fetch(`http://localhost:8080/computer/${round}`)
            // let result = await response.json();
            // console.log(result.cell)
            // cell = result.cell;
        }, 3000);
        console.log(user,cell,result);
        // if (this.checkWinner(user)) this.changeBanner(user);
        return result.success;
    }
    
    clickMove = (e) => {
        const cell=e.target
        // console.log(cell)
        if (!this.requestMove(GAME[cell.id]=PLAYER,+cell.id)) return;
        cell.innerText="X"
        cell.disabled=true
        // console.log("X>",cell.id)
        this.checkWinner(PLAYER)
        this.computerMove(e,0)
        this.checkWinner(COMPUTER)
        console.log(GAME)
    }


    computerMove = (e,n) => {        
        // console.log(this.size,n)
        if(n>this.size) return;
        const cellId=Math.floor(Math.random()*this.size);
        // console.log("COMP:",cellId,GAME[cellId],GAME)
        console.log(cellId)
        if (GAME[cellId]) return this.computerMove(e,n+1)
        GAME[cellId]=COMPUTER
        this.requestMove(COMPUTER,cellId);
        const item=e.target.parentNode.childNodes[cellId]
        item.innerText="O"
        item.disabled=true
        // console.log("O<",item.id)
    }

    dblClick = (e) => {
        window.location = "/"+this.props.dimension;
    }

    // componentDidMount() {
    // }

    createTable = (dim) => {
        // console.log("TABLE:",this.props)
        // this.requestMove(0,0);
        this.size=dim*dim
        let table = []
        GAME=[]; for (var i=0;i<this.size;i++) GAME[i]=0;
        for (let item = 0; item < this.size; item++) 
            table.push(<Cell key={item} item={item} clickMove={this.clickMove}/>)
        return table
    }

    render () {
        return (
            <div className="field" style={{maxWidth: 50*this.props.dimension}} id="gameField" onDoubleClick={this.dblClick}>
                {this.createTable(this.props.dimension)}
                <button onClick={this.dblClick} >[{this.props.round}] RESTART</button>
                <div className="win" id="win" hidden={!this.state.gameover}>{this.message}</div>
            </div>
        )
    }
}

export default Field