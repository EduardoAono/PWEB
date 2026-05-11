// Classe principal
class Conta {
    constructor(nome, banco, numeroConta, saldo) {
        this._nome = nome;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // GETs e SETs
    get nome() {
        return this._nome;
    }

    set nome(valor) {
        this._nome = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

// Classe Corrente
class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

// Classe Poupança
class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nome, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(valor) {
        this._dataVencimento = valor;
    }
}

// ===== Recebendo dados =====

// Conta Corrente
let corrente = new Corrente(
    prompt("Nome do correntista (Corrente):"),
    prompt("Banco:"),
    prompt("Número da conta:"),
    Number(prompt("Saldo:")),
    Number(prompt("Saldo especial:"))
);

// Conta Poupança
let poupanca = new Poupanca(
    prompt("Nome do correntista (Poupança):"),
    prompt("Banco:"),
    prompt("Número da conta:"),
    Number(prompt("Saldo:")),
    Number(prompt("Juros:")),
    prompt("Data de vencimento:")
);

// ===== Exibindo dados =====

console.log("=== CONTA CORRENTE ===");
console.log("Nome:", corrente.nome);
console.log("Banco:", corrente.banco);
console.log("Conta:", corrente.numeroConta);
console.log("Saldo:", corrente.saldo);
console.log("Saldo Especial:", corrente.saldoEspecial);

console.log("=== CONTA POUPANÇA ===");
console.log("Nome:", poupanca.nome);
console.log("Banco:", poupanca.banco);
console.log("Conta:", poupanca.numeroConta);
console.log("Saldo:", poupanca.saldo);
console.log("Juros:", poupanca.juros);
console.log("Data Vencimento:", poupanca.dataVencimento);