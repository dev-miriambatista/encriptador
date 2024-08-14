let original = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let criptografar = ['"', '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '+', '{', '`', '^', '}', '?', ':', '<', '>', '~', 'º', ';'];

function criptografarTexto(texto) {
    let textoCriptografado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        let index = original.indexOf(char);

        if (index === -1) {
            textoCriptografado += char;
        } else {
            textoCriptografado += criptografar[index];
        }
    }
    return textoCriptografado;
}

function descriptografarTexto(texto) {
    let textoDescriptografado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        let index = criptografar.indexOf(char);

        if (index === -1) {
            textoDescriptografado += char;
        } else {
            textoDescriptografado += original[index];
        }
    }
    return textoDescriptografado;
}

document.getElementById('btn-cripto').addEventListener('click', () => {
    let inputTexto = document.getElementById('input-texto').value;
    let textoCriptografado = criptografarTexto(inputTexto);
    document.getElementById('msg').value = textoCriptografado;
});

document.getElementById('btn-descripto').addEventListener('click', () => {
    let msgTextarea = document.getElementById('msg').value; 
    let textoDescriptografado = descriptografarTexto(msgTextarea); 
    document.getElementById('msg').value = textoDescriptografado;
});

document.getElementById('btn-copy').addEventListener('click', function() {
    let msg = document.getElementById('msg').value;
    navigator.clipboard.writeText(msg).then(() => {
        alert('Crt+V');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-clear-1').addEventListener('click', function() {
        console.log('Botão limpar 1 clicado');
        document.getElementById('input-texto').value = ''; 
    });

    document.getElementById('btn-clear-2').addEventListener('click', function() {
        console.log('Botão limpar 2 clicado');
        document.getElementById('msg').value = ''; 
    });
});
