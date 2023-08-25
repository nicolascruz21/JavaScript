const ramais = [
  { nome: "Isaac", departamento: "Administrativo", setor: "Contabilidade", ramal: "3250" },
  { nome: "Sophia", departamento: "Administrativo", setor: "Contabilidade", ramal: "3209" },
  { nome: "Lucas", departamento: "Administrativo", setor: "Desenvolvimento", ramal: "3217" },
  { nome: "Olivia", departamento: "Administrativo", setor: "Analista", ramal: "3217" },
  { nome: "Mateus", departamento: "Administrativo", setor: "Analista", ramal: "3223" },
  { nome: "Alice", departamento: "Administrativo", setor: "Analista", ramal: "3205" },
  { nome: "Davi", departamento: "Administrativo", setor: "Analista", ramal: "3283" },
  { nome: "Manuela", departamento: "Administrativo", setor: "Expediente", ramal: "3242" },
  { nome: "Laura", departamento: "Administrativo", setor: "Expediente", ramal: "3265" },
  { nome: "Arthur", departamento: "Administrativo", setor: "Recepção", ramal: "3269" },
  { nome: "Gabriel", departamento: "Administrativo", setor: "Financeiro", ramal: "3215/ 5777-2244" },
  { nome: "Alice", departamento: "Administrativo", setor: "Financeiro", ramal: "3215/ 5777-2244" },
  { nome: "Laura", departamento: "Administrativo", setor: "Financeiro", ramal: "3215/ 5777-2244" },
  { nome: "Enzo", departamento: "Administrativo", setor: "Financeiro", ramal: "3215" },
  { nome: "Valentina", departamento: "Administrativo", setor: "Assistente", ramal: "3246" },
  { nome: "Sophie", departamento: "Administrativo", setor: "Assistente", ramal: "3207" },
  { nome: "Eloá", departamento: "Administrativo", setor: "Assistente", ramal: "3271" },
  { nome: "Rafael", departamento: "Administrativo", setor: "Recepção", ramal: "3202" },
  { nome: "Pedro", departamento: "Administrativo", setor: "Recepção", ramal: "3272" },
  { nome: "Júlia", departamento: "Administrativo", setor: "Recepção", ramal: "3254" },
  { nome: "Bernardo", departamento: "Administrativo", setor: "Supervisão", ramal: "3214" },
  { nome: "Maria", departamento: "Administrativo", setor: "Supervisão", ramal: "3230" },
  { nome: "Lorenzo", departamento: "Administrativo", setor: "Supervisão", ramal: "3220" },
  { nome: "Miguel", departamento: "Administrativo", setor: "Gerente", ramal: "3230" },


  { nome: "Lívia", departamento: "Departamento Pessoal", setor: "Recrutamento", ramal: "3208" },
  { nome: "Rafaela", departamento: "Departamento Pessoal", setor: "Recrutamento", ramal: "3225" },
  { nome: "Eduarda", departamento: "Departamento Pessoal", setor: "Analista", ramal: "3219" },
  { nome: "Vitoria", departamento: "Departamento Pessoal", setor: "Conclusão", ramal: "3292" },
  { nome: "Amanda", departamento: "Departamento Pessoal", setor: "Auxiliar", ramal: "3292" },
  { nome: "Gabrielle", departamento: "Departamento Pessoal", setor: "Auxiliar", ramal: "3292" },
  { nome: "Isabela", departamento: "Departamento Pessoal", setor: "Auxiliar", ramal: "3224" },
  { nome: "Gustavo", departamento: "Departamento Pessoal", setor: "Gerente", ramal: "3210" },
  { nome: "Leonardo", departamento: "Departamento Pessoal", setor: "Gerente", ramal: "3284" },
  { nome: "Sophia", departamento: "Departamento Pessoal", setor: "Assistente", ramal: "3253" },
  { nome: "Thiago", departamento: "Departamento Pessoal", setor: "Assistente", ramal: "3204" },
  { nome: "Matheus", departamento: "Departamento Pessoal", setor: "Assistente", ramal: "3282" },
  { nome: "Carlos", departamento: "Departamento Pessoal", setor: "Técnico", ramal: "3285" },
  { nome: "Lara", departamento: "Departamento Pessoal", setor: "Técnico", ramal: "3291" },
  { nome: "Ana", departamento: "Departamento Pessoal", setor: "Técnico", ramal: "3201" },
  { nome: "Letícia", departamento: "Departamento Pessoal", setor: "Analista", ramal: "3201" },
  { nome: "Lucas", departamento: "Departamento Pessoal", setor: "Analista", ramal: "5888-7030" },
  { nome: "Enzo", departamento: "Departamento Pessoal", setor: "Analista", ramal: "5888-7030" },
  { nome: "Pedro", departamento: "Departamento Pessoal", setor: "Conclusão", ramal: "5888-7030" },
  { nome: "Julia", departamento: "Departamento Pessoal", setor: "Conclusão", ramal: "5888-3113" },
  { nome: "Luan", departamento: "Departamento Pessoal", setor: "Conclusão", ramal: "5888-3113" },

{ nome: "Lucas", departamento: "Marketing", setor: "Designer", ramal: "3248" },
{ nome: "Daniel", departamento: "Marketing", setor: "Analista", ramal: "3231" },
{ nome: "Maria", departamento: "Marketing", setor: "Copywriter", ramal: "3278" },
{ nome: "Paula", departamento: "Marketing", setor: "Analista", ramal: "3252" },
{ nome: "Nanci", departamento: "Marketing", setor: "Gerente", ramal: "3247" },

{ nome: "Carla", departamento: "Comercial", setor: "Vendedor", ramal: "3226" },
{ nome: "Ana Paula", departamento: "Comercial", setor: "Vendedor", ramal: "3263" },
{ nome: "Pedro", departamento: "Comercial", setor: "Assistente", ramal: "3227" },
{ nome: "Nikolas", departamento: "Comercial", setor: "Consultor", ramal: "3227" },
{ nome: "Augusto", departamento: "Comercial", setor: "Atendimento ao cliente", ramal: "3270" },
{ nome: "Luiz Fábio", departamento: "Comercial", setor: "Supervisor", ramal: "3270" },
{ nome: "Kenji", departamento: "Comercial", setor: "Gerente", ramal: "3270" },

  { nome: "Isabella", departamento: "Informática", setor: "Analista de Sistemas", ramal:"6540" },
  { nome: "Lucas", departamento: "Informática", setor: "Analista de Sistemas", ramal: "9654" },
  { nome: "Laura", departamento: "Informática", setor: "Desenvolvedor Web", ramal: "2133" },
  { nome: "Gabriel", departamento: "Informática", setor: "Engenheiro de Software", ramal: "5445" },
  { nome: "Sophia", departamento: "Informática", setor: "Analista de Projetos", ramal: "4877" },
  { nome: "Enzo", departamento: "Informática", setor: "Engenheiro de Software", ramal: "3333" },
  { nome: "Valentina", departamento: "Informática", setor: "Desenvolvedor de Aplicações", ramal: "2270" },
  { nome: "Matheus", departamento: "Informática", setor: "Analista de Sistemas", ramal: "4270" },
  { nome: "Isabel", departamento: "Informática", setor: "Desenvolvedor Web", ramal: "3570" },
  { nome: "Gustavo", departamento: "Informática", setor: "Técnico de Suporte", ramal: "3570" },
  { nome: "Helena", departamento: "Informática", setor: "Analista de Sistemas", ramal: "3670" },
  { nome: "Arthur", departamento: "Informática", setor: "Engenheiro de Software", ramal: "3271" },
  { nome: "Maria", departamento: "Informática", setor: "Desenvolvedor de Aplicações", ramal: "3273" },
  { nome: "Daniel", departamento: "Informática", setor: "Analista de Projetos", ramal: "3274" },
  { nome: "João", departamento: "Informática", setor: "Engenheiro de Software", ramal: "3250" },
  { nome: "Bianca", departamento: "Informática", setor: "Analista de Sistemas", ramal: "3276" },
  { nome: "Miguel", departamento: "Informática", setor: "Desenvolvedor Web", ramal: "3277" },
  { nome: "Larissa", departamento: "Informática", setor: "Analista de Sistemas", ramal: "3278" },
  { nome: "Pedro", departamento: "Informática", setor: "Técnico de Suporte", ramal: "3279" },
  { nome: "Amanda", departamento: "Informática", setor: "Técnico de Suporte", ramal: "3222" },
  { nome: "Bruno", departamento: "Informática", setor: "Desenvolvedor Web", ramal: "3472" },
  { nome: "Camila", departamento: "Informática", setor: "Desenvolvedor Web", ramal: "3970" },

];

//import ramais from ramais.js;

function limparOpcoesCoordenadoria() {
  const selectDepartamento = document.getElementById('pesquisaDepartamento');
  const selectSetor = document.getElementById('pesquisaSetor');

  selectDepartamento.style.display = 'none';
  
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
      limparOpcoesCoordenadoria();
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