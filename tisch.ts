const begruessungTisch = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameTisch = localStorage.getItem("Username");
const selectElement = document.getElementById('auswahl') as HTMLSelectElement;
const buttonTisch = document.getElementById('weiter') as HTMLButtonElement;

if (usernameTisch) {
    begruessungTisch.textContent = `Hallo ${usernameTisch}, wähle deinen Tisch!`;
}

selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    console.log(selectedValue); 
    localStorage.setItem('AusgewählterTisch', selectedValue);
});

buttonTisch.addEventListener('click', () => {
    console.log("Button wurde geklickt!");

    if (selectElement.value === '') {
        alert(`Bitte wähle einen Tisch!`);
        return;
    } else {
        console.log(selectElement.value);
        window.location.href = "gerichte.html";
    }
});