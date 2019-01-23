import React from 'react'

class Cell extends React.Component {

    render () {
        const disabled = false
        // console.log(this.props.item);
        // disabled = this.state.disabled[this.props.item]
        console.log(this.state)
        return (
            <button className="flex-itm" onClick={this.props.click} disabled={disabled}>
                {this.props.item}
            </button>
        )
    }

}

class Field extends React.Component {

    render () {
        return (
            <div className="flex" style={{maxWidth: this.props.maxWidth}}>
                {this.props.table.map(item => <Cell key={item} item={item} click={this.props.click}/>)}
            </div>
        )
    }
}

export default Field