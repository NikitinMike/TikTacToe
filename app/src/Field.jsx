import React from 'react'

const PLAYER=+1
const COMPUTER=-1
const USER=['O','','Х']

class Cell extends React.Component {

    state = {user:"",disabled:false,id:0}

    onClickItem = (e) => {
        // this.props.clickMove(e.target.id);
        this.props.clickMove(this.state.id);
        this.setState({user: USER[this.props.game[this.props.item]+1]})
        this.setState({disabled:true});
    }

    componentDidMount() {
        this.setState({id:this.props.item});
    }
    
    render () {
        return (
            <button className="flex-itm" id={this.props.item} onClick={this.onClickItem} disabled={this.state.disabled}>
                {this.state.user}   
            </button>
        )
    }
}

class Field extends React.Component {

    state = {gameover:false,game:[],move:0}
    message="GAME OVER!"
    size = 0
    GAME=[]

    clickMove = (cell) => {
        // console.log(cell)
        if (this.requestMove(this.GAME[cell]=PLAYER,+cell)) 
            this.checkWinner(PLAYER);
        this.computerMove(0)
        // console.log(o)
        // console.log(this.GAME)
    }

    changeBanner = (winner) =>{
        console.log("WIN:",winner)
        if (winner===PLAYER) this.message="YOU WIN!"
        if (winner===COMPUTER) this.message="YOU LOOSE!"
        this.setState({gameover:true})
    }

    checkWinner = async (user) => {
        let response = await fetch(`http://localhost:8080/check/${this.props.round}/${user}`)
        let result = await response.json();
        if(result.success) this.changeBanner(user);
        if(!this.GAME.some(elem => (elem===0))){
            this.changeBanner(0);
            this.requestMove(0,0);
        }
    }

    requestMove = async (user,cell) => {
        // console.log(user,":[",cell,"]:",this.GAME[cell])
        // if(this.GAME[cell]!==0)return false;
        // console.log("MOVE:",USER[user+1],'=>',cell)
        const {dimension,round} = this.props
        const col=cell%dimension
        const row=(cell-col)/dimension
        // setTimeout(async function() {
            let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
            let result = await response.json();
            return result.success;
        // }, 1000);
    }
    
    getMove = async (round) => {
        // setTimeout(async function() {
            let response = await fetch(`http://localhost:8080/computer/${round}`)
            let result = await response.json();
            return result.cell;
        // }, 1000);
    }

    computerMove = async (n) => {
        if(n>this.size) return;
        const {round} = this.props
        // const cellId=Math.floor(Math.random()*this.size);
        const cellId = await this.getMove(round);
        console.log("O>",cellId)
        if (this.GAME[cellId]) return this.computerMove(n+1)
        this.GAME[cellId]=COMPUTER
        if(this.requestMove(COMPUTER,cellId))
            this.checkWinner(COMPUTER);
        console.log(this.GAME)
        }

    dblClick = (e) => {
        window.location = "/"+this.props.dimension;
    }

    createTable = (dim) => {
        this.size=dim*dim
        let board = []
        this.GAME=[]; for (var i=0;i<this.size;i++) this.GAME[i]=0;
        // this.setState({game:this.GAME})
        for (let item = 0; item < this.size; item++) 
            board.push(<Cell key={item} item={item} clickMove={this.clickMove} computerMove={this.computerMove} game={this.GAME}/>)
        return board;
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