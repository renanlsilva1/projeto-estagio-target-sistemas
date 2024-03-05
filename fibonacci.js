function fibonacci(num) {
    let anterior = 0;
    let atual = 1;
    let contador = 0;

    for (let i = 0; i < num; i++){
        contador = anterior + atual
        anterior = atual
        atual = contador

        if (num == contador) {
            console.log(`O número ${num} faz parte da sequência de Fibonacci!`);
            return;
        }
        
    }
        if (num != contador); {
            console.log(`O número ${num} não faz parte da sequência de Fibonacci!`);
        }
}

fibonacci(34);