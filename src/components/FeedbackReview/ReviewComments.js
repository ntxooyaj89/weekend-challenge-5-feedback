import React, { Component } from 'react';
import { connect } from 'react-redux'



class ReiviewComments extends Component {

    handleClick = () => {
        this.props.history.push('/final-review')
    }


    render() {
      

        return (
            <div>
                <h1>Review Your Feedback</h1>
                <form onSubmit={this.handleClick}>
                    <h3>{this.props.reduxStore.feelingReducer}</h3>
                    <h3>{this.props.reduxStore.understandingReducer}</h3>
                    <h3>{this.props.reduxStore.supportReducer}</h3>
                    <h3>{this.props.reduxStore.commentReducer}</h3>
                    <button type="submit">Next</button>
                </form>

            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(ReiviewComments);