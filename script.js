const p1Element = document.getElementById('p1');
const p2Element = document.getElementById('p2');
const inputElement = document.getElementById('input');
const titolo1Element = document.getElementById('titolo1');
const btn2Element = document.getElementById('btn2');
const boxElement = document.getElementById('box_tt');

function bnt2onClick() {
    p1Element.style.display = 'none';
    p2Element.style.display = 'none';
    inputElement.value = '';
    titolo1Element.textContent = "Grazie per esserti iscritto!";

    const newButton = document.createElement('button');
    newButton.id = 'btn3';
    newButton.textContent = 'Ritorna alla Home';
    boxElement.appendChild(newButton);

    newButton.addEventListener('click', bt3onClick);
}

function bt3onClick() {
    p1Element.style.display = 'block';
    p2Element.style.display = 'block';
    titolo1Element.textContent = "Make Landing Page fast and easily";

    const btn3Element = document.getElementById('btn3');

    
    boxElement.removeChild(btn3Element);
}


btn2Element.addEventListener('click', bnt2onClick);


