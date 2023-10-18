
 //QUOKKAAAA  

let animals=["tiger","elephant"]

animals.push("lion")
console.log(animals);

animals.pop()
console.log(animals);

animals.unshift("black Panther")
console.log(animals);

animals.shift()
console.log(animals);

let animals2=["dog","cat"]
let combined=animals.concat(animals2)
console.log(combined);


let numbers=[[1,[6,6],2],[3,4]]
console.log(numbers);
let FlatNumber=numbers.flat()
console.log(FlatNumber);
let longFlat=numbers.flat(Infinity)
console.log(longFlat);
console.log("\n");




//SPLICE REMOVE (INDEX, DELETE COUNT,NOT USE IN REMOVE ONLY USE HERE TOT ADD) 3 PARAMETRES BUT REMOVE USE 2 PARA METER
//SPLICE(START INDEX, NO OF DELETE COUNT NEXT TO THE INDEX & 1 MEANS IT SELF)
//SPLICE ALWAYS REMEMBER IT MODIFY ITSOWN ARRAY

let spliceTry=[1,2,3,4,5,6]
console.log(spliceTry);
console.log("\n");


spliceTry.splice(0,1) //STRT INDEXC 0 AND DELETE 1 COUNT
console.log(spliceTry);
console.log("\n");

spliceTry=[1,2,3,4,5,6,7]
spliceTry.splice(0,2)
console.log(spliceTry);
console.log("\n");


spliceTry=[1,2,3,4,5,6,7]
//NOW IM GOING TO DELETE 3,4,5,6  .SO INDEX=2  & DELETE COUNT=4
//THE OUTPUT WILL BE [1,2,7]
spliceTry.splice(2,4)
console.log(spliceTry);
console.log("\n");



//SPLICE ADD USE 3 PARAMETER (INDEX SHOULD START, 0(means no deleting) , ADDING ELEMNTS HERE)
//(START INDEX, COUNT=ALWAYS 0 , SPECIFY THE ELEMENTS TO ADD HERE)
let spliceAdd=[2,3,4]
//GOING TO ADD 5,6 AT LAST
console.log(spliceAdd);
spliceAdd.splice(3,0,5,6)
console.log(spliceAdd);
console.log("\n");

//NOW I PUT  0 ,1 INFRONT OF ARRAY
console.log(spliceAdd);
spliceAdd.splice(0,0,0,1)
console.log(spliceAdd);
console.log("\n");

//now i put C in bw B AND D
let spliceAddString=["a","b","d","e"]
spliceAddString.splice(2,0,"c")
console.log(spliceAddString);
console.log("\n");



//SPLICE REPLACE 3 PARAMETER (STRT INDEX,DELETE 1 MEANS ITSELF AND GOES ON , ADD ELEMNT HERE TO REPLACE)
let spliceReplace=["r","s","x","u","y"]
//now im going to Replace "X" with "T"
console.log(spliceReplace);
spliceReplace.splice(2,1,"t")
console.log(spliceReplace);
console.log("\n");




//SLICE METHORD NOT MODIFY ITS ARRAY LIKE SPLICE
//IT MODIFY IN TO NEW ARRAY
//SLICE 2 PARAMETER (STRT INDEX , END INDEX BEFORE ACTUAL NUMBER (just add +1 with ending index))
let slice=["a","b","c","d"]
//im goint to fetch B and C to new array
console.log(slice);
var newSplice=slice.slice(1,3)
console.log(newSplice);
console.log("\n");


//IF IM NOT GIVING PARAMETERS ITS FETCH THE ENTIRE ARRAY TO NEW SPLICE ARRAY
console.log(slice);
var newSplice=slice.slice() //NO PARAMTERT GIVEN(AUTOMATICALLY CHODSE INDEX 0 TO LAST INDEX)
console.log(newSplice);


////IF IM GIVING ONLY 1  PARAMETERS , ITS FETCH THE ARRAY UP TO LAST INDEX
console.log(slice);
var newSplice=slice.slice(2) // ONLY 1 PARAMETER = START INDEX = 2 , AND IT AUTOMATICALLY CHOOSE LAST INDEX
console.log(newSplice);

