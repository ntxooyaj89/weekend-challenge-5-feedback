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

    handleClick = () => {
        console.log('this is handleClick');
        const action = {
            type: 'SUPPORT',
            payload: this.state.support
        };
        this.props.dispatch(action);
        this.props.history.push('/comments')

    }

    render() {
        return (
            <div>
                <h1>How well are you being Supported</h1>
                <div>
                    <input onChange={this.changeInput} placeholder="support?" />
                    <button onClick={this.handleClick}>Next</button>
                    {JSON.stringify(this.props.reduxStore.supportReducer)}
                </div>
            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Support);