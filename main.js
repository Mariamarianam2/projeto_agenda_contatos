const form = document.getElementById("form-atividade");
let linhas = ""; 

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputSeuNome = document.getElementById("seu-nome");
    const inputSeuTelefone = document.getElementById("seu-telefone");

    let linha = '<tr>';
    linha += `<td>${inputSeuNome.value}</td>`;
    linha += `<td>${inputSeuTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    inputSeuNome.value = "";
    inputSeuTelefone.value = "";
});