let m, c, i, t, resul, expressao;

c = 1000;
i = 0.125;
t = 5;
resul = (1 + i);
expressao = Math.pow(resul, t);

m = (c * expressao);
m = m.toFixed(2);

console.log(m);