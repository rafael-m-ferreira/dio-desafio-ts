enum Trabalho {
  Programador,
  Analista,
}

type Humano = {
  nome: string;
  idade: number;
  profissao: Trabalho;
};

let pessoa1: Humano = {
  nome: 'Ana',
  idade: 35,
  profissao: Trabalho.Programador,
};

let pessoa2: Humano = {
  nome: 'Ester',
  idade: 20,
  profissao: Trabalho.Analista,
};

let pessoa3: Humano = {
  nome: 'Sara',
  idade: 41,
  profissao: Trabalho.Programador,
};

let pessoa4: Humano = {
  nome: 'Debora',
  idade: 18,
  profissao: Trabalho.Analista,
};
