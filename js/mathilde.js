function soeFeltIndput() { 
    let indputFelt = document.getElementById("indputFelt"); 
    let lukKnap = document.getElementById("lukKnap"); 
    let soegefeltButton = document.getElementById("soegefeltButton");
    let liste = document.getElementById("soegeResultater"); 
    let soegBoks = document.getElementById("soegBoks");


    if (indputFelt.style.display === "none") {
        indputFelt.style.display = "block";  
        lukKnap.style.display = "block";  
        soegBoks.style.display = "block";
        soegefeltButton.style.display = "none";
    } else {
        indputFelt.style.display = "none"; 
        lukKnap.style.display = "none";  
        soegefeltButton.style.display = "block";
        soegBoks.style.display = "none";
        indputFelt.value = ""; 
        liste.innerHTML = "";  
    }
}

let soegResultater = [ 
    {
        displayName: "Design din egen kurv",
        link: "designselv.html",
    },

    {
        displayName: "Sammensatte kurve",
        link: "sammensatte.html",
    },

    {
        displayName: "Erhverv",
        link: "erhverv.html",
    },
    {
        displayName: "Kontakt",
        link: "kontakt.html",
    },

    {
        displayName: "Om os",
        link: "omos.html",
    },
    {
        displayName: "Konfirmatnen",
        link: "konfirmanten.html",
    },
    {
        displayName: "Rød student",
        link: "roedstudent.html",
    },
    {
        displayName: "Blå student",
        link: "blaestudent.html",
    },
    {
        displayName: "Mors dag",
        link: "morsdag.html",
    },
    
    {
        displayName: "Fars dag",
        link: "farsdag.html",
    },

    {
        displayName: "Jubilæum",
        link: "jubilaeum.html",
    },
];



function filterLinks() { //Funktionen starter når man skriver i inputfeltet ( onkeyup="filterLinks()"i HTML)
    let input = document.getElementById("indputFelt").value.toLowerCase(); // laver en var af værdien fra indputtet som kommer i feltet samt laver det til små bugstaver
    let liste = document.getElementById("soegeResultater"); // laver en var ud af soegeResultater ul i html
    liste.innerHTML = ""; // Funktionen læser det hele forfra hver gang – fordi den sletter det der tidligere var – og så læser den det der står nu

    if (input === "") { // søger for der ikke bliver vist noget når der ikke er skrevet noget i enputdeltet return stopper funktionen
        liste.innerHTML = "";  
        return; 
    }

    let resultater = []; // laver en var af en kom liste som senere kommer flere elementer i

    for (let i = 0; i < soegResultater.length; i++) { // for loopet tjekker arrayen af soegResultater om der er match med det der står i indput feltet og soegResultater
        if (soegResultater[i].displayName.toLowerCase().includes(input)) { //tjekker om søgeordet findes didisplayName
            resultater.push(soegResultater[i]); //gemmer match i resultater 
        }
    }

    if (resultater.length === 0) { // hvis der ikke findes et nogen elementer i resultater listen skrives der en besked på siden
        liste.innerHTML = `<li class="no-result">
        Der blev desværre ikke fundet noget resultat. Kontrollér stavemåde eller brug et andet udtryk
        </li>`;
    } else {
        for (let i = 0; i < resultater.length; i++) { // for loopet tjekker resultater listen igennem som er lavet efter soegResultater match
            let li = document.createElement("li"); // laver det til et li element 
            let a = document.createElement("a"); // laver det til et a links så man kan trykke på linket
            a.href = resultater[i].link; // tilføjer det rette link til resulatet
            a.textContent = resultater[i].displayName; //tilføjer link teksten til sidne
            li.appendChild(a); //tiltøjer a til dom
            liste.appendChild(li); //tilføjer li til ul'en i dom'en
        }
    }
}

function soeFeltIndputDesktop() {
    let indputFeltDesktop = document.getElementById("indputFeltDesktop"); 
    let lukKnapDesktop = document.getElementById("lukKnapDesktop"); 
    let soegefeltButtonDesktop = document.getElementById("soegefeltButtonDesktop");
    let listeDesktop = document.getElementById("soegeResultaterDesktop"); 
    let soegBoksDesktop = document.getElementById("soegBoksDesktop");

    if (indputFeltDesktop.style.display === "none") {
        indputFeltDesktop.style.display = "block";  
        lukKnapDesktop.style.display = "block";  
        soegBoksDesktop.style.display = "block";
        soegefeltButtonDesktop.style.display = "none";
    } else {
        indputFeltDesktop.style.display = "none"; 
        lukKnapDesktop.style.display = "none";  
        soegefeltButtonDesktop.style.display = "block";
        soegBoksDesktop.style.display = "none";
        indputFeltDesktop.value = ""; 
        listeDesktop.innerHTML = "";  
    }
}

function filterLinksDesktop() {
    let inputDesktop = document.getElementById("indputFeltDesktop").value.toLowerCase();
    let listeDesktop = document.getElementById("soegeResultaterDesktop");
    listeDesktop.innerHTML = "";

    if (inputDesktop === "") {
        listeDesktop.innerHTML = "";
        return;
    }

    let resultaterDesktop = [];

    for (let i = 0; i < soegResultater.length; i++) {
        if (soegResultater[i].displayName.toLowerCase().includes(inputDesktop)) {
            resultaterDesktop.push(soegResultater[i]);
        }
    }

    if (resultaterDesktop.length === 0) {
        listeDesktop.innerHTML = `<li class="no-result">
        Der blev desværre ikke fundet noget resultat. Kontrollér stavemåde eller brug et andet udtryk
        </li>`;
    } else {
        for (let i = 0; i < resultaterDesktop.length; i++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = resultaterDesktop[i].link;
            a.textContent = resultaterDesktop[i].displayName;
            li.appendChild(a);
            listeDesktop.appendChild(li);
        }
    }
}

