const player = {
    title: document.querySelector(".card-content h6"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
        title:"Como começei a programar | Por que criamos a Rocketseat | Nossa Stack",
        artist: "Diego Fernandes",
        file: "js/files/como-comecei.mp3"
    }
};


player.title.innerHTML = player.data.title;
player.artist.innerHTML = `Apresentado por: ${player.data.artist}`;
player.audio.src = player.data.file;