const array = ["non","asal","banan","olma","aziza","Gul","mashina"];

const odd = []
const eventi = []

for (const bukva of array) {
    if (bukva.includes('n')) {
        odd.push(bukva);
    } else {
        eventi.push(bukva);
    }
}
console.log(odd);
console.log(eventi);

