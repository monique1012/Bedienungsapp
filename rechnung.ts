const begruessungRechnung = document.getElementById('begrüßung') as HTMLHeadingElement;
const usernameRechnung = localStorage.getItem("Username");
const tischRechnung = document.getElementById('tisch') as HTMLHeadingElement;
const tischNummerRechnung = localStorage.getItem("AusgewählterTisch");
const gesamtsumme = document.getElementById('gesamtsumme') as HTMLParagraphElement;

const geldKundeInput = document.getElementById('geldKunde') as HTMLInputElement;
const rueckgeldElement = document.querySelector('p#rückgeld') as HTMLParagraphElement;
const buttonRechnung= document.getElementById('weiterRechnung') as HTMLButtonElement;

if (usernameRechnung) {
    begruessungRechnung.textContent = `Hallo ${usernameRechnung}, hier die Rechnung für:`;
}
if (tischNummerRechnung) {
    tischRechnung.textContent = `${tischNummerRechnung}`;
}

interface Gericht {
    idAnzahl: string;
    storageKey: string;
    idSumme: string;
    einzelpreis: number;
}

const gerichte: Gericht[] = [
    { idAnzahl: "anzahlBurger", storageKey: "anzahlBurger", idSumme: "summeBurger", einzelpreis: 7.5 },
    { idAnzahl: "anzahlPommes", storageKey: "anzahlPommes", idSumme: "summePommes", einzelpreis: 2.5 },
    { idAnzahl: "anzahlRote", storageKey: "anzahlRote", idSumme: "summeRote", einzelpreis: 3.5 },
    { idAnzahl: "anzahlSteak", storageKey: "anzahlSteak", idSumme: "summeSteak", einzelpreis: 4.5 },
    { idAnzahl: "anzahlCola", storageKey: "anzahlCola", idSumme: "summeCola", einzelpreis: 2.5 },
    { idAnzahl: "anzahlFanta", storageKey: "anzahlFanta", idSumme: "summeFanta", einzelpreis: 3.5 },
    { idAnzahl: "anzahlBier", storageKey: "anzahlBier", idSumme: "summeBier", einzelpreis: 4.5 },
    { idAnzahl: "anzahlWein", storageKey: "anzahlWein", idSumme: "summeWein", einzelpreis: 5.5 }
];

gerichte.forEach(gericht => {
    const anzahlElement = document.getElementById(gericht.idAnzahl);
    const gespeicherteAnzahl = localStorage.getItem(gericht.storageKey);

    if (anzahlElement && gespeicherteAnzahl) {
        anzahlElement.textContent = gespeicherteAnzahl;
    }
});

gerichte.forEach(gericht => {
    const anzahlElement = document.getElementById(gericht.idAnzahl);
    const summeElement = document.getElementById(gericht.idSumme);
    const gespeicherteAnzahl = localStorage.getItem(gericht.storageKey);

    if (anzahlElement && gespeicherteAnzahl && summeElement) {
        const anzahl = parseInt(gespeicherteAnzahl);
        anzahlElement.textContent = anzahl.toString();

        const preisGesamt = anzahl * gericht.einzelpreis;
        summeElement.textContent = preisGesamt.toFixed(2) + " €"; 
    }
});

let gesamtSumme = 0;

gerichte.forEach(gericht => {
    const anzahlElement = document.getElementById(gericht.idAnzahl);
    const summeElement = document.getElementById(gericht.idSumme);
    const gespeicherteAnzahl = localStorage.getItem(gericht.storageKey);

    if (anzahlElement && gespeicherteAnzahl && summeElement) {
        const anzahl = parseInt(gespeicherteAnzahl);
        anzahlElement.textContent = anzahl.toString();

        const preisGesamt = anzahl * gericht.einzelpreis;
        summeElement.textContent = preisGesamt.toFixed(2) + " €";

        gesamtSumme += preisGesamt; 
    }
});

const gesamtsummeElement = document.getElementById('gesamtsumme');
if (gesamtsummeElement) {
    gesamtsummeElement.textContent = "Gesamtsumme: " + gesamtSumme.toFixed(2) + " €";
};

if (geldKundeInput && rueckgeldElement) {
    geldKundeInput.addEventListener('input', () => {
        const geldVomKunden = parseFloat(geldKundeInput.value);
        
        if (!isNaN(geldVomKunden)) {
            const rueckgeld = geldVomKunden - gesamtSumme;

            rueckgeldElement.textContent = "Rückgeld: " + rueckgeld.toFixed(2) + " €";
        } else {
            rueckgeldElement.textContent = "Rückgeld: 0.00 €";
        }
    });
}

buttonRechnung.addEventListener('click', () => {
    console.log("Button wurde geklickt!");
    window.location.href = "tisch.html";
    localStorage.clear();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !(document.activeElement instanceof HTMLInputElement)) {
        buttonRechnung.click();
    }
});