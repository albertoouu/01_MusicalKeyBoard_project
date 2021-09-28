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

    1. Description
    2. User Definition & User Stories (UX)
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes

---

## 1. Descripción

Application to perform music playing from the keyboard, built with JavaScript, HTML 5 & CSS3.

## 2. User Definition & User Stories

- The User want to play instruments from their computer keyboard.

- The user want to give to others a concert and have visual explanation of musical notes or instrument played

La forma de solucionar o aproximarse al problema estara basada en el codigo que Vania, nos proporciono como ejemplo, y tambien el del tutorial con link: https://www.youtube.com/watch?v=vjco5yKZpU8

- Por hacer: flujo general y los componentes (arquitectura) Se va a utilizar Javascript como lenguaje principal

- La UI va a estar basada en el video que se menciono anteriormente con unas modificaciones para darle una mayor facilidad al usuario de utilización

## 3.
