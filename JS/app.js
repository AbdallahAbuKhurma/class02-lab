'use strict';
let grade = 0;
let vedioGame =false;
function score()
{
    grade = grade + 1;
}
function correct()
    {
        alert ('the answer is correct'); 
        grade = grade + 1; 
    }
    function incorrect (){
        alert ('the answer is incorrect');
    }
    function rigth(){
        alert('you are right');
        grade = grade + 1;
    }
    function tryAgain() {
        multi = prompt('please try again');
    }

 
function welcome()
 {
    alert ('Welcome to About Me page');
 }
 welcome();

let name = prompt ('Please enter your name');

alert('Hi '+ name);

alert(name +' There is a seires of questions game are you ready?')

function doing()
{
    let doing = prompt ('Am I currently doing something I love?');


    if(doing.toLowerCase() === 'yes'|| doing.toLowerCase() === 'y')
    {
        correct();
    }
    else if (doing.toLowerCase() === 'no' || doing.toLowerCase() === 'n')
    {
        incorrect ();
    }
    
}doing();


function challenge()
{
    let challenge = prompt ('Do I see my challenges as a disadvantage?');


    if(challenge.toLowerCase() === 'yes'|| challenge.toLowerCase() === 'y')
    {
        incorrect();
    }
    else if (challenge.toLowerCase() === 'no' || challenge.toLowerCase() === 'n')
    {
        correct();
     
    }
    
}challenge();


function personal()
{
    let personal = prompt ('Am I a good person?');


    if(personal.toLowerCase() === 'yes' || personal.toLowerCase() === 'y')
    {
        correct();
    
    }
    else if (personal.toLowerCase() === 'no' || personal.toLowerCase() === 'n')
    
    {
        incorrect ();
    }
}personal();


function sleep()
{
    let sleep = prompt ('Have I ever fallen asleep at school or work?');


    if (sleep.toLowerCase() === 'yes' || sleep.toLowerCase() === 'y')
    {
        incorrect();
    }
    else if (sleep.toLowerCase() === 'no' || sleep.toLowerCase() === 'n')
    {
        correct();
    
    }
    
}sleep();



function school()
{
    let school = prompt ('Have I ever run away from my school?');


    if (school.toLowerCase() === 'yes' || school.toLowerCase() === 'y')
    {
        alert ('the answer is correct, , actually I did it twice or more ^.^');
        score();
    
    }
    else if (school.toLowerCase() === 'no' || school.toLowerCase() === 'n')
    {
        alert ('the answer is incorrect, actually I did it twice or more ^.^');
    }
}school();


function guess()
{
    let guess = prompt ('There is a number in my mind and its between (0 - 10), you have 4 attempts, try to guess what is it?');

    let guessans = 5;
    
    for (let i = 0; i < 3 ; i++ ){
        if (guessans == guess)
        {
            rigth();
            
    
            break;
        }else
        {
            guess = prompt('please try again');
        }
    }
}guess();


function multi()
{
    let multi = prompt('What is my favourite video game?');

    let multians = ['pubg', 'call of duty', 'watch dogs 2'];
    for (let x =0;x<6;x++){
    for (let i = 0; i < multians.length ; i++ ){
        if (multi == multians[i])
        {
            vedioGame=true;
    
            break;
        }
    }
    if (vedioGame==true){
        rigth();
        break;
    }else{
        tryAgain();
    }
    
    }
    alert('the right answers are pubg, call of duty and watch dogs 2');
    alert('yor grade is ' + grade);


}multi();


function check()
{
    switch(doing)
    {
        case 'yes':
            console.log('yes');
            break;
        case 'No':
            console.log('No');
            break;
        default:
            console.log();
    
    }
    
    switch(challenge)
    {
        case 'yes':
            console.log('yes');
            break;
        case 'No':
            console.log('No');
            break;
        default:
            console.log();
    
    }
    
    switch(personal)
    {
        case 'yes':
            console.log('yes');
            break;
        case 'No':
            console.log('No');
            break;
        default:
            console.log();
    
    }
    
    switch(sleep)
    {
        case 'yes':
            console.log('yes');
            break;
        case 'No':
            console.log('No');
            break;
        default:
            console.log();
    
    }
    
    switch(school)
    {
        case 'yes':
            console.log('yes');
            break;
        case 'No':
            console.log('No');
            break;
        default:
            console.log();
    
    }
    
}check();


    
    
