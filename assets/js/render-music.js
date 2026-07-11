async function loadMusic() {

    const response =
    await fetch("assets/data/music.json");

    const data =
    await response.json();

    const container =
    document.getElementById("music-container");

    container.innerHTML = "";

    data.music.forEach(song => {

        // container.innerHTML += `
        
        // <div class="music-card">

        //     <img
        //         src="${song.cover}"
        //         class="cover">

        //     <div class="music-info">

        //         <h3>${song.title}</h3>

        //         <p>${song.artist}</p>

        //     </div>

        //     <audio controls>

        //         <source
        //             src="${song.audio}"
        //             type="audio/mpeg">

        //     </audio>

        // </div>

        // `
        // 
        ;

        //   <img
        //             src="${song.cover}"
        //             alt="${song.title}"
        //             class="music-cover">
        //  <p>${song.artist}</p>

        container.innerHTML += `

            <div class="card spotify-card">

              
                <div class="card-content">

                    <h3>${song.title}</h3>
                    <br>
                   

                    <iframe
                        src="${song.spotifyEmbed}"
                        width="100%"
                        height="352"
                        frameborder="0">
                    </iframe>

                </div>

            </div>

            `;

    });

}

loadMusic();