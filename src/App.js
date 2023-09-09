import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      <div className="grilla_principal">
        {/*TÍTULO*/}
        <h1>Piedra, Papel o Tijera</h1>
        <p>Puede jugar al mejor de 5 intentos. Si alcanza 3 victorias gana. </p>
        {/*NOMBRE USUARIO*/}
        <div className="nombre_usuario">
          <h3 id="texto_principio">Ingrese su nombre</h3>
          <input type="text" name="nombre" id="nombre" />
          <button id="comenzar">Comenzar</button>
        </div>
        {/*PIEDRA, PAPEL O TIJERA*/}
        <h2>Elija piedra, papel o tijera</h2>
        {/*IMÁGENES*/}
        <div id="imagenes" className="imagenes">
          <img id="piedra" className="img_ataque" src="assets\piedra.png" alt="" />
          <img id="papel" className="img_ataque" src="assets\papel.png" alt="" />
          <img id="tijera" className="img_ataque" src="assets\tijera.png" alt="" />
        </div>
        <div className="grilla_batalla">
          {/*BATALLA*/}
          <div id="batalla" className="batalla">
          <div id="usuario" className="campo_batalla" />
          <div className="campo_batalla">
            <p className="text_mensajes">VS</p>
          </div>
          <div id="computadora" className="campo_batalla" />
        </div>
        {/*CUADRO DE CONTADOR*/}
        <div id="contador" className="contador">
          <div id="contador_usuario" className="contadores">
            Contador Usuario
          </div>
          <div id="contador_computadora" className="contadores">
            Contador Computadora
          </div>
          <div id="contador_empate" className="contadores">
            Contador Empate
          </div>
        </div>
      </div>
      {/*RESULTADO*/}
      <div className="resultado">
        <p id="resultado" className="text_mensajes" />
      </div>
      {/*RESULTADO FINAL*/}
      <div className="resultado_final">
        <h1>
        <p id="resultado_final">RESULTADO FINAL: </p>
        </h1>
      </div>
      {/*REINICIAR*/}
      <div className="reiniciar">
        <button id="reiniciar">Reiniciar</button>
      </div>
    </div>
      </>
      </header>
    </div>
  );
}

export default App;
