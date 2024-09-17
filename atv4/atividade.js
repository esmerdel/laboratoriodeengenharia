class Pessoa {
    constructor(nome, sobrenome, email, data_nascimento) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._data_nascimento = data_nascimento;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get data_nascimento() {
        return this._data_nascimento;
    }

    set data_nascimento(data_nascimento) {
        this._data_nascimento = data_nascimento;
    }

    nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }
}

//Classe Aluno 
class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, curso) {
        super(nome, sobrenome, email, data_nascimento);
        this._curso = curso;
    }

    get curso() {
        return this._curso;
    }

    set curso(curso) {
        this._curso = curso;
    }
}

//Classe Professor
class Professor extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, area_atuacao, link_lattes) {
        super(nome, sobrenome, email, data_nascimento);
        this._area_atuacao = area_atuacao;
        this._link_lattes = link_lattes;
    }

    get area_atuacao() {
        return this._area_atuacao;
    }

    set area_atuacao(area_atuacao) {
        this._area_atuacao = area_atuacao;
    }

    get link_lattes() {
        return this._link_lattes;
    }

    set link_lattes(link_lattes) {
        this._link_lattes = link_lattes;
    }
}
