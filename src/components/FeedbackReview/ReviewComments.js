import React, { Component } from 'react';
import { connect } from 'react-redux'



class ReiviewComments extends Component {

    handleClick = () => {
        this.props.history.push('/final-review')
    }


    render() {
        console.log(this.state);






        return (
            <div>
                <h1>Review Your Feedback</h1>
                <div>
                    <h3>{this.props.reduxStore.feelingReducer}</h3>
                    <h3>{this.props.reduxStore.understandingReducer}</h3>
                    <h3>{this.props.reduxStore.supportReducer}</h3>
                    <h3>{this.props.reduxStore.commentReducer}</h3>
                    <button onClick={this.handleClick}>Next</button>
                </div>

            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(ReiviewComments);