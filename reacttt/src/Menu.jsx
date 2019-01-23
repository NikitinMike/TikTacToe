import React from 'react'

class MenuItem extends React.Component {

    render () {
        
        // console.log(item);
        // const table = this.state.table
        // console.log(table);
        // table[+itm]=itm;
        // this.setState({table});
        const stat=false;
        return (
            <button className="flex-itm" onClick={this.props.click} disabled={stat}>
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