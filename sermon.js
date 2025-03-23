document.addEventListener("DOMContentLoaded", function() {
    unlockVideos("daily-sermons", 1);  // Unlock 1 video per day
    unlockVideos("weekly-sermons", 7); // Unlock 1 video per week
});

function unlockVideos(containerId, days) {
    let sermons = document.querySelectorAll(`#${containerId} .sermon`);
    let lastWatchTime = localStorage.getItem(containerId) || 0;
    let now = new Date().getTime();

    let timePassed = Math.floor((now - lastWatchTime) / (1000 * 60 * 60 * 24)); // Convert to days

    let unlockedCount = Math.min(timePassed, sermons.length);

    for (let i = 0; i < unlockedCount; i++) {
        sermons[i].classList.remove("locked");
        sermons[i].addEventListener("click", function() {
            localStorage.setItem(containerId, now);
        });
    }

    for (let i = unlockedCount; i < sermons.length; i++) {
        sermons[i].addEventListener("click", function() {
            let remainingTime = (days - timePassed) * 24; // Convert to hours
            alert(`This sermon will be available in ${remainingTime} hours.`);
        });
    }
}
