//variaveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogody = document.querySelector('.dialogNewsletter-bady');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

// Quando abrir a dialog...
    btnAbreDialog.addEventListener('click', function() {
        dialog.classList.add('dialogNewsletter')

    });

function fechandDialog () {
    document.activeElement.getBoundingClientRect();
    dialog.classList.add('dialog')
}

//listeners

