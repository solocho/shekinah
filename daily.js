document.addEventListener("DOMContentLoaded", function () {
    const sermons = document.querySelectorAll(".sermon");
    const now = new Date();
    
    // Convert to East African Time (EAT, UTC+3)
    const nowEAT = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" }));

    // Get stored data
    let watchedVideos = JSON.parse(localStorage.getItem("watchedVideos")) || [];
    let lastWatchedDate = localStorage.getItem("lastWatchedDate");

    let todayDate = nowEAT.toISOString().split("T")[0]; // Format YYYY-MM-DD

    // Unlock previously watched videos
    watchedVideos.forEach(index => {
        if (sermons[index]) {
            sermons[index].classList.remove("locked");
        }
    });

    // Unlock the next video if a new day has started
    if (!lastWatchedDate || lastWatchedDate !== todayDate) {
        let nextIndex = watchedVideos.length;
        if (nextIndex < sermons.length) {
            sermons[nextIndex].classList.remove("locked");
        }
    }

    sermons.forEach((sermon, index) => {
        sermon.addEventListener("click", function () {
            if (!sermon.classList.contains("locked")) {
                // Mark video as watched forever
                if (!watchedVideos.includes(index)) {
                    watchedVideos.push(index);
                    localStorage.setItem("watchedVideos", JSON.stringify(watchedVideos));
                }

                // Store last watched date
                localStorage.setItem("lastWatchedDate", todayDate);
            } else {
                // Calculate time left until 6 AM EAT
                let nextAvailableTime = new Date();
                nextAvailableTime.setHours(6, 0, 0, 0); // Set to 6:00 AM EAT
                if (nowEAT.getHours() >= 6) {
                    nextAvailableTime.setDate(nextAvailableTime.getDate() + 1); // Move to next day
                }
                let timeRemaining = Math.round((nextAvailableTime - nowEAT) / (1000 * 60 * 60)); // Hours left
                alert(`This video will be available in ${timeRemaining} hours.`);
            }
        });
    });
});
