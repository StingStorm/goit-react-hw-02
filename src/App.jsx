import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/AppHeader/AppHeader';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import FOptions from './components/FOptions/FOptions';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedState = localStorage.getItem('feedbackStats');

    if (savedState) {
      return JSON.parse(savedState);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedbackStats', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      ...feedbacks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(feedbacks).reduce(
    (acc, value) => acc + value,
    0
  );
  return (
    <>
      <Header />
      <main>
        <Description />
        <FOptions
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          onUpdate={updateFeedback}
          onReset={resetFeedbacks}
        />
        {totalFeedback > 0 ? (
          <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
        ) : (
          <p>No feedback yet</p>
        )}
      </main>
    </>
  );
}

export default App;
