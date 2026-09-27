
// ----------- dice roller with images ------------
const res = document.getElementById("rollResult");
let images ;

function rollFunction(){

    let rNum = Math.floor(Math.random()*6+ 1);
    // cout.textContent = rNum;

    image = `<img src = "images/dice${rNum}.png" alt = "${rNum}">`;
    res.innerHTML = image;
}
