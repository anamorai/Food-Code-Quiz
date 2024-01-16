let localStorageData = JSON.parse(localStorage.getItem('quiz'));
let highscoreList = document.getElementById('highscores');

for (let i = 0; i < localStorageData.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${localStorageData[i].initials} - ${localStorageData[i].score}`;
    highscoreList.appendChild(listItem);
}

    // Add an event listener to the button
    document.getElementById("clear").addEventListener("click", function() {
        // Clear the local storage
        localStorage.clear();
        // Display an alert
        alert("Highscores cleared!");
        // Refresh the page after the alert is closed
        location.reload();
      });
