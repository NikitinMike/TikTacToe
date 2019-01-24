import React from 'react'

import {dimension} from './App'
var SIZE=dimension*dimension;
const STATE = {table:[]}

class Cell extends React.Component {

    state = { disabled:false } 

    moveClick = (e) => {
        // console.log(e.target.innerText)
        // if (e.target.innerText) return;
        // const item=e.target.innerText
        var {disabled} = this.state
        disabled=!disabled;
        // disabled=true;
        console.log(">",e.target.id)
        this.setState({disabled});
        // this.render()
        e.target.innerText="X"
        this.move(e,0)
        STATE[e.target.id]='x';
        console.log(STATE);
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
            STATE[item.id]='o';
        }
    }

    render () {
        return (
            <button className="flex-itm" onClick={this.moveClick} disabled={this.state.disabled} id={this.props.item}>
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