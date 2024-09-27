// Classe Tarefa
class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'pendente';
    }

    concluir() {
        this.status = 'concluída';
    }

    detalhes() {
        return `Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`;
    }
}

// Classe GerenciadorDeTarefas
class GerenciadorDeTarefas {
    constructor() {
        this._tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this._tarefas.push(tarefa);
        this.renderizarTarefas();
    }

    listarTarefas() {
        return this._tarefas;
    }

    marcarComoConcluida(index) {
        if (this._tarefas[index]) {
            this._tarefas[index].concluir();
            this.renderizarTarefas();
        }
    }

    removerTarefa(index) {
        if (this._tarefas[index]) {
            this._tarefas.splice(index, 1);
            this.renderizarTarefas();
        }
    }

    visualizarDetalhes(index) {
        if (this._tarefas[index]) {
            alert(this._tarefas[index].detalhes());
        }
    }

    // Método para marcar uma tarefa como concluída
    marcarComoConcluida(index) {
    if (this._tarefas[index]) {
        this._tarefas[index].concluir();
        this.renderizarTarefas();
    }
}

// Método para marcar uma tarefa como concluída
marcarComoConcluida(index) {
    if (this._tarefas[index]) {
        this._tarefas[index].concluir();
        this.renderizarTarefas();
    }
}

// Método para renderizar tarefas no HTML
renderizarTarefas() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar

    this._tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.classList.add('task-item');

        // Adiciona a classe 'concluida' se o status da tarefa for 'concluída'
        const taskClass = tarefa.status === 'concluída' ? 'concluida' : '';

        li.innerHTML = `
            <div class="task-details ${taskClass}">
                <span>${tarefa.nome}</span> <!-- Apenas o nome da tarefa -->
            </div>
            <div class="task-buttons">
                <button onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                <button onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
                <button onclick="gerenciador.removerTarefa(${index})">Remover</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}
}


// Instanciando o gerenciador de tarefas
const gerenciador = new GerenciadorDeTarefas();

// Função para capturar o evento de submissão do formulário
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('task-name').value;
    const descricao = document.getElementById('task-description').value;

    const novaTarefa = new Tarefa(nome, descricao);
    gerenciador.adicionarTarefa(novaTarefa);

    // Limpar os campos do formulário após adicionar a tarefa
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
});
