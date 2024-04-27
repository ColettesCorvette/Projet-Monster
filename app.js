'use strict';

var nom; 
var life, money; 
var awake = true;

var run, fight, work, sleep, eat, newLife, kill;
var show = document.getElementById("b6");

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


function go()
{
    init("John Doe", 100, 1e6);
    
    show.addEventListener('click', event => {
            showMe();
    });
    
}



go();
