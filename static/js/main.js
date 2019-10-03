document.addEventListener('DOMContentLoaded', () => {

    const frases = ["é sobre você", "é sobre nós", "é sobre o que vamos fazer juntos"];
    const local = document.querySelector(".typewriter h1");
    let erase, type, x, y;

    function typeWriter(elemento, texto) {
        elemento.innerHTML = "";
        const textoArray = texto.split('');

        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 55 * i);
        });
    }

    function eraseWriter(elemento, texto) {

        const textoArray = texto.split('');

        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML = elemento.innerHTML.substring(0, texto.length - (i + 1));
            }, 55 * i);
        });
    }

    // setInterval(() => {
    //     typeWriter(local, frases[0]);
    // }, 2000);

    // setInterval(() => {
    //     eraseWriter(local, frases[0]);
    // }, 3000);


    function executarMaquina() {
        frases.forEach((frase, i) => {
            type = setTimeout(() => {
                typeWriter(local, frase);
            }, 0 + (4000 * i));
            if (i !== 2) {
                erase = setTimeout(() => {
                    eraseWriter(local, frase);
                }, 3000 + (4000 * i));
            }

        });
    }


    var observer = new IntersectionObserver(function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true)
            executarMaquina();
        else {
            let id = window.setTimeout(function () {}, 0);

            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
        }
    }, {
        threshold: [0]
    });

    observer.observe(local);



});