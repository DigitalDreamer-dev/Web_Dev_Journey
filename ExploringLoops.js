/* write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named sum*/
// let sum = 0;
// let i = 1;
// while(i<=5){
//     sum+=i;
//     i++;
// }
// console.log(sum);
// 
/* write a do while loop that prompts a user to enter "stop". store each tea type in an array names `teacollection`*/
// let teaCollection = [];
// let tea;
// do{
//     tea = prompt("Enter your favourite tea (type "stop" to finish")");
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }while(tea !== "stop");

/*write a do while loop that adds number from 1to 3 and stores the result in a variable named "total".*/
let i = 1;
let total = 0;
do{
   total+=i;
   i++
}while(i<=3)
console.log(total);
/*write a for loop that multiplies each element in the array [2,4,6] by 2 and stores results in a new array named multipleNumbers*/
let multipleNumbers = [];
let numbers = [2,4,6];
for (let i = 0; i < numbers.length; i++) {
    // takeNumbers = numbers[i]*2;
    multipleNumbers.push(numbers[i]*2);   
}
console.log(multipleNumbers);

/*write a for loop that lists all the cities in the array [paris,new york,tokyo,london] and stores each city in a new array named citylist*/ 
let citylist = [];
let cities = ["paris","New york","tokyo","london"];
for(let i=0; i<cities.length; i++){
    // const mycities = cities[i]
    citylist.unshift(cities[i]);
}
console.log(citylist);
