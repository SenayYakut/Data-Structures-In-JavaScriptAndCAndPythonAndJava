/*
All four trainers have solved the task correctly. so the answer is(3+6+4+5)/4=4.5. Each Codefights Company Bot is trained by Engineers from that specific company. The way it works that a representative group of engineers from
each company is identified as trainers before the bo goes live, and thay CodeFight against the bot during a training phase. The current traing Algorithm is definitaley more complex.
But lets assume it works this way.
For each trainer we collect two pieces of informationper task[answerTime, correctness].where correctness is 1if the answer is correct, -1 if the answer is wrong and 0 if there is no answer is given.
In this case, Bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly.Given all of the training information of a specific task, calculate the bot's answer time. 
*/


function companyBotStrategy(dataArr){
    var trainingStr=0;  
    var divede=0;
    var total=0;
    for(let i=0; i<dataArr.length; i++){
        total+=dataArr[i][0];
        while(dataArr[i][1]===1){
            divede++;
        }
        if(divede<=0){
            trainingStr=0;
        }      
    }
    trainingStr=total/divede; 
    return total;
}
console.log(companyBotStrategy([[4,1],[4,-1],[0,0],[6,1]]));