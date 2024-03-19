let alugueis = [];

        function adicionarAluguel() {
            let tipo = document.getElementById('tipoImovel').value;
            let endereco = document.getElementById('enderecoImovel').value;
            let precoAluguel = parseFloat(document.getElementById('precoAluguel').value);
            let disponivel = document.getElementById('disponivelImovel').checked;
            let dataVencimento = document.getElementById('dataVencimento').value;
            let dataPagamento = document.getElementById('dataPagamento').value;
            let locatario = document.getElementById('locatario').value;
            let donoImovel = document.getElementById('donoImovel').value;

            let novoAluguel = {
                tipo: tipo,
                endereco: endereco,
                precoAluguel: precoAluguel,
                disponivel: disponivel,
                dataVencimento: dataVencimento,
                dataPagamento: dataPagamento,
                locatario: locatario,
                donoImovel: donoImovel
            };

            alugueis.push(novoAluguel);
            exibirAlugueis();
            limparFormulario();
        }

        function exibirAlugueis() {
            let tableBody = document.getElementById('alugueisTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = '';

            alugueis.forEach((aluguel, index) => {
                let row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${aluguel.tipo}</td>
                    <td>${aluguel.endereco}</td>
                    <td>${aluguel.precoAluguel}</td>
                    <td>${aluguel.disponivel ? 'Sim' : 'Não'}</td>
                    <td>${aluguel.dataVencimento}</td>
                    <td>${aluguel.dataPagamento}</td>
                    <td>${aluguel.locatario}</td>
                    <td>${aluguel.donoImovel}</td>
                    <td>
                        <button type="button" class="btn btn-primary btn-sm" onclick="editarAluguel(${index})">Editar</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="excluirAluguel(${index})">Excluir</button>
                    </td>
                `;
            });
        }

        function limparFormulario() {
            document.getElementById('tipoImovel').value = 'Aluguel';
            document.getElementById('enderecoImovel').value = '';
            document.getElementById('precoAluguel').value = '';
            document.getElementById('disponivelImovel').checked = false;
            document.getElementById('dataVencimento').value = '';
            document.getElementById('dataPagamento').value = '';
            document.getElementById('locatario').value = '';
            document.getElementById('donoImovel').value = '';
        }

        function editarAluguel(index) {
            let aluguel = alugueis[index];
            document.getElementById('tipoImovel').value = aluguel.tipo;
            document.getElementById('enderecoImovel').value = aluguel.endereco;
            document.getElementById('precoAluguel').value = aluguel.precoAluguel;
            document.getElementById('disponivelImovel').checked = aluguel.disponivel;
            document.getElementById('dataVencimento').value = aluguel.dataVencimento;
            document.getElementById('dataPagamento').value = aluguel.dataPagamento;
            document.getElementById('locatario').value = aluguel.locatario;
            document.getElementById('donoImovel').value = aluguel.donoImovel;

            alugueis.splice(index, 1);
            exibirAlugueis();
        }

        function excluirAluguel(index) {
            alugueis.splice(index, 1);
            exibirAlugueis();
        }

        exibirAlugueis();