var aluno1 = Object();
aluno1.ra = "00001234";
aluno1.nome = "pamonhoso";
console.log(`ra = ${aluno1.ra} nome ${aluno1.nome}`)

var aluno2 = {};
aluno2.ra = "00001235";
aluno2['nome'] = "soposo";

console.log(`ra = ${aluno2.ra} nome ${aluno2.nome}`)

var aluno3 = {"ra":12345, "nome":"Ariovaldo"};

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function(){
        return `ra = ${this.ra} nome ${this.nome}`
    }
}

var aluno4 = new Aluno("123", "bacalhau")
console.log(aluno4.MostraDados())

function Aluno2(){
    var ra;
    var nome;

    this.SetRa = function(ra){
        this.ra = ra;
    }

    this.SetNome = function(nome){
        this.nome = nome;
    }
}

var aluno5 = new Aluno2();
aluno5.SetNome("afalnabeto")
aluno5.SetRa(567657)

function AlunoADS(){
    var numLab;
    this.setNumLab = function(value){
        this.numLab = value;
    }

    this.getNumLab = function(){
        return this.numLab;
    }
}

AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS();
aluno7.SetNome("valtereco")
aluno7.SetRa("1321")
aluno7.setNumLab("6677")


class Aluno1{
    constructor(){
        this._ra;
        this._nome;
    }
    setNome(value){
        this._nome = value;
    }
    
    setRa(value){
        this._ra = value;
    }

    getNome(){
        return this._nome;
    }

    getRa(){
        return this._ra;
    }
}

class AlunoADS1 extends Aluno1{
    constructor(){
        super();
        this._numLab;
    }

    setNumLab(value){
        this._numLab = value;
    }

    getNumLab(){
        return this._numLab;
    }
}

var objAlunoADS = new AlunoADS1();

objAlunoADS.setNome("joãosinho");
objAlunoADS.setRa(5213132);
objAlunoADS.setNumLab(3);

console.log(objAlunoADS)

class contaBnacaria{
    #cpf;

    constructor(nome, saldoInicial){
        this.nome = nome;
        this.saldoInicial = saldoInicial;
    }

    setCpf(cpf){
        this.#cpf = cpf
    }

    getCpf(){
        return this.#cpf;
    }

}

objContaBancaria = new contaBnacaria("valter", 500);
objContaBancaria.setCpf("9999999999")

console.log(objContaBancaria)
