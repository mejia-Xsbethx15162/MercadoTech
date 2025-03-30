document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Jugo de Naranja", precio: "$2.50", img: "/img/jugo_naranja.png" },
        { nombre: "Refresco Cola", precio: "$1.99", img: "/img/refresco_cola.png" },
        { nombre: "Agua Mineral", precio: "$1.50", img: "/img/agua_mineral.png" },
        { nombre: "Cerveza Lager", precio: "$3.99", img: "/img/cerveza_lager.png" },
        { nombre: "Vino Tinto", precio: "$12.99", img: "/img/vino_tinto.png" },
        { nombre: "Té Helado", precio: "$2.20", img: "/img/te_helado.png" },
        { nombre: "Café Frío", precio: "$3.50", img: "/img/cafe_frio.png" },
        { nombre: "Leche Chocolatada", precio: "$2.80", img: "/img/leche_choco.png" },
        { nombre: "Energizante", precio: "$3.99", img: "/img/energizante.png" },
        { nombre: "Batido de Frutas", precio: "$4.50", img: "/img/batido_frutas.png" },
        { nombre: "Limonada", precio: "$1.80", img: "/img/limonada.png" },
        { nombre: "Soda de Uva", precio: "$2.00", img: "/img/soda_uva.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`;
        contenedor.appendChild(div);
    });
});




