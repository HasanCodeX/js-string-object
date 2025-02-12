const  addrtess ='mymensingh';
const part = addrtess.slice(2,5);
console.log(part);

const sentence = 'i am a good student.';
// console.log(sentence.split(' '))
console.log(sentence.split('a'))


const friendsStr = 'rahim , karim, sulayman, mehedi, utso, billal';
const friends = friendsStr.split(',');
console.log(friends);
const realFriends = ['rahim', 'karim', 'sulayman', 'mehedi', 'utso', 'billal'];
console.log(realFriends.join());
console.log(realFriends.join('+'));