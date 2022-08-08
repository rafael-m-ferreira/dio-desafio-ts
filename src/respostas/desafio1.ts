// Resposta 1
const funcionario = {
  codigo: 10,
  nome: 'Mateus',
};

// Resposta 2
const funcionario2: { codigo: number; nome: string } = {
  codigo: 10,
  nome: 'Lucas',
};

// Respostas 3 e 4
interface Funcionario {
  codigo: number;
  nome: string;
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Pedro';

const funcionarioObj2: Funcionario = {
  codigo: 10,
  nome: 'Tiago',
};
