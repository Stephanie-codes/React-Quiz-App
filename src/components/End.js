import React from 'react';

const End = ({ showResult, quiz, marks, startQuiz }) => {
    return (
        <section className="end-page">
            <div className="container">
                <div>
                    <h1>Well done!</h1>
                    <h3>Your score is {marks} out of {quiz.length}</h3>
                    <button onClick={startQuiz} className='start-quiz'>New Game</button>
                </div>
            </div>
        </section>
    );
};

export default End;