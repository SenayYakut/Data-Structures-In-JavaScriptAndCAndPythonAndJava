/*
You have some tasks in your Asana account. For each ith of them you know its deadlinei. Which is the last day by which is should be completed.As you can see in your calendar, todays's date is day.
Asana labels each task in accordance with itsdue date. 
If the task is due today or its already overdue, it is labeled as Today.
if the task is due within a week but not today. that is, its deadine is somewhere between day +1 and day +7 both inclusive it is labeled as Upcoming.
All other tasks are labeled as Later

Given an array of deadlines and todays date day, your goal is to find the number of tasks with each label type and return it as an array with the format [Today, Upcoming, Later], where Today, Upcoming, and Later are the number of tasks that correspond to that label.
*/

function tasksTypes(deadlines, day){
    const tasks1=[];
    const tasks2=[];
    const tasks3=[];
    const tasks=[];
    deadlines.forEach(deadline=>{
        if(deadline<=day){
            tasks1.push(deadline);
        }
        else if(deadline > day && deadline<=7){
            tasks2.push(deadline);
        }
        else{
            tasks3.push(deadline);
        }
    });
    tasks.push(tasks1.length);
    tasks.push(tasks2.length);
    tasks.push(tasks3.length);
    return tasks;
}
console.log(tasksTypes([1,2,3,4,5],2));//[2,3,0]