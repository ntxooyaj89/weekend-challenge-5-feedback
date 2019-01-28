import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    changeInput = (event) => {
        this.setState({
            comments: event.target.value,
        })

    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('this is handleClick');
        const action = {
            type: 'COMMENTS',
            payload: this.state.comments
        };
        this.props.dispatch(action);
        this.props.history.push('/review-comments')

    }

    render() {
        return (
            <div>
                <h1>Leave a comments</h1>
                <form onSubmit={this.handleClick}>
                    <input onChange={this.changeInput} placeholder="add comments here" />
                    <button type="submit">Next</button>
                    {/* {JSON.stringify(this.props.reduxStore.commentReducer)} */}
                </form>
            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Comments);