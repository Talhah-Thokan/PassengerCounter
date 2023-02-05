let welcomeEl = document.getElementById("welcome-el");
let name = "Talhah ";
let greeting = "Welcome & Greetings ! "

let PeopleCountElement = document.getElementById("NumPassengersTag")
let saveEl = document.getElementById("save-el");
let count = 0 ;

welcomeEl.textContent = greeting + name;

function increment(){  
    count += 1;
    PeopleCountElement.innerText = count;
}

function save(){
    let previousEntryCount = PeopleCountElement.innerText + " - ";
    saveEl.textContent += previousEntryCount;
    count = 0;
    PeopleCountElement.textContent = 0;
}

welcomeEl.innerText += "👋";