
// 1)
let a="3";
let b="8";
let temp=a;
a=b;
b=temp;
console.log(a,b);

// 2)
let sonitaWeight=78;
let sonitaheight=1.69;
let sapidaWeight=92;
let sapidaheight=1.95;

let sonita_BMI=sonitaWeight/(sonitaheight**2);
let sapida_BMI=sapidaWeight/(sapidaheight**2);

console.log('Sonita BMI is' + sonita_BMI,'Sapida BMI is ' + sapida_BMI);
let higherBMI=sonita_BMI > sapida_BMI;
console.log(`Sonita's BMI is ${sonita_BMI} bigger than sapida BMI ${sapida_BMI}` );

console.log('Test data 2');
let sonitsMass=95;
let sonitaHeight=1.88;
let sapidaMass=85;
let sapidaHeight=1.76;

let sonitaBMI=sonitsMass/(sonitaHeight*sonitaHeight);
console.log(sonitaBMI);
let sapaidaBMI=sapidaMass/(sapidaHeight*sapidaHeight);
console.log(sapaidaBMI);

let higherBMIData2=sapaidaBMI>sonitaBMI;
console.log(`is sapida has a higher bmi than sonita ${higherBMI}`);



// 3)

if(sonita_BMI>sapida_BMI){
    console.log(`sonita BMI is ${sonita_BMI} bigger than sapida ${sapida_BMI}`)
}else{
    console.log(`sapida BMI is ${sapida_BMI} bigger than ${sonita_BMI}`)
}


// 3)
if(sapaidaBMI>sonitaBMI){
    console.log(`sapida BMI is ${sapida_BMI} bigger than ${sonita_BMI}`)
}else{
    console.log(`sonita BMI is ${sonita_BMI} bigger than sapida ${sapida_BMI}`); 
}