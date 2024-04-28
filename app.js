'use strict';

var nom; 
var life, money; 
var awake = true;

var newLife, kill;

var run = document.getElementById("b2");
var fight = document.getElementById("b3");
var work = document.getElementById("b7");
var sleep = document.getElementById("b4");
var eat = document.getElementById("b5");
var show = document.getElementById("b6");

var actionbox = document.getElementById("actionbox");


function init(n, l, m)
{
    nom = n; 
    life = l;
    money = m;
}


function showMe()
{   
    log(`nom : ${nom}\n life : ${life}\n money : $${money}\n`);
}


function go()
{

    init("John Doe", 100, 1e6);

    show.addEventListener('click', event => {
        showMe();
    });
    
}

function log(message)
{   
    var nouveauMessage = document.createElement("p");
    nouveauMessage.textContent = message;
    actionbox.insertBefore(nouveauMessage, actionbox.firstChild);
}

function displayStatus(life, money, awake)
{   
    var status = document.getElementById("status");
    status.innerHTML = `Life : ${life}\n Money : $${money}\n Awake : ${awake}`;
}


window.onload = go();
window.onload = displayStatus(life, money, awake);

