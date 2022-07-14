let count = 0;

function plus (){
    count ++;
    document.getElementById("counter").innerHTML = count;
}

function minus (){
    if(count > 0){
        count --;
        document.getElementById("counter").innerHTML = count;
    }
}

function reset (){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}




