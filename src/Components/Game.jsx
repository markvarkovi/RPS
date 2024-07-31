import React, { useState } from 'react';

export default function Game() {
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [userWins, setUserWins] = useState(0);
  const [cpuWins, setCpuWins] = useState(0);

  const options = ["rock", "paper", "scissors"];

  const playGame = (userInput) => {
    const randomValue = Math.floor(Math.random() * 3);
    const CPU_PICK = options[randomValue];
    setUserChoice(userInput);
    setCpuChoice(CPU_PICK);

    if (userInput === CPU_PICK) {
      setResult("It's a tie! Try again.");
    } else if (
      (userInput === "rock" && CPU_PICK === "scissors") ||
      (userInput === "paper" && CPU_PICK === "rock") ||
      (userInput === "scissors" && CPU_PICK === "paper")
    ) {
      setResult("You win! 🎉");
      setUserWins(userWins + 1);
    } else {
      setResult("CPU wins! Try again.");
      setCpuWins(cpuWins + 1);
    }
  };

  const resetGame = () => {
    setUserChoice('');
    setCpuChoice('');
    setResult('');
    setUserWins(0);
    setCpuWins(0);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Rock Paper Scissors</h1>
      <div className="flex space-x-6 mb-6">
        {options.map((option) => (
          <button
            key={option}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => playGame(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <div className="text-center">
        {userChoice && (
          <p className="text-xl text-gray-700">
            You chose <span className="font-semibold">{userChoice}</span>
          </p>
        )}
        {cpuChoice && (
          <p className="text-xl text-gray-700">
            CPU chose <span className="font-semibold">{cpuChoice}</span>
          </p>
        )}
        {result && (
          <p className="text-2xl font-semibold mt-4 text-gray-800">{result}</p>
        )}
      </div>
      <div className="flex space-x-8 mt-6">
        <div className="text-lg text-gray-800">
          <p>User Wins: {userWins}</p>
          <p>CPU Wins: {cpuWins}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={resetGame}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
