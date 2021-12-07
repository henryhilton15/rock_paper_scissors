const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

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
    return `You Win! ${winner} beats ${loser}.`
}
function lose(winner, loser){
    return `You Lose! ${winner} beats ${loser}.`
}
function draw(winner, loser){
    return `You Draw. ${winner} ties ${loser}.`
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerInput(), computerPlay()));
    }
    alert("games complete!");
}