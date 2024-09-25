import React, { useState, useEffect } from "react";
import axios from "axios";
import './HigherLowerGame.css';

const HigherLowerGame = () => {
  const [universities, setUniversities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/universities")
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the university data!", error);
      });
  }, []);

  const handleGuess = (guess) => {
    const currentUni = universities[currentIndex];
    const nextUni = universities[nextIndex];

    if (guess === "higher" && nextUni.rank < currentUni.rank) {
      setScore(score + 1);
    } else if (guess === "lower" && nextUni.rank > currentUni.rank) {
      setScore(score + 1);
    } else {
      setGameOver(true);
    }

    if (nextIndex < universities.length - 1) {
      setCurrentIndex(nextIndex);
      setNextIndex(nextIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <div className="game-over">
        <h2>Game Over! Your Score: {score}</h2>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  if (universities.length === 0) {
    return <div>Loading...</div>;
  }

  const currentUni = universities[currentIndex];
  const nextUni = universities[nextIndex];

  return (
    <div className="game-container">
      <div className="university-info">
        <h1>{currentUni.name}</h1>
        <p>Location: {currentUni.location}</p>
        <p>Rank: {currentUni.rank}</p>
      </div>
      <div className="game-options">
        <button className="btn" onClick={() => handleGuess("higher")}>Higher</button>
        <button className="btn" onClick={() => handleGuess("lower")}>Lower</button>
      </div>
    </div>
  );
};

export default HigherLowerGame;
