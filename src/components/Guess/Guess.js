import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((letter, index) => (
        <span
          key={index}
          className={`cell ${guess ? guess[letter].status : ""}`}
        >
          {guess ? guess[letter].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
