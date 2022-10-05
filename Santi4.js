let piramide = '';   

for (let i = 0; i < 10; i++) {
    for ( let j = 0; j < i; j++) {
        piramide += '*';
    }
    piramide += '\n';
    
}

console.log(piramide);