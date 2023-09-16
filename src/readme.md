# Piedra, Papel o tijera

_En esta página se juega piedra, papel o tijera al mejor de 5, o también se gana si tiene ya sea la computadora o el usuario 3 victorias._

## Comenzando 🚀

### Pre-requisitos 📋

_Se instalo React y la libreria styled-components_

### Instalación 🔧

_Para instalar React y subirlo a GitHub hay que seguir estos pasos_
```
1. crear una carpeta nueva (sin mayusculas) 
2. abrila desde el vsc
3. desde la terminal npx create-react app .
4. vamos a la cuenta de github y creamos un nuevo repositorio
5. copiamos esto (lo vamos a usar mas adelante):
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/PONE-TU-USUARIO/NOMBRE-REPOSITORIO.git
    git push -u origin main
6. si te creo una carpeta .git eliminala
7. git init
8. git status para asegurarte de haber creado la nueva carpeta .git
9. git add .
10. git status
11. git config user.email "pone tu email aca"
12. git config user.name "pone tu usuario de github aca"
13. pegar los 4 comandos que guardamos en el punto 5.
14. npm install gh-pages --save-dev
15. modificar el package.json antes del "name" en la primera linea de codigo pegar el link del la page
"homepage": "https://PONE-TU-USUARIO.github.io/NOMBRE-REPOSITORIO/",
16. En la parte del scripts pegar 2 comandos:
despues del "star" y antes del "build" copiar estos scripts:
"predeploy":"npm run build",
"deploy":"gh-pages -d build",
17. git add .
18. git commit -m "pagina deplay"
19. git push
20. npm run deploy
21. github --> setting --> pages: branch: gh-pages (save)
```

_Para instalar libreria_

```
npm install styled-components
```

## Ejecutando las pruebas ⚙️

_1ra prueba_
No aparecía para que el jugador ingrese un nombre
Solución: setNombreJugador(event.target.value) para que tome el nombre del jugador

_2da prueba_
Los resultados aparecían con alert
Solución: crear una const llamada winnerMessage y pasarle los mensajes dependiendo quien gane.
Al último poner setWinner(`${winnerMessage}`); para que mostrara el mensaje en pantalla

_3ra prueba_
Las imágenes de piedra, papel o tijera eran muy grandes y no podía solucionarlo con el styled.img
Solución: Dentro del boton de cada imágen agregar img

_4ta prueba_
La imágen desaparecía usando la mismo nombre que era StyledImagen para los tres botones
Solución: Crear con el mismo código 3 botones diferentes

_Muchas pruebas más para solucionar la vista del usuario_

## Construido con 🛠️

* [ChatGPT](https://chat.openai.com/)
* [React](https://react.dev/) 


---
⌨️ con ❤️ por [LuciaMoyanoTello](https://github.com/LuciaMoyanoTello) 😊