// === Declarações no topo do script ===

const Salgados_selecionados = [];
const Bebidas_selecionados = [];
let QuantidadeSalgadosTotal = 0; 
let QuantidadeBebidasTotal = 0; 

const Campo_Para_mostrar_salgados_relatorio_final = document.getElementById("show_salgados");
const TotalSalgados = document.getElementById("show_total_salgados");

const Campo_Para_mostrar_bebidas_relatorio_final = document.getElementById("show_bebidas");
const TotalBebidas = document.getElementById("show_total_bebidas");

const Nome = document.getElementById("Name");
const CPF_CNPJ = document.getElementById("Identification");
const Email = document.getElementById("Mail");
const Telefone = document.getElementById("CellPhone");

const QuantidadePessoasNaFesta = document.getElementById("Number_people");
const DataFesta = document.getElementById("Date");
const TempoDeFesta = document.getElementById("Time");

const Campo_nome = document.querySelector("#show_nome");
const Campo_CPF_CNPJ = document.querySelector("#show_cpf_cnpj");
const Campo_email = document.querySelector("#show_email");
const Campo_telefone = document.querySelector("#show_telefone");
const Campo_quatidade_pessoas= document.querySelector("#show_quatidade_pessoas");
const Campo_data_festa = document.querySelector("#show_data_festa");
const Campo_tempo_festa = document.querySelector("#show_tempo_festa");
const Campo_tipo_festa = document.querySelector("#show_tipo_festa");

const Campo_Cep = document.querySelector("#show_cep");
const Campo_logradouro = document.querySelector("#show_logradouro");
const Campo_numero = document.querySelector("#show_numero");
const Campo_complemento = document.querySelector("#show_complemento");
const Campo_bairro = document.querySelector("#show_bairro");
const Campo_cidade = document.querySelector("#show_cidade");

const form = document.querySelector("#formAdrass");

const salgados = [ /* ... */ ]; // mantive conteúdo como estava
const bebidas = [ /* ... */ ];  // mantive conteúdo como estava

// === Funções ===

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
}

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
}

function ExibirSalgadosRelatorioFinal() {
    Campo_Para_mostrar_salgados_relatorio_final.innerHTML = "";
    Salgados_selecionados.forEach((salgado) => {
        const item = document.createElement("p");
        item.textContent = `${salgado.nome}: ${salgado.quantidade}`;
        Campo_Para_mostrar_salgados_relatorio_final.appendChild(item);
    });
}

function ModificarVisorSalgados(){
    const QuantidadeAtualSalgado = document.getElementById("QuantidadeAtualSalgado");
    QuantidadeAtualSalgado.value = QuantidadeSalgadosTotal;
    TotalSalgados.innerHTML = `<p>Total Salgados: ${QuantidadeSalgadosTotal}</p>`;
    ExibirSalgadosRelatorioFinal();
}

function CalculoValorSugeridoSalgado(){
    const QuantidadeSugeridaSalgados = document.getElementById("QuantidadeSugeridaSalgado")
    let Valorsugerido = QuantidadePessoasNaFesta.value * 18;
    QuantidadeSugeridaSalgados.value = Valorsugerido;
}

function CalculoValorSugeridoBebidas(){
    const QuantidadeSugeridaBebidas = document.getElementById("QuantidadeSugeridaBebida")
    let Valorsugerido = QuantidadePessoasNaFesta.value * 1;
    QuantidadeSugeridaBebidas.value = Valorsugerido;
}

function ExibirBebidasRelatorioFinal(){
    Campo_Para_mostrar_bebidas_relatorio_final.innerHTML = "";
    Bebidas_selecionados.forEach((bebida) =>{
        const item = document.createElement("p");
        item.textContent = `${bebida.nome}: ${bebida.quantidade}`;
        Campo_Para_mostrar_bebidas_relatorio_final.appendChild(item);
    });
}

