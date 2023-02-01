const csvData = "...";
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');

const rows1 = rawRows.slice(1).map((rowStr) => {
  const row: Record<string, string> = {};
  rowStr.split(',').forEach((val, j) => {
    row[headers[j]] = val;
  });
  return row;
});

const rows2 = rawRows
  .slice(1)
  .map((rowStr) => rowStr.split(',').reduce((row: Record<string, string>, val, i) => ((row[headers[i]] = val), row), {}));

import _ from 'lodash';
const rows = rawRows.slice(1).map((rowStr) => _.zipObject(headers, rowStr.split(',')));

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: {[team: string]: BasketballPlayer[]};

// let allPlayers: BasketballPlayer[] = [];
// for (const players of Object.values(rosters)) {
//   allPlayers = allPlayers.concat(players);
// }

const allPlayers = Object.values(rosters).flat();
// 배열 내장 메소드인 flat 함수는 다차원 배열을 평탄화해 주는데, 기존 값의 타입을 사용하여 추론해준다.

const teamToPlayers: Record<string, BasketballPlayer[]> = {};
for (const player of allPlayers) {
  const {team} = player;
  teamToPlayers[team] = teamToPlayers[team] || [];
  teamToPlayers[team].push(player);
}
for (const players of Object.values(teamToPlayers)) {
  players.sort((a, b) => b.salary - a.salary);
}
// const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
// bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
// console.log(bestPaid);

const bestPaid = _(allPlayers)
  .groupBy((player) => player.team)
  .mapValues((players) => _.maxBy(players, (p) => p.salary)!)
  .values()
  .sortBy((p) => -p.salary)
  .value();











export {}