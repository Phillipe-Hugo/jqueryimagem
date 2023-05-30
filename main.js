$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');

        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overimagem"> 
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real"
            Ver imagem em tamanho real
            <a/>
        </div>`
        
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })

    // Adicionar outra imagem
    $('#botao-adicionar').click(function(){
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');

        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overimagem">
        <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
        Ver imagem em tamanho real</a>
        </div>`
        
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val('');
    })

})