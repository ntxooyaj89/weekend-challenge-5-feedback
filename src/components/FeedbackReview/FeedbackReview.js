import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


class FeedBackReiview extends Component{

    sendFeedback
    render(){
        return(
            <div>
                <h1>This is your FeedBack Reiview page</h1>
                <h3>{this.props.reduxStore.feelingReducer}</h3>
                <h3>{this.props.reduxStore.understandingReducer}</h3>
                <h3>{this.props.reduxStore.supportReducer}</h3>
                <h3>{this.props.reduxStore.commentReducer}</h3>
                {/* <h3></h3> */}
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(FeedBackReiview);