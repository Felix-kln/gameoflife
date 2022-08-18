import React from "react";

import Rules from "../assets/Rules.png";
import Youtube from "../assets/YT.png";

export const DialogExplanation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          color: "white",
        }}
      >
        <h3>Game of Life Explanation</h3>
        <p>
          The Game of Life is not your typical computer game. It is a cellular
          automaton, and was invented by Cambridge mathematician John Conway.
        </p>
        <p>
          This game became widely known when it was mentioned in an article
          published by Scientific American in 1970. It consists of a grid of
          cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game.
        </p>
        <img src={Rules} alt="" />
        <h3>More information</h3>
        <p>Video’s about the Game of Life</p>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="https://youtu.be/CgOcEZinQ2I">
            <img src={Youtube} alt="" />
          </a>
          <a href="https://youtu.be/CgOcEZinQ2I">
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
