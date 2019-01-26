import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


class FeedBackReiview extends Component{

    // this is push feedback into our database...

    feedBackToSend = () =>{
        const newFeedBack =
        {
            feeling: this.props.reduxStore.feelingReducer,
            understanding: this.props.reduxStore.understandingReducer,
            support: this.props.reduxStore.supportReducer,
            comments: this.props.reduxStore.commentReducer,
        }
        axios({
            method: 'POST',
            url: '/feeling',
            data: newFeedBack
        }).then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log('Error in Post', error);
        });
        
    }

    sendFeedback = () =>{
        this.feedBackToSend();
        this.props.history.push('/');
    }


    render(){
        return(
            <div>
                <h1>This is your FeedBack Reiview page</h1>
                <h3>{this.props.reduxStore.feelingReducer}</h3>
                <h3>{this.props.reduxStore.understandingReducer}</h3>
                <h3>{this.props.reduxStore.supportReducer}</h3>
                <h3>{this.props.reduxStore.commentReducer}</h3>
                <button onClick={this.sendFeedback}>Submit</button>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(FeedBackReiview);