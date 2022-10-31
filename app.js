//GUESS A NUMBER BETWWEN 1-20
let random=Math.floor(Math.random()*20+1)
let scorPc=10;
let recordPc=0;
//When i click the check button, i run it
document.querySelector(".check").onclick=function(){

//guess is right
const guess=document.querySelector(".guess").value;
if(guess==random){
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".question").textContent=random;
    document.querySelector(".message").textContent="Congratilations ☘️";
    //update record
    if(scorPc>recordPc){
        recordPc=scorPc;
        document.querySelector(".best-soccer").textContent=scorPc;

    }}else{
       if(scorPc>1){
           scorPc--;
            let messa= document.querySelector(".message");
           guess<random?(messa.textContent="Increase➕"):(messa.textContent="decrease➖");
           document.querySelector(".scor").textContent=scorPc;
           
       }else{
           let messa= document.querySelector(".message");
           messa.textContent="You Lost";
           document.querySelector(".scor").textContent=scorPc;
           document.querySelector("body").style.backgroundColor="red"
       } 

    }
    
}
//again button to active
document.querySelector(".btn").onclick=()=>{
    random=Math.floor(Math.random()*20+1);
    document.querySelector("body").style.backgroundColor="#2d3436";
    document.querySelector(".question").textContent="?";
    document.querySelector(".message").textContent="Starting Guess"
    scorPc=10;
    document.querySelector(".scor").textContent=scorPc;
    document.querySelector(".guess").value="";



}

document.querySelector(".guess").onkeydown=function(keyb){
    if(keyb.keyCode==13){
        document.querySelector(".check").onclick();
    }
    if(keyb.keyCode==82){
        document.querySelector(".btn").onclick();
    }
}

