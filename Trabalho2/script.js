
    let usuario = "Lívia";
    let dados = JSON.parse('{"conversas":[{"usuario": "josé","mensagens": [{"usuario": "josé","texto": "Oi"},{"usuario": "Lívia","texto": "i Ai?"},{"usuario": "josé","texto": "de boas."}]},{"usuario": "Lívia","mensagens": [{"usuario": "Lívia","texto": "Novidades?"},{"usuario": "Carol","texto": "Não e vc?"},{"usuario": "Lívia","texto": "tbm não"}]},{"usuario": "Carlos","mensagens": [{"usuario": "Lívia ","texto": "faznd?"},{"usuario": "Carlos","texto": "esperando o bus e vc?"},{"usuario": "Lívia","texto": "Saindo de casa agr."}]}]}');

    let listaContatosElem = document.querySelector("#lista-contatos");
    let listaMensagensElem = document.querySelector("#lista-mensagens");
    let conteudoTituloElem = document.querySelector("#conteudo-titulo");
    let conteudoElem = document.querySelector("#conteudo");
    let contatoConversaElem = document.querySelector("#contato-conversa");
    let campoMensagemElem = document.querySelector("#campo-mensagem");

    for(let i in dados.conversas) {
        let contato = dados.conversas[i].usuario;
        let ultimaMensagem = dados.conversas[i].mensagens.slice(-1)[0].texto;

        let html = '<div class="item-contato '+i+'">' +
        '<img src="contato.png" />' +
        '<i>13:35</i>' +
        '<b>'+contato+'</b>' +
        '<span>'+ultimaMensagem+'</span>' +
        '</div>';

        listaContatosElem.innerHTML += html;
    }

    function mostrarConversa(c) {
        listaMensagensElem.innerHTML = "";
        conteudoTituloElem.style.display = "block";
        conteudoElem.style.backgroundImage = 'url("fundo.png")';
        campoMensagemElem.style.display = "block";

        for(let i=0; i<dados.conversas[c].mensagens.length; i++) {
            let pos = (usuario != dados.conversas[c].mensagens[i].usuario ? "esq" : "dir");

            let html = '<div class="item-msg item-'+pos+'">' +
            '<div class="msg-'+pos+'">' +
            '<span>'+dados.conversas[c].mensagens[i].texto+'</span>' +
            '<i>12:34</i>' +
            '</div>' +
            '</div>';

            listaMensagensElem.innerHTML += html;
        }

        contatoConversaElem.innerHTML = dados.conversas[c].usuario;
    }

    let listaContatos = document.querySelectorAll(".item-contato");
    for(let i=0; i<listaContatos.length; i++) {
        listaContatos[i].addEventListener("click", function() {
            mostrarConversa(i);
        })
    }