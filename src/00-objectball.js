const homeColors = ["black", "white"];
const awayColors = ["Turquoise", "Purple"];
const homePlayers = {
  "Alan Anderson": {
    number: 0,
    shoe: 16,
    ponts: 22,
    rebounds: 12,
    assists: 12,
    steals: 3,
    blocks: 1,
    slamDunks: 1,
  },
  "Reggie Evans": {
    number: 30,
    shoe: 14,
    ponts: 12,
    rebounds: 12,
    assists: 12,
    steals: 12,
    blocks: 12,
    slamDunks: 7,
  },
  "Brook Lopez": {
    number: 11,
    shoe: 17,
    ponts: 17,
    rebounds: 19,
    assists: 10,
    steals: 3,
    blocks: 1,
    slamDunks: 15,
  },
  "Mason Plumlee": {
    number: 1,
    shoe: 19,
    ponts: 26,
    rebounds: 12,
    assists: 6,
    steals: 3,
    blocks: 8,
    slamDunks: 5,
  },
  "Jason Terry": {
    number: 31,
    shoe: 15,
    ponts: 19,
    rebounds: 2,
    assists: 2,
    steals: 4,
    blocks: 11,
    slamDunks: 1,
  },
};
const awayPlayers = {
  "Jeff Adrian": {
    number: 4,
    shoe: 18,
    ponts: 10,
    rebounds: 11,
    assists: 1,
    steals: 2,
    blocks: 7,
    slamDunks: 2,
  },
  "Bismak Biyombo": {
    number: 0,
    shoe: 16,
    ponts: 12,
    rebounds: 4,
    assists: 7,
    steals: 7,
    blocks: 15,
    slamDunks: 10,
  },
  "Desagna Diop": {
    number: 2,
    shoe: 14,
    ponts: 24,
    rebounds: 12,
    assists: 12,
    steals: 4,
    blocks: 5,
    slamDunks: 5,
  },
  "Ben Gordon": {
    number: 8,
    shoe: 15,
    ponts: 33,
    rebounds: 3,
    assists: 2,
    steals: 1,
    blocks: 1,
    slamDunks: 0,
  },
  "Brendan Haywood": {
    number: 33,
    shoe: 15,
    ponts: 6,
    rebounds: 12,
    assists: 12,
    steals: 22,
    blocks: 5,
    slamDunks: 12,
  },
};
const game = {
  home: {
    teamName: "Brooklyn Nets",
    colors: homeColors,
    players: homePlayers,
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: awayColors,
    players: awayPlayers,
  },
};

function gameObject() {
  return game;
}

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());
