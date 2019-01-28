import React from 'react'

const isNull = (val) => val===0;
var round;
var SIZE;
var GAME=[];
const PLAYER=+1
const COMPUTER=-1

class Cell extends React.Component {

    state = { cellDisabled:false} 

    request = async (round,cell,user) => {
        const dimension=Math.trunc(round/1000)
        const col=cell%dimension
        const row=(cell-col)/dimension
        // console.log(cell,":",row,",",col)
        let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
        let result = await response.json();
        // console.log(user,cell,result);
        return result.success;
    }

    clickMove = async (e) => {

        const cell=e.target.id
        if (!this.request(round,cell,PLAYER)) return;

        GAME[e.target.id]=PLAYER;
        this.computerMove(e,0)
        e.target.innerText="X"
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log("X>",e.target.id)
        this.setState({cellDisabled});

        let response = await fetch(`http://localhost:8080/check/${round}/${PLAYER}`)
        let result = await response.json();
        if(result.success) 
            this.props.onSuccess(PLAYER);

        if(!GAME.some(isNull)) {
            this.request(round,0,0);
            this.props.onSuccess(0);
            // e.target.parentNode.style.background="RED"
        }

    }

    computerMove = async (e,n) => {
        if(n>SIZE) return;

        var cell=Math.floor(Math.random()*SIZE);

        // setTimeout(async function() {
            // let response = await fetch(`http://localhost:8080/computer/${round}`)
            // let result = await response.json();
            // console.log(result.cell)
            // cell = result.cell;
        // }, 1000);

        if (GAME[cell]!==0) return this.computerMove(e,n+1)

        this.request(round,cell,COMPUTER); 
        GAME[cell]=COMPUTER;
        const item=e.target.parentNode.childNodes[cell]
        item.innerText="O"
        item.disabled=true
        console.log("O<",item.id)

        let response = await fetch(`http://localhost:8080/check/${round}/${COMPUTER}`)
        let result = await response.json();
        result.success && this.props.onSuccess(COMPUTER);
    }

    render () {
        return (
            <button className="flex-itm" id={this.props.item}
                onClick={this.clickMove} disabled={this.state.cellDisabled}>
                {/* &nbsp; */}
                {this.props.item}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {SIZE:0, gameover:false, message:"GAME OVER!", dimension:3}

    componentDidMount(){
        // e.preventDefault();
        this.reset(this.props.dimension);
    }

    changeToSuccess = (winner) =>{
        console.log(this.state.message,winner,GAME)
        if (winner===PLAYER) this.setState({message:"YOU WIN!"})
        if (winner===COMPUTER) this.setState({message:"YOU LOOSE!"})
        this.setState({gameover:true})
    }

    reset(dim){
        console.log("Reset:",dim,this.props.dimension)
        this.setState({dimension:dim})
        SIZE = dim*dim;
        this.setState({SIZE:SIZE})
        round = Math.floor(Math.random()*999)+dim*1000;
        GAME=[]
        for (var i=0;i<SIZE;i++) GAME[i]=0;
    }

    dblClick = (e) => {
        window.location = "/"+this.state.dimension;
        // this.reset(this.state.dimension)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        console.log(nextProps, nextState)
        return nextProps.dimension!==this.props.dimension;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate")
        this.reset(nextProps.dimension)
    }

    createTable = (dim) => {
        console.log(dim)
        let table = []
        const size=dim*dim
        this.setState({SIZE:size})
        for (let item = 0; item < size; item++) 
            table.push(<Cell onSuccess={this.changeToSuccess} key={item} item={item} />)
        return table
      }

    render () {
        return (
            <div className="field" style={{maxWidth: 50*this.props.dimension}} id="gameField" onDoubleClick={this.dblClick}>
                {this.createTable(this.props.dimension)}
                <button onClick={this.dblClick} >[{round}] RESTART</button>
                <div className="win" id="win" hidden={!this.state.gameover}>{this.state.message}</div>
            </div>
        )
    }
}

export default Field