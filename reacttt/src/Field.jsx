import React from 'react'

const isNull = (val) => val===0;
var round;
var SIZE;
const GAME=[];
const PLAYER=+1
const COMPUTER=-1

class Cell extends React.Component {

    state = { cellDisabled:false} 

    request = async (round,cell,user) => {
        const dimension=Math.trunc(round/1000)
        const col=cell%dimension
        const row=(cell-col)/dimension
        // console.log(cell,":",row,",",col)

        // var result;
        // setTimeout(async function() {
            // DelayNode()
            let response = await fetch(`http://localhost:8080/move/${dimension}/${round}/${user}/${row}/${col}`)
            let result = await response.json();
        // }.bind(this), 3000);

        // console.log(user,cell,result);
        return result.success;
    }

    clickMove = async (e) => {

        const cell=e.target.id
        if (!this.request(round,cell,PLAYER)) return;

        GAME[e.target.id]=PLAYER;
        this.move(e,0)
        e.target.innerText="X"
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log("X>",e.target.id)
        this.setState({cellDisabled});

        // setTimeout(async function() {
            // DelayNode()
            let response = await fetch(`http://localhost:8080/check/${round}/${PLAYER}`)
            let result = await response.json();
            if(result.success) {
                // console.log("WIN!")
                // this.setState({success: true})
                this.props.onSuccess(PLAYER);
            }
        // }.bind(this), 1000);

        // console.log(GAME.some(isNull));
        // console.log(e.target.parentNode.style)
        if(!GAME.some(isNull)) {
            this.request(round,0,0);
            console.log("GAME OVER",GAME)
            this.props.onSuccess(false);
            // e.target.parentNode.style.background="RED"
        }

    }

    move = async (e,n) => {
        if(n>SIZE) return;

        var cell=Math.floor(Math.random()*SIZE);

        // setTimeout(async function() {
            // let response = await fetch(`http://localhost:8080/computer/${round}`)
            // let result = await response.json();
            // console.log(result.cell)
            // cell = result.cell;
        // }, 1000);

        if (GAME[cell]!==0) return this.move(e,n+1)
        // if (item.innerText) return this.move(e,n+1)

        this.request(round,cell,COMPUTER); 
        GAME[cell]=COMPUTER;
        const item=e.target.parentNode.childNodes[cell]
        // console.log(cell,e.target.parentNode.childNodes[cell])
        item.innerText="O"
        item.disabled=true
        console.log("O<",item.id)

        let response = await fetch(`http://localhost:8080/check/${round}/${COMPUTER}`)
        let result = await response.json();
        if(result.success) {
            this.props.onSuccess(COMPUTER);
        }

    }

    render () {
        return (
            <button className="flex-itm" id={this.props.item}
                onClick={this.clickMove} disabled={this.state.cellDisabled}>
                {/* &nbsp; */}
                {/* {this.props.item} */}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {table:[],round:0, SIZE:0, gameover:false, message:"GAME OVER!"}

    componentDidMount(){
        // e.preventDefault();
        this.reset(this.props.dimension);
        // console.log(this.state.table);
    }

    changeToSuccess = (winner) =>{
        if (winner===PLAYER) this.setState({message:"YOU WIN!"})
        if (winner===COMPUTER) this.setState({message:"YOU LOOSE!"})
        this.setState({gameover:true})
    }

    reset(dim){
        SIZE = dim*dim;
        this.setState({SIZE:SIZE})
        // let {round} = this.state
        round = Math.floor(Math.random()*999)+dim*1000;
        // this.setState({round});
        const {table} = this.state
        for(var i=0;i<SIZE;i++) {table[i]=i;GAME[i]=0;}
        this.setState(table);
    }

    dblClick = (e) => {
        window.location = "/";
    }

    render () {
        return (
            <div className="field" style={{maxWidth: this.props.maxWidth}} id="gameField" onDoubleClick={this.dblClick}>
                {this.state.table.map(item => <Cell onSuccess={this.changeToSuccess} key={item} item={item} />)}
                <button onClick={this.dblClick} >[{round}] RESTART</button>
                <div className="win" id="win" hidden={!this.state.gameover}>{this.state.message}</div>
            </div>
        )
    }
}

export default Field