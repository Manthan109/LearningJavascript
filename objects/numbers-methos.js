let makeGuess=function(guess){
    let randomNum=Math.floor(Math.random()*5)+1
    return randomNum===guess;
}
console.log(makeGuess(1))