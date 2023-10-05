console.log("Hello world")

function displayTime() {
    let time = new Date();
    console.log(time);
    document.getElementById('footer').innerHTML = time;
}
setInterval(displayTime, 1000);