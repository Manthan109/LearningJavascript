let grade=function(marks,maxMarks){
    let percentage=(marks/maxMarks)*100;
    if(percentage<=100 && percentage>=90){
        return 'A';
    }
    else if(percentage<90 && percentage>=80){
        return 'B';
    }
    else if(percentage<80 && percentage>=70){
        return 'C';
    }
    else if(percentage<70 && percentage>=60){
        return 'D';
    }
    else if(percentage<60 && percentage>=0){
        return 'F';
    }
    else{
        return 'Enter valid marks';
    }
}

console.log(grade(17,20));