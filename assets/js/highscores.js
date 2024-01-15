let localStorageData = JSON.parse(localStorage.getItem('quiz'));
let highscoreList = document.getElementById('highscores');

for (let i = 0; i < localStorageData.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${localStorageData[i].initials} - ${localStorageData[i].score}`;
    highscoreList.appendChild(listItem);
}

