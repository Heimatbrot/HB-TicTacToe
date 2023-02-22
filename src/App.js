import React from 'react';
import './App.css';

var turn = "X"
const ways_win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


//function reset() {
//  window.location.reload()
//}

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
        }
      return true;
    }
  }
  return false;
}

function checkmode(){
  if (document.getElementById("tictactoeplayers").innerText === "TicTacToe one player") {
    return
  }
  else {
    return
  }
}

function play(field) {
  if (field.innerText!=="X" && field.innerText!=="O"){
  if (turn === "X" ) {
    field.innerText = "X"
    checkwinner()
    turn = "O"
    checkmode()
  } else {
    field.innerText = "O"
    checkwinner()
    turn = "X"
    checkmode()
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

function App() {
  return (
    <div className="center">
      <div>
      <h1>HB React</h1><h2 id="tictactoeplayers">TicTacToe two players</h2>
      <h2 id="winner">winner is</h2>
      <button className="gamegrid" id='but0' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but1' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but2' onClick={(event) => play(event.target)}></button><br></br>
      <button className="gamegrid" id='but3' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but4' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but5' onClick={(event) => play(event.target)}></button><br></br>
      <button className="gamegrid" id='but6' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but7' onClick={(event) => play(event.target)}></button>
      <button className="gamegrid" id='but8' onClick={(event) => play(event.target)}></button>
    </div>
    <div className='reset-container'>
      <button id="playerselection" onClick={() => changeplayer()}>change mode</button>
      <button id="reset" onClick={() => window.location.reload(false)}>reset</button>
    </div>
    </div>
  )
}

export default App;
