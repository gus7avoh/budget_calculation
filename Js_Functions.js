// Arrays de itens selecionados e totais
const Salgados_selecionados = [];
const Bebidas_selecionados = [];
let QuantidadeSalgadosTotal = 0; 
let QuantidadeBebidasTotal = 0; 

// Elementos do DOM para exibição de relatórios
const Campo_Para_mostrar_salgados_relatorio_final = document.getElementById("show_salgados");
const TotalSalgados = document.getElementById("show_total_salgados");
const Campo_Para_mostrar_bebidas_relatorio_final = document.getElementById("show_bebidas");
const TotalBebidas = document.getElementById("show_total_bebidas");

// Campos de informações pessoais
const Nome = document.getElementById("Name");
const CPF_CNPJ = document.getElementById("Identification");
const Email = document.getElementById("Mail");
const Telefone = document.getElementById("CellPhone");

// Campos de informações sobre a festa
const QuantidadePessoasNaFesta = document.getElementById("Number_people");
const DataFesta = document.getElementById("Date");
const TempoDeFesta = document.getElementById("Time");

// Campos para exibição de informações pessoais
const Campo_nome = document.querySelector("#show_nome");
const Campo_CPF_CNPJ = document.querySelector("#show_cpf_cnpj");
const Campo_email = document.querySelector("#show_email");
const Campo_telefone = document.querySelector("#show_telefone");
const Campo_quatidade_pessoas = document.querySelector("#show_quatidade_pessoas");
const Campo_data_festa = document.querySelector("#show_data_festa");
const Campo_tempo_festa = document.querySelector("#show_tempo_festa");
const Campo_tipo_festa = document.querySelector("#show_tipo_festa");
let tipofesta

// Campos de endereço
const Campo_Cep = document.querySelector("#show_cep");
const Campo_logradouro = document.querySelector("#show_logradouro");
const Campo_numero = document.querySelector("#show_numero");
const Campo_complemento = document.querySelector("#show_complemento");
const Campo_bairro = document.querySelector("#show_bairro");
const Campo_cidade = document.querySelector("#show_cidade");

// Formulário de endereço
const form = document.querySelector("#formAdrass");

// Definir os valores de salgados
const salgadosValor = [
    // Simples - R$ 0,85
    { nome: "coxinha_simples", valor: 0.85 },
    { nome: "risole_milho", valor: 0.85 },
    { nome: "risole_carne", valor: 0.85 },
    { nome: "kibe", valor: 0.85 },
    { nome: "pao_de_queijo", valor: 0.85 },

    // Folhados - R$ 1,30
    { nome: "folhado_napolitano", valor: 1.30 },
    { nome: "folhado_peito_peru", valor: 1.30 },
    { nome: "folhado_romeu_julieta", valor: 1.30 },
    { nome: "folhado_carne_sol", valor: 1.30 },

    // Finos - R$ 1,90
    { nome: "coxinha_catupiry", valor: 1.90 },
    { nome: "croquete_presunto_mussarela", valor: 1.90 },
    { nome: "croquete_quatro_queijos", valor: 1.90 },
    { nome: "croquete_bacalhau", valor: 1.90 },
    { nome: "croquete_tomate_seco", valor: 1.90 },
    { nome: "croquete_azeitona", valor: 1.90 },
    { nome: "croquete_ovo_codorna", valor: 1.90 },
    { nome: "risole_marguerita_queijo", valor: 1.90 },
    { nome: "risole_alho_poro", valor: 1.90 },
    { nome: "risole_camarao", valor: 1.90 },
    { nome: "camefeu_camarao", valor: 1.90 },
    { nome: "aipim_carne_sol", valor: 1.90 },
    { nome: "espetinho_frango", valor: 1.90 },
    { nome: "espetinho_file", valor: 1.90 },
    { nome: "bolinho_bacalhau", valor: 1.90 },
    { nome: "empada_frango", valor: 1.90 },
    { nome: "empada_queijo", valor: 1.90 },
    { nome: "empada_frango_palmito", valor: 1.90 },
    { nome: "empada_frango_bacon", valor: 1.90 },
    { nome: "mini_pizza", valor: 1.90 },
    { nome: "quiche_alho_poro", valor: 1.90 },
    { nome: "quiche_carne_sol", valor: 1.90 },
    { nome: "quiche_romeu_julieta", valor: 1.90 },
    { nome: "quiche_cabra_peste", valor: 1.90 },
    { nome: "quiche_sonho_baiano", valor: 1.90 },
    { nome: "quiche_casa_vovo", valor: 1.90 },
    { nome: "cata_vento_bacalhau", valor: 1.90 },
    { nome: "trouxinha_frango_abacaxi", valor: 1.90 },
    { nome: "damasco_bacon", valor: 1.90 },
    { nome: "ameixa_bacon", valor: 1.90 },
    { nome: "flor_queijo_damasco", valor: 1.90 },
    { nome: "trouxinha_alho_poro", valor: 1.90 },
    { nome: "travesseiro_camarao", valor: 1.90 }
];

