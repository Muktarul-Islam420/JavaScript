function callBack(name, age, task) {
    console.log('hello', name);
    console.log('Your agr is', age);
    task();

}

function handWash() {
    console.log('Wash your hand with soap.');
}

function takeBath() {
    console.log('Take bath carefully.');
}

function goBack() {
    console.log('Back home quickly.');
}
callBack('karim', 19, handWash);
callBack('Rahim', 18, takeBath);
callBack('Modhu', 21, goBack);