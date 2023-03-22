import React from 'react';
import './App.css';

var turn = "X"
const ways_win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function reset() {
  const buttons = document.querySelectorAll('.gamegrid');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "";
    buttons[i].disabled = false;
    buttons[i].style.color = "rgb(98, 136, 112)";
  }
  document.getElementById("winner").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("playerselection").style.display = "none";
  turn = "X";
}

function checkwinner(){
  const buttons = document.querySelectorAll('.gamegrid');
  if (buttons[0].innerText !== "" &&
      buttons[1].innerText !== "" &&
      buttons[2].innerText !== "" &&
      buttons[3].innerText !== "" &&
      buttons[4].innerText !== "" &&
      buttons[5].innerText !== "" &&
      buttons[6].innerText !== "" &&
      buttons[7].innerText !== "" &&
      buttons[8].innerText !== ""
    ) { 
      document.getElementById("winner").style.display = "block"
      document.getElementById("winner").innerText = "it's a tie!"
      const gameGridElements = document.querySelectorAll(".gamegrid");
        for (let i = 0; i < gameGridElements.length; i++) {
        gameGridElements[i].disabled = true;
        document.getElementById("playerselection").style.display ="block"
        document.getElementById("reset").style.display = "block"
        }
      }
  for (let i = 0; i < ways_win.length; i++) {
    const [a, b, c] = ways_win[i];
    if (buttons[a].innerText === buttons[b].innerText &&
        buttons[b].innerText === buttons[c].innerText &&
        buttons[a].innerText !== '') {
      buttons[a].style.color = "white";
      buttons[b].style.color = "white";
      buttons[c].style.color = "white";    
      document.getElementById("winner").style.display = "block"
      document.getElementById("winner").innerText = "'" + buttons[a].innerText + "' has won!"
      const gameGridElements = document.querySelectorAll(".gamegrid");
        for (let i = 0; i < gameGridElements.length; i++) {
        gameGridElements[i].disabled = true;
        document.getElementById("reset").style.display = "block"
        document.getElementById("playerselection").style.display ="block"
        }
      return true;
    }
  }
  return false;
}

function checkmode() {
  if (checkwinner()) {
    return;
  }
  if (document.getElementById("tictactoeplayers").innerText === "TicTacToe one player") {
    const buttons = document.querySelectorAll('.gamegrid');

    // check if there's a move that would let the computer win
    for (let i = 0; i < ways_win.length; i++) {
      const [a, b, c] = ways_win[i];
      if (buttons[a].innerText === "O" && buttons[b].innerText === "O" && buttons[c].innerText === "") {
        play(buttons[c]);
        return;
      } else if (buttons[a].innerText === "O" && buttons[b].innerText === "" && buttons[c].innerText === "O") {
        play(buttons[b]);
        return;
      } else if (buttons[a].innerText === "" && buttons[b].innerText === "O" && buttons[c].innerText === "O") {
        play(buttons[a]);
        return;
      }
    }
    // check if there's a move that would let the player win
    for (let i = 0; i < ways_win.length; i++) {
      const [a, b, c] = ways_win[i];
      if (buttons[a].innerText === "X" && buttons[b].innerText === "X" && buttons[c].innerText === "") {
        play(buttons[c]);
        return;
      } else if (buttons[a].innerText === "X" && buttons[b].innerText === "" && buttons[c].innerText === "X") {
        play(buttons[b]);
        return;
      } else if (buttons[a].innerText === "" && buttons[b].innerText === "X" && buttons[c].innerText === "X") {
        play(buttons[a]);
        return;
      }
    }

    // if there's no winning move, play the next empty field
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "") {
        play(buttons[i]);
        break;
      }
    }
  }
}




function play(field) {
  if (field.innerText!=="X" && field.innerText!=="O"){
  if (turn === "X" ) {
    field.innerText = "X"
    checkwinner()
    turn = "O"
  } else {
    field.innerText = "O"
    checkwinner()
    turn = "X"
  }}
  else {
    console.log("not valid!")
  }
}
function changeplayer(){
  if (document.getElementById("tictactoeplayers").innerText === "TicTacToe two players") {
    document.getElementById("tictactoeplayers").innerText = "TicTacToe one player"
  }
  else {
    document.getElementById("tictactoeplayers").innerText = "TicTacToe two players"
  }
  return
}

function player(wert){
  play(wert)
  document.getElementById("playerselection").style.display ="none"
  checkmode()
}

function App() {
  return (
    <div className="center">
      <div>
      <h1>HB-TicTacToe</h1><h2 id="tictactoeplayers">TicTacToe two players</h2>
      <h2 id="winner">winner is</h2>
      <button className="gamegrid" id='but0' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but1' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but2' onClick={(event) => player(event.target)}></button><br></br>
      <button className="gamegrid" id='but3' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but4' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but5' onClick={(event) => player(event.target)}></button><br></br>
      <button className="gamegrid" id='but6' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but7' onClick={(event) => player(event.target)}></button>
      <button className="gamegrid" id='but8' onClick={(event) => player(event.target)}></button>
    </div>
    <div className='reset-container'>

      <button id="playerselection" onClick={() => changeplayer()}>change mode</button>


      <button id="reset" onClick={() => reset()}>reset</button>

      
    </div>
    </div>
  )
}

export default App;
