/*
Projeto Banco deve conter opções de: Sacar, depositar, ver saldo, extrato e transferência.
Tambem é preciso de validacçao de senha, 3589.
Autor: Victor Hugo MS - victorhmszzero
Versão: 1.01
*/

var saldo = 100.5; //Float
var extrato_notes ="Extrato de Agosto 2022 \n HBOMAX42523 ------------------------ -R$ 42,23 \n PERNABUCANAS6352 ------------------- -R$212,12 \n SHEN51243 -------------------------- +R$ 47,80 \n +BOBS_Lanche7173 -------------------- -R$ 36,82 \n RIACHUELO_Toalha5756 --------------- -R$ 28,12 \n PTRANS_Bilhete1252 ---------------- -R$ 74,62 \n GMTELECOM_Internet42533 ------------ -R$250,50 \n LOJAOBRAS_29411 -------------------- -R$250,50 \n BRADESCO_Credito9867 --------------- -R$550,50 \n GABSLINDO_Transf0003 --------------- +R$ 00,01 \n SABESP62341 ------------------------ R$117,80 \n ENEL513612 ------------------------- -R$220,20 \n ULTRAGAZ83461 ---------------------- -R$ 90,80 ";
const senha = 3589;
function login() {
    alert("Bem Vindo ao Banco VHS!");
    var name = prompt("Insira o eu nome para o login");
    if (isNaN(name)) {
        alert("Olá " + name);
        console.log(name);
        inicio();
    } else {
        alert('Insira um nome valido');
        login();
    }

 }
function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção. \n 1) Saldo \n 2) Extrato \n 3) Saque \n 4) Depósito \n 5) Transferência \n 6) Sair'));
    switch(escolha) {
          case 1:
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ ver_saldo();} 
            else{ alert("Senha Incorreta"); inicio();}
               break;
        case 2:
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ extrato(); }
            else{ alert("Senha Incorreta"); inicio();}
               break;
        case 3:
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ checar_saque(); }
            else{ alert("Senha Incorreta"); inicio();}
               break;
               break;
        case 4: 
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ fazer_deposito(); }
            else{ alert("Senha Incorreta"); inicio();}
               break;
        case 5:
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ transferencia(); }
            else{ alert("Senha Incorreta"); inicio();}
               break;
        case 6: 
            var password = parseInt(prompt("Digite sua senha"));
            if (password === senha){ checar_saque(); }
            else{ alert("Senha Incorreta"); inicio();}
               break;
         default:
             erro();}
}
function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}
 //------------------------------------------------------------------------;
function ver_saldo() {
    alert('Seu saldo atual é: R$ ' + saldo);
    inicio();
}
 //------------------------------------------------------------------------;
function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    if (isNaN(deposito) || deposito === '') { // Not a Number
        alert("Operação não autorizada");
        inicio();
    } else if (deposito <= 0){
        alert("Operação não autorizada");
        inicio();
    } else 	{ //saldo = saldo + deposito;
        saldo += deposito; 	
        ver_saldo();
    }
}
 //------------------------------------------------------------------------;
function checar_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (saque <= saldo && saque > 1 ) { fazer_saque(saque);}
    else{ 
        alert("Operação não autorizada");
        inicio();
    }
}
function fazer_saque(saque) {
    if (isNaN(saque) || saque === '') { // Not a Number
        alert('Por favor, informe um número:');
        checar_saque();
    } else {
        saldo -= saque; 
        ver_saldo();
    }
}
 //------------------------------------------------------------------------;
function extrato() {
    alert(extrato_notes);
    inicio();
}
 //------------------------------------------------------------------------;
function transferencia() {
var contabanco = parseInt(prompt("Informe o numero da conta bancaria que ira receber o valor"));
    if (isNaN(contabanco) || contabanco === ''){
        alert("Operação não autorizada");
        inicio();			
    } 
    else{
        checar_transferencia();
    }
}
function checar_transferencia() {
    var trasnfer = parseFloat(prompt('Qual o valor para transfencia?'));
    if (trasnfer <= saldo && trasnfer > 0 ){ 
        alert('Transferencia realizada com Sucesso');
        saldo -= trasnfer; 
        ver_saldo();
    } else{ 
        alert("Operação não autorizada");
        transferencia();
    }
}
function fazer_transferencia(trasnfer) {
    if (isNaN(trasnfer) || trasnfer === ''|| trasnfer > 0) { // Not a Number
        alert("Operação não autorizada");
        checar_transferencia();
    } else { //saldo = saldo - saque;
        alert('Transferencia realizada com Sucesso');
        saldo -= trasnfer; 
        ver_saldo();
    }
}
 //------------------------------------------------------------------------;

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        login();
    } else {
        inicio();
    }
}
