var initialPrice = document.querySelector('#initial-price');
var amount = document.querySelector('#amount');
var currentPrice = document.querySelector('#current-price');
var submitButton = document.querySelector('#submit-button');
var outputBox = document.querySelector('#output-box');

submitButton.addEventListener('click', submitHandler); 

function submitHandler(){
    var ip = Number(initialPrice.value);
    var amt = Number(amount.value);
    var curr = Number(currentPrice.value);

    CalculateLossAndProfit(ip,amt,curr);

}
function CalculateLossAndProfit (initialPrice,amount,currentPrice
) {
    if(currentPrice === 0 ){
    showOutput("Paisa barbaad PANCHO!!!!")
}else if (initialPrice>currentPrice){
    var loss = (initialPrice - currentPrice) * amount 
    var lossPercentage = (loss/initialPrice) *100
    showOutput('Your loss is ' + loss + ' and your loss percentage is ' + lossPercentage +'.')
}else if( currentPrice>initialPrice){
    var profit = (currentPrice-initialPrice) *amount
    var profitPercentage = (profit/initialPrice) *100
    showOutput('Your profit is ' + profit + ' and your profit percentage is ' + profitPercentage +'!!!')
}
else(
    showOutput('No change , go home  ^/^')
)}

function showOutput(message){


outputBox.innerHTML = message ;
}