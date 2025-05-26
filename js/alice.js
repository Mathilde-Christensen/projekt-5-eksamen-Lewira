//Denne JavaScript del er udarbejde ved hjælp af ChatGBT - se mappen med ChatGBT promts - Alice 

let hamburgermenuens = [document.getElementById("minHamburgermenu")];
let hamburgers = [document.querySelector(".hamburger")];

function openNav(index) {
    hamburgermenuens[index].style.width = "200px";      
    document.addEventListener("click", closeNavOutside); 
}

function closeNav(index) {
    hamburgermenuens[index].style.width = "0";
    document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
    hamburgermenuens.forEach((hamburgermenuen, index) => {
        if (!hamburgermenuen.contains(event.target) && !hamburgers[index].contains(event.target)) {
            closeNav(index);
        }
    });
}




