const elementos = [
    {tag:   'p', texto: 'Fraze 1'},
    {tag:   'div', texto: 'Fraze 2'},
    {tag:   'footer', texto: 'Fraze 3'},
    {tag:   'section', texto: 'Fraze 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];  //desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; //pode se usar o innerText ao inves do innerHTML
    div.appendChild(tagCriada);
}
container.appendChild(div);

/*  outro método

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.qppendChild(textoCriado);
}

*/