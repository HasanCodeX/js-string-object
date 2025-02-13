const mobile = { 
    brand : 'apple',
    price : ' 120000',
    color : 'black'



}

for (const prop in mobile ){
    console.log(prop)
    console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys ){
    console.log(key,mobile[key])
}