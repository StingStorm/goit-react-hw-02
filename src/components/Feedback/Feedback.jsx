import css from './Feedback.module.css';

const Feedback = props => {
  const positiveFb = Math.round(
    (props.feedbacks.good / props.totalFeedback) * 100
  );

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
      <li>Positive: {positiveFb}%</li>
    </ul>
  );
};

export default Feedback;
