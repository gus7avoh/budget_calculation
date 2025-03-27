const Salgados_selecionados = [];
const Bebidas_selecionados = [];

function obterValoresSelecionadosSalgados() {
    Salgados_selecionados.length = 0;

    document.querySelectorAll('.selecionar_salgados input[type="checkbox"]').forEach((checkbox) => {
        const quantidadeInput = document.getElementById(`quantidade_${checkbox.value}`);
        const quantidade = quantidadeInput ? Number(quantidadeInput.value) || 0 : 0;

        if (checkbox.checked && quantidade > 0) {
            Salgados_selecionados.push({
                nome: checkbox.value,
                quantidade: quantidade
            });
        }
    });

    console.log("Salgados selecionados:", Salgados_selecionados);
}

document.querySelectorAll('.selecionar_salgados input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', obterValoresSelecionadosSalgados);
});

function obterValoresSelecionadosBebidas() {
    Bebidas_selecionados.length = 0;

    document.querySelectorAll('.selecionar_bebidas input[type="checkbox"]').forEach((checkbox) => {
        const quantidadeInput = document.getElementById(`quantidade_${checkbox.value}`);
        const quantidade = quantidadeInput ? Number(quantidadeInput.value) || 0 : 0;

        if (checkbox.checked && quantidade > 0) {
            Bebidas_selecionados.push({
                nome: checkbox.value,
                quantidade: quantidade
            });
        }
    });

    console.log("Bebidas selecionadas:", Bebidas_selecionados);
}

document.querySelectorAll('.selecionar_bebidas input[type="checkbox"], .quantidade-input').forEach((element) => {
    element.addEventListener('change', obterValoresSelecionadosBebidas);
});
