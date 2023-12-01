let circularProgress= document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue=100,
    speed=100;


let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(#ffa500 ${progressStartValue*3.6}deg, #ffffff22 0deg)`


    if(progressStartValue==progressEndValue){
        clearInterval(progress);
     }

     console.log(progressStartValue)
},speed);

