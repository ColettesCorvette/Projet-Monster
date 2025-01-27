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


/**
 * Initialise les paramètres du monstre
 * @param {nom du monstre} n 
 * @param {nombre de points de vie} l 
 * @param {somme d'argent de départ du monstre} m 
 */
function init(n, l, m)
{
    nom = n; 
    life = l;
    money = m;
}

/**
 * Affiche les logs du monstre (nom, points de vie, argent)
 */
function showMe()
{   
    log(`nom : ${nom}\n life : ${life}\n money : $${money}\n`);
}

/**
 * Initialise le monstre et ajoute un event listener sur le bouton "show"
 */
function go()
{

    init("John Doe", 100, 100);

    show.addEventListener('click', event => {
        showMe();
    });
    
}

/**
 * Creer un nouveau paragraphe et l'insère en tête dans la div actionbox
 * @param {message du log} message 
 */
function log(message)
{   
    var nouveauMessage = document.createElement("p");
    nouveauMessage.textContent = message;
    actionbox.insertBefore(nouveauMessage, actionbox.firstChild);
}

/**
 * Met à jour l'affichage des paramètres du monstre
 * Change la couleur de fond du monstre selon le nombre de points de vie
 * Change l'épaisseur de la bordure du monstre selon la somme d'argent
 * @param {vie du monstre} life 
 * @param {argent du monstre} money 
 * @param {statut du monstre : réveillé ou endormi} awake 
 */
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

/**
 * Met à jour la vie du monstre et affiche un message si le monstre est mort, 
 * dort ou a perdu un point de vie
 */
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

/**
 * Met à jour la vie du monstre et affiche un message si le monstre est mort, 
 * dort ou a perdu des points de vie
 */
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

/**
 * Met à jour la somme d'argent et la vie du monstre et affiche un message si 
 * le monstre est mort, dort, n'a pas assez d'argent ou a perdu un point de vie
 */
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

/**
 * Met à jour la somme d'argent et la vie du monstre et affiche un message si 
 * le monstre est mort, dort, n'a pas assez d'argent ou a perdu des point de vie
 */
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

/**
 * Timer de 7 secondes pour mettre le monstre en mode sommeil
 */
function sleep()
{
    if(awake && life > 0)
    {
        awake = false;
        log("SLEEP - Le monstre dort");
        displayStatus(life, money, awake);
        setTimeout(function () {
            awake = true;
            life++;
            log("SLEEP - Le monstre se reveille et gagne 1 pt de vie");
            displayStatus(life, money, awake);
        }, 7000);
    }
    else if (life === 0)
    { 
        log("SLEEP - impossible car le monstre est mort");
    }
    else
        log("SLEEP - impossible car le monstre dort deja");
}


/**
 * Fonction qui choisit aléatoirement une action parmi les 5 actions possibles
 * (run, fight, work, eat, sleep) et l'exécute toutes les 12 secondes
 */
function hasard()
{   
    const tab = [run, fight, work, eat, sleep];
    const random = Math.floor(Math.random() * tab.length);
    const action = tab[random];

    action();

}

/**
 * Ressuscite le monstre si il est mort
 */
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

/**
 * Tue le monstre s'il est vivant
 */
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