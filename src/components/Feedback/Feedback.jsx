import css from './Feedback.module.css';

const Feedback = props => {
  return (
    <ul className={css.feedbackList}>
      {Object.entries(props.feedbacks).map(([key, value], index) => {
        return (
          <li key={index}>
            {key}: {value}
          </li>
        );
      })}
      <li>Total: {props.totalFeedback}</li>
      <li>Positive: {props.positiveFb}%</li>
    </ul>
  );
};

export default Feedback;
