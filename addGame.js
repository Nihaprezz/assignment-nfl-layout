console.log("connectingggg")
// Adding a game
const addBtn = document.getElementById('add-game');
addBtn.addEventListener('click', function(e){
  e.preventDefault();
  
  // Container of div that will hold all games
  const gameContainer = document.getElementById('nfl-game-container');
  const newDate = document.getElementById('game-date').value;
  const homeTeam = document.getElementById('home-team-select').value;
  const awayTeam = document.getElementById('away-team').value;
  const homePoints = document.getElementById('home-points').value;
  const awayPoints = document.getElementById('away-points').value;

  // Container for game day stats
  const gameStatContainer = document.createElement('div');
  gameStatContainer.classList.add('game-stats-container');

  // Date
  const dateHeader = document.createElement('h4');
  dateHeader.textContent = "Date";
  const gameStatDate = document.createElement('p');
  gameStatDate.textContent = newDate;

  // Home Team 
  const homeHeader = document.createElement('h4');
  homeHeader.textContent = "Home Team";
  const homeStat = document.createElement('p');
  homeStat.textContent = homeTeam;

  // Away Team 
  const awayHeader = document.createElement('h4');
  awayHeader.textContent = "Away Team";
  const awayStat = document.createElement('p');
  awayStat.textContent = awayTeam;

  // Home Points
  const homePointsHeader = document.createElement('h4');
  homePointsHeader.textContent = "Home Points";
  const homePointsStat = document.createElement('p');
  homePointsStat.textContent = homePoints;

  // Away Points
  const awayPointsHeader = document.createElement('h4');
  awayPointsHeader.textContent = "Away Points";
  const awayPointsStat = document.createElement('p');
  awayPointsStat.textContent = awayPoints;

  if (homeTeam === awayTeam) {
    alert("Home and Away teams cannot be the same");
    return;
  }

  if (!homePoints || !awayPoints) {
    alert("Please make sure to enter valid points");
    return;
  }

  gameStatContainer.append(
    dateHeader,
    gameStatDate,
    homeHeader,
    homeStat,
    awayHeader,
    awayStat,
    homePointsHeader,
    homePointsStat,
    awayPointsHeader,
    awayPointsStat
  );

  gameContainer.appendChild(gameStatContainer);

  updateTeamStat(homeTeam, homePoints, awayTeam, awayPoints)
});

function updateTeamStat(homeTeam, homePoints, awayTeam, awayPoints) {
  const homeTeamWin = parseInt(homePoints) > parseInt(awayPoints);
  const awayTeamWin = parseInt(awayPoints) > parseInt(homePoints);
  const gameTie = parseInt(homePoints) === parseInt(awayPoints);

  if (homeTeamWin) {
    const homeWinElement = document.getElementById(`WINS-${homeTeam}`);
    const awayLoseElement = document.getElementById(`LOSSES-${awayTeam}`);

    let homeCount = parseInt(homeWinElement.textContent.split(": ")[1]);
    let awayCount = parseInt(awayLoseElement.textContent.split(": ")[1]);

    homeWinElement.textContent = `WINS: ${(homeCount += 1)}`;
    awayLoseElement.textContent = `LOSSES: ${(awayCount += 1)}`;
  } else if (awayTeamWin) {
    const homeLoseElement = document.getElementById(`LOSSES-${homeTeam}`);
    const awayWinElement = document.getElementById(`WINS-${awayTeam}`);

    let homeCount = parseInt(homeLoseElement.textContent.split(": ")[1]);
    let awayCount = parseInt(awayWinElement.textContent.split(": ")[1]);

    homeLoseElement.textContent = `LOSSES: ${(homeCount += 1)}`;
    awayWinElement.textContent = `WINS: ${(awayCount += 1)}`;
  } else if (gameTie) {
    const homeTieElement = document.getElementById(`TIES-${homeTeam}`);
    const awayTieElement = document.getElementById(`TIES-${awayTeam}`);

    let homeCount = parseInt(homeTieElement.textContent.split(": ")[1]);
    let awayCount = parseInt(awayTieElement.textContent.split(": ")[1]);

    homeTieElement.textContent = `TIES: ${(homeCount += 1)}`;
    awayTieElement.textContent = `TIES: ${(awayCount += 1)}`;
  }
}
