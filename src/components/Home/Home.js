import React, { Component } from 'react';
import { connect } from 'react-redux'



class Home extends Component {

    constructor(){
        super()
             
        this.state ={
             input:'',
         
        }

        this.handleClick = () =>{
           console.log('this is Home');
        }
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                <div>
                    <h1>How are you feeling today?</h1>
                    <input onChange={this.inputChange} placeholder="feeling?"/>
                    <button onClick={this.handleClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default Home;