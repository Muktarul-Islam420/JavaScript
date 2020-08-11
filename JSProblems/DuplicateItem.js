var name = ['Rahim', 'Karim', 'Jodu', 'Modhu', 'Kola', 'Chola', 'Mula', 'Jodu', 'Modhu'];
var UniqName = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = UniqName.indexOf(element);
    if (index == -1) {
        UniqName.push(element);
    }

}

console.log(UniqName);