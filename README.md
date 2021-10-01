# Musical KeyBoard

---

Índice

    1. Description
    2. User Definition & User Stories (UX)
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes

---

## 1. Description

Application to perform music playing from the keyboard, built with JavaScript, HTML 5 & CSS3.

---

## 2. User Definition:

**User: Music Teacher**

## User Stories:

- The User want to play instruments from their computer keyboard.

- The user want to give to others a concert and have visual explanation of musical notes or instrument played

## 3. Acceptance Criteria

This applications should allow the user to play an instrument with the keyboard, have a good integration between the sounds and respect the space that the user play in between, if replay should restart the sound from starting. The UI of this app should be tematic to the instrument and be pleasant to see, have efect on the key pressed.

---

## 4. Technical Requeriments /

- Individual projects but with peer programming allowed
- Fork this repository
- Follow the folder structures dividing per languages: JS, CSS, HTML5
- Add an `Assets` folder to add img, and another folder of `music_insturment` .mp3 sounds.
- Follow up Semantic HTML rules, have title, footer, center content and visual alignment.

**CLUES:**

- `data-key` data attributes html
- [`keyBoardEvent` research](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)
- get the key code for each keyboard to press as `keydown` event
- `audio` html element

```

       <div data-key="65" class="key">
        <kbd>A</kbd> <span class="sound"> Goblet drum dum</span>
      </div>
```

- `document.querySelector()`
- `e.keyCode`
- `play()`
- `document.querySelectorAll()`
- `addEventListenner()`
- `window.addEventListener()`

```

//get the key values example with query selector
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//global window function example
window.addEventListener('keydown', getSound);

```

**Additional Resources**

- [Download free music sounds](http://www.sonidosmp3gratis.com/botonera.php?botonera=instrumentosmusicales1)
- [Get the keycode of any keyboard key](https://keycode.info/)

---

## 5. Hacker Edition

---

Add a login to give access oly to the Teacher.
Add a feature to play 2 instruments as music companion.

---

## 6. Expected Learning Outcomes

---

- [ ] QuerySelector
- [ ] Audio Tag
- [ ] Data Key attribute
- [ ] Key Code event
- [ ] Window event listener
- [ ] Play JS method

---

# ReadMe

---

> This Readme should be replaced with the project documentation following the SDLC procedures for Agile Software Development Lyfe Cycle.

---

Índice

    1. Definition
    2. Design
    3. Aceptance Criteria
    4. Testing
    5. Hacker edition
    6. Expected Learning Outcomes

---

## 1. Definition

Application to perform music playing from the keyboard, built with JavaScript, HTML 5 & CSS3.

- The User want to play instruments from their computer keyboard.

- The user want to give to others a concert and have visual explanation of musical notes or instrument played

La forma de solucionar o aproximarse al problema estara basada en el codigo que Vania, nos proporciono como ejemplo, y tambien el del tutorial con link: https://www.youtube.com/watch?v=vjco5yKZpU8

- Por hacer: flujo general y los componentes (arquitectura) Se va a utilizar Javascript como lenguaje principal

El backlog que se tiene que hacer es:

- Que se toquen las notas con las teclas
- Que se respete el tiempo de ejecucion de cada nota
- UI amigable y placentera de ver

Los retos a vencer son:

- Aprender los eventos en javascript e implementarlos
- Investigar un poco mas de addEventListener
- Implementar el metodo de javaScript querySelectorAll

## 2. User Definition & User Stories

- La UI va a estar basada en el video que se menciono anteriormente con unas modificaciones para darle una mayor facilidad al usuario de utilización

Al final, se realizo una UI parecida a la del video, pero mas descriptiva, para darle al usuario una interfaz mas amigable, que le permita explicar de mejor manera que esta sucediendo y que esta tocando.

## 3. Implementacion

El pseudocodigo utilizado finalmente quedo asi:

```

Crea un arreglo llamado keys con todas las teclas (los divs)
todos los elementos que tangan la clase key se guardan en el arreglo keys

//para hacer tocar al clickear
ejecutar la arrowfunction para cada elemento del arreglo keys (key es parametro del arrow function)
La funcion a ejecutar es agregar un eventListener a cada key  (elemento del arreglo keys)
Y le estamos diciendo que el evento se inicialize con click y cuando se le haga click mandar a llamar a la funcion PlayNote

//funcion playNote
se declara la funcion playNote que tienen como parametro "key" (el div que ha sido clickeado o apretado)
dataset es utilizado para obtener o modificar los valores de atributos personalizados, https://www.youtube.com/watch?v=Pt8RyyUWCtM
Regresa al principio el archivo de audio
En este caso utiliza el data-note propierty de los divs para utilizarlos como id para reproducir su sonido correspondiente https://www.w3schools.com/tags/av_prop_currenttime.asp
Agrega la clase "active" al div que fue clickeado
remueve la clase activa cuando acaba el evento

se utilizaron las teclas "z" a la "m" como si fueran las teclas blancas, por esta razon se creo un arreglo con las letras a utilizar, llamado WHITE_KEYS
y las teclas "s" a la "j" para que sean las letras negras, se creo un arreglo con las letras negras llamado BLACK_KEYS
se crea un arreglo con todas las teclas blancas(o todos los divs que tengan la clase "key" y "white")
se crea un arreglo con todas las teclas negras(o todos los divs que tengan la clase "key" y "black")
Note que los arreglos WHITE_KEYS y  BLACK_KEYS estan ordenados de la misma manera que los arreglos whitekKeys y blackKeys y se usaran conjuntamente para mandar a llamar al archivo de audio correspondiente con el div correspondiente
Se crea un addEventListener en todo el documento que escuchara cuando se presiona una tecla, especificamente alguna de las teclas que vamos a utilizar
se obtiene la letra que se presiono en el teclado utilizando event.key que regresa el caracter presionado https://es.javascript.info/keyboard-events
ya sabiendo que tecla se presiono se hace una busqueda en el arreglo WHITE_KEYS o BLACK_KEYS, segun sea el caso, para determinar el indice en el cual se encuentra la tecla presionada, esto nos va a ayudar despues para seleccionar el div, y en consecuencia la nota a tocar, que corresponde a la tecla presionada
el metodo indexOf regresa la posicion de la primera coincidencia, y si no encuentra nada, regresa -1.
de esta manera si blackKeyIndex o whiteKeyIndex son mayores a 1, manda a llamar a la funcion playNote con el div, correspondiente a la nota

```

Acerca de la funcionalidad, es buena pero podria ser mejor, como continuación del proyecto se tendria que agregar un paso de validacion para que solo el maestro pueda entrar a la página. Otro error que no se soluciono es hacer a la pagina responsive, aunque esta un poco justificado, ya que la aplicación solo se utilizara en monitores, debido a el funcionamiento intrinseco de la aplicacion, se necesita un teclado para tocar el intrumento virtual, aun asi, se tiene que mejorar en este aspecto.

## 4. Testing

Como ya se menciono anteriormente hay un error en la validación, ya que no se implemento este proceso.

La pagina se "rompe" o se desorganiza al abrirla o utilizarla en dispositivos mobiles.

## 5. Deployment

oct/1/2021
