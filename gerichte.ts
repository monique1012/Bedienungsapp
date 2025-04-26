const begruessungGericht = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameGericht = localStorage.getItem("Username");
const tischGericht = document.getElementById('tisch') as HTMLHeadingElement;
const tischNummerGericht = localStorage.getItem("AusgewählterTisch");
const buttonGericht = document.getElementById('weiter') as HTMLButtonElement;

if (usernameGericht) {
    begruessungGericht.textContent = `Hallo ${usernameGericht}, wähle die Gerichte!`;
}
if (tischNummerGericht) {
    tischGericht.textContent = `${tischNummerGericht}`;
}

selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    console.log(selectedValue); 
    localStorage.setItem('AusgewählterTisch', selectedValue);
});

buttonGericht.addEventListener('click', () => {
    console.log("Button wurde geklickt!");

    if (selectElement.value === '') {
        alert(`Bitte wähle einen Tisch!`);
        return;
    } else {
        console.log(selectElement.value);
        window.location.href = "gerichte.html";
    }
});