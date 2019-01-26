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

    handleClick = () => {
        console.log('this is handleClick');
        const action = {
            type: 'COMMENTS',
            payload: this.state.comments
        };
        this.props.dispatch(action);
        this.props.history.push('/feedback-review')

    }

    render() {
        return (
            <div>
                <h1>Leave a comments</h1>
                <div>
                    <input onChange={this.changeInput} placeholder="add comments here" />
                    <button onClick={this.handleClick}>Next</button>
                    {JSON.stringify(this.props.reduxStore.commentReducer)}
                </div>
            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Comments);