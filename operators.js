

function average(numArr){
    return numArr.reduce( (a,b) => a + b) /numArr.length;  
}

function median(numArr){
    if(numArr.length %2 !== 0){
        return Math.floor(numArr.length/2);
    }
    else{
        let medianNum = average([numArr.length/2, (numArr.length/2)-1]);
        return medianNum;
    }
}

// function mode(numArr){

// }





module.exports = {average, median}
