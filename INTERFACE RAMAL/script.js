const ramais = [
    { nome: "Bela", departamento: "Gabinete", setor: "Secretárias Gabinete", ramal: "3250" },
    { nome: "Maria Amélia", departamento: "Gabinete", setor: "Secretárias Gabinete", ramal: "3209" },
    { nome: "Rosana", departamento: "Gabinete", setor: "Habitação", ramal: "3217" },
    { nome: "Chayane", departamento: "Gabinete", setor: "Habitação", ramal: "3217" },
    { nome: "Mauro", departamento: "Gabinete", setor: "Assistente Gabinete", ramal: "3223" },
    { nome: "Debora", departamento: "Gabinete", setor: "Assistente Comunicação", ramal: "3205" },
    {nome: "Jessica", departamento: "Gabinete", setor: "Assistente Comunicação", ramal: "3283"},
    {nome: "Marina", departamento: "Gabinete", setor: "Expediente Gabinete", ramal: "3242"},
    {nome: "Wanda", departamento: "Gabinete", setor: "Expediente", ramal: "3265"},
    {nome: "Leticia", departamento: "Gabinete", setor: "Recepção Gabinete", ramal: "3269"},
    {nome: "Aparecida", departamento: "Gabinete", setor: "Defesa Civil/Rádio", ramal: "3215"},
    {nome: "Mauricio", departamento: "Gabinete", setor: "Defesa Civil/Rádio", ramal: "3215"},
    {nome: "Mônica", departamento: "Gabinete", setor: "Defesa Civil/Rádio", ramal: "3215"},
    {nome: "Cliseida", departamento: "Gabinete", setor: "Jurídico", ramal: "3246"},
    {nome: "Angela", departamento: "Gabinete", setor: "Jurídico Expediente", ramal: "3207"},
    {nome: "empty", departamento: "Gabinete", setor: "Jurídico Estagiario", ramal: "3271"},
    {nome: "Ricardo", departamento: "Gabinete", setor: "Governo Local", ramal: "3202"},
    {nome: "Romualdo", departamento: "Gabinete", setor: "Atendimento", ramal: "3272"},
    {nome: "Rose", departamento: "Gabinete", setor: "Expediente Governo Local", ramal: "3254"},
    {nome: "Fernando", departamento: "Gabinete", setor: "Superv Cultura", ramal: "3214"},
    {nome: "Anderson", departamento: "Gabinete", setor: "Superv Esportes", ramal: "3230"},
    {nome: "Claudio", departamento: "Gabinete", setor: "Superv Habitação", ramal: "3220"},

    {nome: "Alvaro", departamento: "CAF", setor: "Coordenadoria", ramal: "3208"},
    {nome: "Sonia", departamento: "CAF", setor: "Superv Administração", ramal: "3225"},
    {nome: "Marcia", departamento: "CAF", setor: "ADM-Assistentes", ramal: "3219"},
    {nome: "Solange", departamento: "CAF", setor: "ADM-Assistentes", ramal: "3224"},
    {nome: "Bene", departamento: "CAF", setor: "ADM-Protocolo", ramal: "3292"},
    {nome: "Damião", departamento: "CAF", setor: "ADM-Protocolo", ramal: "3292"},
    {nome: "Nilceia", departamento: "CAF", setor: "ADM-Protocolo", ramal: "3292"},
    {nome: "Alexandre", departamento: "CAF", setor: "ADM-Licitações e Contratos", ramal: "3210"},
    {nome: "Cosma", departamento: "CAF", setor: "ADM-Concessionárias", ramal: "3253"},
    {nome: "Caue", departamento: "CAF", setor: "ADM-Informática", ramal: "3204"},
    {nome: "Daniel", departamento: "CAF", setor: "ADM-Informática", ramal: "3282"},
    {nome: "Portaria-Vigias", departamento: "CAF", setor: "ADM-Portaria", ramal: "3291"},
    {nome: "Nilceia", departamento: "CAF", setor: "Recepção", ramal: "3201"},
    {nome: "Cosma", departamento: "CAF", setor: "Recepção", ramal: "3201"},
    {nome: "Tania", departamento: "CAF", setor: "Superv Finanças", ramal: "3248"},
    {nome: "Cida", departamento: "CAF", setor: "Finanças", ramal: "3231"},
    {nome: "Ana", departamento: "CAF", setor: "Finanças", ramal: "3278"},
    {nome: "Walesca", departamento: "CAF", setor: "Finanças", ramal: "3252"},
    {nome: "Nanci", departamento: "CAF", setor: "Finanças", ramal: "3247"},
    {nome: "Vera", departamento: "CAF", setor: "Superv SUGESP", ramal: "3226"},
    {nome: "Ana Paula", departamento: "CAF", setor: "SUGESP Desenvolvimento", ramal: "3263"},
    {nome: "Rosana", departamento: "CAF", setor: "SUGESP Ingresso", ramal: "3227"},
    {nome: "Terexa", departamento: "CAF", setor: "SUGESP Ingresso", ramal: "3227"},
    {nome: "Augusto", departamento: "CAF", setor: "SUGESP Pagamento", ramal: "3270"},
    {nome: "Luiz Fabio", departamento: "CAF", setor: "SUGESP Pagamento", ramal: "3270"},
    {nome: "Kenji", departamento: "CAF", setor: "SUGESP Pagamento", ramal: "3270"},

    {nome: "Renan", departamento: "CPO", setor: "Coordenador", ramal: "3256"},
    {nome: "Carla", departamento: "CPO", setor: "Expediente", ramal: "3249"},
    {nome: "Rosimeire", departamento: "CPO", setor: "Expediente", ramal: "3249"},
    {nome: "Lilian", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289"},
    {nome: "Denise", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289"},
    {nome: "Dorinha", departamento: "CPO", setor: "Sup Projetos e Obras", ramal: "3289"},
    {nome: "Vasconcelos", departamento: "CPO", setor: "Expediente Sup Projetos", ramal: "3243"},
    {nome: "Sandro", departamento: "CPO", setor: "Expediente Sup Projetos", ramal: "3243"},
    {nome: "Conceição", departamento: "CPO", setor: "Expediente", ramal: "3251"},
    {nome: "Valeria", departamento: "CPO", setor: "Expediente", ramal: "3251"},
    {nome: "Mauro", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297"},
    {nome: "Keller", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297"},
    {nome: "João", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297"},
    {nome: "Camilo", departamento: "CPO", setor: "Unidade Áreas Verdes", ramal: "3297"},
    {nome: "Monteiro", departamento: "CPO", setor: "Encarregado Córregos", ramal: "3234"},
    {nome: "Robson", departamento: "CPO", setor: "Unidade Varrição", ramal: "3234"},
    {nome: "Rogerio", departamento: "CPO", setor: "Unidade Varrição", ramal: "3234"},
    {nome: "Enio", departamento: "CPO", setor: "SUP Tecn Manutenção", ramal: "3255"},
    {nome: "Vanessa", departamento: "CPO", setor: "Expediente", ramal: "3245"},
    {nome: "Marcos", departamento: "CPO", setor: "Expediente", ramal: "3245"},
    
    {nome: "Mauricio", departamento: "CPDU", setor: "Coordenador", ramal: "3276"},
    {nome: "Sandra", departamento: "CPDU", setor: "Expediente", ramal: "3235"},
    {nome: "Roseli", departamento: "CPDU", setor: "Expediente", ramal: "3235"},
    {nome: "Eduardo", departamento: "CPDU", setor: "Expediente", ramal: "3235"},
    {nome: "Rita", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238"},
    {nome: "Elisa", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238"},
    {nome: "Conceição", departamento: "CPDU", setor: "Expediente Aprovação", ramal: "3238"},
    {nome: "Willian", departamento: "CPDU", setor: "Aprovação", ramal: "3244"},
    {nome: "Claudia", departamento: "CPDU", setor: "Cadastro", ramal: "3241"},
    {nome: "Marcio", departamento: "CPDU", setor: "Cadastro", ramal: "3241"},
    {nome: "Margarete", departamento: "CPDU", setor: "Cadastro", ramal: "3241"},
    {nome: "Mauro", departamento: "CPDU", setor: "Cadastro", ramal: "3241"},
    {nome: "Luciene", departamento: "CPDU", setor: "Expediente Fiscalização", ramal: "3237"},
    {nome: "Antionio Miura", departamento: "CPDU", setor: "Superv Fiscalização", ramal: "3279"},
    {nome: "Mario", departamento: "CPDU", setor: "Supervisão Susl", ramal: "3279"},
    {nome: "Sandra", departamento: "CPDU", setor: "Unai", ramal: "3239"},
    {nome: "Leonel", departamento: "CPDU", setor: "Fiscalização", ramal: "3257"},
    {nome: "Roberto", departamento: "CPDU", setor: "Fiscalização", ramal: "3257"},
    {nome: "Katia", departamento: "CPDU", setor: "Fiscalização", ramal: "3257"},
    {nome: "Georgi", departamento: "CPDU", setor: "Fiscalização", ramal: "3257"},
    {nome: "João", departamento: "CPDU", setor: "Fiscalização", ramal: "3257"},
];


document.getElementById('param').addEventListener('change', () => {
    showInput();
});

function showInput() {
const form = document.getElementById('form');
const departmentContainer = document.getElementById('departmentContainer');
const setorContainer = document.getElementById('setorContainer');
const nameContainer = document.getElementById('nameContainer');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRamal();
});
    const selectedValue = document.getElementById('param').value;
    if (selectedValue === 'departamento') {
        departmentContainer.style.display = 'block';
        setorContainer.style.display = 'none';
        nameContainer.style.display = 'none';
    } else if (selectedValue === 'setor') {
        departmentContainer.style.display = 'none';
        setorContainer.style.display = 'block';
        nameContainer.style.display = 'none';
    } else {
        departmentContainer.style.display = 'none';
        setorContainer.style.display = 'none';
        nameContainer.style.display = 'block';
    }
}

function searchRamal() {
    const param = document.getElementById("param").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (param === "nome") {
        const name = document.getElementById("name").value;
        if (name === "") {
            result.innerHTML = "Por favor, digite um nome válido.";
            return;
        }

        const ramaisByName = ramais.filter(ramal => ramal.nome.toLowerCase() === name.toLowerCase());
        if (ramaisByName.length === 0) {
            result.innerHTML = "Nenhum ramal encontrado com esse nome.";
            return;
        }

        result.innerHTML = `Resultado da pesquisa por nome:<br>`;
        ramaisByName.forEach(ramal => {
            result.innerHTML += `${ramal.nome} - Departamento: ${ramal.departamento} - Setor: ${ramal.setor} - Ramal: ${ramal.ramal}<br>`;
        });
    } else if (param === "departamento") {
        const department = document.getElementById("department").value;
        if (department === "") {
            result.innerHTML = "Por favor, selecione um departamento válido.";
            return;
        }

        const ramaisByDepartment = ramais.filter(ramal => ramal.departamento.toLowerCase() === department.toLowerCase());
        if (ramaisByDepartment.length === 0) {
            result.innerHTML = "Nenhum ramal encontrado para esse departamento.";
            return;
        }

        result.innerHTML = `Resultado da pesquisa por departamento:<br>`;
        ramaisByDepartment.forEach(ramal => {
            result.innerHTML += `${ramal.departamento} - Setor: ${ramal.setor} - Ramal: ${ramal.ramal} - Pertence a: ${ramal.nome}<br>`;
        });
    } else if (param === "setor") {
        const setor = document.getElementById("setor").value;
        if (setor === "") {
            result.innerHTML = "Por favor, selecione um setor válido.";
            return;
        }

        const ramaisBySetor = ramais.filter(ramal => ramal.setor.toLowerCase() === setor.toLowerCase());
        if (ramaisBySetor.length === 0) {
            result.innerHTML = "Nenhum ramal encontrado para esse setor.";
            return;
        }

        result.innerHTML = `Resultado da pesquisa por setor:<br>`;
        ramaisBySetor.forEach(ramal => {
            result.innerHTML += `${ramal.setor} - Departamento: ${ramal.departamento} - Ramal: ${ramal.ramal} - Pertence a: ${ramal.nome}<br>`;
        });
    }
}
