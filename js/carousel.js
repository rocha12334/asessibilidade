var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

//Percorrer todos os botoes controladores
btns.forEach(function(btn) {
    btn.addEventListener('click', function()) {


        //Remover class 'ativo' dos outros botoes
        btns.forEach(function(btnRemoveClass) {
            btnRemoveClass.classList.remove('listaDeArtigos-slider-item-ativo')
        })

        this.classList.add('listaDeArtigo-slider-item--ativo')
        })      