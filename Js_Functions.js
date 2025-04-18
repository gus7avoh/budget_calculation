const Salgados_selecionados = [];
const Bebidas_selecionados = [];
let QuantidadeSalgadosTotal = 0; 
let QuantidadeBebidasTotal = 0; 

//Responsavel por selecionar os campos de Salgados e verificar se o campo está marcado e se tem valor
//Caso esteja tudo correto ele vai adicionar um novo objeto na lista Salgados_selecionados como o nome do Salgado e sua quantidade
//Por fim ele soma todas as quantidades e adiciona a variavel QuantidadeSalgadosTotal.
function obterValoresSelecionadosSalgados() {
    Salgados_selecionados.length = 0;
    QuantidadeSalgadosTotal = 0; 

    document.querySelectorAll('.selecionar_salgados input[type="checkbox"]').forEach((checkbox) => {
        const quantidadeInput = document.getElementById(`quantidade_${checkbox.value}`);
        const quantidade = quantidadeInput ? Number(quantidadeInput.value) || 0 : 0;

        if (checkbox.checked && quantidade > 0) {
            Salgados_selecionados.push({
                nome: checkbox.value,
                quantidade: quantidade
            });

            QuantidadeSalgadosTotal += quantidade; 
        }
    });
    //console.log("Salgados selecionados:", Salgados_selecionados);
    //console.log(`Quantidade total de Salgados: ${QuantidadeSalgadosTotal}`);
}

//Responsavel por selecionar os campos de Bebidas e verificar se o campo está marcado e se tem valor
//Caso esteja tudo correto ele vai adicionar um novo objeto na lista Bebidas_selecionados como o nome da bebida e sua quantidade
//Por fim ele soma todas as quantidades e adiciona a variavel QuantidadeBebidasTotal.
function obterValoresSelecionadosBebidas() {
    Bebidas_selecionados.length = 0;
    QuantidadeBebidasTotal = 0; 

    document.querySelectorAll('.selecionar_bebidas input[type="checkbox"]').forEach((checkbox) => {
        const quantidadeInput = document.getElementById(`quantidade_${checkbox.value}`);
        const quantidade = quantidadeInput ? Number(quantidadeInput.value) || 0 : 0;

        if (checkbox.checked && quantidade > 0) {
            Bebidas_selecionados.push({
                nome: checkbox.value,
                quantidade: quantidade
            });

        QuantidadeBebidasTotal += quantidade;
        }
    });
    //console.log("Bebidas selecionadas:", Bebidas_selecionados);
    //console.log(`Quantidade total de Bebidas: ${QuantidadeBebidasTotal}`);
}

//Responsavel por modificar o Visor de sugestoes no campo de Salgados
function ModificarVisorSalgados(){
    const QuantidadeAtualSalgado = document.getElementById("QuantidadeAtualSalgado");

    QuantidadeAtualSalgado.value = QuantidadeSalgadosTotal;
}

//Responsavel por modificar o Visor de sugestoes no campo de bebidas 
function ModificarVisorBebidas() {
    const QuantidadeAtualBebidas = document.getElementById("QuantidadeAtualBebida");

    QuantidadeAtualBebidas.value = QuantidadeBebidasTotal;
}

//Esse metodo é responsavel por escutar qualeur mudança nos campos de Salgados e executar dois outros metodos caso tenha mudança
document.querySelectorAll('.selecionar_salgados input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosSalgados();
        ModificarVisorSalgados();
    });
});

//Esse metodo é responsavel por escutar qualeur mudança nos campos de bebida e executar dois outros metodos caso tenha mudança
document.querySelectorAll('.selecionar_bebidas input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosBebidas();
        ModificarVisorBebidas();
    })     
});


//Nessa proxima etapa vou pegar o valor de todos os campos do site e gerar a pagina de resultado

//pegar o valor do tipo de festa
// vou ter que mudar isso aqui quando mudar o botao outros para a pessoa descrever qual festa
let botoes = document.querySelectorAll("#Grid_party_type button");

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    var TipoDaFesta = botao.querySelector("img").alt;
  });
});


const Nome = document.getElementById("Name")
const CPF_CNPJ = document.getElementById("Identification");
const Email = document.getElementById("Mail")
const Telefone = document.getElementById("CellPhone")

const QuantidadePessoasNaFesta = Number(document.getElementById("Number_people").value)
const DataFesta = document.getElementById("Date").value //Sting "2025-03-28"
const TempoDeFesta = document.getElementById("Time").value //String "HH:MM" Devo der que converter para hora com decimais para fazer o calculo
//o tipo da festa é o tipoDaFesta

let cep, rua, numero, complemento, bairro, cidade;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  cep = document.querySelector("#cep").value;
  rua = document.querySelector("#rua").value;
  numero = document.querySelector("#numero").value;
  complemento = document.querySelector("#complemento").value;
  bairro = document.querySelector("#bairro").value;
  cidade = document.querySelector("#cidade").value;
});


const Campo_nome = document.querySelector("#show_nome")
const Campo_CPF_CNPJ = document.querySelector("#show_cpf_cnpj")
const Campo_email = document.querySelector("#show_email")
const Campo_telefone = document.querySelector("#show_telefone")
const Campo_quatidade_pessoas= document.querySelector("#show_quatidade_pessoas")
const Campo_data_festa = document.querySelector("#show_data_festa")
const Campo_tempo_festa = document.querySelector("#show_tempo_festa")
const Campo_tipo_festa = document.querySelector("#show_tipo_festa")

const Campo_Cep = document.querySelector("#show_cep")
const Campo_logradouro = document.querySelector("#show_logradouro")
const Campo_numero = document.querySelector("#show_numero")
const Campo_complemento = document.querySelector("#show_complemento")
const Campo_bairro = document.querySelector("#show_bairro")
const Campo_cidade = document.querySelector("#show_cidade")

//modificando o valor do campo para receber o dado

Nome.addEventListener('input', () => {
    Campo_nome.innerHTML = `Nome: ${Nome.value}`;
});

CPF_CNPJ.addEventListener('input', () => {
Campo_CPF_CNPJ.innerHTML = `CPF/CNPJ: ${CPF_CNPJ.value}`;
});

Email.addEventListener('input', () => {
Campo_email.innerHTML = `E-mail: ${Email.value}`;
});

Telefone.addEventListener('input', () => {
Campo_telefone.innerHTML = `Telefone: ${Telefone.value}`;
});
  
