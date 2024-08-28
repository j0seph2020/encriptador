// variables
const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputText = document.getElementById('output-text');

// Función para encriptar el texto
function encrypt(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'e':
        encryptedText += 'enter';
        break;
      case 'i':
        encryptedText += 'imes';
        break;
      case 'a':
        encryptedText += 'ai';
        break;
      case 'o':
        encryptedText += 'ober';
        break;
      case 'u':
        encryptedText += 'ufat';
        break;
      default:
        encryptedText += text[i];
    }
  }
  return encryptedText;
}

// Función para desencriptar el texto
function decrypt(text) {
  let decryptedText = text.replace(/enter/g, 'e');
  decryptedText = decryptedText.replace(/imes/g, 'i');
  decryptedText = decryptedText.replace(/ai/g, 'a');
  decryptedText = decryptedText.replace(/ober/g, 'o');
  decryptedText = decryptedText.replace(/ufat/g, 'u');
  return decryptedText;
}

encryptBtn.addEventListener('click', () => {
  const inputValue = inputText.value.toLowerCase();
  const encryptedText = encrypt(inputValue);
  outputText.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
  const inputValue = inputText.value.toLowerCase();
  const decryptedText = decrypt(inputValue);
  outputText.value = decryptedText;
});