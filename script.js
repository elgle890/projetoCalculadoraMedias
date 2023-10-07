const form = document.getElementById("form_atividade");
let linhas = ``;
let img_aprovado = `<img src="img/emoji_festejando.png" alt="emoji festejando"></img>`;
let img_reprovado = `<img src="img/emoji_triste.png" alt="emoji triste">`;
let notas = [];
let atividades = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = Number(prompt(`insira a nota minima para aprovação:`));

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();     
    atualizaMediaFinal();

});

function adicionaLinha() {
    const input_nomeAtivdade = document.getElementById("nome_atividade");
    const input_notaAtividade = document.getElementById("nota_atividade");

    if(atividades.includes(input_nomeAtivdade)) {
        alert(`a atividade ${input_nomeAtivdade.value} ja foi inserida`);
    } else {
        notas.push(parseFloat(input_notaAtividade.value));
        atividades.push(input_nomeAtivdade.value);

        let linha = `<tr>`;
        linha += `<td>${input_nomeAtivdade.value}</td>`;
        linha += `<td>${input_notaAtividade.value}</td>`;
        linha+= `<td>${input_notaAtividade.value >= 7 ? img_aprovado : img_reprovado}</td>`;
        linha += `</tr>`

        linhas+=linha;
    }

    

    input_nomeAtivdade.value = ``;
    input_notaAtividade.value = ``;   
}

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {

    const media = calculaMediaFinal();

    document.getElementById(`footer-nota`).innerHTML = media.toFixed(2);
    document.getElementById(`footer-res`).innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaNotas = 0;
    for(var i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
        
    }

    return somaNotas / notas.length;
}

