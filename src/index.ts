// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';

const input = document.getElementById('eingabefeld') as HTMLInputElement;
const button = document.getElementById('login') as HTMLButtonElement;

button.addEventListener('click', () => {
    console.log("Button wurde geklickt!");

    if (input.value === '') {
        alert(`Bitte gib einen Namen ein!`);
        return;
    } else {
        console.log(input.value);
        localStorage.setItem("Username", input.value);
        window.location.href = "tisch.html";
    }
});