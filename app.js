const keys = document.querySelectorAll('.key') //Crea un arreglo llamado keys con todas las teclas (los divs) 
// todos los elementos que tangan la clase key se guardan en el arreglo keys

console.log(keys);

//................................................Tocar con clicks...................................................
keys.forEach((key) => { //Lo que hace forEach es ejecutar la arrowfunction para cada elemento del arreglo keys (key es parametro del arrow function)
  key.addEventListener('click', () => playNote(key))// La funcion a ejecutar es agregar un eventListener a cada key  (elemento del arreglo keys) 
})//Y le estamos diciendo que el evento se inicialize con click y cuando se le haga click mandar a llamar a la funcion PlayNote
//-------------------------------------------------Termina tocar con clics...........................................

//.................................................Funcion playNote..................................................
function playNote(key) {//se declara la funcion playNote que tienen como parametro "key" (el div que ha sido clickeado o apretado)
  const noteAudio = document.getElementById(key.dataset.note);//dataset es utilizado para obtener o modificar los valores de atributos personalizados, https://www.youtube.com/watch?v=Pt8RyyUWCtM
  noteAudio.currentTime=0;//Regresa al principio el archivo de audio 
  noteAudio.play();//En este caso utiliza el data-note propierty de los divs para utilizarlos como id para reproducir su sonido correspondiente https://www.w3schools.com/tags/av_prop_currenttime.asp
  key.classList.add('active');//Agrega la clase "active" al div que fue clickeado
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');//remueve la clase activa cuando acaba el evento
  })
}
//.......................................................Termina funcion playNote.......................................



const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];//se utilizaron las teclas "z" a la "m" como si fueran las teclas blancas, por esta razon se creo un arreglo con las letras a utilizar, llamado WHITE_KEYS
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];// y las teclas "s" a la "j" para que sean las letras negras, se creo un arreglo con las letras negras llamado BLACK_KEYS

const whiteKeys = document.querySelectorAll('.white.key')// se crea un arreglo con todas las teclas blancas(o todos los divs que tengan la clase "key" y "white")
console.log(whiteKeys);
const blackKeys = document.querySelectorAll('.black.key')// se crea un arreglo con todas las teclas negras(o todos los divs que tengan la clase "key" y "black")
console.log(blackKeys);
//Note que los arreglos WHITE_KEYS y  BLACK_KEYS estan ordenados de la misma manera que los arreglos whitekKeys y blackKeys y se usaran conjuntamente para mandar a llamar al archivo de audio correspondiente con el div correspondiente


document.addEventListener('keydown', e => {//Se crea un addEventListener en todo el documento que escuchara cuando se presiona una tecla, especificamente alguna de las teclas que vamos a utilizar
  if(e.repeat){
    return;
  }
  const key = e.key;//se obtiene la letra que se presiono en el teclado utilizando event.key que regresa el caracter presionado https://es.javascript.info/keyboard-events
  const whiteKeyIndex =WHITE_KEYS.indexOf(key);//ya sabiendo que tecla se presiono se hace una busqueda en el arreglo WHITE_KEYS o BLACK_KEYS, segun sea el caso, para determinar-
  const blackKeyIndex =BLACK_KEYS.indexOf(key);//el indice en el cual se encuentra la tecla presionada, esto nos va a ayudar despues para seleccionar el div, y en consecuencia la nota a tocar, que corresponde a la tecla presionada
  if(whiteKeyIndex > -1){//el metodo indexOf regresa la posicion de la primera coincidencia, y si no encuentra nada, regresa -1.
    playNote(whiteKeys[whiteKeyIndex])//de esta manera si blackKeyIndex o whiteKeyIndex son mayores a 1, manda a llamar a la funcion playNote con el div, correspondiente a la nota
  }
  if(blackKeyIndex > -1){
    playNote(blackKeys[blackKeyIndex])
  }
});