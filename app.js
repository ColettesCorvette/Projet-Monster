'use strict';

var nom; 
var life, money; 
var awake = true;


var NewLife = document.getElementById("b1");
var Kill = document.getElementById("k");
var Run = document.getElementById("b2");
var Fight = document.getElementById("b3");
var Work = document.getElementById("b7");
var Sleep = document.getElementById("b4");
var Eat = document.getElementById("b5");
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

    init("John Doe", 100, 100);

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
    var monsterStyle = document.getElementById("monster");
    var borderWidth;

    status.innerHTML = `Life : ${life}\n Money : ${money}\n Awake : ${awake}`;

    life < 5 ? monsterStyle.style.backgroundColor = "red" : life < 10 ? monsterStyle.style.backgroundColor = "orange" :
    life < 15 ? monsterStyle.style.backgroundColor = "blue" : life > 20 ? monsterStyle.style.backgroundColor = "green" :null;

    money < 5 ? borderWidth = "1px" : money < 10 ? borderWidth = "3px" : money < 20 ? borderWidth = "5px" : borderWidth = "7px";
    monster.style.border = `${borderWidth} solid black`;

}

function run()
{   

    if (awake && life > 0) {
        life--;
        log("RUN - perte de 1 point de vie");
        displayStatus(life, money, awake);
    }
    else if (life <= 0)
        log("RUN - impossible car le monstre est mort");
    else
        log("RUN - impossible car le monstre dort");
}

function fight()
{
    if (awake && life > 3) {
        life-=3;
        log("FIGHT - perte de 3 point de vie");
        displayStatus(life, money, awake);
    }
    else if (life <= 2)
        log("FIGHT - impossible car le monstre est fatigue");
    else
        log("FIGHT - impossible car le monstre dort");
}

function work()
{
    if (awake && life > 0)
    {
        money += 2;
        life--;
        log("WORK - gain de 2 d'argent et perte d'un point de vie");
        displayStatus(life, money, awake);
    }
    else if(life <= 0)
        log("WORK - impossible car le monstre est mort");
    else
        log("WORK - impossible car le monstre dort");
}


function eat()
{
    if (awake && money > 3 && life>0)
    {
        money -= 3;
        life += 2;
        log("EAT - perte de 3 d'argent et gain de 2 points de vie");
        displayStatus(life, money, awake);
    }
    else if (money <= 2)
        log("EAT - impossible car le monstre n'a pas assez d'argent");
    else if (life <= 0)
        log("EAT - impossible car le monstre est mort");
    else
        log("EAT - impossible car le monstre dort");
}

function sleep()
{
    if(awake)
    {
        awake = false;
        log("SLEEP - Le monstre dort");
        displayStatus(life, money, awake);
        setTimeout(function(){
            awake = true;
            life++;
            log("SLEEP - Le monstre se reveille et gagne 1 pt de vie");
            displayStatus(life, money, awake);
        }, 7000);
    }
    else
        log("SLEEP - impossible car le monstre dort deja");
}


function hasard()
{   
    const tab = [run, fight, work, eat, sleep];
    const random = Math.floor(Math.random() * tab.length);
    const action = tab[random];

    action();

}

function newLife()
{   
    if (life === 0)
    {
        life++;
        log("NEW LIFE - Le monstre est ressuscite");
        displayStatus(life, money, awake);
    }
    else
        log("NEW LIFE - impossible car le monstre est deja vivant");
}

function kill()
{   
    if (life > 0) {
        life = 0;
        log("KILL - Le monstre est mort");
        displayStatus(life, money, awake);
    }
    else
        log("KILL - impossible car le monstre est deja mort");
}


window.onload = go();
window.onload = displayStatus(life, money, awake);
window.onload = setInterval(hasard, 12000);


let Array = [Run, Fight, Work, Eat, Sleep, NewLife, Kill];
for(let i = 0; i < Array.length; i++)
{
    Array[i].addEventListener('click', event => {
        switch(i)
        {
            case 0:
                run();
                break;
            case 1:
                fight();
                break;
            case 2:
                work();
                break;
            case 3:
                eat();
                break;
            case 4:
                sleep();
                break;
            case 5:
                newLife();
                break;
            case 6:
                kill();
                break;
        }
    });
}


/*
Run.addEventListener('click', event => {
    run();
});

Fight.addEventListener('click', event => {
    fight();
});

Work.addEventListener('click', event => {
    work();
});

Eat.addEventListener('click', event => {
    eat();
});

Sleep.addEventListener('click', event => {
    sleep();
});
*/