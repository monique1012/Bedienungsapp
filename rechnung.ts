const begruessungRechnung = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameRechnung = localStorage.getItem("Username");
const tischRechnung = document.getElementById('tisch') as HTMLHeadingElement;
const tischNummerRechnung = localStorage.getItem("AusgewählterTisch");
const buttonRechnung = document.getElementById('weiterRechnung') as HTMLButtonElement;
const buttonRechnen = document.getElementById('rechnen') as HTMLButtonElement;
const rechenzeichen = document.getElementById('rechenzeichen') as HTMLSelectElement;
const n1 = document.getElementById('n1') as HTMLInputElement;
const n2 = document.getElementById('n2') as HTMLInputElement;
const ausgabe = document.getElementById('ausgabe') as HTMLLabelElement;


if (usernameRechnung) {
    begruessungRechnung.textContent = `Hallo ${usernameRechnung}, hier die Rechnung für:`;
}
if (tischNummerRechnung) {
    tischRechnung.textContent = `${tischNummerRechnung}`;
}

buttonRechnen.addEventListener('click', klick);

function klick() {
    var erg = 0;
    if (rechenzeichen.value == "+") {
        erg = +n1.value + +n2.value;
    } else if (rechenzeichen.value == "-") {
        erg = +n1.value - +n2.value;
    }

    ausgabe.innerText = erg.toString();
}




buttonRechnung.addEventListener('click', () => {
    console.log("Button wurde geklickt!");
    window.location.href = "tisch.html";
});