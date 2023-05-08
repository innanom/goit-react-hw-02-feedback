import React from 'react';
// import css from './Feedback.module.css';

class Feedback extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,

    }
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
        total: this.props.initialTotal,
    }

    handleGood = () => { 
        this.setState(prevState => ({
            good: prevState.good +1,
        }))
    };
      handleNeutral = () => { 
        this.setState(prevState => ({
            neutral: prevState.neutral +1,
        }))
    };
      handleBad = () => { 
        this.setState(prevState => ({
            bad: prevState.bad +1,
        }))
    };
    countTotalFeedback = () => {
        this.setState(( )=> ({
            total: this.state.good + this.state.neutral + this.state.bad
      
        }))
    };
    // countPositiveFeedbackPercentage();
    

    render() {
        return (       
            <div>
            < span > Please leave feedback </span >
            <div> 
                <button type="button" onClick={this.handleGood}>Good</button>
                <button type="button" onClick={this.handleNeutral}>Neutral</button>
                <button type="button" onClick={this.handleBad}>Bad</button>
            </div>  
            <div>
                    <p>Statistics</p>
                    <ul>
                        <li>Goog:{this.state.good}</li>
                        <li>Neutral:{this.state.neutral}</li>
                        <li>Bad:{this.state.bad}</li>
                        <li>Total:{this.total}</li>
                        <li>Positive feedback:%</li>
                    </ul>
            </div>
            </div>
            
        
        );
    }
}

export default Feedback;