function obterValoresSelecionadosSalgados() {

const selecionados = [];

document.querySelectorAll('.selecionar_salgados input[type="checkbox"]').forEach((checkbox) => {
    const quantidadeInput = document.getElementById(`quantidade_${checkbox.value}`);
    const quantidade = quantidadeInput ? quantidadeInput.value : 0;

    if (checkbox.checked && quantidade > 0) {
    selecionados.push({
        nome: checkbox.value,
        quantidade: quantidade
    });
    }
});

console.log(selecionados);
}

document.querySelectorAll('.selecionar_salgados input[type="checkbox"], .quantidade-input').forEach((element) => {
element.addEventListener('change', obterValoresSelecionadosSalgados);
});


//selecionar_bebidas