// Classe Pessoa
class Pessoa {
    constructor(nome, email, data_nascimento, telefone) {
        this.nome = nome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
    }
    
    nomeCompleto() {
        return `${this.nome}`;
    }
}

//Classe Aluno
class Aluno extends Pessoa {
    constructor(nome, email, data_nascimento, telefone, curso, matriculaAluno) {
        super(nome, email, data_nascimento, telefone);
        this.curso = curso;
        this.matriculaAluno = matriculaAluno;
    }
}

//Classe Professor
class Professor extends Pessoa {
    constructor(nome, email, data_nascimento, telefone, areaAtuacao, linkLattes, matriculaProfessor) {
        super(nome, email, data_nascimento, telefone);
        this.areaAtuacao = areaAtuacao;
        this.linkLattes = linkLattes;
        this.matriculaProfessor = matriculaProfessor;
    }
}

// Função para armazenar informações em objetos
function criarObjetoPessoa() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data_nascimento = document.getElementById('dataNascimento').value;
    let telefone = document.getElementById('telefoneFixo').value || document.getElementById('telefoneCelular').value;
    let pessoa;

    // Se for aluno
    if (document.getElementById('camposAluno').style.display === 'block') {
        let curso = document.getElementById('curso').value;
        let matriculaAluno = document.getElementById('matriculaAluno').value;
        pessoa = new Aluno(nome, email, data_nascimento, telefone, curso, matriculaAluno);
    }

    // Se for professor
    if (document.getElementById('camposProfessor').style.display === 'block') {
        let areaAtuacao = document.getElementById('areaAtuacao').value;
        let linkLattes = document.getElementById('linkLattes').value;
        let matriculaProfessor = document.getElementById('matriculaProfessor').value;
        pessoa = new Professor(nome, email, data_nascimento, telefone, areaAtuacao, linkLattes, matriculaProfessor);
    }

    console.log(pessoa);
    return pessoa;
}

// Formatar Telefone Fixo
function formatarTelefoneFixo() {
    let telefoneFixo = document.getElementById('telefoneFixo');
    let valor = telefoneFixo.value.replace(/\D/g, '');
    if (valor.length > 10) valor = valor.slice(0, 10);
    telefoneFixo.value = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1)$2-$3');
}

// Formatar Celular
function formatarTelefoneCelular() {
    let telefoneCelular = document.getElementById('telefoneCelular');
    let valor = telefoneCelular.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.slice(0, 11);
    telefoneCelular.value = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1)$2-$3');
}

// Validar Nome
function validarNome() {
    let nome = document.getElementById('nome').value;
    let erroNome = document.getElementById('erroNome');
    if (!nome.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
        erroNome.textContent = 'Nome deve ser no formato "Nome Sobrenome".';
    } else {
        erroNome.textContent = '';
    }
}

// Validar o email
function validarEmail() {
    let email = document.getElementById('email').value;
    let erroEmail = document.getElementById('erroEmail');
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        erroEmail.textContent = 'Email deve ser no formato "xxx@xxx.xxx".';
    } else {
        erroEmail.textContent = '';
    }
}

// Validar a data de nascimento
function validarDataNascimento() {
    let dataNascimento = document.getElementById('dataNascimento').value;
    let erroDataNascimento = document.getElementById('erroDataNascimento');
    if (!dataNascimento.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        erroDataNascimento.textContent = 'Data de nascimento deve ser no formato "dd/mm/aaaa".';
    } else {
        erroDataNascimento.textContent = '';
    }
}

// Validar o telefone fixo
function validarTelefoneFixo() {
    let telefoneFixo = document.getElementById('telefoneFixo').value;
    let erroTelefoneFixo = document.getElementById('erroTelefoneFixo');
    if (!telefoneFixo.match(/^\(\d{2}\)\d{4}-\d{4}$/)) {
        erroTelefoneFixo.textContent = 'Telefone fixo deve ser no formato "(xx)xxxx-xxxx".';
    } else {
        erroTelefoneFixo.textContent = '';
    }
}

// Validar o telefone celular
function validarTelefoneCelular() {
    let telefoneCelular = document.getElementById('telefoneCelular').value;
    let erroTelefoneCelular = document.getElementById('erroTelefoneCelular');
    if (!telefoneCelular.match(/^\(\d{2}\)\d{5}-\d{4}$/)) {
        erroTelefoneCelular.textContent = 'Telefone celular deve ser no formato "(xx)xxxx-xxxx".';
    } else {
        erroTelefoneCelular.textContent = '';
    }
}

// Validar o curso (para alunos)
function validarCurso() {
    let curso = document.getElementById('curso').value;
    let erroCurso = document.getElementById('erroCurso');
    if (!curso) {
        erroCurso.textContent = 'Curso é obrigatório para alunos.';
    } else {
        erroCurso.textContent = '';
    }
}

// Validar a matrícula do aluno
function validarMatriculaAluno() {
    let matriculaAluno = document.getElementById('matriculaAluno').value;
    let erroMatriculaAluno = document.getElementById('erroMatriculaAluno');
    if (!matriculaAluno.match(/^\d{10}$/)) {
        erroMatriculaAluno.textContent = 'Matrícula de aluno deve ter 10 dígitos.';
    } else {
        erroMatriculaAluno.textContent = '';
    }
}

// Validar a matrícula do professor
function validarMatriculaProfessor() {
    let matriculaProfessor = document.getElementById('matriculaProfessor').value;
    let erroMatriculaProfessor = document.getElementById('erroMatriculaProfessor');
    if (!matriculaProfessor.match(/^\d{5}$/)) {
        erroMatriculaProfessor.textContent = 'Matrícula de professor deve ter 5 dígitos.';
    } else {
        erroMatriculaProfessor.textContent = '';
    }
}

