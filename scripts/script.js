//   JavaScript Document
//   WEB Frontend Development 
//   26 Oktober 2020
//   Gitta Schermer
//   Bron voor raadplegen: https://developer.mozilla.org/en-US/docs/Web/JavaScript


var checkBox;

checkBox = document.getElementById("hamburgerKnop");
checkBox.addEventListener("click", menuUitklappen);

function menuUitklappen() {
    // Met de toggle voeg- en verwijder ik een class aan het span-element waarin al mijn dropdown items zich bevinden. 
    // Bron: https://www.w3schools.com/howto/howto_js_toggle_class.asp 
    
    var menu = document.querySelector(".drop-down");
    menu.classList.toggle("uitgeklapt");
    
}

