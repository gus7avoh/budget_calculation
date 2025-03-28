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


const QuantidadePessoasNaFesta = Number(document.getElementById("Number_people").value)
const DataFesta = document.getElementById("Date").value //Sting "2025-03-28"
const TempoDeFesta = document.getElementById("Time").value //String "HH:MM" Devo der que converter para hora com decimais para fazer o calculo

