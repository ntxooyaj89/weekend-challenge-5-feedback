import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


class FeedBackReview extends Component {

    

    //this is push feedback into our database...
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
        this.props.history.push('/success-page');
    }



    render() {
        
    return (
            <div>
                <h1>This is your final review of feedback</h1>
                <div>
                    <h3>{this.props.reduxStore.feelingReducer}</h3>
                    <h3>{this.props.reduxStore.understandingReducer}</h3>
                    <h3>{this.props.reduxStore.supportReducer}</h3>
                    <h3>{this.props.reduxStore.commentReducer}</h3>
                    <button onClick={this.sendFeedback}>Next</button>
                </div>

            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(FeedBackReview);