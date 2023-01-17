import{greet,calculate} from "./utils.js";


//ex1
const square = (num)=>Math.sqrt(num);

//ex2

const isPositive = (num)=>{
    if(num>0){
        return true;
    }else{
        return false;
    }
}

//ex3

const formatName =(firstName,lastName,separator) =>{
    if(!separator){
        return `${firstName} ${lastName}`;
    }else{
        return `${firstName}${separator}${lastName}`;
    }
}

//ex4 
greet("Yuval",true);

//ex5
console.log(calculate(5,6,"add"));

//ex6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];

const merged =[...team,...captain];

console.log(merged);

//ex9
const user = ['yuval','weiss',21];
const [firstName,lastName,age] = user;
console.log(firstName);
console.log(lastName);
console.log(age);

//ex10 
const letters = ['letter a','letter b','letter c'];
const [a,b,c] = letters;

console.log(a);
console.log(b);
console.log(c);

//ex11
const actors =[
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
];

const firstActor = actors[0];
console.log(firstActor);
const secondActor = actors[1];
console.log(secondActor);
const thirdActor = actors[2];
console.log(thirdActor);
const leoBDay = thirdActor.birthdate;
console.log(leoBDay);


//ex12
const sortDescending = (array)=>array.sort();
console.log(sortDescending([3,1,9,5]));

//ex13

class Person {
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    sayHello(){
        return `Hello, my name is ${this.name} and I am ${age} years old`;
    }
};

const yuval = new Person("yuval",21);
console.log(yuval.sayHello());