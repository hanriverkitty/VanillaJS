const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[parseInt(Math.random() * images.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage)
//prepend 맨앞에 위치시키는것