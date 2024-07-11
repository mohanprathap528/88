const imageSources = ['8.jpg','2.jpg','3.jpg','4,jpg','6.jpg','5.jpeg','1.jpeg','9.jpg','10.jpg'];																							
function changeBackgroundImage() {																							
const randomIndex = Math.floor(Math.random() * imageSources.length);																							
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;																							
}																							
// Change the background image every 1 seconds (1000 milliseconds)																							
setInterval(changeBackgroundImage, 1000);																							