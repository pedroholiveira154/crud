fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {

        var tabelaCorpo = document.getElementById('tabela-corpo');
        const mensagemVazia = document.getElementById('mensagem-vazia');
        const tabela = document.getElementById('tabela'); // se deu ID na tabela

        tabelaCorpo.innerHTML = "";

        if (dados.length === 0) {
            mensagemVazia.style.display = "block"; // mostra mensagem
            tabela.style.display = "none";         // esconde tabela (opcional)
            return;
        }

        mensagemVazia.style.display = "none";

        dados.forEach(objeto => {
            var tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${objeto.id}</td>
                <td>${objeto.nome}</td>
                <td>${objeto.sobrenome}</td>
                <td>${objeto.cpf}</td>
                <td>${objeto.email}</td>
                <td>${objeto.senha}</td>
                <td>${objeto.rua}</td>
                <td>${objeto.cep}</td>
                <td>${objeto.cidade}</td>
                <td>${objeto.estado}</td>
                <td>${objeto.telefone}</td>
            `;

            tabelaCorpo.appendChild(tr);
        });
    });