function shiftLetter(letter, shift) {
  const base = letter === letter.toLowerCase() ? 'a' : 'A';
  const alphabetSize = 26;
  const charCode = letter.charCodeAt(0) - base.charCodeAt(0);
  const shiftedCharCode = (charCode + shift) % alphabetSize;
  return String.fromCharCode(base.charCodeAt(0) + shiftedCharCode);
}

function encrypt() {
  const text = document.getElementById('text').value;
  const shift = parseInt(document.getElementById('shift').value, 10);

  let result = '';
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (letter.match(/[a-zA-Z]/)) {
      result += shiftLetter(letter, shift);
    } else {
      result += letter;
    }
  }

  document.getElementById('result').value = result;
}

function decrypt() {
  const text = document.getElementById('text').value;
  const shift = parseInt(document.getElementById('shift').value, 10);

  let result = '';
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (letter.match(/[a-zA-Z]/)) {
      result += shiftLetter(letter, -shift);
    } else {
      result += letter;
    }
  }

  document.getElementById('result').value = result;
}
