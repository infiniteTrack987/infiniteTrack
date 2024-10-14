// Function to check if the user is on an Android device
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

// Function to restrict access to only Android users
function checkForAndroid() {
    if (!isAndroid()) {
        alert('This website is only accessible on Android devices.');
        document.body.innerHTML = '<h1 style="color: red; text-align: center;">Access Restricted to Android Devices</h1>';
    }
}

// Run the Android check when the page loads
window.onload = checkForAndroid;

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
        // Create all episode buttons from EP01 to EP52
        buttons += `<button class="episode-button" onclick="openEpisode('${season}', '${episodeNum}')">${season} EP${episodeNum}</button>`;
    }
    return buttons;
}

function openEpisode(season, episode) {
    // Open Google search URL for the selected season and episode
    let query = `Doraemon ${season} Episode ${episode}`;
    window.location.href = `https://www.google.com/search?q=${query}`;
}
