'use strict';

var nom; 
var life, money; 
var awake = true;

var run, fight, work, sleep, eat, show, newLife, kill;

function init(n, l, m)
{
    nom = n; 
    life = l;
    money = m;
}


function showMe()
{
    alert(`nom : ${nom}\n life : ${life}\n money : ${money}\n`);
}



init("John Doe", 100, 1e6);

showMe();