// Js_Resultado.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Pega os dados do localStorage
    const data = JSON.parse(localStorage.getItem("orcamento_dados") || "{}");
    if (!data || Object.keys(data).length === 0) {
      console.warn("Nenhum dado de orçamento encontrado no localStorage.");
      return;
    }
  
    // 2. Preenche valor total
    const inputValor = document.getElementById("show_valor_final");
    inputValor.value = data.valorFinalOrcamento ?? "";
  
    // 3. Preenche dados do cliente
    document.getElementById("show_nome").textContent        = `Nome: ${data.nome}`;
    document.getElementById("show_cpf_cnpj").textContent   = `CPF/CNPJ: ${data.cpfCnpj}`;
    document.getElementById("show_email").textContent      = `E-mail: ${data.email}`;
    document.getElementById("show_telefone").textContent   = `Telefone: ${data.telefone}`;
  
    // 4. Preenche dados da festa
    document.getElementById("show_quatidade_pessoas").textContent = `Quantidade de pessoas: ${data.quantidadePessoas}`;
    document.getElementById("show_data_festa").textContent        = `Data da festa: ${data.dataFesta}`;
    document.getElementById("show_tempo_festa").textContent       = `Tempo de festa: ${data.tempoFesta}`;

    document.getElementById("show_tipo_festa").textContent        = `Tipo de festa: ${data.tipofesta}`;
  
    // 5. Preenche endereço
    document.getElementById("show_cep").textContent        = `CEP: ${data.cep}`;
    document.getElementById("show_logradouro").textContent = `Logradouro: ${data.logradouro}`;
    document.getElementById("show_numero").textContent     = `Número: ${data.numero}`;
    document.getElementById("show_complemento").textContent= `Complemento: ${data.complemento}`;
    document.getElementById("show_bairro").textContent     = `Bairro: ${data.bairro}`;
    document.getElementById("show_cidade").textContent     = `Cidade: ${data.cidade}`;
  
    // 6. Preenche produtos: salgados
    document.getElementById("show_total_salgados").textContent = 
      `Total de salgados: ${data.QuantidadeSalgadosTotal}`;
    const salgadosSection = document.getElementById("show_salgados");
    data.Salgados_selecionados.forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.nome}: ${item.quantidade}`;
      salgadosSection.appendChild(p);
    });
  
    // 7. Preenche produtos: bebidas
    document.getElementById("show_total_bebidas").textContent = 
      `Total de bebidas (garrafa 2 litros): ${data.QuantidadeBebidasTotal}`;
    const bebidasSection = document.getElementById("show_bebidas");
    data.Bebidas_selecionados.forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.nome}: ${item.quantidade}`;
      bebidasSection.appendChild(p);
    });
  });
  