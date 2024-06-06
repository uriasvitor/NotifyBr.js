// test.js
import Notify from './index.js';

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const mensage = document.getElementById('mensage').value;
    const type = document.getElementById('type').value;
    const delay = parseInt(document.getElementById('delay').value);
    
    const instance = new Notify();
    instance.createNotify(mensage, type, delay, false);
});
