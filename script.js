// Function to check if the user is on an Android device
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

// Function to restrict access to only Android users
function checkForAndroid() {
    if (!isAndroid()) {
        alert('This website is only accessible on Android devices.');
        document.body.innerHTML = '<h1 style="color: red; text-align: center;">Access Restricted to Android Devices</h1>';
        return false; // Prevent further execution
    }
}

// Run the Android check when the page loads
window.onload = checkForAndroid;

function openSeason(season) {
    // Create a new page displaying episode buttons for each season
    let body = document.body;
    
     // Clear existing content and add new content
     body.innerHTML = `
     <div class='container'>
         <h1>Doraemon ${season} Episodes</h1>
         <div class='episodes'>
             ${generateEpisodeButtons(season)}
         </div>
         <button class='back-button' onclick='location.reload()'>Back to Seasons</button>
     </div>`;
}

function generateEpisodeButtons(season) {
     let buttons = '';
     for (let i = 1; i <= 52; i++) {
         let episodeNum = i < 10 ? '0' + i : i; // Format episode number with leading zero
         buttons += `<button class='episode-button' onclick='openEpisode("${season}", "${episodeNum}")'>${season} EP${episodeNum}</button>`;
     }
     return buttons; // Return all generated buttons
}

function openEpisode(season, episode) {
     // Only open Google search if it's S01 EP01
     if (season === 'S01' && episode === '01') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/r/e/P/4/reP4t.caa.mp4?u=0&amp;b=0`;
     } else {
     }
    if (season === 'S01' && episode === '02') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/f/p/Z/4/fpZ4t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '03') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/b/U/1/4/bU14t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '04') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/n/v/l/5/nvl5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '05') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/n/7/l/5/n7l5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '06') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/L/m/m/5/Lmm5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '07') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/D/o/m/5/Dom5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '08') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/v/x/m/5/vxm5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '09') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/9/J/m/5/9Jm5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '10') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/v/p/n/5/vpn5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '11') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/u/E/n/5/uEn5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '12') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/P/l/o/5/Plo5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '13') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/J/l/p/5/Jlp5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '14') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/9/p/p/5/9pp5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '15') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/X/t/p/5/Xtp5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
    if (season === 'S01' && episode === '16') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://1a-1791.com/video/s8/2/u/w/p/5/uwp5t.caa.mp4?u=0&amp;b=0`;
     } else {
    }
}