// Validar a área de atuação (para professores)
function validarAreaAtuacao() {
    let areaAtuacao = document.getElementById('areaAtuacao').value;
    let erroAreaAtuacao = document.getElementById('erroAreaAtuacao');
    if (!areaAtuacao) {
        erroAreaAtuacao.textContent = 'Área de atuação é obrigatória para professores.';
    } else {
        erroAreaAtuacao.textContent = '';
    }
}

// Validar o link Lattes
function validarLinkLattes() {
    let linkLattes = document.getElementById('linkLattes').value;
    let erroLinkLattes = document.getElementById('erroLinkLattes');
    if (!linkLattes.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)) {
        erroLinkLattes.textContent = 'Link Lattes deve ser uma URL válida.';
    } else {
        erroLinkLattes.textContent = '';
    }
}

// Função para mostrar os campos específicos de acordo com o tipo selecionado
function mostrarCampos(tipo) {
    if (tipo === 'aluno') {
        document.getElementById('camposAluno').style.display = 'block';
        document.getElementById('camposProfessor').style.display = 'none';
    } else if (tipo === 'professor') {
        document.getElementById('camposAluno').style.display = 'none';
        document.getElementById('camposProfessor').style.display = 'block';
    }
}

// Função para validar o formulário no envio e armazenar as informações
function validarForm(event) {
    // Impedir que o formulário seja enviado se houver erros
    let valid = true;

    // Validar Nome
    if (!document.getElementById('nome').value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)) {
        document.getElementById('erroNome').textContent = 'Nome deve ser no formato "Nome Sobrenome".';
        valid = false;
    }

    // Validar Email
    if (!document.getElementById('email').value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('erroEmail').textContent = 'Email deve ser no formato "xxx@xxx.xxx".';
        valid = false;
    }

    // Validar Data de Nascimento
    if (!document.getElementById('dataNascimento').value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        document.getElementById('erroDataNascimento').textContent = 'Data de nascimento deve ser no formato "dd/mm/aaaa".';
        valid = false;
    }

    // Validar Telefone Fixo
    if (!document.getElementById('telefoneFixo').value.match(/^\(\d{2}\)\d{4}-\d{4}$/)) {
        document.getElementById('erroTelefoneFixo').textContent = 'Telefone fixo deve ser no formato "(xx)xxxx-xxxx".';
        valid = false;
    }

    // Validar Telefone Celular
    if (!document.getElementById('telefoneCelular').value.match(/^\(\d{2}\)\d{5}-\d{4}$/)) {
        document.getElementById('erroTelefoneCelular').textContent = 'Telefone celular deve ser no formato "(xx)xxxxx-xxxx".';
        valid = false;
    }

    // Validar Campos Específicos
    if (document.getElementById('camposAluno').style.display === 'block') {
        // Validar Curso
        if (!document.getElementById('curso').value) {
            document.getElementById('erroCurso').textContent = 'Curso é obrigatório para alunos.';
            valid = false;
        }

        // Validar Matrícula Aluno
        if (!document.getElementById('matriculaAluno').value.match(/^\d{10}$/)) {
            document.getElementById('erroMatriculaAluno').textContent = 'Matrícula de aluno deve ter 10 dígitos.';
            valid = false;
        }
    }

    if (document.getElementById('camposProfessor').style.display === 'block') {
        // Validar Área de Atuação
        if (!document.getElementById('areaAtuacao').value) {
            document.getElementById('erroAreaAtuacao').textContent = 'Área de atuação é obrigatória para professores.';
            valid = false;
        }

        // Validar Matrícula Professor
        if (!document.getElementById('matriculaProfessor').value.match(/^\d{5}$/)) {
            document.getElementById('erroMatriculaProfessor').textContent = 'Matrícula de professor deve ter 5 dígitos.';
            valid = false;
        }

        // Validar Link Lattes
        if (!document.getElementById('linkLattes').value.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)) {
            document.getElementById('erroLinkLattes').textContent = 'Link Lattes deve ser uma URL válida.';
            valid = false;
        }
    }

    if (!valid) {
        event.preventDefault(); // Impedir o envio do formulário se a validação falhar
    } else {
        criarObjetoPessoa(); // Cria o objeto Pessoa (Aluno ou Professor) ao submeter o formulário
    }
}

// Adicionar os eventos onBlur para validação dos campos
document.getElementById('nome').addEventListener('blur', validarNome);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('dataNascimento').addEventListener('blur', validarDataNascimento);
document.getElementById('telefoneFixo').addEventListener('blur', validarTelefoneFixo);
document.getElementById('telefoneCelular').addEventListener('blur', validarTelefoneCelular);
document.getElementById('curso').addEventListener('blur', validarCurso);
document.getElementById('matriculaAluno').addEventListener('blur', validarMatriculaAluno);
document.getElementById('matriculaProfessor').addEventListener('blur', validarMatriculaProfessor);
document.getElementById('areaAtuacao').addEventListener('blur', validarAreaAtuacao);
document.getElementById('linkLattes').addEventListener('blur', validarLinkLattes);

// Adicionar o evento onSubmit para validação do formulário
document.querySelector('form').addEventListener('submit', validarForm);

// Adicionar os eventos onInput para formatação automática dos telefones
document.getElementById('telefoneFixo').addEventListener('input', formatarTelefoneFixo);
document.getElementById('telefoneCelular').addEventListener('input', formatarTelefoneCelular);
