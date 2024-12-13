const crypto = require('crypto');
function hashCal(index){
let inp = 0;
while(true){

    let inpstr = inp.toString();

let hash = crypto.createHash('sha256').update(inpstr).digest('Hex');
 if(hash.startsWith(index)){
    return{hash:hash};
 }
 inp++;
}
}
const result = hashCal('000000');
console.log(`Hash: ${result.hash}`)
