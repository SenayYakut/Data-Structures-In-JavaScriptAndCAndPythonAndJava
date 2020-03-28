//Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct elements.

//1- lets understand the problem well.
//2- lets example it. Write a good two arrays which are specific for the question.
    //A: 13,27,35,40,49,55,59
    //B: 17,35,39,40,55,58,60
//3-Brute force algorithm for this problem
    //if we go through B times for each element in A it takes O(N^2). we want to better than that.  Because we know we only need to go each element of every array. so it should be O(N+N) or O(2N) so BCR is O(N);
    //so far what we have 
        //Brute Force Algorithm O(N^2);
        //Optimal Algorithm ?
        //BCR O(N)
    //can we do binary search in sorted array. yes we can so we can reduce the second O(N) tO O(Log N)
    //So far what we have 
        //BFA O(N^2);
        //Improved Algorith O(N Log N);
        //Optimal Algorithm ?
        //BCR O(N)
  //ok we have reached to best run time but how about space complexity. think even if we had unsorted arry still we could have the best runtime with our solution but why the interviewer gave us sorted array than.
  //So our choice should be binary search in order to get BCR and O(1) Space       