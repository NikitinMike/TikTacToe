import React from 'react'

const PLAYER=+1
const COMPUTER=-1
const USER=['O','','Х']

class Cell extends React.Component {

    state = {user:"",disabled:false,id:0}

    // onClickItem = (e) => {
    onClickItem = () => {
        // this.props.clickMove(e.target.id);
        this.props.clickMove(this.state.id);
        this.move(USER[this.props.game[this.props.item]+1])
    }

    move = (user) => {
        // this.setState({user: USER[this.props.game[this.props.item]+1]})
        // this.setState({user: this.props.item})
        this.setState({user: user})
        this.setState({disabled:true});
    }

    componentDidMount() {
        this.setState({id:this.props.item});
        this.setState({user:this.props.item});
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

    state = {gameover:false,board:[]} // game:[],move:0,
    message="GAME OVER!"
    size = 0
    GAME=[]

    freeCells = () => this.GAME.map(function (val, index) { return (val)?NaN:index;})

    clickMove = (cellX) => {
        // const {round} = this.props
        // if (this.requestMove(this.GAME[cell]=PLAYER,+cell)) 
        console.log('X:',cellX)
        this.GAME[cellX]=PLAYER
        // this.checkWinner(PLAYER);
        var cells = this.freeCells().filter(v=>!isNaN(v));
        if(cells.length>0) {
            const cellO=cells[Math.floor(Math.random()*cells.length)];
            // this.computerMove(0)
            this.GAME[cellO]=COMPUTER
            console.log(this.state.board[cellO])
            cells = this.freeCells().filter(v=>!isNaN(v));
            console.log('O:',cellO)
            console.log(cells)
            console.log(this.GAME)    
        } else this.changeBanner(0)
    }

    changeBanner = (winner) =>{
        console.log("WIN:",winner)
        if (winner===PLAYER) this.message="YOU WIN!"
        if (winner===COMPUTER) this.message="YOU LOOSE!"
        this.setState({gameover:true})
    }

    // checkWinner = async (user) => {
    //     let response = await fetch(`http://localhost:8080/check/${this.props.round}/${user}`)
    //     let result = await response.json();
    //     if(result.success) this.changeBanner(user);
    //     if(!this.GAME.some(elem => (elem===0))){
    //         this.changeBanner(0);
    //         this.requestMove(0,0);
    //     }
    // }

    // requestMove = async (user,cell) => {
    //     // console.log(user,":[",cell,"]:",this.GAME[cell])
    //     // if(this.GAME[cell]!==0)return false;
    //     // console.log("MOVE:",USER[user+1],'=>',cell)
    //     const {dimension,round} = this.props
    //     const col=cell%dimension
    //     const row=(cell-col)/dimension
    //     // setTimeout(async function() {
    //         let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
    //         let result = await response.json();
    //         return result.success;
    //     // }, 1000);
    // }
    
    // getMove = async (round) => {
    //     // setTimeout(async function() {
    //         let response = await fetch(`http://localhost:8080/computer/${round}`)
    //         let result = await response.json();
    //         return result.cell;
    //     // }, 1000);
    // }

    restart = (e) => {
        window.location = "/"+this.props.dimension;
        // board[cellId]
    }

    initBoard = (dim) => {
        // console.log(dim)
        this.size=dim*dim
        let board = []
        this.GAME=[]; for (var i=0;i<this.size;i++) this.GAME[i]=0;
        // this.setState({game:this.GAME})
        for (let item = 0; item < this.size; item++) 
            board.push(<Cell key={item} item={item} clickMove={this.clickMove} computerMove={this.computerMove} game={this.GAME}/>)
        return board;
    }

    componentDidMount() {
        const dim = this.props.dimension
        this.setState({board:this.initBoard(dim)})
    }

    render () {
        const width=50*this.props.dimension
        return (
            <div className="field" style={{maxWidth:width}} id="board" onDoubleClick={this.restart}>
                {this.state.board}
                <button onClick={this.restart} >[{this.props.round}] RESTART</button>
                <div className="win" id="win" hidden={!this.state.gameover}>{this.message}</div>
            </div>
        )
    }
}

export default Field