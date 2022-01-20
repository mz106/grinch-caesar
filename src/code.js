
// En (x) = (x + n) mod 26    if (num % 2 === 0)

const message = "operation successful. Assembly line compromised and naughty/nice items switched. Machine sabotaged. Green good to go.";

function encodeFour(str, shift) {
    const strArr = str.split("");
    console.log(strArr);
    const finalArr = [];
    strArr.forEach((item) => {
        if(item === " ") {
            finalArr.push(item);
        } else {
            const code = item.charCodeAt(0) + shift;
            const newChar = String.fromCharCode(code);
            finalArr.push(newChar);
        }    
    });
    // console.log(strArr);
    // const code = str.charCodeAt(0) + 1;
    // const newChar = String.fromCharCode(code);
    
    return finalArr.join("");
    
};

const encodedMessage = encodeFour(message, 4);
console.log(encodedMessage);


function decodeFour(str, shift) {
    const arr = str.split("");
    const finalArr = [];
    arr.forEach((item) => {
        if(item === " ") {
            finalArr.push(item);
        } else {
            const code = item.charCodeAt(0) - shift;
            const newChar = String.fromCharCode(code);
            finalArr.push(newChar);
        }
    });
    return finalArr.join("");
};

console.log(decodeFour("Xli Kvmrgl lew fiir gsrxegxih erh epp mw ksmrk eggsvhmrk xs tper", 4));
