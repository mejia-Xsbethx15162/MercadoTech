document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Detergente Líquido", precio: "$5.99", img: "/img/detergente.png" },
        { nombre: "Suavizante de Ropa", precio: "$4.50", img: "/img/suavizante.png" },
        { nombre: "Jabón en Polvo", precio: "$3.99", img: "/img/jabon.png" },
        { nombre: "Limpiador Multiusos", precio: "$2.99", img: "/img/multiusos.png" },
        { nombre: "Desinfectante", precio: "$6.50", img: "/img/desinfectante.png" },
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("aseo");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div> 
            <div class="precio">${producto.precio}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;
        contenedor.appendChild(div);
    });
});
