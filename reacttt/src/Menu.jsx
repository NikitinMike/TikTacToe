import React from 'react'

class MenuItem extends React.Component {

    render () {
        console.log(this.props.item)
        const disabled = false; // this.state.disabled;
        // [this.props.item];
        // this.state.disabled[this.props.item]
        return (
            <button className="flex-itm" onClick={this.props.click} disabled={disabled}>
                {this.props.item}
            </button>
        )
    }

}

class MyMenu extends React.Component {

    render () {
        return (
            <div className="flex" style={{maxWidth: this.props.maxWidth}}>
                {this.props.menu.map(item => <MenuItem key={item} item={item} click={this.props.click}/>)}
            </div>
        )
    }
}

export default MyMenu