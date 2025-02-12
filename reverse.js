const sentence = 'i want to learn programming.'
// it will be reverse
let reverse =''
for(const latter of sentence){
    // console.log(latter);
reverse = latter + reverse;

}
console.log(reverse)

let rev = '';
for ( let i = 0; i <sentence.length; i++){
//     console.log(i);
// console.log(sentence[i]);
const latter = sentence[i];
rev = latter + rev;
}

//shortcut
const reversed = sentence.split(' ').reverse().join(' ');
console.log(reversed)