import React from 'react'

class MenuItem extends React.Component {

    render () {
        return (
            <button className="flex-itm" onClick={() => this.props.click(this.props.item)}>{this.props.item}</button>
        )
    }

}

class MyMenu extends React.Component {

    render () {
        return (
            <div className="flex">
                {this.props.menu.map(item => <MenuItem key={item} item={item} click={this.props.click}/>)}
            </div>
        )
    }
}

export default MyMenu