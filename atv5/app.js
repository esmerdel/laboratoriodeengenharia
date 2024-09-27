// Classe que representa uma tarefa
class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome; // Armazena o nome da tarefa
        this.descricao = descricao; // Armazena a descrição da tarefa
        this.status = 'pendente'; // Define o status inicial como 'pendente'
    }

    // Método para marcar a tarefa como concluída
    concluir() {
        this.status = 'concluída'; // Altera o status para 'concluída'
    }

    // Método para mostrar os detalhes da tarefa
    detalhes() {
        return `Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`; // Retorna as informações da tarefa
    }
}

// Classe que gerencia as tarefas
class GerenciadorDeTarefas {
    constructor() {
        this._tarefas = []; // Array que armazenará todas as tarefas
    }

    // Método para adicionar uma nova tarefa
    adicionarTarefa(tarefa) {
        this._tarefas.push(tarefa); // Adiciona a nova tarefa ao array
        this.renderizarTarefas(); // Chama o método para atualizar a lista de tarefas no HTML
    }

    // Método para listar todas as tarefas (opcional, mas pode ser útil)
    listarTarefas() {
        return this._tarefas; // Retorna o array de tarefas
    }

    // Método para marcar uma tarefa como concluída
    marcarComoConcluida(index) {
        if (this._tarefas[index]) { // Verifica se a tarefa existe
            this._tarefas[index].concluir(); // Marca a tarefa como concluída
            this.renderizarTarefas(); // Atualiza a lista de tarefas no HTML
        }
    }

    // Método para remover uma tarefa
    removerTarefa(index) {
        if (this._tarefas[index]) { // Verifica se a tarefa existe
            this._tarefas.splice(index, 1); // Remove a tarefa do array
            this.renderizarTarefas(); // Atualiza a lista de tarefas no HTML
        }
    }

    // Método para visualizar os detalhes de uma tarefa
    visualizarDetalhes(index) {
        if (this._tarefas[index]) { // Verifica se a tarefa existe
            alert(this._tarefas[index].detalhes()); // Exibe os detalhes da tarefa em um alerta
        }
    }

    // Método para renderizar a lista de tarefas no HTML
    renderizarTarefas() {
        const taskList = document.getElementById('task-list'); // Seleciona a lista de tarefas no HTML
        taskList.innerHTML = ''; // Limpa a lista antes de renderizar as novas tarefas

        this._tarefas.forEach((tarefa, index) => { // Percorre todas as tarefas
            const li = document.createElement('li'); // Cria um novo item de lista
            li.classList.add('task-item'); // Adiciona a classe para estilização
            li.innerHTML = `
                <span>${tarefa.nome} - ${tarefa.status}</span>
                <button onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                <button onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
                <button onclick="gerenciador.removerTarefa(${index})">Remover</button>
            `; // Define o conteúdo do item de lista
            taskList.appendChild(li); // Adiciona o item à lista
        });
    }
}

// Instancia o gerenciador de tarefas
const gerenciador = new GerenciadorDeTarefas();

// Captura o evento de envio do formulário
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('task-name').value; // Pega o nome da tarefa
    const descricao = document.getElementById('task-description').value; // Pega a descrição da tarefa

    const novaTarefa = new Tarefa(nome, descricao); // Cria uma nova instância da tarefa
    gerenciador.adicionarTarefa(novaTarefa); // Adiciona a nova tarefa ao gerenciador

    // Limpa os campos do formulário após adicionar a tarefa
    document.getElementById('task-name').value = ''; 
    document.getElementById('task-description').value = '';
});
