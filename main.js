let playerIcon1 = "";
let playerIcon2 = "";

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

  const body = document.body;
  const playerNumber = document.getElementById("playernumber");
  const win = document.getElementById("win");

  const icons = "playerIcons/";

  let clicked1 = 0;
  let clicked2 = 0;

  let clickdata1 = [];
  let clickdata2 = [];
  if (data.innerHTML != "" || win.innerHTML != "") {
    return;
  } else {
    console.log(playerIcon1);
    console.log(playerIcon2);
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
      return;
    } else if (
      c1.innerHTML != "" &&
      c2.innerHTML != "" &&
      c3.innerHTML != "" &&
      c1.innerHTML == c2.innerHTML &&
      c1.innerHTML == c3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      l1.innerHTML != "" &&
      l2.innerHTML != "" &&
      l3.innerHTML != "" &&
      l1.innerHTML == l2.innerHTML &&
      l1.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      f1.innerHTML != "" &&
      c1.innerHTML != "" &&
      l1.innerHTML != "" &&
      f1.innerHTML == c1.innerHTML &&
      f1.innerHTML == l1.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      f2.innerHTML != "" &&
      c2.innerHTML != "" &&
      l2.innerHTML != "" &&
      f2.innerHTML == c2.innerHTML &&
      f2.innerHTML == l2.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      f3.innerHTML != "" &&
      c3.innerHTML != "" &&
      l3.innerHTML != "" &&
      f3.innerHTML == c3.innerHTML &&
      f3.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      f1.innerHTML != "" &&
      c2.innerHTML != "" &&
      l3.innerHTML != "" &&
      f1.innerHTML == c2.innerHTML &&
      f1.innerHTML == l3.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    } else if (
      f3.innerHTML != "" &&
      c2.innerHTML != "" &&
      l1.innerHTML != "" &&
      f3.innerHTML == c2.innerHTML &&
      f3.innerHTML == l1.innerHTML
    ) {
      win.innerHTML = `Player ${playerNumber.innerHTML} win`;
      return;
    }

    if (playerNumber.innerHTML == "1") {
      playerNumber.innerHTML = "2";
      player1.removeAttribute("class");
      player2.setAttribute("class", "player2");
      // clicked1++;
      // if (clicked1 > 3) {
      // }
    } else {
      playerNumber.innerHTML = "1";
      player2.removeAttribute("class");
      player1.setAttribute("class", "player1");
      // clicked2++;
      // console.log(clicked2);
      // if (clicked2 > 3) {
      // }
      // body.style.backgroundColor = "green";
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

  allImg.forEach((img) => {
    img.innerHTML = "";
  });

  playerNumber.innerHTML = "1";
  player2.removeAttribute("class");
  player1.setAttribute("class", "player1");
  win.innerHTML = "";
}

function start() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.getElementById("player1").innerHTML = getCookie("player1");
  document.getElementById("player2").innerHTML = getCookie("player2");
}

function reset() {
  window.location.reload();
  deleteCookie("icon1");
  deleteCookie("icon2");
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

  console.log(playerIcon1);
}

function getImage2(name) {
  document.getElementById("selectIconmodal2").style.display = "none";
  playerIcon2 = name;
  console.log(playerIcon2);
}
