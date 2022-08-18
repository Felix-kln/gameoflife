import React, { useCallback, useEffect, useRef, useState } from "react";
import { Navbar, Cell, Controls, DialogExplanation } from "./components";
import styled from "styled-components";
import { Button, Dialog } from "../../components";
import { neighborPositions } from "./helper";

const numOfRows: number = 70;
const numOfColumns: number = 70;

const PlayGroundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numOfColumns}, 25px);
  grid-auto-rows: 25px;
  max-height: 80%;
  overflow: hidden;
`;

const createPlayground = () => {
  const gridRows = [];
  for (let rows = 0; rows < numOfRows; rows++) {
    let row = [];
    for (let columns = 0; columns < numOfColumns; columns++) {
      row.push(0);
    }
    gridRows.push(row);
  }
  return gridRows;
};

const GameOfLife = () => {
  const [playground, setPlayground] = useState<number[][]>(() => {
    return createPlayground();
  });
  const [play, setPlay] = useState<boolean>(false);
  const [explanationDialog, setExplanationDialog] = useState<boolean>(false);

  const playgroundRef: any = useRef();

  useEffect(() => {
    bindDragEvents();
  }, []);

  const bindDragEvents = () => {
    let mouseDown = false;
    let startX: number;
    let startY: number;
    let scrollLeft: number;
    let scrollTop: number;

    if (playgroundRef.current) {
      const startDragging = (e: any) => {
        mouseDown = true;
        startX = e.pageX - playgroundRef.current.offsetLeft;
        startY = e.pageY - playgroundRef.current.offsetTop;
        scrollLeft = playgroundRef.current.scrollLeft;
        scrollTop = playgroundRef.current.scrollTop;
      };
      const stopDragging = () => {
        mouseDown = false;
      };

      playgroundRef.current.addEventListener("mousemove", (e: any) => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e.pageX - playgroundRef.current.offsetLeft;
        const scroll = x - startX;
        playgroundRef.current.scrollLeft = scrollLeft - scroll;
        const y = e.pageY - playgroundRef.current.offsetTop;
        const scrollY = y - startY;
        playgroundRef.current.scrollTop = scrollTop - scrollY;
      });

      playgroundRef.current.addEventListener("mousedown", startDragging);
      playgroundRef.current.addEventListener("mouseup", stopDragging);
      playgroundRef.current.addEventListener("mouseleave", stopDragging);
    }
  };

  const playGame = useCallback((playground: number[][]) => {
    // copy current state of playground
    let playgroundCopy = JSON.parse(JSON.stringify(playground));

    for (let i = 0; i < numOfRows; i++) {
      for (let j = 0; j < numOfColumns; j++) {
        let numOfNeighbors = 0;
        neighborPositions.forEach(([row, column]) => {
          // set the position for the neighbor
          const posNeighborRow = i + row;
          const posNeighborCol = j + column;

          //check if neighbor is out of playarea
          if (
            posNeighborRow >= 0 &&
            posNeighborRow < numOfRows &&
            posNeighborCol >= 0 &&
            posNeighborCol < numOfColumns
          ) {
            let statusOfNeighbor = playground[posNeighborRow][posNeighborCol];
            numOfNeighbors += statusOfNeighbor;
          }

          // Rule less than 2 neighbors = dead | more than 3 neighbors = dead
          if (numOfNeighbors < 2 || numOfNeighbors > 3) {
            playgroundCopy[i][j] = 0;
          }
          // Rule exact 3 neighbors = raise from dead to alive
          else if (playground[i][j] === 0 && numOfNeighbors === 3) {
            playgroundCopy[i][j] = 1;
          }
          // Rule 2 or 3 neighbors stay alive
          else if (
            (playground[i][j] === 1 && numOfNeighbors === 2) ||
            numOfNeighbors === 3
          ) {
            playgroundCopy[i][j] = 1;
          }
        });
      }
    }
    setPlayground(playgroundCopy);
  }, []);

  useEffect(() => {
    if (play) {
      const abc = setInterval(() => playGame(playground), 1000);
      return () => {
        clearInterval(abc);
      };
    }
  }, [play, playground, playGame]);

  const handleCellClick = (rindex: number, cindex: number) => {
    // Change status of Cell to dead or alive
    let newPlayground = JSON.parse(JSON.stringify(playground));
    // console.log(newPlayground);
    newPlayground[rindex][cindex] = playground[rindex][cindex] ? 0 : 1;
    setPlayground(newPlayground);
  };

  const handlePlayButton = () => {
    setPlay(!play);
    // playGame(playground);
  };
  const handleResetButton = () => {
    setPlayground(createPlayground());
  };

  return (
    <>
      <main
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <PlayGroundGrid ref={playgroundRef}>
          {playground?.map((rows, rindex) =>
            rows.map((column, cindex) => (
              <Cell
                key={`${rindex}${cindex}`}
                alive={playground[rindex][cindex] ? true : false}
                onClick={() => handleCellClick(rindex, cindex)}
              />
            ))
          )}
        </PlayGroundGrid>
        <Controls style={{ marginTop: "auto" }}>
          <Button onClick={() => setExplanationDialog(!explanationDialog)}>
            Explanation
          </Button>
          <Button>Lexicon</Button>
          <Button onClick={handlePlayButton}>{play ? "Stop" : "Start"}</Button>
          <Button onClick={() => playGame(playground)}>Next</Button>
          <Button onClick={handleResetButton}>Reset</Button>
        </Controls>
      </main>
      <Dialog setOpen={setExplanationDialog} open={explanationDialog}>
        <DialogExplanation />
      </Dialog>
    </>
  );
};

export default GameOfLife;
