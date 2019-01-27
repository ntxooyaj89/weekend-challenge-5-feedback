import React, { Component } from 'react';
// import { connect } from 'react-redux'


class SucessPage extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }


    render() {
        
    return (
            <form onSubmit={this.handleClick}>
                <h1>Thank You!!!</h1>
                <input placeholder="Leave new feedback"/>
                <input type="submit" value="submit"/>
                
            </form>
        )
    }
}




export default SucessPage;