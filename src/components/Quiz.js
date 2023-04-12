import React, { useEffect, useState } from 'react';
import he from 'he';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        const shuffledQuestions = data.results.map((question) => ({
          ...question,
          answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));

        setQuestions(data.results.map((question) => ({
          ...question,
          question: he.decode(question.question),
          answers: shuffleArray([
            ...question.incorrect_answers.map((answer) => he.decode(answer)),
            he.decode(question.correct_answer),
          ]),
        })));

      })
      .catch(error => console.log(error));
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.answers.map((answer, index) => (
            <div key={index}>
              <button onClick={() => handleAnswerSelect(answer)}>{answer}</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
