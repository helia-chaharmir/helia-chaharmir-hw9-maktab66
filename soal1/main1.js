function timeToEat(timeString) {

    const timeArray=Number(timeString.split(":"))
    return timeArray 
    const timeFormat=timeArray[1].split(" ")
    if(timeFormat.includes("p.m.")){
        return timeFormat 
    }
  

    
}

console.log(timeToEat("12:50 p.m."))