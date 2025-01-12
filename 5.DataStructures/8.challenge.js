/*
We're building a football betting app !
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

tasks:
1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.25,
        x: 3.25,
        team2: 6.3,
    },
};

//1
let [player1, player2] = game.players;

//2
let [gk, ...fieldPlayers] = player1;

//3
let allPlayers = [...player1, ...player2];

//4
let players1Final = ['Thiago', 'Coutinho', 'Perisic', ...game.players[1]]

//5
let { team1, x: draw, team2 } = game.odds;

//6
function printGoals(players) {
    for (let i = 0; i < players.length; i++) {
        console.log(`${players[i]} goals were made !`);
    }
}
printGoals(...game.score)

//7
team1 > team2 && console.log("Team 1 is more likely to win");

team1 < team2 && console.log("Team 2 is more likely to win");

(team1 === team2 && team1 === 3 && team2 === 3) && console.log("Match is draw !");


// if (team1 > team2) {
//     console.log("Team 1 is more likely to win");
// }
// else if (team1 === team2 && team1 === 3 && team2 === 3) {
//     console.log("Match is draw !");
// }
// else {
//     console.log("Team 2 is more likely to win !");
// }