import React from 'react';

const End = ({ showResult, quiz, marks, startOver }) => {
    return (
        <section className="end-page">
            <div className="container">
                <div>
                    <h1>Well done!</h1>
                    <h3>Your score is {marks} out of {quiz.length}</h3>
                    <button onClick={startOver} className='start-over'>New Game</button>
                </div>
            </div>
        </section>
    );
};

export default End;