// // 1° Declarar as nossas variaveis
// const modal = document.querySelector('.modal-container')
// const tbody = document.querySelector('tbody')
// const sNome = document.querySelector('#m-nome')
// const sFuncao = document.querySelector('#m-funcao')
// const sSalario = document.querySelector('#m-salario')
// const btnSalvar = document.querySelector('#btn-salvar')

// // Variavel itens para salvar os itens do nosso banco e a id que aramzena o index par realizar a acao e a edição

// let itens
// let id

// // criar variaveis para pegar os itens do banco,pega os itens do banco a tarvaez do nosso get item , do dbfunc e casso nn tenha nada , retorna um array vazio 


// const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
// const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
// // vai star os itens do nosso itens que é a nossa variavel , la de dentro do banco

// // Função que vai se executada assim que a tea for carregada ,ele pega os itens , do nosso banco, os dados e faz um for em cada dado para que seja criada uma nova linha  
// // Pega os itens dentro do banco , faço um foreach para cada dado,para que seja riada cada linha 
// // Atravez do insert IOtem que criarei embaixo
// function loadItens() {
//     itens = getItensBD()
//     tbody.innerHTML = ''
//     itens.forEach((item, index) => {
//         insertItem(item, index)
//     })


// }
// loadItens()
// // passo o item e o index nio banco , eu vou qr o tr, e crio atraves do inner , crio o td nome , função,salario.Crio aas colunas de edição e excluzao , passando os icons q pegamos., importamos. Incluindo conforme cada item for carregado no body 
// function insertItem(item, index) {
//     let tr = document.createElement('tr')

//     tr.innerHTML = `
//       <td>${item.nome}</td>
//       <td>${item.funcao}</td>
//       <td>R$ ${item.salario}</td>
//       <td class="acao">
//         <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
//       </td>
//       <td class="acao">
//         <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//       </td>
//     `
//     tbody.appendChild(tr)
// }

// function editItem(index) {
//     openModal(true, index)
//     // vopu passaar essa função de open modal
// }
// function deleteItem(index) {
//     index.splice(index, 1)
//     setItensBD()
//     loadItens()
//     // vai ser feito um splice do item , removendo um otem ,apos isso atualizamnos o banco e carrega novamente os dados em, tela  
// }
// // função para abrir a nossa modal
// function openModal(edit = false, index = 0) {
//     // quando for um novo item clicado direto no incluir 
//     modal.classList.add('active')
//     // adiciona a classe active , para o modal ficar visivel na tela 


//     // e cada click fora da modal é removido a clçasse active , e quyandio é removido fica com o display none , nn ficando visivel na tela 

//     modal.onclick = e => {
//         if (e.target.className.indexOf('modal-container') !== -1) {
//             modal.classList.remove('active')
//         }
//     }

//     // qando for um item de ediçao , ele carrega para os itens do modal , o nome , a funçãio e o salario e vai atribuir para variavel id o index do funcionario, caso nn for uma edicao carrega com os valores td em branco
//     if (edit) {
//         sNome.value = itens[index].nome
//         sFuncao.value = itens[index].funcao
//         sSalario.value = itens[index].salario
//         id = index
//       } else {
//         sNome.value = ''
//         sFuncao.value = ''
//         sSalario.value = ''
//       }




// }
// // criar o evento onclick para o nosso botaio de salvar 
// btnSalvar.onclick = e => {
//     if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
//         return
//     }

//     e.preventDefault()
//     if (id !== undefined) {
//         itens[id].value = sNome.value
//         itens[id].value = sFuncao.value
//         itens[id].value = sSalario.value

//     }else {
//         itens.push({'nome':sNome.value,'funcao':sFuncao.value,'salario':sSalario.value})
//     }
//     setItensBD()
//     modal.classList.remove('active')
//     loadItens()
//     id=undefined
// }


const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        // Se o clique for no fundo do modal (no elemento com a classe .modal-container), 
        // ele remove a classe active, fechando o modal.

        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''
    }

}

function editItem(index) {

    openModal(true, index)
}

