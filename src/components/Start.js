import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='start-page'>
            <div className="container">
                <h1>React JS Quiz App</h1>
                <button onClick={startQuiz} className="start-button">Start Quiz</button>
            </div>
        </section>
    );
};

export default Start;