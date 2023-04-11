import React, { useEffect, useState } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState('');
  
    useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results);
          console.log(data.results);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleAnswer = (questionIndex, answer) => {
      console.log(answer);
      setSelectedAnswer(prevState => {
        const newState = [...prevState];
        newState[questionIndex] = answer;
        return newState;
      });
    }
  
    const getAnswerStyle = (answer) => {
      if (answer === questions.find(q => q.correct_answer === selectedAnswer)?.correct_answer) {
        return { backgroundColor: 'green' };
      } else if (answer === selectedAnswer) {
        return { backgroundColor: 'red' };
      } else {
        return {};
      }
    }
  
    const isQuestionAnswered = (questionIndex) => {
      return selectedAnswer[questionIndex] !== undefined;
    };
  
    return (
      <div>
        <h4>General Knowledge</h4>
        <hr />
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <ul>
              {question.incorrect_answers.map((answer, index) => (
                <li key={index}>
                  <button style={getAnswerStyle(answer)} disabled={isQuestionAnswered(index)} onClick={() => handleAnswer(index, answer)}>{answer}</button>
                </li>
              ))}
              <li key="correct">
                <button style={getAnswerStyle(question.correct_answer)} disabled={isQuestionAnswered(index)} onClick={() => handleAnswer(index, question.correct_answer)}>{question.correct_answer}</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  export default Quiz;

