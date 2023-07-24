const ramais = [
    { nome: "João", departamento: "Vendas", ramal: "123" },
    { nome: "Maria", departamento: "Suporte", ramal: "456" },
    { nome: "Pedro", departamento: "RH", ramal: "789" },
    { nome: "Ana", departamento: "Vendas", ramal: "321" },
    { nome: "Carlos", departamento: "Suporte", ramal: "654" },
    { nome: "Julia", departamento: "RH", ramal: "987" }
];

function showInput() {
    const param = document.getElementById("param").value;
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    if (param === "nome") {
        inputContainer.innerHTML = `
            <div class="form-control">
                <label for="name">Digite o nome:</label>
                <input type="text" id="name" placeholder="Digite o nome">
            </div>
        `;
    } else if (param === "departamento") {
        const departments = [...new Set(ramais.map(ramal => ramal.departamento))];

        inputContainer.innerHTML = `
            <div class="form-control">
                <label for="department">Escolha o departamento:</label>
                <select id="department">
                    <option value="">Selecione</option>
                    ${departments.map(department => `<option value="${department}">${department}</option>`).join('')}
                </select>
            </div>
        `;
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
            result.innerHTML += `${ramal.nome} - Departamento: ${ramal.departamento} - Ramal: ${ramal.ramal}<br>`;
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
            result.innerHTML += `${ramal.departamento} - Ramal: ${ramal.ramal} - Pertence a: ${ramal.nome}<br>`;
        });
    }
}

// Chama showInput() para atualizar o campo de entrada ou <select> quando a página é carregada
showInput();
