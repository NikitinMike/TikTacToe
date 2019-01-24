import React from 'react'

import {dimension} from './App'
var SIZE=dimension*dimension;
const GAME=[];

function isPositive(number) {
    return number>0;
  }

class Cell extends React.Component {

    state = { cellDisabled:false } 

    // isEmpty(val) {return val.isEmpty;}

    moveClick = (e) => {
        // console.log(e.target.innerText)
        // if (e.target.innerText) return;
        // const item=e.target.innerText
        var {cellDisabled} = this.state
        // cellDisabled=!cellDisabled;
        cellDisabled=true;
        console.log(">",e.target.id)
        this.setState({cellDisabled});
        // this.render()
        e.target.innerText="X"
        this.move(e,0)
        GAME[e.target.id]='x';
        console.log(GAME)
        // .some(isPositive));
        // if(GAME.length===SIZE) console.log("GAME OVER")
    }

    move(e,n) {
        if(n>SIZE) return;
        const cell=Math.floor(Math.random()*SIZE);
        const item=e.target.parentNode.childNodes[cell]
        // console.log(cell,e.target.parentNode.childNodes[cell])
        if (item.innerText) this.move(e,n+1)
        else {
            item.innerText="O"
            console.log("<",item.id)
            GAME[item.id]='o';
        }
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

    componentWillMount(){
        // e.preventDefault();
        SIZE=dimension*dimension;
        const {table} = this.state
        for(var i=0;i<SIZE;i++) table[i]=i;
        this.setState(table);
        // console.log(this.state.table);
    }

    render () {
        // e.preventDefault();
        // console.log(this.state)
        return (
            <div className="flex" style={{maxWidth: this.props.maxWidth}}>
                {this.state.table.map(item => <Cell key={item} item={item} />)}
            </div>
        )
    }
}

export default Field