const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");

const audio = document.getElementById("myaudio");

var answer = 0;

function generate_equation(){
    var num1=Math.floor(Math.random()*13);
    var num2=Math.floor(Math.random()*13);
    var dummy1=Math.floor(Math.random()*13);
    var dummy2=Math.floor(Math.random()*13);
    var allanswer = [];
    var swtchanswer = [];

    answer = num1 + num2;
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;

    allanswer=[answer,dummy1,dummy2];

    for (i = allanswer.length;i--;){
        swtchanswer.push(allanswer.splice(Math.floor(Math.random()*(i+1)),1)[0]);
    }

    option1.innerHTML=swtchanswer[0];
    option2.innerHTML=swtchanswer[1];
    option3.innerHTML=swtchanswer[2];

}

option1.addEventListener("click",function(){
    if (option1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click",function(){
    if (option2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener("click",function(){
    if (option3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();
