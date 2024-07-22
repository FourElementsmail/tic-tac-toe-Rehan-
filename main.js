let playerIcon1 = "";
let playerIcon2 = "";
let player1Wins = 0;
let player2Wins = 0;

let player1ClickData = [];
let player2ClickData = [];
function checkValues(data) {
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const f1 = document.getElementById("f1");
  const f2 = document.getElementById("f2");
  const f3 = document.getElementById("f3");
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  const l1 = document.getElementById("l1");
  const l2 = document.getElementById("l2");
  const l3 = document.getElementById("l3");

  let winimg = document.getElementById("mainimg");
  winimg.style.zIndex = 999999;

  const body = document.body;
  const playerNumber = document.getElementById("playernumber");
  const win = document.getElementById("win");
  win.style.color = "green";
  win.style.fontWeight = "bold";
  win.style.fontSize = "30px";

  const icons = "playerIcons/";

  if (playerNumber.innerHTML == "1") {
    player1ClickData.push(data.id);
  } else {
    player2ClickData.push(data.id);
  }
  if (data.innerHTML != "" || win.innerHTML != "") {
    return;
  } else {
    if (playerNumber.innerHTML == "1") {
      if (playerIcon1 == "") {
        data.innerHTML = `<img src="${icons}1.jpg" alt="" />`;
      } else {
        data.innerHTML = `<img src="${icons}${playerIcon1}" alt="" />`;
      }
    } else {
      if (playerIcon2 == "") {
        data.innerHTML = `<img src="${icons}2.jpg" alt="" />`;
      } else {
        data.innerHTML = `<img src="${icons}${playerIcon2}" alt="" />`;
      }
    }
    if (
      f1.innerHTML != "" &&
      f1.innerHTML != "" &&
      f1.innerHTML != "" &&
      f1.innerHTML == f2.innerHTML &&
      f1.innerHTML == f3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      c1.innerHTML != "" &&
      c2.innerHTML != "" &&
      c3.innerHTML != "" &&
      c1.innerHTML == c2.innerHTML &&
      c1.innerHTML == c3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      l1.innerHTML != "" &&
      l2.innerHTML != "" &&
      l3.innerHTML != "" &&
      l1.innerHTML == l2.innerHTML &&
      l1.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      f1.innerHTML != "" &&
      c1.innerHTML != "" &&
      l1.innerHTML != "" &&
      f1.innerHTML == c1.innerHTML &&
      f1.innerHTML == l1.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      f2.innerHTML != "" &&
      c2.innerHTML != "" &&
      l2.innerHTML != "" &&
      f2.innerHTML == c2.innerHTML &&
      f2.innerHTML == l2.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      f3.innerHTML != "" &&
      c3.innerHTML != "" &&
      l3.innerHTML != "" &&
      f3.innerHTML == c3.innerHTML &&
      f3.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      f1.innerHTML != "" &&
      c2.innerHTML != "" &&
      l3.innerHTML != "" &&
      f1.innerHTML == c2.innerHTML &&
      f1.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    } else if (
      f3.innerHTML != "" &&
      c2.innerHTML != "" &&
      l1.innerHTML != "" &&
      f3.innerHTML == c2.innerHTML &&
      f3.innerHTML == l1.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      if (playerNumber.innerHTML == "1") {
        player1Wins++;
      } else {
        player2Wins++;
      }
      winimg.src = `gamewin.gif`;
      return;
    }
    if (player1ClickData.length == 2) {
      let firstValue = player1ClickData[0];
      document.getElementById(firstValue).style.opacity = "0.7";
    }
    if (player1ClickData.length == 3) {
      let secondValue = player1ClickData[1];
      let firstValue = player1ClickData[0];
      document.getElementById(firstValue).style.opacity = "0.4";
      document.getElementById(secondValue).style.opacity = "0.7";
    }
    if (player1ClickData.length == 4) {
      let firstValue = player1ClickData[0];
      let thirdValue = player1ClickData[2];
      let secondValue = player1ClickData[1];
      document.getElementById(firstValue).innerHTML = "";
      document.getElementById(secondValue).style.opacity = "0.4";
      document.getElementById(thirdValue).style.opacity = "0.7";
      player1ClickData.shift();
    }

    if (player2ClickData.length == 2) {
      let firstValue = player2ClickData[0];
      document.getElementById(firstValue).style.opacity = "0.7";
    }
    if (player2ClickData.length == 3) {
      let secondValue = player2ClickData[1];
      let firstValue = player2ClickData[0];
      document.getElementById(firstValue).style.opacity = "0.4";
      document.getElementById(secondValue).style.opacity = "0.7";
    }
    if (player2ClickData.length == 4) {
      let firstValue = player2ClickData[0];
      let thirdValue = player2ClickData[2];
      let secondValue = player2ClickData[1];
      document.getElementById(firstValue).innerHTML = "";
      document.getElementById(secondValue).style.opacity = "0.4";
      document.getElementById(thirdValue).style.opacity = "0.7";
      player2ClickData.shift();
    }

    if (playerNumber.innerHTML == "1") {
      playerNumber.innerHTML = "2";
      player1.removeAttribute("class");
      player2.setAttribute("class", "player2");
    } else {
      playerNumber.innerHTML = "1";
      player2.removeAttribute("class");
      player1.setAttribute("class", "player1");
      return true;
    }
  }
}

