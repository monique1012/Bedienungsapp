// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';

const input = document.getElementById('eingabefeld') as HTMLInputElement;
const button = document.getElementById('login') as HTMLButtonElement;


function handleLogin() {
    console.log("Login wird ausgeführt");

    if (input.value === '') {
        alert(`Bitte gib einen Namen ein!`);
        return;
    } else {
        console.log(input.value);
        localStorage.setItem("Username", input.value);
        window.location.href = "tisch.html";
    }
}

button.addEventListener('click', handleLogin);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleLogin();
    }
});