import React, { Component } from 'react';
import { connect } from 'react-redux'



class FeedBackReiview extends Component{

    handleClick = () =>{
        this.props.history.push('/understand-content')
    }

    




    // this is push feedback into our database...
    // feedBackToSend = () =>{
    //     const newFeedBack =
    //     {
    //         feeling: this.props.reduxStore.feelingReducer,
    //         understanding: this.props.reduxStore.understandingReducer,
    //         support: this.props.reduxStore.supportReducer,
    //         comments: this.props.reduxStore.commentReducer,
    //     }
    //     axios({
    //         method: 'POST',
    //         url: '/feeling',
    //         data: newFeedBack
    //     }).then(response =>{
    //         console.log(response);
    //     }).catch(error =>{
    //         console.log('Error in Post', error);
    //     });
        
    // }

    // sendFeedback = () =>{
    //     this.feedBackToSend();
    //     this.props.history.push('/');
    // }

   

    render(){
        console.log(this.state);
       

        

       

       return(
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

export default connect(mapReduxStoreToProps)(FeedBackReiview);