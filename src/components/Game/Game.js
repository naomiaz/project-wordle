import React from "react";

import GuessList from "../GuessList";
import GuessInput from "../GuessInput";
import Banner from "../Banner";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running') // or 'won' or 'lost'


  console.info('---', { gameStatus, guessList})

  // FEEDBACK!
  const handleSubmitGuess = (tentativeGuess) => {
    const checkedGuess = checkGuess(tentativeGuess, answer)
    const newGuessList = [...guessList, checkedGuess]
    setGuessList(newGuessList);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (newGuessList >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessList guessList={guessList} />
      {gameStatus != 'running' && (
        <Banner
          answer={answer}
          type={gameStatus == 'won' ? "happy" : "sad"}
          guessCount={guessList.length}
        />
      )}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        inputDisabled={gameStatus != 'running'}
      />
    </>
  );
}

export default Game;
