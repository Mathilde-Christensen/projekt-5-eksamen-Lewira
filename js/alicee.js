let hamburgermenuens = [document.getElementById("minHamburgermenu")]; 
let hamburgers = [document.querySelector(".hamburger")];
// 🔹 Array: Begge variabler er arrays med ét DOM-element hver
// 🔹 DOM: document.getElementById og document.querySelector bruges til at hente elementer fra DOM'en

function openNav(index) { 
// 🔹 Funktion: Funktion kaldet openNav med parameteren index

hamburgermenuens[index].style.width = "200px";      
// 🔹 DOM: Ændrer bredden på menuen via DOM-manipulation

document.addEventListener("click", closeNavOutside); 
// 🔹 DOM: Lytter på hele dokumentet efter klik (event listener)

}

function closeNav(index) {
// 🔹 Funktion: Lukker menuen, modsat openNav

hamburgermenuens[index].style.width = "0"; 
// 🔹 DOM: Sætter bredden til 0, så den bliver usynlig

document.removeEventListener("click", closeNavOutside);
    // 🔹 DOM: Fjerner event listener igen

}

function closeNavOutside(event) {
    // 🔹 Funktion: Funktion der kaldes hvis man klikker udenfor menuen

    hamburgermenuens.forEach((hamburgermenuen, index) => {
            // 🔹 Array + loop (forEach): Gennemgår hver menu i arrayet

        if (!hamburgermenuen.contains(event.target) && !hamburgers[index].contains(event.target)) {
            closeNav(index); // 🔹 Funktion: Kalder closeNav
            // 🔹 DOM: Tjekker om klikket var udenfor menu og hamburger-ikonet
        }
    });
}