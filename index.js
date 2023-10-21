console.log("Hello world")

function displayTime() {
    let time = new Date();
    console.log(time);
    document.getElementById('footer').innerHTML = time;
}
setInterval(displayTime, 1000);

// Type write code

const texts = ["Full-stack developer", "web developer", "web designer"];

const typewriter = document.getElementById("dev-name");
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typewriter.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
  } else {
    setTimeout(erase, 1000); // Wait for a while before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // Wait before typing the next line
  }
}

type(); // Start the typing loop