async function loadVideos() {

    const response =
    await fetch("assets/data/videos.json");

    const data =
    await response.json();

    const container =
    document.getElementById("video-container");

    container.innerHTML = "";

    data.videos.forEach(video => {

        container.innerHTML += `
        
        <div class="card video-card">

            <iframe
                src="https://www.youtube.com/embed/${video.youtubeId}"
                allowfullscreen>
            </iframe>

            <div class="card-content">

                <h3>${video.title}</h3>

                <p>${video.description}</p>

            </div>

        </div>

        `;

    });

}

loadVideos();