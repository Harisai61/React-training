import React, {Component} from 'react'

class Form extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username :'',
            comments : '',
            topic    :'react'
        }
    
     }
     handleUsernameChange = (event ) =>{
        this.setState ({
            username : event.target.value
        })
    }
    handleComments  = (event ) =>{
            this.setState ({
                comments : event.target.value
            })

    }
    handleTopic  = (event ) =>{
        this.setState ({
            topic : event.target.value
        })

}
 handelSubmit = event =>  { 
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
}

    render () {
        return (
            <form onSubmit = {this.handelSubmit}>
                <div>
                  <label>Username</label> 
                  <input type= "text" value ={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                <label>Remarks</label> 
                    <textarea value ={this.state.comments} onChange={this.handleComments}></textarea>
                </div>
                <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value ="angular">Angular</option>
                    <option value ="react">React</option>
                    <option value ="sql">Sql</option>
                </select>
                </div>
               <div> <button type="submit">Submit</button></div>
            </form>

        ) 
     }
}

export default Form