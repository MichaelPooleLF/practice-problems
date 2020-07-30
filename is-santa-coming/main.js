  function isSantaComing(dateObject) {
    return (dateObject.getDate() === 24 && dateObject.getMonth() === 11);
}

console.log("Is Santa Coming on 12/24/2001?", isSantaComing(new Date(2001, 11, 24)));
console.log("Is Santa Coming on 7/4/2018?", isSantaComing(new Date(2018, 7, 4)));
console.log("Is Santa Coming on 12/23/1995? at 2359 and 59 seconds?", isSantaComing(new Date(1995, 11, 23, 23, 59, 59)));
console.log("Is Santa Coming Today at this time?", isSantaComing(new Date(Date.now())));
