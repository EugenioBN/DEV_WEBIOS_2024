let aluno = [
  { nome: 'Ana', idade: 17, nota: 8, ano: '2°B' },
  { nome: 'Marta', idade: 15, nota: 5, ano: '3°C' },
  { nome: 'Bruno', idade: 16, nota: 6, ano: '2°C' },
  { nome: 'Brenno', idade: 19, nota: 6, ano: '3°C' },
  { nome: 'Veronica', idade: 16, nota: 9, ano: '2°C' },
  { nome: 'Maria', idade: 14, nota: 4, ano: '1°F' }
];
  
console.log(aluno);
  
console.log(aluno[2])

console.log(aluno[5].nota)
// JSON > OBJ = parse /// OBJ > JSON = Stringfy
let JsonAluno = JSON.stringify(aluno)
console.log(JsonAluno)