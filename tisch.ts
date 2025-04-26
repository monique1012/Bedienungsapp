const begruessung = document.getElementById('begrüßung') as HTMLHeadingElement;
const Username = localStorage.getItem("Username");

if (Username) {
    begruessung.textContent = `Hallo ${Username}, wähle deinen Tisch!`;
}