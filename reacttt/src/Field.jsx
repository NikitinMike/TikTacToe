import React from 'react'

var GAME=[];
const PLAYER=+1
const COMPUTER=-1
const isNull = (val) => val===0;

class Cell extends React.Component {

    state = { cellDisabled:false} 

    render () {
        return (
            <button className="flex-itm" id={this.props.item}
                onClick={this.props.clickMove} disabled={this.state.cellDisabled}>
                {/* &nbsp; */}
                {/* {this.props.item} */}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {SIZE:0, gameover:false, message:"GAME OVER!"}

    clickMove = async (e) => {

        const cell=e.target.id
        if (!this.requestMove(cell,PLAYER)) return;

        GAME[cell]=PLAYER;
        e.target.innerText="X"
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log("X>",cell)
        this.setState({cellDisabled});

        this.checkWinner(PLAYER)
        this.computerMove(e,0)
        this.checkWinner(COMPUTER)

        if(!GAME.some(isNull)) {
            this.requestMove(0,0);
            // this.props.onSuccess(0);
            // e.target.parentNode.style.background="RED"
        }

    }

    computerMove = async (e,n) => {        
        if(n>this.state.SIZE) return;

        var cell=Math.floor(Math.random()*this.state.SIZE);
        // setTimeout(async function() {
            // let response = await fetch(`http://localhost:8080/computer/${round}`)
            // let result = await response.json();
            // console.log(result.cell)
            // cell = result.cell;
        // }, 1000);
        console.log(cell)
        if (GAME[cell]!==0) return this.computerMove(e,n+1)
        this.requestMove(cell,COMPUTER);
        GAME[cell]=COMPUTER
        const item=e.target.parentNode.childNodes[cell]
        item.innerText="O"
        item.disabled=true
        console.log("O<",item.id)
    }

    checkWinner = async (USER) => {
        let response = await fetch(`http://localhost:8080/check/${this.props.round}/${USER}`)
        let result = await response.json();
        result.success && this.changeBanner(USER);
        console.log(result)
    }

    requestMove = async (cell,user) => {
        //Math.trunc(round/1000)
        // console.log(dimension,round)
        const dimension=this.props.dimension
        const round=this.props.round
        const col=cell%dimension
        const row=(cell-col)/dimension
        console.log(cell,":",row,",",col)
        let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
        let result = await response.json();
        // console.log(user,cell,result);
        return result.success;
    }
    
    componentDidMount(){
        // e.preventDefault();
        this.reset(this.props.dimension);
        // console.log("MOUNTED:",this.props)
    }

    changeBanner = (winner) =>{
        console.log(this.state.message,winner,GAME)
        if (winner===PLAYER) this.setState({message:"YOU WIN!"})
        if (winner===COMPUTER) this.setState({message:"YOU LOOSE!"})
        this.setState({gameover:true})
    }

    reset(dim){
        this.setState({SIZE:dim*dim})
        GAME=[]
        for (var i=0;i<this.state.SIZE;i++) GAME[i]=0;
    }

    dblClick = (e) => {
        window.location = "/"+this.state.dimension;
        // this.reset(this.state.dimension)
    }

    createTable = (dim) => {
        const size=dim*dim
        let table = []
        for (let item = 0; item < size; item++) table.push(<Cell key={item} item={item} clickMove={this.clickMove}/>)
        return table
    }

    render () {
        return (
            <div className="field" style={{maxWidth: 50*this.props.dimension}} id="gameField" onDoubleClick={this.dblClick}>
                {this.createTable(this.props.dimension)}
                <button onClick={this.dblClick} >[{this.props.round}] RESTART</button>
                <div className="win" id="win" hidden={!this.state.gameover}>{this.state.message}</div>
            </div>
        )
    }
}

export default Field