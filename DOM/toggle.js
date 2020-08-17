let isPurple= false;
document.querySelector("button").addEventListener("click",function(){
    if (isPurple){
        document.querySelector("body").style.background="white";
        isPurple=false;
    }  else{
        document.querySelector("body").style.background="purple";
        isPurple=true;
    }

    });
 

