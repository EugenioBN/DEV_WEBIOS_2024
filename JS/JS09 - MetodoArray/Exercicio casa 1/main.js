let numeros = [17, 43, 8, 4, 97, 56, 29];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }
});
