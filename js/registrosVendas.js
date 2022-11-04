/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var vendas = ler("Dados");

if(vendas === null){
    vendas = [];
}

var botao = document.getElementById("botao");
var grafico = document.getElementById("grafico");
var direcao = "horizontal";

botao.addEventListener("click", salvar);
grafico.addEventListener("click", graficos);

function salvar(){
    var nome, mes, valor, umRegistro;
    
    nome = document.getElementById("txtNome").value;
    mes = document.getElementById("txtMes").value;
    valor = document.getElementById("txtValor").value;
    umRegistro = [nome, mes, valor];
    
    vendas.push(umRegistro); //salva "umRegistro" que é um vetor dentro do vetor vendas, formando uma matriz
    gravar("Dados", vendas);
    SalvarTotal(nome,valor,umRegistro);
    
    limpar();
}

function SalvarTotal(nome,valor,registro){
    var totalizacao = ler("Valores Totais");

    if(totalizacao === null){
        totalizacao = [];
    }
    
    valor = parseFloat(valor);
    
    if(totalizacao.length === 0){
        totalizacao.push(registro);
        gravar("Valores Totais", totalizacao);
    } else {
        for(let linha = 0; linha < totalizacao.length; linha++){
            for(let coluna = 0; coluna < 3; coluna++){
                if(totalizacao[linha][coluna] === nome){
                    var total = 0;
                    total = parseFloat(totalizacao[linha][2]);
                    total += valor;
                    totalizacao[linha][2] = total;
                    gravar("Valores Totais", totalizacao);
                    return;
                }
            }
        }
        totalizacao.push(registro);
        gravar("Valores Totais", totalizacao);
    }
}

function desenhar() {

        // Create the data table.
        var dados = ler("Valores Totais");
        var matriz = [["Vendedores","Mes","Valor"]];
        for (var item in dados) {
             matriz.push(dados[item]);
        }
        
      
      var data = google.visualization.arrayToDataTable(matriz);
      
        var options = {
          width:600,
          height : 500,
          
          bars:direcao,
          
          chart: {
            title: 'Vendas Totais',
            subtitle: 'Vendas anuais'            
          }
        };
        var local = document.getElementById("id_grafico");
        var chart = new google.charts.Bar(local);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    
}

function graficos(){
    
    var seletores = document.querySelector(".radio");
    do{
        if (seletores.checked){
            direcao = seletores.id;
            break;
        }
        seletores = seletores.nextElementSibling;
    }while (seletores);
    
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(desenhar);
      
      
}

function limpar(){
    document.getElementById("txtNome").value = "";
    document.getElementById("txtMes").value = "";
    document.getElementById("txtValor").value = "";
}