const text =
  "Dear love (payal) ,  I wanna Say Something.         Every passing day without you feels like a piece of me is missing. Your voice, your cuteness, your love—these are the things I missed so much. Life seems a little less colorful without your presence by my side. Tum bin adhura hu main. i miss our late-night conversations that stretched into the early hours of the morning. he only thing I want right now is to make things right between us. I am so sorry babu. Please forgive me dear payal (babu , baby ),my sweetheart. I love you so much"

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
