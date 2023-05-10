import React from 'react';
import css from "./App.module.css"
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
     static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    }
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
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
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }
    
    countPositiveFeedbackPercentage = () => {
        const PositivePercentage = Math.round((this.state.good * 100) / this.countTotalFeedback());
        return PositivePercentage;
    };
    
      
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.feedback}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
      <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </div>
    );
  }
};
