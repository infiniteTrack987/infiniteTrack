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
         window.location.href = `https://tnseries.com/ZHq5X1P`;
     } else {
     }
    if (season === 'S01' && episode === '02') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/JkQQacy`;
     } else {
    }
    if (season === 'S01' && episode === '03') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/zyh7`;
     } else {
    }
    if (season === 'S01' && episode === '04') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/d5qAW`;
     } else {
    }
    if (season === 'S01' && episode === '05') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/dSETe`;
     } else {
    }
    if (season === 'S01' && episode === '06') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/lVUfkLS`;
     } else {
    }
    if (season === 'S01' && episode === '07') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/VWDl9Y3n`;
     } else {
    }
    if (season === 'S01' && episode === '08') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/Y4FU7J`;
     } else {
    }
    if (season === 'S01' && episode === '09') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/MoV3s8S`;
     } else {
    }
    if (season === 'S01' && episode === '10') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/wX73`;
     } else {
    }
    if (season === 'S01' && episode === '11') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/bIqC3`;
     } else {
    }
    if (season === 'S01' && episode === '12') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/zCDBS8kl`;
     } else {
    }
    if (season === 'S01' && episode === '13') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/IVVeaJ4`;
     } else {
    }
    if (season === 'S01' && episode === '14') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/babpxj`;
     } else {
    }
    if (season === 'S01' && episode === '15') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/FtnqZ`;
     } else {
    }
    if (season === 'S01' && episode === '16') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/cBCem`;
     } else {
    }
    if (season === 'S01' && episode === '17') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/KvGBJA22`;
     } else {
    }
    if (season === 'S01' && episode === '18') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/QTNWo`;
     } else {
    }
    if (season === 'S01' && episode === '19') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/9LOGE`;
     } else {
    }
    if (season === 'S01' && episode === '20') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/d7qrcueS`;
     } else {
    }
    if (season === 'S01' && episode === '21') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/JpWQgQan`;
     } else {
    }
    if (season === 'S01' && episode === '22') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/6NONAV4`;
     } else {
    }
    if (season === 'S01' && episode === '23') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/Q6k9KtIM`;
     } else {
    }
    if (season === 'S01' && episode === '24') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/d7TA59v`;
     } else {
    }
    if (season === 'S01' && episode === '25') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/KkWkZJ`;
     } else {
    }
    if (season === 'S01' && episode === '26') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/yIt23u`;
     } else {
    }
    if (season === 'S01' && episode === '27') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/n2BVtWqu`;
     } else {
    }
    if (season === 'S01' && episode === '28') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/2qpRbtc`;
     } else {
    }
    if (season === 'S01' && episode === '29') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/fxbOZF`;
     } else {
    }
    if (season === 'S01' && episode === '30') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/we0d9`;
     } else {
    }
    if (season === 'S01' && episode === '31') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/cvXXsG`;
     } else {
    }
    if (season === 'S01' && episode === '32') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/boZ8R9Qc`;
     } else {
    }
    if (season === 'S01' && episode === '33') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/uHtFhWE`;
     } else {
    }
    if (season === 'S01' && episode === '34') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/IuyexNk`;
     } else {
    }
    if (season === 'S01' && episode === '35') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/hzq7`;
     } else {
    }
    if (season === 'S01' && episode === '36') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/xUh54S`;
     } else {
    }
    if (season === 'S01' && episode === '37') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/rlmRdd`;
     } else {
    }
    if (season === 'S01' && episode === '38') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/4lOkwX6Y`;
     } else {
    }
    if (season === 'S01' && episode === '39') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/O5LinFd`;
     } else {
    }
    if (season === 'S01' && episode === '40') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/TfBJZq`;
     } else {
    }
    if (season === 'S01' && episode === '41') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/b9GVA`;
     } else {
    }
    if (season === 'S01' && episode === '42') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/CE1NI`;
     } else {
    }
    if (season === 'S01' && episode === '43') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/MKo7npcO`;
     } else {
    }
    if (season === 'S01' && episode === '44') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/HFN4Bl`;
     } else {
    }
    if (season === 'S01' && episode === '45') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/t6hckUrT`;
     } else {
    }
    if (season === 'S01' && episode === '46') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/ZxS662`;
     } else {
    }
    if (season === 'S01' && episode === '47') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/8xvJdM`;
     } else {
    }
    if (season === 'S01' && episode === '48') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/rVREqhY`;
     } else {
    }
    if (season === 'S01' && episode === '49') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/pr2tU`;
     } else {
    }
    if (season === 'S01' && episode === '50') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/AAG7`;
     } else {
    }
    if (season === 'S01' && episode === '51') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/YM1dn`;
     } else {
    }
    if (season === 'S01' && episode === '52') {
         let query = `Doraemon ${season} Episode ${episode}`;
         window.location.href = `https://tnseries.com/WGUQ9bLJ`;
     } else {
    }
}
