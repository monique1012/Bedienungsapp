const begruessungGericht = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameGericht = localStorage.getItem("Username");
const tischGericht = document.getElementById('tisch') as HTMLHeadingElement;
const tischNummerGericht = localStorage.getItem("AusgewählterTisch");
const buttonGericht = document.getElementById('weiterGericht') as HTMLButtonElement;

const inputBurger = document.getElementById('anzahlBurger') as HTMLInputElement;
const inputPommes = document.getElementById('anzahlPommes') as HTMLInputElement;
const inputRote = document.getElementById('anzahlRote') as HTMLInputElement;
const inputSteak = document.getElementById('anzahlSteak') as HTMLInputElement;

const inputCola = document.getElementById('anzahlCola') as HTMLInputElement;
const inputFanta = document.getElementById('anzahlFanta') as HTMLInputElement;
const inputBier = document.getElementById('anzahlBier') as HTMLInputElement;
const inputWein = document.getElementById('anzahlWein') as HTMLInputElement;

const speichereInLocalStorage = (input: HTMLInputElement, key: string) => {
    input.addEventListener('input', () => {
        localStorage.setItem(key, input.value);
    });
};

let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div")

console.log(tabs, tabContents);

if (usernameGericht) {
    begruessungGericht.textContent = `Hallo ${usernameGericht}, wähle die Gerichte!`;
};
if (tischNummerGericht) {
    tischGericht.textContent = `${tischNummerGericht}`;
};

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});

speichereInLocalStorage(inputBurger, "anzahlBurger");
speichereInLocalStorage(inputPommes, "anzahlPommes");
speichereInLocalStorage(inputRote, "anzahlRote");
speichereInLocalStorage(inputSteak, "anzahlSteak");

speichereInLocalStorage(inputCola, "anzahlCola");
speichereInLocalStorage(inputFanta, "anzahlFanta");
speichereInLocalStorage(inputBier, "anzahlBier");
speichereInLocalStorage(inputWein, "anzahlWein");

buttonGericht.addEventListener('click', () => {
    console.log("Button wurde geklickt!");
    window.location.href = "rechnung.html";
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        buttonGericht.click();
    }
});
