const begruessung = document.getElementById('begrüßung') as HTMLHeadingElement;
const Username = localStorage.getItem("Username");
const selectElement = document.getElementById('auswahl') as HTMLSelectElement;
const button = document.getElementById('weiter') as HTMLButtonElement;

if (Username) {
    begruessung.textContent = `Hallo ${Username}, wähle deinen Tisch!`;
}

selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    console.log(selectedValue); 
    localStorage.setItem('AusgewählterTisch', selectedValue);
});

button.addEventListener('click', () => {
    console.log("Button wurde geklickt!");

    if (selectElement.value === '') {
        alert(`Bitte wähle einen Tisch!`);
        return;
    } else {
        console.log(selectElement.value);
        window.location.href = "gerichte.html";
    }
});