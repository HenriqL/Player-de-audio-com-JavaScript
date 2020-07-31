const title = document.querySelector(".card-content h6");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data ={
    title:"Como começei a programar | Por que criamos a Rocketseat | Nossa Stack",
    artist: "Diego Fernandes",
    file: "js/files/como-comecei.mp3"
};

title.innerHTML = data.title;
artist.innerHTML = `Apresentado por: ${data.artist}`;
audio.src = data.file;