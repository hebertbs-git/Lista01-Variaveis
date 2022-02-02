let i, m, c, n, indice;

m = 90_000;
c = 60_000;
n = 24;
indice = (1 / n);

i = (Math.pow((m / c), indice)) - 1;
i = i * 100;
i = i.toFixed(3);

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i} %, pois após ${n} meses você teve que pagar ${m} reais.`)

