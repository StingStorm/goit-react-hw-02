import css from './Options.module.css';

const Options = props => {
  return (
    <div className={css.feedbackOptions}>
      {Object.keys(props.feedbacks).map((feedback, index) => {
        return (
          <button key={index} onClick={() => props.onUpdate(feedback)}>
            {feedback}
          </button>
        );
      })}
      {props.totalFeedback > 0 && (
        <button onClick={props.onReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;
