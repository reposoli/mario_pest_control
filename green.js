

var baddies = document.getElementById("baddies")
baddies.classList.add("baddies");



const add = document.getElementById("button")
 add.onclick = function (){
 
    var goombas = document.getElementById("num1").value
    var bobombs = document.getElementById("num2").value
    var cheepcheeps = document.getElementById("num3").value

    var result = document.getElementById("result")
    result.textContent = ((goombas * 5) + (bobombs * 7) + (cheepcheeps * 11))
}

button.classList.add();



