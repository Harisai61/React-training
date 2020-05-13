import React, {Component} from 'react'

class ConditionalRender extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedin : true

        }

    }
    render () {

        //short circuit method

     // return  this.state.isLoggedin  && <div>Welcome Hari</div>

        //Ternary operator
        return(
            this.state.isLoggedin ? (
            <div>Welcome Hari</div> ) : (
            <div> Welcome User</div> )
        )

        //Element Variable
        /* let message 

         if(this.state.isLoggedin)
         {
            message= <div>Welcome Hari</div>
         }
         else{
             message=<div>Welcome user</div>
         }
        return <div>{message}</div>*/

         //If-Else method

       /* if(this.state.isLoggedin)
        {
           return  <div>Welcome Hari</div>
        }
        else{
            return <div>Welcome User</div>
        }*/
        /*return (
            <div>
               Hi Hari
            </div>
            )*/
        }
    }
    
    export default ConditionalRender;