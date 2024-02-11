//filter method

const cars = ["suziki", "toyota", "mitsubishi", "audi", "lamborgini"];

const shortWords = cars.filter(getShortWords);
const longWords = cars.filter(getLongWords);

console.log(shortWords);

function getShortWords(element){
    return element.length <= 4;
}

function getLongWords(element){
    return element.length > 4;
}
