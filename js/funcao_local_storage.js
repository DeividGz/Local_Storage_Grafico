/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function ler (chave){
    if(window.localStorage){
        return JSON.parse(localStorage.getItem(chave));
    } else {
        alert("LocalStorage nao suportado.");
    }
}

function gravar (chave, valor){
    if(window.localStorage){
        localStorage.setItem(chave, JSON.stringify(valor));
    } else {
        alert("LocalStorage nao suportado");
    }
}