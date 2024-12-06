let currentmoletile;
let currentplanttile;

let score=0;
let gameover=false;

window.onload = function(){
    Setgame();
}

function Setgame(){


    for(let i=0;i<9;i++){
        let title=document.createElement("div");
        title.id=i.toString();
        title.addEventListener("click",selecttile);
        document.getElementById("main").appendChild(title);



    }
    if(gameover){
        return;

    }
   setInterval(setmole,1000);
   setInterval(setplant,2000);

}

function getrandomtile(){
    let num=Math.floor(Math.random()*9)
    return num.toString();
}

function setmole(){
    
    if(gameover){
        return;

    }

    if(currentmoletile){
    currentmoletile.innerHTML="";

    }

    let mole=document.createElement("img");
    mole.src="./monty-mole.png"

    let num=getrandomtile();
    if(currentplanttile && currentplanttile.id==num){
        return;

    }
    currentmoletile=document.getElementById(num)
    currentmoletile.appendChild(mole)
}


function setplant(){
    if(gameover){
        return;

    }
   
    if(currentplanttile){
        currentplanttile.innerHTML="";


    }

    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";

    let num=getrandomtile();
    if(currentmoletile && currentmoletile.id==num){
        return;
    }
    
    currentplanttile=document.getElementById(num)
    currentplanttile.appendChild(plant)
    

}

function selecttile(){
    if(gameover){
        return;

    }
    if(this==currentmoletile){
        score+=10;
        document.getElementById('score').innerText=score.toString();
        
    }
    else if(this==currentplanttile){
        gameover=true;
        document.getElementById('score').innerText="GAME OVER:"+score.toString();

    }
}