let mass = [];
for(let i = 0; i < 100; i++) mass[i] = Math.floor(Math.random() * 100);

for(let i = 0; i < mass.length; i++) {
    for(let n = i+1; n < mass.length; n++) {
        if(mass[i] < mass[n]) {
            let temp = mass[n]
            mass[n] = mass[i]
            mass[i] = temp
        }
    }
}