function restart() {
  const allImg = document.querySelectorAll(".all-img");

  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  const playerNumber = document.getElementById("playernumber");

  const win = document.getElementById("win");

  const winimg = document.getElementById("mainimg");

  allImg.forEach((img) => {
    img.innerHTML = "";
    img.style.opacity = "1";
  });

  playerNumber.innerHTML = "1";
  player2.removeAttribute("class");
  player1.setAttribute("class", "player1");
  win.innerHTML = "";

  let name = getCookie("border");
  winimg.src = `borderstyle/${name}`;

  player1ClickData = new Array();
  player2ClickData = new Array();

  document.getElementById("gamewin1").innerHTML = player1Wins;
  document.getElementById("gamewin2").innerHTML = player2Wins;
}

function start() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.getElementById("player1").innerHTML = getCookie("player1");
  document.getElementById("player2").innerHTML = getCookie("player2");
}

function reset() {
  window.location.reload();

  player1Wins = 0;
  player2Wins = 0;
}

function createCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function updateCookie(name, value) {
  createCookie(name, value, 365);
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

createCookie("player1", "Player 1", 365);
createCookie("player2", "Player 2", 365);

document.getElementById("playerName1").value = getCookie("player1");
document.getElementById("playerName2").value = getCookie("player2");
function updateBorder(name) {
  const img = document.getElementById("mainimg");
  img.src = `borderstyle/${name}`;
  img.style.pointerEvents = "none";
  updateCookie("border", name);
}

function openModal(id) {
  document.getElementById(`selectIconmodal${id}`).style.display = "block";
  if (id == 1) {
    let allImages = document.querySelectorAll(`.iconImages1`);
    allImages.forEach((img) => {
      img.style.display = "block";

      if (img.getAttribute("name") == playerIcon2) {
        img.style.display = "none";
      }
    });
  } else {
    let allImages = document.querySelectorAll(`.iconImages2`);
    allImages.forEach((img) => {
      img.style.display = "block";
      if (img.getAttribute("name") == playerIcon1) {
        img.style.display = "none";
      }
    });
  }
}

function getImage1(name) {
  document.getElementById("selectIconmodal1").style.display = "none";
  playerIcon1 = name;
}

function getImage2(name) {
  document.getElementById("selectIconmodal2").style.display = "none";
  playerIcon2 = name;
}
createCookie("border", `b1.webp`, 365);
// console.log(player1Wins);
