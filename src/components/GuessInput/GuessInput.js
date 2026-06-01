import React from "react";

function GuessInput({ handleSubmitGuess , inputDisabled }) {
  const [guess, setGuess] = React.useState("");

  // FEEDBACK!
  const handleGuessInputSubmit = (guess) => {
    console.info(`Guess: ${guess}`);
    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleGuessInputSubmit(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.currentTarget.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}" // FEEDBACK!
        title="5 letter word" // FEEDBACK!
        disabled={inputDisabled}
      />
    </form>
  );
}

export default GuessInput;
