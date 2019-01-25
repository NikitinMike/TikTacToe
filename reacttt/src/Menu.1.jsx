import React from 'react'

class MenuItem extends React.Component {

    render () {
        return (
            <button className="flex-itm1" onClick={() => this.props.click(this.props.item)}>{this.props.item}</button>
        )
    }

}

class MyMenu1 extends React.Component {

    render () {
        return (
            <div className="flex1">
                {this.props.menu.map(item => <MenuItem key={item} item={item} click={this.props.click}/>)}
            </div>
        )
    }
}

export default MyMenu1