import React from 'react'

import {dimension} from './App'
var size=dimension*dimension-1;
 
class Cell extends React.Component {

    state = { disabled:false } 

    moveClick = (e) => {
        // e.preventDefault();
        // const item=e.target.innerText
        var {disabled} = this.state
        disabled=!disabled;
        // disabled=true;
        // console.log(item,disabled)
        this.setState({disabled});
        // this.render()
        e.target.innerText="X"
        this.move(e,0)
    }

    move(e,n) {
        if(n>size) return;
        const cell=Math.floor(Math.random()*size);
        const item=e.target.parentNode.childNodes[cell]
        // console.log(cell,e.target.parentNode.childNodes[cell])
        if (item.innerText) this.move(e,n+1)
        else item.innerText="O"
    }

    render () {
        return (
            <button className="flex-itm" onClick={this.moveClick} disabled={this.state.disabled}>
                {/* &nbsp; */}
                {/* {this.props.item} */}
            </button>
        )
    }

}

class Field extends React.Component {

    state = {table : [] } 

    componentWillMount(){
        size=dimension*dimension-1;
        const {table} = this.state
        for(var i=0;i<=size;i++) table[i]=i;
        this.setState(table);
        // console.log(this.state.table);
    }

    render () {
        return (
            <div className="flex" style={{maxWidth: this.props.maxWidth}}>
                {this.state.table.map(item => <Cell key={item} item={item} />)}
            </div>
        )
    }
}

export default Field