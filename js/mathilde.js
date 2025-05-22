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



function filterLinks() { 
    let input = document.getElementById("indputFelt").value.toLowerCase(); 
    let liste = document.getElementById("soegeResultater"); 
    liste.innerHTML = ""; 

    if (input === "") { 
        liste.innerHTML = "";  
        return; 
    }

    let resultater = []; 

    for (let i = 0; i < soegResultater.length; i++) { 
        if (soegResultater[i].displayName.toLowerCase().includes(input)) { 
            resultater.push(soegResultater[i]); 
        }
    }

    if (resultater.length === 0) { 
        liste.innerHTML = `<li class="no-result">
        Der blev desværre ikke fundet noget resultat. Kontrollér stavemåde eller brug et andet udtryk
        </li>`;
    } else {
        for (let i = 0; i < resultater.length; i++) { 
            let li = document.createElement("li"); 
            let a = document.createElement("a"); 
            a.href = resultater[i].link; 
            a.textContent = resultater[i].displayName; 
            li.appendChild(a); 
            liste.appendChild(li);
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


//design selv menu

function designSelvMenu(clickedButton) {
    const targetId = clickedButton.getAttribute("data-target");
  
    const galleries = document.querySelectorAll(".designselv__gallery");
    galleries.forEach(gallery => {
      gallery.style.display = "none";
    });
  
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.style.display = "block";
    }

    const allButtons = document.querySelectorAll('[data-target]');
    allButtons.forEach(button => {
        button.classList.remove("active");
    });

    clickedButton.classList.add("active");
}

window.onload = () => {
    const defaultButton = document.querySelector('[data-target="chokolade"]');
    if (defaultButton) {
      designSelvMenu(defaultButton);
    }
};


// Design selv kurv
let totalPris = 0;

// 1. Produkter gemt i et array
const produkter = [
  { id: "chokolade", navn: "Fyldte chokoladerhjerter", pris: 111 },
  { id: "kanin", navn: "Grå kanin i Økologisk Bomuld", pris: 279 },
  { id: "kop", navn: "Håndlavet kermikkop blå", pris: 168 }
];

// 2. Find alle knapper der har data-id og tilknyt klik-funktion

document.querySelectorAll("button[data-id]").forEach(knap => {
  knap.addEventListener("click", () => {
    const id = knap.getAttribute("data-id");
    const produkt = produkter.find(p => p.id === id);

    if (!produkt) return;

    // 3. Vis billedet
    const billed = document.querySelector(`img[data-id="${id}"]`);
    if (billed) {
      billed.style.display = "block";
      document.querySelector(".valgte__items").style.display = "flex";
    }

    // 4. Vis li-tekst
    const li = document.querySelector(`li[data-id="${id}"]`);
    if (li && li.style.display !== "flex") {
      li.style.display = "flex";

      // Tilføj tekst hvis ikke allerede der
      if (!li.querySelector(".item-tekst")) {
        const tekstDiv = document.createElement("div");
        tekstDiv.classList.add("item-tekst");
        tekstDiv.textContent = `${produkt.navn} – ${produkt.pris} kr`;
        li.insertBefore(tekstDiv, li.firstChild);
      }

      // Opdater totalpris
      totalPris += produkt.pris;
      document.getElementById("totalPris").textContent = totalPris + " kr.";

      // Vis prisliste-sektion
      document.getElementById("valgteItems").style.display = "block";
      document.querySelector(".designselv__valgt").style.display = "block";

      // Fjern-knap funktion
      const fjernKnap = li.querySelector(".fjern__button");
      if (fjernKnap && !fjernKnap.dataset.listenerAdded) {
        fjernKnap.addEventListener("click", () => {
          li.style.display = "none";
          if (billed) billed.style.display = "none";

          totalPris -= produkt.pris;
          document.getElementById("totalPris").textContent = totalPris + " kr.";

          const alleLi = document.querySelectorAll("#valgteItems li");
          const altSkjult = [...alleLi].every(el => el.style.display === "none");
          if (altSkjult) {
            document.getElementById("valgteItems").style.display = "none";
            document.querySelector(".valgte__items").style.display = "none";
          }
        });
        fjernKnap.dataset.listenerAdded = true;
      }
    }
  });
});
