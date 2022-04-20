const randomnumbers =[22,33,12,5,2,8]

const filterdarray= randomnumbers.filter(n=>{
    return n<10;
});

console.log("Greater than 10 :-" + filterdarray)