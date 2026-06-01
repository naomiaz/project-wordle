import React from 'react';

const Banner = ({ type, answer, guessCount }) => {
  return (
    <div className={`${type} banner`}>
      {type == "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{' '}{guessCount} {guessCount == 1 ? 'guess' : 'guesses'}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  )
};

export default Banner;
