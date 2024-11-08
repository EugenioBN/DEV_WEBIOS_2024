let alunos = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2°B' },
    { nome: 'Marta', idade: 15, nota: 5, ano: '3°C' },
    { nome: 'Bruno', idade: 16, nota: 6, ano: '2°C' },
    { nome: 'Brenno', idade: 19, nota: 6, ano: '3°C' },
    { nome: 'Veronica', idade: 16, nota: 9, ano: '2°C' },
    { nome: 'Maria', idade: 14, nota: 4, ano: '1°F' }
  ];
  
  console.log(alunos);
  
  let infoBrenno = alunos.find(aluno => aluno.nome === 'Brenno');
  console.log(infoBrenno);
  
  let notaMaria = alunos.find(aluno => aluno.nome === 'Maria').nota;
  console.log(notaMaria);
  
  let alunosJSON = JSON.stringify(alunos, null, 2);
  console.log(alunosJSON);
  