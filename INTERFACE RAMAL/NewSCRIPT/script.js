const ramais = [
{ nome: "Bela", departamento: "GAB", setor: "Secretárias Gabinete", ramal: "3250" },
 { nome: "Maria Amélia", departamento: "GAB", setor: "Secretárias Gabinete", ramal: "3209" },
 { nome: "Rosana", departamento: "GAB", setor: "Habitação", ramal: "3217" },
 { nome: "Chayane", departamento: "GAB", setor: "Habitação", ramal: "3217" },
 { nome: "Mauro", departamento: "GAB", setor: "Ass. Gabinete", ramal: "3223" },
 { nome: "Debora", departamento: "GAB", setor: "Ass. Comunicação", ramal: "3205" },
 { nome: "Jessica", departamento: "GAB", setor: "Ass. Comunicação", ramal: "3283" },
 { nome: "Marina", departamento: "GAB", setor: "Expediente", ramal: "3242" },
 { nome: "Wanda", departamento: "GAB", setor: "Expediente", ramal: "3265" },
 { nome: "Leticia", departamento: "GAB", setor: "Recepção", ramal: "3269" },
 { nome: "Aparecida", departamento: "GAB", setor: "Defesa Civil/Rádio", ramal: "3215/ 5021-2244" },
 { nome: "Mauricio", departamento: "GAB", setor: "Defesa Civil/Rádio", ramal: "3215/ 5021-2244" },
 { nome: "Monica", departamento: "GAB", setor: "Defesa Civil/Rádio", ramal: "3215/ 5021-2244" },
 { nome: "Oswaldo", departamento: "GAB", setor: "Defesa Civil/Rádio", ramal: "3215" },
 { nome: "Cliseida", departamento: "GAB", setor: "Jurídico", ramal: "3246" },
 { nome: "Angela", departamento: "GAB", setor: "Jurídico", ramal: "3207" },
 { nome: "Vazio", departamento: "GAB", setor: "Jurídico", ramal: "3271" },
 { nome: "Ricardo", departamento: "GAB", setor: "Governo Local", ramal: "3202" },
 { nome: "Romualdo", departamento: "GAB", setor: "Governo Local", ramal: "3272" },
 { nome: "Rose", departamento: "GAB", setor: "Governo Local", ramal: "3254" },
 { nome: "Fernando", departamento: "GAB", setor: "Superv Cultura", ramal: "3214" },
 { nome: "Anderson", departamento: "GAB", setor: "Superv Esportes", ramal: "3230" },
 { nome: "Claudio", departamento: "GAB", setor: "Superv Habitação", ramal: "3220" },
  { nome: "Fabio", departamento: "GAB", setor: "Superv Esportes", ramal: "3230" },
 

 { nome: "Alvaro", departamento: "CAF", setor: "Coordenadoria", ramal: "3208" },
 { nome: "Sonia", departamento: "CAF", setor: "Superv", ramal: "3225" },
 { nome: "Marcia", departamento: "CAF", setor: "Assistente ADM", ramal: "3219" },
 { nome: "Bene", departamento: "CAF", setor: "Protocolo ADM", ramal: "3292" },
 { nome: "Damião", departamento: "CAF", setor: "Protocolo ADM", ramal: "3292" },
 { nome: "Nilceia", departamento: "CAF", setor: "Protocolo ADM", ramal: "3292" },
 { nome: "Solange", departamento: "CAF", setor: "Assistente ADM", ramal: "3224" },
 { nome: "Alexandre", departamento: "CAF", setor: "Licitações e Contratos ADM", ramal: "3210" },
 { nome: "Cosma", departamento: "CAF", setor: "Concessionárias ADM", ramal: "3253" },
 { nome: "Caue", departamento: "CAF", setor: "Informática", ramal: "3204" },
 { nome: "Daniel", departamento: "CAF", setor: "Informática", ramal: "3282" },
 { nome: "Vigias", departamento: "CAF", setor: "Portaria-Vigias", ramal: "3291" },
 { nome: "Nilceia", departamento: "CAF", setor: "Recepção", ramal: "3201" },
 { nome: "Cosma", departamento: "CAF", setor: "Recepção", ramal: "3201" },
 { nome: "Edson", departamento: "CAF", setor: "Almoxarifado/Suprimentos", ramal: "5012-7030" },
 { nome: "Irineu", departamento: "CAF", setor: "Almoxarifado/Suprimentos", ramal: "5012-7030" },
 { nome: "Luiz", departamento: "CAF", setor: "Almoxarifado/Suprimentos", ramal: "5012-7030" },
 { nome: "Sergio", departamento: "CAF", setor: "Transportes", ramal: "5012-3113" },
 { nome: "Paulo", departamento: "CAF", setor: "Transportes", ramal: "5012-3113" },

 { nome: "Tania", departamento: "CAF", setor: "Superv Finanças", ramal: "3248" },
 { nome: "Cida", departamento: "CAF", setor: "Finanças", ramal: "3231" },
 { nome: "Ana", departamento: "CAF", setor: "Finanças", ramal: "3278" },
 { nome: "Walesca", departamento: "CAF", setor: "Finanças", ramal: "3252" },
 { nome: "Nanci", departamento: "CAF", setor: "Finanças", ramal: "3247" },

 { nome: "Vera", departamento: "CAF", setor: "SUGESP", ramal: "3226" },
 { nome: "Ana Paula", departamento: "CAF", setor: "SUGESP", ramal: "3263" },
 { nome: "Rosana", departamento: "CAF", setor: "SUGESP", ramal: "3227" },
 { nome: "Tereza", departamento: "CAF", setor: "SUGESP", ramal: "3227" },
 { nome: "Augusto", departamento: "CAF", setor: "SUGESP", ramal: "3270" },
 { nome: "Luiz Fábio", departamento: "CAF", setor: "SUGESP", ramal: "3270" },
 { nome: "Kenji", departamento: "CAF", setor: "SUGESP", ramal: "3270" },

 { nome: "Renan", departamento: "CPO", setor: "Coordenadoria", ramal: "3256" },
 { nome: "Carla", departamento: "CPO", setor: "Expediente", ramal: "3249" },
 { nome: "Rosimeire", departamento: "CPO", setor: "Expediente", ramal: "3249" },
 { nome: "Lilian", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289" },
 { nome: "Denise", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289" },
 { nome: "Dorinha", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289" },
 { nome: "Vasconcelos", departamento: "CPO", setor: "Expediente Sup Projetos e Obras", ramal: "3243" },
 { nome: "Sandro", departamento: "CPO", setor: "Expediente Sup Projetos e Obras", ramal: "3243" },
 { nome: "Carmen", departamento: "CPO", setor: "Sup Tecn Limp Pública", ramal: "3233" },
 { nome: "Conceição", departamento: "CPO", setor: "Expediente Limp Pública", ramal: "3251" },
 { nome: "Valeria", departamento: "CPO", setor: "Expediente Limp Pública", ramal: "3251" },
 { nome: "Mauro", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297" },
 { nome: "Keller", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297" },
 { nome: "Camilo", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297" },
 { nome: "Monteiro", departamento: "CPO", setor: "Encarregado Córregos", ramal: "3234" },
 { nome: "Robson", departamento: "CPO", setor: "Unidade Carrição/Lixo", ramal: "3234" },
 { nome: "Rogerio", departamento: "CPO", setor: "Unidade Carrição/Lixo", ramal: "3234" },
 { nome: "Enio", departamento: "CPO", setor: "Sup Tecn Manutenção", ramal: "3255" },
 { nome: "Vanessa", departamento: "CPO", setor: "Expediente Manutenção", ramal: "3245" },
 { nome: "Marcos", departamento: "CPO", setor: "Expediente Manutenção", ramal: "3245" },
 { nome: "Luiz", departamento: "CPO", setor: "Encarregados STM", ramal: "5012-3113" },
 { nome: "Feliciano", departamento: "CPO", setor: "Encarregados STM", ramal: "5012-3113" },

 { nome: "Mauricio", departamento: "CPDU", setor: "Coordenador", ramal: "3276" },
 { nome: "Sandra", departamento: "CPDU", setor: "Expediente", ramal: "3235" },
 { nome: "Roseli", departamento: "CPDU", setor: "Expediente", ramal: "3235" },
 { nome: "Eduardo", departamento: "CPDU", setor: "Expediente", ramal: "3235" },
 { nome: "Rita", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238" },
 { nome: "Elisa", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238" },
 { nome: "Conceição", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238" },
 { nome: "Willian", departamento: "CPDU", setor: "Aprovação", ramal: "3244" },
 { nome: "Claudia", departamento: "CPDU", setor: "Cadastro", ramal: "3241" },
 { nome: "Marcio", departamento: "CPDU", setor: "Cadastro", ramal: "3241" },
 { nome: "Margarete", departamento: "CPDU", setor: "Cadastro", ramal: "3241" },
 { nome: "Mauro", departamento: "CPDU", setor: "Cadastro", ramal: "3241" },
 { nome: "Vazio", departamento: "CPDU", setor: "Recepção", ramal: "3274" },
 { nome: "Luciene", departamento: "CPDU", setor: "Expediente Fiscalização", ramal: "3237" },
 { nome: "Antonio Miura", departamento: "CPDU", setor: "Superv Fiscalização", ramal: "3279" },
 { nome: "Mario", departamento: "CPDU", setor: "Superv Susl", ramal: "3279" },
 { nome: "Sandra", departamento: "CPDU", setor: "Unai", ramal: "3239" },
 { nome: "Leonel", departamento: "CPDU", setor: "Fiscalização", ramal: "3257" },
 { nome: "Roberto", departamento: "CPDU", setor: "Fiscalização", ramal: "3257" },
 { nome: "Katia", departamento: "CPDU", setor: "Fiscalização", ramal: "3257" },
 { nome: "Georgi", departamento: "CPDU", setor: "Fiscalização", ramal: "3257" },
 { nome: "João", departamento: "CPDU", setor: "Fiscalização", ramal: "3257" },
];

//import ramais from ramais.js;

function limparOpcoesCoordenadoria() {
  const selectDepartamento = document.getElementById('pesquisaDepartamento');
  const selectSetor = document.getElementById('pesquisaSetor');

  selectDepartamento.remove();
  selectSetor.remove();
}




function limparSelecoes() {
  coordenadoriaSelecionada = false;
  const consultaPorSelect = document.getElementById('consultaPor');
  consultaPorSelect.value = ''; // Reset a seleção de opção
  const campoPesquisa = document.getElementById('campoPesquisa');
  campoPesquisa.innerHTML = ''; // Limpar o campo de pesquisa
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // Limpar o resultado
}

function atualizarPagina() {
  limparSelecoes();
  location.reload();
}


function mostrarCampoPesquisa() {
  const consultaPorSelect = document.getElementById('consultaPor');
  const campoPesquisa = document.getElementById('campoPesquisa');
  const lbl_Cordenadoria = document.getElementById('lbl_Cordenadoria'); // Adicione essa linha

  const opcaoSelecionada = consultaPorSelect.value;

  // Limpa o campo de pesquisa anterior, se houver
  campoPesquisa.innerHTML = '';

  if (opcaoSelecionada === "departamento") {
    const selectDepartamento = document.createElement('select');
    selectDepartamento.id = 'pesquisaDepartamento';
    selectDepartamento.innerHTML = '<option value="" selected disabled>Selecione uma Coordenadoria</option>';

    // Cria as opções do select com base nos departamentos existentes
    const departamentos = new Set(ramais.map(ramal => ramal.departamento));
    departamentos.forEach(departamento => {
      const option = document.createElement('option');
      option.value = departamento;
      option.textContent = departamento;
      selectDepartamento.appendChild(option);
    });

    campoPesquisa.appendChild(selectDepartamento);
    selectDepartamento.addEventListener('change', () => {
      preencherSetores();
    });
  } else if (opcaoSelecionada === "nome") {
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.id = 'pesquisaNome';
    inputNome.placeholder = 'Digite o nome...';

    const sugestoes = document.createElement('div');
    sugestoes.id = 'sugestoes';

    campoPesquisa.appendChild(inputNome);
    campoPesquisa.appendChild(sugestoes);

    inputNome.addEventListener('input', () => {
      const valorInput = inputNome.value.trim().toLowerCase();
      const sugestoesFiltradas = ramais.filter(ramal => ramal.nome.toLowerCase().startsWith(valorInput));

      if (valorInput === '') {
        sugestoes.style.display = 'none'; // Oculta as sugestões quando o campo estiver vazio
      } else {
        sugestoes.style.display = 'block'; // Exibe as sugestões quando houver texto no campo
      }

      sugestoes.innerHTML = '';
      sugestoesFiltradas.forEach(ramal => {
        const infoColaborador = document.createElement('p');
        infoColaborador.innerHTML = `<strong>Colaborador:</strong> ${ramal.nome}`;
        sugestoes.appendChild(infoColaborador);

        const infoDepartamento = document.createElement('p');
        infoDepartamento.innerHTML = `<strong>Coordenadoria:</strong> ${ramal.departamento}`;
        sugestoes.appendChild(infoDepartamento);

        const infoSetor = document.createElement('p');
        infoSetor.innerHTML = `<strong>Setor:</strong> ${ramal.setor}`;
        sugestoes.appendChild(infoSetor);

        const infoRamal = document.createElement('p');
        infoRamal.innerHTML = `<strong>Ramal/TEL:</strong> ${ramal.ramal}`;
        sugestoes.appendChild(infoRamal);

        sugestoes.appendChild(document.createElement('hr'));
      });
    });
  }
}

function preencherSetores() {
  
  
  const departamentoSelecionado = document.getElementById('pesquisaDepartamento').value;
  const setoresDoDepartamento = new Set(ramais.filter(ramal => ramal.departamento === departamentoSelecionado).map(ramal => ramal.setor));

  const selectSetor = document.createElement('select');
  selectSetor.id = 'pesquisaSetor';
  selectSetor.innerHTML = '<option value="" selected disabled>Selecione um setor</option><option value="todos">Mostrar todos</option>';

  setoresDoDepartamento.forEach(setor => {
    const option = document.createElement('option');
    option.value = setor;
    option.textContent = setor;
    selectSetor.appendChild(option);
  });

  selectSetor.disabled = false; 
  const campoPesquisa = document.getElementById('campoPesquisa');
  campoPesquisa.appendChild(selectSetor);

  // Atualiza o resultado ao selecionar o setor
  selectSetor.addEventListener('change', consultarRamal);
}

function consultarRamal() {
  const consultaPorSelect = document.getElementById('consultaPor');
  const resultado = document.getElementById('resultado');

  const opcaoSelecionada = consultaPorSelect.value;

  let ramalEncontrado;

  if (opcaoSelecionada === "departamento") {
    const pesquisaDepartamento = document.getElementById('pesquisaDepartamento').value;
    const pesquisaSetor = document.getElementById('pesquisaSetor').value;

    if (pesquisaSetor === "todos") {
      ramalEncontrado = ramais.filter(ramal => ramal.departamento === pesquisaDepartamento);
    } else {
      ramalEncontrado = ramais.filter(ramal => ramal.departamento === pesquisaDepartamento && ramal.setor === pesquisaSetor);
    }
  } else if (opcaoSelecionada === "nome") {
    const pesquisaNome = document.getElementById('pesquisaNome').value.trim().toLowerCase();
    ramalEncontrado = ramais.find(ramal => ramal.nome.toLowerCase() === pesquisaNome);
  }

  if (Array.isArray(ramalEncontrado) && ramalEncontrado.length > 0) {
    resultado.innerHTML = ramalEncontrado.map(ramal => `
      <p><strong>Colaborador:</strong> ${ramal.nome}</p>
      <p><strong>Coordenadoria:</strong> ${ramal.departamento}</p>
      <p><strong>Setor:</strong> ${ramal.setor}</p>
      <p><strong>Ramal/TEL:</strong> ${ramal.ramal}</p>
      <p>-----------------------------</p>
    `).join('');
    limparOpcoesCoordenadoria();
  } else if (ramalEncontrado) {
    resultado.innerHTML = `
      <p><strong>Colaborador:</strong> ${ramalEncontrado.nome}</p>
      <p><strong>Coordenadoria:</strong> ${ramalEncontrado.departamento}</p>
      <p><strong>Setor:</strong> ${ramalEncontrado.setor}</p>
      <p><strong>Ramal/TEL:</strong> ${ramalEncontrado.ramal}</p>
    `;
  } else {
    resultado.textContent = `Nenhum ramal encontrado com os critérios de pesquisa.`;
  }
}



document.getElementById('consultaPor').addEventListener('change', mostrarCampoPesquisa);
document.getElementById('btnNovaConsulta').addEventListener('click', atualizarPagina);
mostrarCampoPesquisa();

window.onbeforeunload = () => {
  limparSelecoes();
};