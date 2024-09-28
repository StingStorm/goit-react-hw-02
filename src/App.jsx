import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/AppHeader/AppHeader';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

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

  const positiveFb = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Header />
      <main>
        <Description />
        <Options
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          onUpdate={updateFeedback}
          onReset={resetFeedbacks}
        />
        {totalFeedback ? (
          <Feedback
            feedbacks={feedbacks}
            totalFeedback={totalFeedback}
            positiveFb={positiveFb}
          />
        ) : (
          <Notification />
        )}
      </main>
    </>
  );
}

export default App;