function ModificarVisorBebidas() {
    const QuantidadeAtualBebidas = document.getElementById("QuantidadeAtualBebida");

    QuantidadeAtualBebidas.value = QuantidadeBebidasTotal;
    TotalBebidas.innerHTML = `<p>Total Bebidas (garrafa 2L): ${QuantidadeBebidasTotal}</p>`;
    ExibirBebidasRelatorioFinal();
}

function MudarDescricaoOutros() {
    DescricaoBotaoOutros.addEventListener('input', () => {
        const novaDescricao = DescricaoBotaoOutros.value;
        botao5.querySelector("img").alt = novaDescricao;
        Campo_tipo_festa.innerHTML = `Tipo de festa: ${novaDescricao}`;
    });
}

// === Event Listeners ===

document.querySelectorAll('.selecionar_salgados input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosSalgados();
        ModificarVisorSalgados();
        funcValorSalgados();
        MostrarValorFinalOrcamento();
    });
});

document.querySelectorAll('.selecionar_bebidas input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosBebidas();
        ModificarVisorBebidas();
        funcValorBabidas();
        MostrarValorFinalOrcamento();
    });
});

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

QuantidadePessoasNaFesta.addEventListener('input', () => {
    CalculoValorSugeridoSalgado();
    CalculoValorSugeridoBebidas();
    Campo_quatidade_pessoas.innerHTML = `Quantidade de pessoas: ${QuantidadePessoasNaFesta.value}`;
});

DataFesta.addEventListener('change', () => {
    Campo_data_festa.innerHTML = `Data da festa: ${DataFesta.value}`;
});

TempoDeFesta.addEventListener('change', () => {
    Campo_tempo_festa.innerHTML = `Tempo de festa: ${TempoDeFesta.value}`;
});

let botoes = document.querySelectorAll("#Grid_party_type button");
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        if(botao.id == "botao5"){
            MudarDescricaoOutros();
        }else{
            Campo_tipo_festa.innerHTML = `Tipo de festa: ${botao.querySelector("img").alt}`;
        }
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let cep = document.querySelector("#cep").value;
    let rua = document.querySelector("#rua").value;
    let numero = document.querySelector("#numero").value;
    let complemento = document.querySelector("#complemento").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#cidade").value;

    Campo_Cep.innerHTML = `CEP: ${cep}`;
    Campo_logradouro.innerHTML= `Logradouro: ${rua}`;
    Campo_numero.innerHTML = `Número: ${numero}`;
    Campo_complemento.innerHTML = `Complemento: ${complemento}`;
    Campo_bairro.innerHTML = `Bairro: ${bairro}`;
    Campo_cidade.innerHTML = `Cidade: ${cidade}`;
});


