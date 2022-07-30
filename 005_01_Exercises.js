// let num1 = 13;
// let num2 = 18;
// let num3 = 15;
// let num4 = 9;
// let num5 = 12;

// let total = num1 + num2 + num3 + num4 + num5;
// let average = total / 5;

// if ( average >= 12 ) {
//     console.log('قبول شدید')
// } else {
//     console.log('مشروط شدید')
// };
//-------------------------------

// function average (num1, num2, num3, num4, num5) {
//     let total = num1 + num2 + num3 + num4 + num5;
//     let average = total / 5;

//     if( average >= 12 ){
//         console.log('قبول شدید');
//     }
//     else{
//         console.log('مشروط شدید');
//     }
// };

// average (10, 12 ,14, 16, 18);
// average(15, 20 ,20 ,20,15);
//-----------------------------

function average (num1, num2, num3, num4, num5) {
    let total = num1 + num2 + num3 + num4 + num5;
    let average = total / 5;

    if( average >= 12 ){
        return 'قبول شدید';
    }
    else{
        return 'مشروط شدید';
    }
};

console.log(average (10, 12, 14, 16, 18));
console.log(average (15, 8,  7,  14, 15));