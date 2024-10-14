function openSeason(season) {
    // Create a new page displaying episode buttons for each season
    let body = document.body;
    body.innerHTML = `
    <div class="container">
        <h1>Doraemon ${season} Episodes</h1>
        <div class="episodes">
            ${generateEpisodeButtons(season)}
        </div>
        <button class="back-button" onclick="location.reload()">Back to Seasons</button>
    </div>
    `;
}

function generateEpisodeButtons(season) {
    let buttons = '';
    for (let i = 1; i <= 52; i++) {
        let episodeNum = i < 10 ? '0' + i : i;

        // Allow clicking only on EP01 for S01
        if (season === 'S01' && episodeNum === '01') {
            buttons += `<button class="episode-button" onclick="openEpisode('${season}', '${episodeNum}')">${season} EP${episodeNum}</button>`;
        } else {
            buttons += `<button class="episode-button disabled">${season} EP${episodeNum}</button>`;
        }
    }
    return buttons;
}

function openEpisode(season, episode) {
    if (season === 'S01' && episode === '01') {
        let query = `Doraemon ${season} Episode ${episode}`;
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
}
