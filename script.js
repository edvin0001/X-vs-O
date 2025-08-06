const button = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];
const grid = document.getElementsByClassName("box")[0];
const slot = document.getElementsByClassName("slot")
const restart = document.getElementsByClassName("restart")[0]
const h1 = document.getElementsByTagName("h1")[0]
const toastMessage = document.getElementsByClassName("toast_Message")[0]


let count = 0
function Choice() {
  console.log("Button has been clicked")
  let a = Math.random();
  a = Math.round(a);
  if (a == 0) {
    body.style.backgroundColor = "rgb(56, 1, 1)"
    h1.innerHTML = "X"
    button.style.display = "none"
  }
  else {
    body.style.backgroundColor = "rgb(2, 25, 88)"
    h1.innerHTML = "O"
    button.style.display = "none"
  }
}



function Win(currVal) {
  const value = currVal
  let matched = false
  if (
    slot[0].innerHTML === value &&
    slot[1].innerHTML === value &&
    slot[2].innerHTML === value
  ) {
    console.log(`${value} Wins: Top row`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Top row`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[0].style.color = "purple"
    slot[1].style.color = "purple"
    slot[2].style.color = "purple"
  } else if (
    slot[3].innerHTML === value &&
    slot[4].innerHTML === value &&
    slot[5].innerHTML === value
  ) {
    console.log(`${value} Wins: Middle row`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Middle row`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[3].style.color = "purple"
    slot[4].style.color = "purple"
    slot[5].style.color = "purple"
  } else if (
    slot[6].innerHTML === value &&
    slot[7].innerHTML === value &&
    slot[8].innerHTML === value
  ) {
    console.log(`${value} Wins: Bottom row`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Bottom row`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[6].style.color = "purple"
    slot[7].style.color = "purple"
    slot[8].style.color = "purple"
  } else if (
    slot[0].innerHTML === value &&
    slot[3].innerHTML === value &&
    slot[6].innerHTML === value
  ) {
    console.log(`${value} Wins: Left column`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Left column`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[0].style.color = "purple"
    slot[3].style.color = "purple"
    slot[6].style.color = "purple"
  } else if (
    slot[1].innerHTML === value &&
    slot[4].innerHTML === value &&
    slot[7].innerHTML === value
  ) {
    console.log(`${value} Wins: Middle column`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Middle column`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[1].style.color = "purple"
    slot[4].style.color = "purple"
    slot[7].style.color = "purple"
  } else if (
    slot[2].innerHTML === value &&
    slot[5].innerHTML === value &&
    slot[8].innerHTML === value
  ) {
    console.log(`${value} Wins: Right column`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Right column`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[2].style.color = "purple"
    slot[5].style.color = "purple"
    slot[8].style.color = "purple"
  } else if (
    slot[0].innerHTML === value &&
    slot[4].innerHTML === value &&
    slot[8].innerHTML === value
  ) {
    console.log(`${value} Wins: Left-to-right diagonal`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Left-to-right diagonal`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[0].style.color = "purple"
    slot[4].style.color = "purple"
    slot[8].style.color = "purple"
  } else if (
    slot[2].innerHTML === value &&
    slot[4].innerHTML === value &&
    slot[6].innerHTML === value
  ) {
    console.log(`${value} Wins: Right-to-left diagonal`);
    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(0, 66, 0)"
    toastMessage.innerHTML = `${value} Wins: Right-to-Left Diagonal`

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);
    matched = true;
    slot[2].style.color = "purple"
    slot[4].style.color = "purple"
    slot[6].style.color = "purple"
  }
  return matched;
}

function input(box) {

  if (box.innerHTML != "") {

    toastMessage.classList.add("Show")
    toastMessage.style.backgroundColor = "rgb(66, 0, 0)"
    toastMessage.innerHTML = "Cannot insert on a reserved slot. "

    setTimeout(() => {
      toastMessage.classList.remove("Show")
    }, 2000);


  }
  else {
    let bg = getComputedStyle(body).backgroundColor
    if (bg == "rgb(56, 1, 1)") {

      body.style.backgroundColor = "rgb(2, 25, 88)"
      h1.innerHTML = "O"
      box.innerHTML = "X"
      count++
    }
    else if (bg == "rgb(2, 25, 88)") {
      box.innerHTML = "O"
      body.style.backgroundColor = "rgb(56, 1, 1)"
      h1.innerHTML = "X"
      count++
    }

  }
  //check who Wins
  const currVal = box.innerHTML

  let res = Win(currVal)
  if (res == true) {
    h1.innerHTML = ""
    grid.style.pointerEvents = "none";
    return true
  }
}


Array.from(slot).forEach(function (box) {
  box.addEventListener("click", function () {
    let finRes = input(box)
    if (finRes) {
      restart.style.display = "block"
    }
    else if (count == 9) {
      restart.style.display = "block"

    }
  })
})


document.getElementsByClassName("restart")[0].addEventListener("click", function () {
  Array.from(slot).forEach(function (box) {
    box.innerHTML = ""
    box.style.color = "white"
    restart.style.display = "none"
    body.style.backgroundColor = "black"
    button.style.display = "block"
    grid.style.pointerEvents = "auto";
    count = 0

  })
})

button.addEventListener("click", Choice);
