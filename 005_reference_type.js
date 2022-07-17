//Part 02 reference(key:value) types
    //Object
    //Array
    //Function
//
//Object
console.log('//reference(Object) - (Part 01-1)//');
let person = {
    name : 'Mahdi',
    age : 38,
    admin : true
}
console.log(person);
//
console.log('//reference(Object) - (Part 01-2)//');
let person2 = {
    name : 'Ali',
    age : 40,
    admin : true
}
console.log('Name:', person2.name, ', Age:', person2.age,', Admin:', person2.admin);
//
console.log('//reference(Object) - (Part 01-3)//');
let person3 = {
    name : 'Mohammad',
    age : 32,
    admin : false
}
console.log('Name:', person3['name'], ', Age:', person3['age'], ', Admin:', person3['admin'] );

//Array
console.log('//reference(Array) - (Part 01)//');
let users = ['Mahdi','Zahra'];
    console.log(users[1]);
    //
    users [3] = 'hasan';
    users[2] = 18;
    users[4] = true;
        console.log(users);
    users[4] = false;
        console.log(users[4]);
console.log(users.length);


//Function
console.log('//reference(Function) - (Part 01)//');
function greet(fName) {
    console.log(fName);
}
greet('Mahdi');

function age (lName){
    console.log('Hello ' + lName);
}
age(38);

function note (fName){
    console.log('Hello ' + fName)
}
note ('mahdi');


// function addNumbers (num1 , num2){
//     console.log (num1 + num2);
// }
// addNumbers(5, 10);

//function declaration
//function expression



function members (man, woman, child1 ,child2){
    return man + woman + child1 + child2;
}
let nameFamily = members('Mahdi ' , 'Masomeh', ' Zahra', ' Zoha');
console.log (nameFamily)

let showBio = function (){
    console.log('First name = Mahdi');
    console.log('Last name = Alavi nasab');
    console.log('Age = 38');
}
showBio(); 
showBio(); 