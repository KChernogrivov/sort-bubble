let mass = [];
for(let i = 0; i < 100; i++) mass[i] = Math.floor(Math.random() * 100);

or(let i = 0; i < mass.length; i++) {
    for(let j = 0; j < mass.length - 1; j++) {
        if(mass[j] > mass[j+1]) {
            let temp = mass[j]
            mass[j] = mass[j + 1]
            mass[j + 1] = temp
        }
    }
}