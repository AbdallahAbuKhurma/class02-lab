'use strict';

let welcome = alert ('Welcome to About Me page');


let name = prompt ('Please enter your name');


let doing = prompt ('Am I currently doing something I love?');


if(doing.toLowerCase() === 'yes'|| doing.toUpperCase() === 'y')
{
    alert ('the answer is correct');
}
else if (doing.toLowerCase() === 'no' || doing.toUpperCase === 'n')
{
    alert ('the answer is incorrect');
}


let challenge = prompt ('Do I see my challenges as a disadvantage?');


if(challenge.toLowerCase() === 'yes'|| doing.toUpperCase() === 'y')
{
    alert ('The answer is incorrect');
}
else if (challenge.toLowerCase() === 'no' || challenge.toUpperCase === 'n')
{
    alert ('The answer is correct');
}


let personal = prompt ('Am I a good person?');


if(personal.toLowerCase() === 'yes' || personal.toUpperCase() === 'y')
{
    alert ('the answer is correct');
}
else if (personal.toLowerCase() === 'no' || personal.toUpperCase === 'n')

{
    alert ('the answer is incorrect');
}


let sleep = prompt ('Have I ever fallen asleep at school or work?');


if (sleep.toLowerCase() === 'yes' || sleep.toUpperCase() === 'y')
{
    alert ('the answer is incorrect');
}
else if (sleep.toLowerCase() === 'no' || sleep.toUpperCase === 'n')
{
    alert ('the answer is correct');
}


let school = prompt ('Have I ever run away from my school?');


if (school.toLowerCase() === 'yes' || school.toUpperCase() === 'y')
{
    alert ('the answer is correct, , actually I did it twice or more ^.^');
}
else if (school.toLowerCase() === 'no' || school.toUpperCase === 'n')
{
    alert ('the answer is incorrect, actually I did it twice or more ^.^');
}


switch(doing)
{
    case 'yes':
        console.log('yes');
        break;
    case 'No':
        console.log('No');
        break;
    default:
        console.log(doing);

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
        console.log(challenge);

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
        console.log(personal);

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
        console.log(sleep);

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
        console.log(school);

}