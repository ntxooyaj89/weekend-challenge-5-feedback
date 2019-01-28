import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {

    constructor(props){
        super(props);
        this.state ={
            understanding: ''
        }
    }

    changeInput = (event) =>{
        this.setState({
            understanding: event.target.value,
        })

    }

    handleClick = (event) =>{
        event.preventDefault();
        console.log('this is handleClick');
        const action = {
            type: 'UNDERSTANDING',
            payload: this.state.understanding
        };
        this.props.dispatch(action);
        this.props.history.push('/review-understanding')

    }

    render(){
        return(
            <div>
            <h1>How well did you understanding the content</h1>
            <form onSubmit={this.handleClick}>
                <input onChange={this.changeInput} placeholder="understand?"/>
                <button type="submit">Next</button>
                {/* {JSON.stringify(this.props.reduxStore.understandingReducer)} */}
            </form>
            </div>
            
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Understanding);