function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {

    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nome = sNome.value
        itens[id].funcao = sFuncao.value
        itens[id].salario = sSalario.value
    } else {
        itens.push({ 'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value })
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()


// O código segue uma lógica de CRUD (Create, Read, Update, Delete) simples:

// Criar (Create): Adiciona um novo item ao array itens e ao localStorage quando o usuário preenche o formulário e clica em "Salvar" sem editar um item existente.
// Ler (Read): Carrega os itens armazenados no localStorage e os exibe na tabela ao carregar a página.
// Atualizar (Update): Quando o usuário edita um item, os dados são atualizados no array itens e no localStorage.
// Deletar (Delete): Remove um item do array itens e do localStorage, e recarrega a tabela.
// A interação com o localStorage garante que os dados sejam persistentes, ou seja, mesmo após o fechamento do navegador, os dados ainda estarão disponíveis ao reabrir a página.
// EXPLICAÇÂO :
// const modal = document.querySelector('.modal-container')
// Seleciona o modal na página HTML com a classe .modal-container e armazena essa referência na variável modal.
// javascript
// Copiar
// Editar
// const tbody = document.querySelector('tbody')
// Seleciona o elemento <tbody> da tabela na página HTML e armazena a referência na variável tbody. Este é o local onde as linhas da tabela serão inseridas dinamicamente.
// javascript
// Copiar
// Editar
// const sNome = document.querySelector('#m-nome')
// Seleciona o campo de entrada de nome no modal, com o id #m-nome, e armazena na variável sNome.
// javascript
// Copiar
// Editar
// const sFuncao = document.querySelector('#m-funcao')
// Seleciona o campo de entrada de função no modal, com o id #m-funcao, e armazena na variável sFuncao.
// javascript
// Copiar
// Editar
// const sSalario = document.querySelector('#m-salario')
// Seleciona o campo de entrada de salário no modal, com o id #m-salario, e armazena na variável sSalario.
// javascript
// Copiar
// Editar
// const btnSalvar = document.querySelector('#btnSalvar')
// Seleciona o botão de salvar no modal, com o id #btnSalvar, e armazena na variável btnSalvar.
// Declaração de Variáveis de Armazenamento
// javascript
// Copiar
// Editar
// let itens
// let id
// itens: Vai armazenar a lista de itens (funcionários) carregados do localStorage.
// id: Vai armazenar o índice do item que está sendo editado. Inicialmente, ele é indefinido, e é definido quando um item é editado.
// Função openModal
// javascript
// Copiar
// Editar
// function openModal(edit = false, index = 0) {
// Função que abre o modal. Ela recebe dois parâmetros:
// edit: Um valor booleano para indicar se estamos editando um item ou criando um novo (false por padrão).
// index: O índice do item que estamos editando. Por padrão, é 0, caso contrário, será o índice do item.
// javascript
// Copiar
// Editar
//   modal.classList.add('active')
// Adiciona a classe active ao modal, fazendo com que ele se torne visível.
// javascript
// Copiar
// Editar
//   modal.onclick = e => {
//     if (e.target.className.indexOf('modal-container') !== -1) {
//       modal.classList.remove('active')
//     }
//   }
// Aqui, é adicionado um event listener para clicar fora do modal. Se o clique for no fundo do modal (no elemento com a classe .modal-container), ele remove a classe active, fechando o modal.
// javascript
// Copiar
// Editar
//   if (edit) {
//     sNome.value = itens[index].nome
//     sFuncao.value = itens[index].funcao
//     sSalario.value = itens[index].salario
//     id = index
//   } else {
//     sNome.value = ''
//     sFuncao.value = ''
//     sSalario.value = ''
//   }
// Se for uma edição (edit === true), a função preenche os campos do modal (sNome, sFuncao, sSalario) com os valores do item que está sendo editado, usando o índice index. O id é definido para o índice do item.
// Se não for uma edição (edit === false), os campos são limpos, pois o modal é usado para criar um novo item.
// Função editItem
// javascript
// Copiar
// Editar
// function editItem(index) {
//   openModal(true, index)
// }
// Esta função é chamada quando o usuário clica no botão de editar. Ela chama a função openModal e passa true para o parâmetro edit e o index do item que está sendo editado.
// Função deleteItem
// javascript
// Copiar
// Editar
// function deleteItem(index) {
//   itens.splice(index, 1)
//   setItensBD()
//   loadItens()
// }
// Quando o usuário clica no botão de excluir, essa função é chamada:
// O método splice é usado para remover o item do array itens no índice index.
// A função setItensBD() é chamada para salvar as alterações no localStorage.
// A função loadItens() recarrega a tabela para refletir a exclusão.
// Função insertItem
// javascript
// Copiar
// Editar
// function insertItem(item, index) {
//   let tr = document.createElement('tr')
// Cria uma nova linha (<tr>) para a tabela.
// javascript
// Copiar
// Editar
//   tr.innerHTML = `
//     <td>${item.nome}</td>
//     <td>${item.funcao}</td>
//     <td>R$ ${item.salario}</td>
//     <td class="acao">
//       <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
//     </td>
//     <td class="acao">
//       <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//     </td>
//   `
// Preenche a linha <tr> com os dados do item: nome, funcao e salario.
// Adiciona dois botões de ação: um para editar e outro para excluir. O botão de edição chama editItem() com o índice do item, e o botão de exclusão chama deleteItem() com o índice do item.
// javascript
// Copiar
// Editar
//   tbody.appendChild(tr)
// }
// Adiciona a nova linha (<tr>) ao corpo da tabela (<tbody>).
// Função btnSalvar.onclick
// javascript
// Copiar
// Editar
// btnSalvar.onclick = e => {
//   if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
//     return
//   }
// A função é chamada quando o botão de salvar é clicado.
// Ela verifica se algum dos campos (sNome, sFuncao, sSalario) está vazio. Se algum estiver vazio, a função é interrompida com return e nada é feito.
// javascript
// Copiar
// Editar
//   e.preventDefault();
// Previne o comportamento padrão do botão (que é recarregar a página), garantindo que a ação seja controlada pelo JavaScript.
// javascript
// Copiar
// Editar
//   if (id !== undefined) {
//     itens[id].nome = sNome.value
//     itens[id].funcao = sFuncao.value
//     itens[id].salario = sSalario.value
//   } else {
//     itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
//   }
// Se o id for definido, significa que estamos editando um item. Nesse caso, ele atualiza os valores do item no índice id com os valores dos campos (sNome, sFuncao, sSalario).
// Se o id for undefined, significa que estamos criando um novo item. Nesse caso, ele adiciona um novo objeto ao array itens.
// javascript
// Copiar
// Editar
//   setItensBD()
// Chama a função setItensBD para salvar os dados atualizados no localStorage.
// javascript
// Copiar
// Editar
//   modal.classList.remove('active')
//   loadItens()
//   id = undefined
// }
// Remove a classe active do modal para fechá-lo.
// Chama a função loadItens() para recarregar a tabela com os dados atualizados.
// Reseta o id para undefined, indicando que não estamos mais editando um item.
// Função loadItens
// javascript
// Copiar
// Editar
// function loadItens() {
//   itens = getItensBD()
//   tbody.innerHTML = ''
//   itens.forEach((item, index) => {
//     insertItem(item, index)
//   })
// }
// Chama a função getItensBD para obter os dados do localStorage e armazená-los na variável itens.
// Limpa o conteúdo do corpo da tabela (tbody.innerHTML = '').
// Para cada item no array itens, a função insertItem é chamada para adicionar uma linha na tabela.
// Funções de Acesso ao localStorage
// javascript
// Copiar
// Editar
// const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
// getItensBD: Obtém os itens do localStorage. Se não houver nada salvo, retorna um array vazio ([]).
// javascript
// Copiar
// Editar
// const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
// setItensBD: Salva os itens no localStorage, convertendo o array itens para uma string JSON.
// Carregamento Inicial de Itens
// javascript
// Copiar
// Editar
// loadItens()
// Chama a função loadItens assim que o script é carregado, para garantir que os dados salvos no localStorage sejam carregados e exibidos na tabela ao abrir a página.
// Resumo da Lógica
// O código implementa um CRUD simples para gerenciar itens (funcionários).
// Ele salva os dados no localStorage para garantir que os dados persistam entre as recargas da página.
// Através de um modal, o usuário pode adicionar, editar e excluir itens na tabela.
// O código usa um array para armazenar os dados e manipula esse array com funções JavaScript, mantendo os dados sincronizados com o localStorage.
// Ao abrir o modal para editar um item: Quando você clica no botão de editar de um item na lista, a função editItem(index) é chamada, e o index desse item (que é a posição do item no array itens) é passado para a função openModal(true, index). Dentro de openModal, o valor de id é atribuído ao índice do item, indicando qual item será editado.

// Ao salvar as alterações: Quando você clica no botão de salvar (btnSalvar), a lógica verifica se o id está definido. Se estiver, isso significa que estamos editando um item existente. Nesse caso, o código vai atualizar o item no array itens com os novos valores inseridos no modal (nome, função e salário).