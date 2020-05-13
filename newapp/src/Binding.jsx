import React, {Component} from 'react'

class Binding extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
           message : 'Hi'
        }
        this.clickHandler =this.clickHandler.bind(this); 
        console.log(this)
    }
    clickHandler (){
        this.setState({

            message : 'Hello!'
        })
    }
    render () {
        return (
            <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
            {/*<button onClick= { () => this.clickHandler()}> Click</button>*/}
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Binding