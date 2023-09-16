import styled from 'styled-components';
import fondoPantalla from './image/fondoPantalla2.jpeg'

//FONDO DE PANTALLA
export const styledBody = styled.body`
    /*Imágen fondo de pantalla*/
    background-image: 
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${fondoPantalla});
    background-size: cover;
    min-height: 500px;
    height: 100vh;
    color: #fff;

    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//CONTENIDO DEL JEUGO
export const GameContainer = styled.div`
    display: grid;
    background-color:rgba(53, 49, 59, 0.87);
    align-items: center;
    text-align: center;
    border: 2px solid black;
`;

//BOTÓN COMENZAR
export const StyledButtonComenzar = styled.button`
    text-align: center;
    background-color: darkslateblue;
    color:blanchedalmond;
    text-transform: uppercase;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: darkblue;
  }
`;

//NOMBRE DEL USUARIO
export const StyledNombre = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//BOTONES PIEDRA, PAPEL O TIJERA
//piedra
export const StyledButtonPiedra = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  align-items: center;

  img{
    width: 150px;
    border-radius: 50%;
    margin: 20px;

    &:hover{
    border: 2px solid rgba(255, 0, 0, 0.548);
    cursor: pointer;
    margin: 18px;
    }
  }
`;
//papel
export const StyledButtonPapel = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  align-items: center;

  img{
    width: 150px;
    border-radius: 50%;
    margin: 20px;

    &:hover{
    border: 2px solid rgba(255, 0, 0, 0.548);
    cursor: pointer;
    margin: 18px;
    }
  }
`;
//tijera
export const StyledButtonTijera = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  align-items: center;

  img{
    width: 150px;
    border-radius: 50%;
    margin: 20px;

    &:hover{
    border: 2px solid rgba(255, 0, 0, 0.548);
    cursor: pointer;
    margin: 18px;
    }
  }
`;

//BOTÓN REINICIAR
export const StyledButtonReiniciar = styled.button`
    text-align: center;
    background-color: darkslateblue;
    color:blanchedalmond;
    text-transform: uppercase;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: darkblue;
  }
`;

//RESULTADO FINAL
export const StyledResultadoFinal = styled.h3`
    color: red;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-transform: uppercase;
`;