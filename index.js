// Populating Team Select Options
const homeSelectOptions = document.getElementById('home-team-select');
const awaySelectOptions = document.getElementById('away-team');

nflTeams.forEach((team) => {
  const teamOption = document.createElement('option');
  teamOption.textContent = team.name;
  teamOption.value = team.name;
  homeSelectOptions.appendChild(teamOption);
});

nflTeams.forEach((team) => {
  const teamOption = document.createElement('option');
  teamOption.textContent = team.name;
  teamOption.value = team.name;
  awaySelectOptions.appendChild(teamOption);
});

// Populating Team Cards
const container = document.getElementById("nfl-layout-container");
nflTeams.forEach((team) => {
    const teamCard = document.createElement('div');
    teamCard.id = `team-${team.name}`;
    teamCard.classList.add('nfl-team-card');
    teamCard.style.backgroundImage = `linear-gradient(to right, ${team.cPrim} , ${team.cSecn})`;

    const teamName = document.createElement('h2');
    teamName.textContent = team.name;
    // teamName.style.backgroundImage = `linear-gradient(to right, ${team.cPrim} , ${team.cSecn})`;

    const teamLocation = document.createElement('p');
    teamLocation.classList.add('nfl-team-location');
    teamLocation.textContent = team.city.toUpperCase();

    const statsContainer = document.createElement('div');
    statsContainer.classList.add('nfl-team-stats');

    const wins = document.createElement('p');
    wins.id = `WINS-${team.name}`
    wins.textContent = `WINS: ${team.wins}`;

    const ties = document.createElement('p');
    ties.id = `TIES-${team.name}`
    ties.textContent = `TIES: ${team.ties}`;

    const losses = document.createElement('p');
    losses.id = `LOSSES-${team.name}`
    losses.textContent = `LOSSES: ${team.losses}`;

    //Appending to stats
    statsContainer.append(wins, ties, losses);

    //Img container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('nfl-team-img-container');
    const img = document.createElement('img');
    img.src = team.imgurl;
    imageContainer.appendChild(img);
    
    // Appending all elements to card element
    teamCard.append(
        teamName,
        teamLocation,
        statsContainer,
        imageContainer
    );

    // Appending team card to container
    container.appendChild(teamCard);
});