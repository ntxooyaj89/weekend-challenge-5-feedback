import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {
            support: ''
        }
    }

    changeInput = (event) => {
        this.setState({
            support: event.target.value,
        })

    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('this is handleClick');
        const action = {
            type: 'SUPPORT',
            payload: this.state.support
        };
        this.props.dispatch(action);
        this.props.history.push('/review-support')

    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <h1>How well are you being Supported</h1>
                <div>
                    <input onChange={this.changeInput} placeholder="support?" />
                    <button type="submit">Next</button>
                    {/* {JSON.stringify(this.props.reduxStore.supportReducer)} */}
                </div>
            </form>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Support);