const salgadosValor = [
    // Simples - R$ 0,85
    { nome: "Coxinha Simples", valor: 0.85 },
    { nome: "Risole de Milho", valor: 0.85 },
    { nome: "Risole de Carne", valor: 0.85 },
    { nome: "Kibe", valor: 0.85 },
    { nome: "Pão de Queijo", valor: 0.85 },
  
    // Folhados - R$ 1,30
    { nome: "Folhado Napolitano", valor: 1.30 },
    { nome: "Folhado de Peito de Peru", valor: 1.30 },
    { nome: "Folhado Romeu e Julieta", valor: 1.30 },
    { nome: "Folhado de Carne de Sol", valor: 1.30 },
  
    // Finos - R$ 1,90
    { nome: "Coxinha de Catupiry", valor: 1.90 },
    { nome: "Croquete de Presunto e Mussarela", valor: 1.90 },
    { nome: "Croquete Quatro Queijos", valor: 1.90 },
    { nome: "Croquete de Bacalhau", valor: 1.90 },
    { nome: "Croquete de Tomate Seco", valor: 1.90 },
    { nome: "Croquete de Azeitona", valor: 1.90 },
    { nome: "Croquete c/ Ovo de Codorna", valor: 1.90 },
    { nome: "Risole de Marguerita c/ Queijo", valor: 1.90 },
    { nome: "Risole de Alho Poró", valor: 1.90 },
    { nome: "Risole de Camarão", valor: 1.90 },
    { nome: "Camefeu de Camarão", valor: 1.90 },
    { nome: "Aipim de Carne de Sol", valor: 1.90 },
    { nome: "Espetinho de Frango", valor: 1.90 },
    { nome: "Espetinho de Filé", valor: 1.90 },
    { nome: "Bolinho de Bacalhau", valor: 1.90 },
    { nome: "Empada de Frango", valor: 1.90 },
    { nome: "Empada de Queijo", valor: 1.90 },
    { nome: "Empada de Frango c/ Palmito", valor: 1.90 },
    { nome: "Empada de Frango c/ Bacon", valor: 1.90 },
    { nome: "Mini Pizza", valor: 1.90 },
    { nome: "Quiche de Alho Poró", valor: 1.90 },
    { nome: "Quiche Carne de Sol", valor: 1.90 },
    { nome: "Quiche Romeu e Julieta", valor: 1.90 },
    { nome: "Quiche Cabra da Peste", valor: 1.90 },
    { nome: "Quiche Sonho Baiano", valor: 1.90 },
    { nome: "Quiche Casa da Vovó", valor: 1.90 },
    { nome: "Cata-vento de Bacalhau", valor: 1.90 },
    { nome: "Trouxinha de Frango c/ Abacaxi", valor: 1.90 },
    { nome: "Damasco c/ Bacon", valor: 1.90 },
    { nome: "Ameixa c/ Bacon", valor: 1.90 },
    { nome: "Flor de Queijo com Damasco", valor: 1.90 },
    { nome: "Trouxinha de Alho poró", valor: 1.90 },
    { nome: "Travesseiro de Camarão", valor: 1.90 }
  ];
  

  const bebidasValor = [
    // Refrigerantes - R$ 15
    { nome: "Coca-Cola", valor: 15 },
    { nome: "Guaraná Antarctica", valor: 15 },
    { nome: "Fanta", valor: 15 },
    { nome: "Schweppes", valor: 15 },
    { nome: "Sprite", valor: 15 },
  
    // Sucos - R$ 8
    { nome: "Suco de Laranja", valor: 8 },
    { nome: "Suco de Uva", valor: 8 },
    { nome: "Suco de Maçã", valor: 8 },
    { nome: "Suco de Maracujá", valor: 8 },
  
    // Energéticos - R$ 20
    { nome: "Red Bull", valor: 20 },
    { nome: "Monster", valor: 20 },
    { nome: "Vibe", valor: 20 },
    { nome: "TNT", valor: 20 },
  
    // Alcoólicas - R$ 25
    { nome: "Skol", valor: 25 },
    { nome: "Brahma", valor: 25 },
    { nome: "Antarctica", valor: 25 },
    { nome: "Heineken", valor: 25 },
    { nome: "Budweiser", valor: 25 },
    { nome: "Stella Artois", valor: 25 },
    { nome: "Bohemia", valor: 25 }
  ];

let somatoriaValorSalgado = 0;
function funcValorSalgados() {
    Salgados_selecionados.forEach((selecionado) => {
        salgadosValor.forEach( (salgados) => {
        if(selecionado.nome == salgados.nome){
            somatoriaValorSalgado += salgados.valor;
        }
    })
  })
}

let somatoriaValorBebida = 0
function funcValorBabidas(){
    Bebidas_selecionados.forEach((selecionado) => {
        bebidasValor.forEach((bebida) => {
            if(selecionado.nome == bebida.nome){
                somatoriaValorBebida+=bebida.valor
            }
        })
    })
}

let valorFinalOrcamento = somatoriaValorBebida + somatoriaValorBebida;

const CampoTotalOrcamento = document.getElementById("show_valor_final")

function MostrarValorFinalOrcamento(){
    CampoTotalOrcamento.value = valorFinalOrcamento;
}