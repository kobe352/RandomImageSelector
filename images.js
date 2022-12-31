const imageUrls = [
    'pic1.png',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg',
    'pic7.jpg',
    'pic8.jpg',
    'pic9.png',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.png',
    'pic13.jpg',
    'pic14.jpg',
    'pic15.png',
    'pic16.jpg'
];

function showImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);

    const randomUrl = imageUrls[randomIndex];

    const imageElement = document.getElementById('image_shower');

    imageElement.src = `./images/${randomUrl}`

    const imageUrl = 'https://en.wikipedia.org/wiki/Hirohiko_Araki';

    document.getElementById("button1").addEventListener("click", showImage())
}
