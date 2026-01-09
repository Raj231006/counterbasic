let counthome=0
let countguest=0
let CountEl1=document.getElementById("count-home")
let CountEl2=document.getElementById("count-guest")

function increment1home(){
    counthome+=1
    CountEl1.textContent=counthome;
}
function increment1guest(){
    countguest+=1
    CountEl2.textContent=countguest;
}
function increment2home(){
    counthome+=2
    CountEl1.textContent=counthome;
}
function increment2guest(){
    countguest+=2
    CountEl2.textContent=countguest;
}
function increment3home(){
    counthome+=3
    CountEl1.textContent=counthome;
}
function increment3guest(){
    countguest+=3
    CountEl2.textContent=countguest;
}
function restart(){
    counthome=0
    countguest=0
    CountEl2.textContent=countguest;
    CountEl1.textContent=counthome;

}
function penalty(){
    counthome-=1
    countguest-=1
    CountEl2.textContent=countguest;
    CountEl1.textContent=counthome;  

}


