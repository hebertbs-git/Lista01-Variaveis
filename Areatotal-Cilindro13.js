let raio, altura, Al, Ab, At;

raio = 5;
altura = 8;

Al = 2 * (Math.PI) * raio * altura;
Ab = (Math.PI) * (Math.pow(raio, 2));
At = (2 * Ab) + Al;

console.log(At);
