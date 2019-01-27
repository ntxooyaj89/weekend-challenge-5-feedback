import React, { Component } from 'react';
import { connect } from 'react-redux'



class Home extends Component {

    constructor(props){
        super(props);

        this.state = {

            feeling: '',
        }
    }


    feelingChange = (event) => {
        this.setState({
            feeling: event.target.value,
        })

    }

    

    handleClick = () =>{
        console.log('this is handleClick');
        const action = {type: 'FEELINGS',
                        payload: this.state.feeling};
        this.props.dispatch(action);                
        this.props.history.push('/review-feelings')

    }


    render(){
        return(
            <div>
                {/* <h1>Home</h1> */}
                <div>
                    <h1>How are you feeling today?</h1>
                    <input onChange={this.feelingChange} placeholder="feeling?"/>
                    <button onClick={this.handleClick}>Next</button>
                    {/* <h3>{this.props.reduxStore.feelingReducer}</h3> */}
                    {/* {JSON.stringify(this.props.reduxStore.feelingReducer)} */}
                                 
                    
                    
                </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps) (Home);