import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedback_btn}> 
            {Object.keys(options).map(option => 
                <button
                    className={css.btn}
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
                    {option}
                </button>
        )}
        
    </div>  
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}