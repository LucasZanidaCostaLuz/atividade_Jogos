class Jogadores {
    constructor(desenvolvedor, nome, impostor) {
        this.id = this.generateId(),
            this.desenvolvedor = desenvolvedor,
            this.nome = nome,
            this.impostor = impostor
    }

    generateId() {
        return Math.floor(Math.random() * 1000000) + 1;
    }
}

export default Jogadores