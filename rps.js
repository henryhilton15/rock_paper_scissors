const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
var player_score = 0;
var computer_score = 0;

const results_container = document.querySelector('#results_container');
const player_status = document.createElement('p');
const computer_status = document.createElement('p');
const round_summary = document.createElement('p');
const game_over = document.createElement('h1');
results_container.appendChild(player_status);
results_container.appendChild(computer_status);
results_container.appendChild(round_summary);
results_container.appendChild(game_over);

function computerPlay() {
    let hand;
    let rand100 = Math.random() * 100;
    if (rand100 < 33) {
        hand = 'Rock';
    }
    else if (rand100 < 66) {
        hand = 'Paper';
    }
    else {
        hand = 'Scissors'
    }
    return hand;
}

function playerInput(){
    let input = prompt("Show your hand!!")
    input = normalizeCase(input);
    if (input != ROCK && input != PAPER && input != SCISSORS){
        alert("Invalid hand, try again!")
        return playerInput();
    }
    return input;
}

function normalizeCase(words){
    words = words.toLowerCase();
    let first_letter = words.substring(0,1);
    first_letter = first_letter.toUpperCase();
    words = first_letter + words.substring(1);
    return words;
}

function playRound(player_hand, computer_hand){
    let result;
    switch(true){
        case player_hand == ROCK && computer_hand == PAPER:
            result = lose(computer_hand,player_hand);
            break;
        case player_hand == ROCK && computer_hand == SCISSORS:
            result = win(player_hand,computer_hand);
            break;
        case player_hand == PAPER && computer_hand == ROCK:
            result = win(player_hand,computer_hand); 
            break;
        case player_hand == PAPER && computer_hand == SCISSORS:
            result = lose(computer_hand,player_hand);
            break;
        case player_hand == SCISSORS && computer_hand == ROCK:
            result = lose(computer_hand,player_hand);
            break;
        case player_hand == SCISSORS && computer_hand == PAPER:
            result = win(player_hand,computer_hand);
            break;
        default:
            result = draw(player_hand, computer_hand);
    }
    return result;
}

function win(winner, loser){
    player_score += 1;
    return `You Win! ${winner} beats ${loser}.`
}
function lose(winner, loser){
    computer_score += 1;
    return `You Lose! ${winner} beats ${loser}.`
}
function draw(winner, loser){
    return `You Draw. ${winner} ties ${loser}.`
}

function game(player_input){ 
    round_summary.textContent = (playRound(player_input, computerPlay()));
    displayResults();
}

function displayResults(){
    if (player_score <= 5 && computer_score <= 5){
        player_status.textContent = `Player: ${player_score}`;
        computer_status.textContent = `Computer: ${computer_score}`;
    }
    if (player_score >= 5 || computer_score >= 5){
        game_over.textContent = 'GAME OVER!'
    }
}