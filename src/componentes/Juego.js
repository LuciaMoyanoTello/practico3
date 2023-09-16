import React, { useState } from 'react';

//IMPORTS
import bienvenido from './image/bienvenido.jpg';
import papel from './image/papel.png';
import piedra from './image/piedra.png';
import tijera from './image/tijera.png';
//IMPORT STYLE
import {
  styledBody,
  GameContainer,
  StyledButtonComenzar,
  StyledNombre,
  StyledButtonPiedra,
  StyledButtonPapel,
  StyledButtonTijera,
  StyledButtonReiniciar,
  StyledResultadoFinal,
} from './style';

//OBTENER NOMBRE JUGADOR
const GameStartForm = ({ onStartGame }) => {
  const [nombreJugador, setNombreJugador] = useState('');

  const handleNombreJugadorChange = (event) => {
    setNombreJugador(event.target.value);
  };

  const handleStartGame = () => {
    if (nombreJugador.trim() !== '') {
      onStartGame(nombreJugador);
    } else {
      alert('Ingresa un nombre antes de comenzar el juego.');
    }
  };

  //HTML
  return (
    <div>
    <StyledNombre>
      <h3 htmlFor="playerName">Nombre del jugador:</h3>
      <input
        type="text"
        id="playerName"
        value={nombreJugador}
        onChange={handleNombreJugadorChange}
      />
      <StyledButtonComenzar onClick={handleStartGame}>Comenzar Juego</StyledButtonComenzar>
    </StyledNombre>
      <h3>Antes de jugar debes saber:</h3>
      <p>Puede jugar al mejor de 5 intentos. Si alcanza 3 victorias gana. </p>
      <h3>Reglas: </h3>
      <img src= {bienvenido} alt = "bienvenido"></img>
      <p>PIEDRA mata a TIJERA y muere por PAPEL</p>
      <p>PAPEL mata a PIEDRA y muere por TIJERA</p>
      <p>TIJERA mata a PAPEL y muere por PIEDRA</p>
      
      
    </div>
  );
};

//JUEGO
const Game = () => {
  //CONST
  const [nombreJugador, setNombreJugador] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState(null);
  const [empateScore, setempateScore] = useState(0);

  const options = ['piedra', 'papel', 'tijera'];

  //INICIO JUEGO
  const onStartGame = (name) => {
    setNombreJugador(name);
  };

  //RESULTADO
  const mostrarResultado = (mensaje) => {
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
      resultadoElement.innerText = mensaje;
    } else {
      console.error("Elemento con ID 'resultado' no encontrado.");
    }
  };  
  
  //PLAY ROUND
  const playRound = (playerChoice) => {
    //ELECCION COMPU
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
  
    // Lógica para determinar el ganador de la ronda
    if (
      (playerChoice === 'piedra' && computerChoice === 'tijera') ||
      (playerChoice === 'papel' && computerChoice === 'piedra') ||
      (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
      setPlayerScore(playerScore + 1);
      mostrarResultado(`Eligio: ${playerChoice} PC: ${computerChoice} ¡HAS GANADO ESTA RONDA!`);
    } else if (
      (computerChoice === 'piedra' && playerChoice === 'tijera') ||
      (computerChoice === 'papel' && playerChoice === 'piedra') ||
      (computerChoice === 'tijera' && playerChoice === 'papel')
    ) {
      setComputerScore(computerScore + 1);
      mostrarResultado(`Eligio: ${playerChoice} PC: ${computerChoice} ¡LA COMPUTADORA GANÓ ESTA RONDA!`);
    } else {
      mostrarResultado(`Eligio: ${playerChoice} PC: ${computerChoice} ¡EMPATE!`);
      setempateScore(empateScore + 1);
    }
  
    // Verificar si se ha alcanzado el límite de rondas (5) o si un jugador alcanza 3 victorias
    if (round < 5 && playerScore < 3 && computerScore < 3) {
      setRound(round + 1);
    } else {
      determineWinner();
    }
  };

  //DETERMINAR GANADOR
  const determineWinner = () => {
    let winnerMessage = 'EMPATE';
    if (playerScore > computerScore) {
      winnerMessage = '¡HAS GANADO!';
    } else if (playerScore < computerScore) {
      winnerMessage = 'LA COMPUTADORA A GANADO';
    }
  
    setWinner(`${winnerMessage}`);
  };  

  //REINICIAR
  const resetGame = () => {
    setNombreJugador('');
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setWinner(null);
  };

  //HTML
  return (
    <styledBody>
    <GameContainer>
  {nombreJugador ? (
    <div>
      <h2>Bienvenido, {nombreJugador}!</h2>
      <p>Ronda: {round}</p>
      <p>Puntuación - Jugador: {playerScore}, Computadora: {computerScore}, Empate: {empateScore}</p>
      <StyledButtonPiedra onClick={() => playRound('piedra')}> <img src= {piedra} alt = 'piedra'></img>Piedra</StyledButtonPiedra>
      <StyledButtonPapel onClick={() => playRound('papel')}><img src= {papel} alt = "papel"></img>Papel</StyledButtonPapel>
      <StyledButtonTijera onClick={() => playRound('tijera')}><img src= {tijera} alt='tijera'></img>Tijera</StyledButtonTijera>
      <div id = "resultado"></div>
    </div>
  ) : (
    <GameStartForm onStartGame={onStartGame} />
  )}

  {winner && (
    <div>
      <StyledResultadoFinal>{winner}</StyledResultadoFinal>
      <StyledButtonReiniciar onClick={resetGame}>Reiniciar Juego</StyledButtonReiniciar>
    </div>
  )}
</GameContainer>
</styledBody>
  );
};

export default Game;
