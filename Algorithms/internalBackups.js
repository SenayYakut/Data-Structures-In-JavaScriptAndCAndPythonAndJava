/*
One of the easiest ways to back up files is with an incremental backup.This method only backs up the files that have changed from the last back up.
You are given a list of changes that were made to the files in your database, where for each valid i, changes[i][0] is the timestamp of the time the change was made, and changes[i][1] is the file id.
Knowing the timestamp of the last backup lastBackUpTime, your task is to find the files which should be included in the next backup. Return the ids of the files that should be backed up as an array sorted in ascending order. 
*/

function internalBackups(lastBackUpTime, changes){
    let fileIds=[];
    changes.forEach(change=>{
        if(change[0]>lastBackUpTime){
            fileIds.push(change[1]);
        }
        fileIds.sort((a,b)=>{
            return a-b;
        })
    });
    return fileIds;
}
console.log(internalBackups(461620205,[[461620203,1],[461620204,2],[461620205,6],[461620207,3],[461620207,5],[461620208,1]]));//[1,3,5]