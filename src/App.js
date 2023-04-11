import React, { useEffect, useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import End from './components/End';

function App() {
  const [quiz, setQuiz] = useState([]);
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
      .then(res => res.json())
      .then(data => setQuiz(data))
  }, []);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }

  return (
    <>
      {showStart && (
        <Start
          startQuiz={startQuiz}
        />
      )}

      {showQuiz && (
        <Quiz
          quiz={quiz}
          setShowQuiz={setShowQuiz}
          setShowEnd={setShowEnd}
        />
      )}

      {showEnd && (
        <End />
      )}
    </>
  );
}

export default App;