const bebidasValor = [
    // Refrigerantes - R$ 15
    { nome: "refrigerante_coca", valor: 15 },
    { nome: "refrigerante_guarana", valor: 15 },
    { nome: "refrigerante_fanta", valor: 15 },
    { nome: "refrigerante_schweppes", valor: 15 },
    { nome: "refrigerante_sprite", valor: 15 },
  
    // Sucos - R$ 8
    { nome: "suco_laranja", valor: 8 },
    { nome: "suco_uva", valor: 8 },
    { nome: "suco_maca", valor: 8 },
    { nome: "suco_maracuja", valor: 8 },
  
    // Energéticos - R$ 20
    { nome: "energetico_redbull", valor: 20 },
    { nome: "energetico_monster", valor: 20 },
    { nome: "energetico_vibe", valor: 20 },
    { nome: "energetico_tnt", valor: 20 },
  
    // Alcoólicas - R$ 25
    { nome: "cerveja_skol", valor: 25 },
    { nome: "cerveja_brahma", valor: 25 },
    { nome: "cerveja_antarctica", valor: 25 },
    { nome: "cerveja_heineken", valor: 25 },
    { nome: "cerveja_budweiser", valor: 25 },
    { nome: "cerveja_stella", valor: 25 },
    { nome: "cerveja_bohemia", valor: 25 }
];

// === Funções ===

// Função para obter valores selecionados de salgados
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

// Função para obter valores selecionados de bebidas
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

// Função para modificar o visor de salgados mostrando a quantidade atual no visor vermelho lateral
function ModificarVisorSalgados() {
    const QuantidadeAtualSalgado = document.getElementById("QuantidadeAtualSalgado");
    QuantidadeAtualSalgado.value = QuantidadeSalgadosTotal;
    TotalSalgados.innerHTML = `<p>Total Salgados: ${QuantidadeSalgadosTotal}</p>`;
}

// Função para modificar o visor de salgados mostrando a quantidade sugerida de salgados no visor vermelho lateral
function CalculoValorSugeridoSalgado() {
    const QuantidadeSugeridaSalgados = document.getElementById("QuantidadeSugeridaSalgado")
    let Valorsugerido = QuantidadePessoasNaFesta.value * 18;
    QuantidadeSugeridaSalgados.value = Valorsugerido;
}

// Função para calcular o valor sugerido de bebidas mostrando a quantidade no visor vermelho lateral
function CalculoValorSugeridoBebidas() {
    const QuantidadeSugeridaBebidas = document.getElementById("QuantidadeSugeridaBebida")
    let Valorsugerido = QuantidadePessoasNaFesta.value * 1;
    QuantidadeSugeridaBebidas.value = Valorsugerido;
}

// Função para modificar o visor de Bebidas mostrando a quantidade atual no visor vermelho lateral
function ModificarVisorBebidas() {
    const QuantidadeAtualBebidas = document.getElementById("QuantidadeAtualBebida");
    QuantidadeAtualBebidas.value = QuantidadeBebidasTotal;
    TotalBebidas.innerHTML = `<p>Total Bebidas (garrafa 2L): ${QuantidadeBebidasTotal}</p>`;
}

// Função para exibir relatório final de salgados
function ExibirSalgadosRelatorioFinal() {
    Campo_Para_mostrar_salgados_relatorio_final.innerHTML = "";
    Salgados_selecionados.forEach((salgado) => {
        const item = document.createElement("p");
        item.textContent = `${salgado.nome}: ${salgado.quantidade}`;
        Campo_Para_mostrar_salgados_relatorio_final.appendChild(item);
    });
}

// Função para exibir relatório final de bebidas
function ExibirBebidasRelatorioFinal() {
    Campo_Para_mostrar_bebidas_relatorio_final.innerHTML = "";
    Bebidas_selecionados.forEach((bebida) => {
        const item = document.createElement("p");
        item.textContent = `${bebida.nome}: ${bebida.quantidade}`;
        Campo_Para_mostrar_bebidas_relatorio_final.appendChild(item);
    });
}

// Função para mudar a descrição de "outros"
function MudarDescricaoOutros() {
    const DescricaoBotaoOutros = document.getElementById("Other_description_input") // por algum fucking motivo tava funcionando sem isso ????
    DescricaoBotaoOutros.addEventListener('input', () => {
        const novaDescricao = DescricaoBotaoOutros.value;
        botao5.querySelector("img").alt = novaDescricao;
        tipofesta = novaDescricao
        Campo_tipo_festa.innerHTML = `Tipo de festa: ${novaDescricao}`;
    });
}

// === Event Listeners ===

