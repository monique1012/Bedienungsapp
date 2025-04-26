const begruessungGericht = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameGericht = localStorage.getItem("Username");
const tischGericht = document.getElementById('tisch') as HTMLHeadingElement;
const tischNummerGericht = localStorage.getItem("AusgewählterTisch");
const buttonGericht = document.getElementById('weiterGericht') as HTMLButtonElement;
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div")

console.log(tabs, tabContents);

if (usernameGericht) {
    begruessungGericht.textContent = `Hallo ${usernameGericht}, wähle die Gerichte!`;
}
if (tischNummerGericht) {
    tischGericht.textContent = `${tischNummerGericht}`;
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () =>{
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


buttonGericht.addEventListener('click', () => {
    console.log("Button wurde geklickt!");
    window.location.href = "rechnung.html";
});