// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
var icon = document.getElementById("icon");
var body = document.body;

if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-theme");
    icon.checked = true;
}

icon.onclick = function() {
    body.classList.toggle("dark-theme");
    localStorage.setItem("darkMode", body.classList.contains("dark-theme"));
};