// Adicionar listeners aos elementos de salgados e bebidas
document.querySelectorAll('.selecionar_salgados input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosSalgados();
        ModificarVisorSalgados();
        ExibirSalgadosRelatorioFinal();
        funcValorSalgados();
        MostrarValorFinalOrcamento();
    });
});

document.querySelectorAll('.selecionar_bebidas input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', () => {
        obterValoresSelecionadosBebidas();
        ModificarVisorBebidas();
        ExibirBebidasRelatorioFinal();
        funcValorBebidas();
        MostrarValorFinalOrcamento();
    });
});

// Adicionar listeners aos campos de informações pessoais
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

// Listener para quantidade de pessoas na festa
QuantidadePessoasNaFesta.addEventListener('input', () => {
    CalculoValorSugeridoSalgado();
    CalculoValorSugeridoBebidas();
    Campo_quatidade_pessoas.innerHTML = `Quantidade de pessoas: ${QuantidadePessoasNaFesta.value}`;
});

// Listener para data e tempo da festa
DataFesta.addEventListener('change', () => {
    Campo_data_festa.innerHTML = `Data da festa: ${DataFesta.value}`;
});

TempoDeFesta.addEventListener('change', () => {
    Campo_tempo_festa.innerHTML = `Tempo de festa: ${TempoDeFesta.value}`;
});

// Listener para tipo de festa
let botoes = document.querySelectorAll("#Grid_party_type button");
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        if(botao.id == "botao5"){
            MudarDescricaoOutros();
        } else {
            tipofesta = botao.querySelector("img").alt
            Campo_tipo_festa.innerHTML = `Tipo de festa: ${tipofesta}`;
        }
    });
});

// Listener para envio do formulário
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



// === Funções de cálculo de valores ===

//calcualr o valor dos salgados baseado nos valores individuais 
let somatoriaValorSalgado = 0;
function funcValorSalgados() {
    somatoriaValorSalgado = 0;
    Salgados_selecionados.forEach((selecionado) => {
        salgadosValor.forEach((salgado) => {
            if(selecionado.nome == salgado.nome){
                somatoriaValorSalgado += selecionado.quantidade * salgado.valor;
            }
        });
    });
}

//calcular o valor das bebidas baseado nos valores individuais 
let somatoriaValorBebida = 0;
function funcValorBebidas() {
    somatoriaValorBebida = 0;
    Bebidas_selecionados.forEach((selecionado) => {
        bebidasValor.forEach((bebida) => {
            if(selecionado.nome == bebida.nome){
                somatoriaValorBebida += selecionado.quantidade * bebida.valor;
            }
        });
    });
}

//função para inserir o valor final do orçamento no campo de valor final da pagina de revisão
function MostrarValorFinalOrcamento() {
    var valorFinalOrcamento = somatoriaValorSalgado + somatoriaValorBebida;
    const CampoTotalOrcamento = document.getElementById("show_valor_final");
    CampoTotalOrcamento.value = valorFinalOrcamento;
}


// === Impresão do relatório ===


//função para enviar os dados para a pagina de impressão
function EnviarDadosImpressao() {
    // 1. Atualiza seleções e cálculos
    obterValoresSelecionadosSalgados();
    obterValoresSelecionadosBebidas();
    funcValorSalgados();
    funcValorBebidas();
    MostrarValorFinalOrcamento();

    // 2. Coleta os dados dos inputs
    const valorFinalOrcamento = Number(document.getElementById("show_valor_final").value) || 0;

    const nome = Nome.value;
    const cpfCnpj = CPF_CNPJ.value;
    const email = Email.value;
    const telefone = Telefone.value;
    const quantidadePessoas = Number(QuantidadePessoasNaFesta.value) || 0;
    const dataFesta = DataFesta.value;
    const tempoFesta = TempoDeFesta.value;

    const cep = document.querySelector("#cep").value;
    const logradouro = document.querySelector("#rua").value;
    const numero = document.querySelector("#numero").value;
    const complemento = document.querySelector("#complemento").value;
    const bairro = document.querySelector("#bairro").value;
    const cidade = document.querySelector("#cidade").value;

    // 3. Monta o objeto a ser enviado
    const orcamentoDados = {
        valorFinalOrcamento,
        Salgados_selecionados,
        Bebidas_selecionados,
        QuantidadeSalgadosTotal,
        QuantidadeBebidasTotal,
        tipofesta,
        nome,
        cpfCnpj,
        email,
        telefone,
        quantidadePessoas,
        dataFesta,
        tempoFesta,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade
    };

    // 4. Grava no localStorage
    localStorage.setItem("orcamento_dados", JSON.stringify(orcamentoDados));

    // 5. Redireciona para a página de resultado
    window.location.href = "resultado.html";
}

//Listener para verificar se o botão de download foi acionado 
const Download = document.getElementById("Download")
Download.addEventListener('click', () =>{
    EnviarDadosImpressao();
})
