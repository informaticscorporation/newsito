const p1Element = document.getElementById('p1');
const p2Element = document.getElementById('p2');
const inputElement = document.getElementById('input');
const titolo1Element = document.getElementById('titolo1');
const btn2Element = document.getElementById('btn2');


function onClick(){
    p1Element.style.display = 'none';
    p2Element.style.display = 'none';


    const nuovoTesto = inputElement.value;

   
    inputElement.value = '';

   
    titolo1Element.textContent = "Grazie per esserti iscritto!";
}



btn2Element.addEventListener('click', onClick )
